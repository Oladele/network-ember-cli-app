export default function makeLinkedNodesHelper(nodes_vis, edges_vis) {
  var nodes = nodes_vis.get();
  var edges = edges_vis.get();
  var linkedNodes = makeCopy(nodes);

  $.each(linkedNodes, function(index, node){
    set_parent_links(node, edges, linkedNodes);
    set_children_links(node, edges);
  })
  return linkedNodes;
}

function makeCopy(nodes){
  var copied_nodes = $.map(nodes, function(node){
    var str = JSON.stringify(node);
    var obj = JSON.parse(str);
    return obj;
  })
  return copied_nodes;
}

function set_parent_links(node, edges, nodes){
  var parent_edges = get_parent_edges(node, edges);
  var parent_nodes = get_parent_nodes(parent_edges, nodes);
  var parent_links = $.map(parent_edges, function(edge){
    return {node_id: edge.to, edge_id: edge.id};
  });
  node.parent_links = parent_links;
  node.parent_edges = parent_edges;
  node.parent_nodes = parent_nodes;
}

function get_parent_edges(node, edges){
  var parent_edges = $.grep(edges,function(edge){
    var bool_test = edge.from == node.id;
    return bool_test;
  });
  return parent_edges;
}

function get_parent_nodes(parent_edges, nodes){
  var parent_nodes = [];
  $.each(parent_edges, function(index, parent_edge){
    var parent_node = get_parent_node(parent_edge, nodes);
    parent_nodes.push( parent_node );
  })
  return parent_nodes;
}

function get_parent_node(parent_edge, nodes){
  var parent_node = $.grep(nodes, function(node){
    return parent_edge.to == node.id;
  })
  return parent_node[0];
}

function set_children_links(node, edges){
  var children_edges = get_children_edges(node, edges);
  var children_links = $.map(children_edges, function(edge){
    return {node_id: edge.from, edge_id: edge.id};
  });
  node.children_links = children_links;
}

function get_children_edges(node, edges){
  var children_edges = $.grep(edges,function(edge){
    var bool_test = edge.to == node.id;
    return bool_test;
  });
  return children_edges;
}