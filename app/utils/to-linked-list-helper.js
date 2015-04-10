export default function toLinkedListHelper(nodes, edges) {
  var linkedNodes = $.map(nodes, function(node){
    var parent_edges = get_parent_edges(node, edges);
    var parent_links = get_parent_links(parent_edges);

    var children_edges = get_children_edges(node, edges);
    var children_links = get_children_links(children_edges);
    
    node.parent_links = parent_links;
    node.children_links = children_links;

    return node;
  })
  return linkedNodes;
}

function get_parent_edges(node, edges){
  var parent_edges = $.grep(edges,function(edge){
    var bool_test = edge.from == node.id;
    return bool_test;
  });
  return parent_edges;
}

function get_parent_links(parent_edges){
  var parent_links = $.map(parent_edges, function(edge){
    return {node_id: edge.to, edge_id: edge.id};
  });
  return parent_links;
}

function get_children_edges(node, edges){
  var children_edges = $.grep(edges,function(edge){
    var bool_test = edge.to == node.id;
    return bool_test;
  });
  return children_edges;
}

function get_children_links(children_edges){
  var children_links = $.map(children_edges, function(edge){
    return {node_id: edge.from, edge_id: edge.id};
  });
  return children_links;
}