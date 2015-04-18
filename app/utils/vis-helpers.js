export default function visHelpers() {
  return window.vis;
}() //immediately invoked function returns vis obj which is exported

export function visFilter(params){
  var nodes_vis, edges_vis, level ;
  // required
  nodes_vis = params.nodes_vis;
  edges_vis = params.edges_vis;
  level = params.level;

  // internal
  var filtered_nodes = []
  var filtered_edges = []

  if (level) {
    filtered_nodes = getNodesAboveLevel(nodes_vis, level);
    filtered_edges = getEdgesConnectedToNodes(edges_vis, filtered_nodes);
  }

  nodes_vis.remove(filtered_nodes);
  edges_vis.remove(filtered_edges);
}

function getNodesAboveLevel(nodes_vis, level){
  var filtered_nodes = nodes_vis.get({
    filter: function(node){
      return node.level > level;
    }
  });
  return filtered_nodes;
}

function getEdgesConnectedToNodes(edges_vis, nodes){
  var filtered_edges = edges_vis.get({
    filter: function(edge){
      return isEdgeConnectedToNodes(edge, nodes)
    }
  });
  return filtered_edges;
}

function isEdgeConnectedToNodes(edge, nodes){
  var nodes_ids = getIds(nodes);

  var isEdgeConnectedToNode = isIdInArray(edge.to, nodes_ids);
  var isEdgeConnectedFromNode = isIdInArray(edge.from, nodes_ids);
  return (isEdgeConnectedToNode)||(isEdgeConnectedFromNode);
}

function isIdInArray(id, array){
  var position = $.inArray(id, array);
  return (position > -1);
}

function getIds(nodes_or_edges){
  var ids = nodes_or_edges.map(function(item){
    return parseInt(item.id);
  });
  return ids;
}