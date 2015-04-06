export default function visHelpers() {
  return window.vis;
}(); //immediately invoked function returns vis obj which is exported

export function visFilter(params){
  var nodes_vis, edges_vis, level, end_node_id;
  // required
  nodes_vis = params.nodes_vis;
  edges_vis = params.edges_vis;
  
  // optional (if neither is passed, then nothing will be filtered)
  level = params.level;
  end_node_id = end_node_id;

  if (level) {
    var filtered_nodes = getNodesAboveLevel(nodes_vis, level);
    var filtered_edges = getEdgesConnectedToNodes(edges_vis, filtered_nodes);

    nodes_vis.remove(filtered_nodes);
    edges_vis.remove(filtered_edges);
  };

  console.log("visFilter params:", params);
  console.log("visFilter nodes_vis.length:", nodes_vis.length);
  console.log("visFilter filtered_nodes.length:", filtered_nodes.length);
  console.log("visFilter edges_vis.length:", edges_vis.length);
  console.log("visFilter filtered_edges.length:", filtered_edges.length);
  window.temp_filtered_nodes = filtered_nodes;
}

function getNodesAboveLevel(nodes_vis, level, above){

  if (above == true || above == undefined) {
    var filtered_nodes = nodes_vis.get({
      filter: function(node){
        return node.level > level;
      }
    });
  }else{
    var filtered_nodes = nodes_vis.get({
      filter: function(node){
        return node.level <= level;
      }
    });
  };


  return filtered_nodes
};

function getIds(nodes_or_edges){
  var ids = nodes_or_edges.map(function(item){
    return item.id;
  });
  return ids;
};

function getEdgesConnectedToNodes(edges_vis, nodes){
  var filtered_nodes_ids = getIds(nodes);

  var filtered_edges = edges_vis.get({
    filter: function(edge){
      var id_str = edge.to.toString()
      var result = $.inArray(id_str, filtered_nodes_ids);
      return (result != -1) ;
    }
  })
  return filtered_edges;
};