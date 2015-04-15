export default function makeLinkedNodesHelper(nodes, edges) {
  var linkedNodes = makeCopy(nodes);
  $.each(linkedNodes, function(index, node){
    set_parent_links(node, edges);
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

function set_parent_links(node, edges){
  var parent_edges = get_parent_edges(node, edges);
  var parent_links = $.map(parent_edges, function(edge){
    return {node_id: edge.to, edge_id: edge.id};
  });
  node.parent_links = parent_links;
}

function get_parent_edges(node, edges){
  var parent_edges = $.grep(edges,function(edge){
    var bool_test = edge.from == node.id;
    return bool_test;
  });
  return parent_edges;
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