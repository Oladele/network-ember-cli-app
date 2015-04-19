import visFinderHelper from '../utils/vis-finder-helper';

export default function visDisplayHelper(nodes_vis, edges_vis) {
  var displayHelper = makeDisplayHelper(nodes_vis, edges_vis);
  return displayHelper;
}

function makeDisplayHelper(nodes_vis, edges_vis){

  var displayHelper = {

    nodes_vis: nodes_vis,
    edges_vis: edges_vis,
    finderHelper: visFinderHelper(nodes_vis, edges_vis),

    toggleShowDescendants: function(node_id){

      var descendantsAreShowing = this.areDescendantsShowing(node_id);
      
      if (descendantsAreShowing) {
        this.hideDescendants(node_id);
      } else{
        this.showDescendants(node_id);
      };
    },

    showDescendants: function(node_id){
      var descendant_data = this.finderHelper.getDescendants(node_id,2);
      this.updateNodesEdges(descendant_data);
    },

    hideDescendants: function(node_id){
      var descendant_data = this.finderHelper.getDescendants(node_id);
      this.removeNodesEdges(descendant_data);
    },

    updateNodesEdges: function(data){
      this.nodes_vis.update(data.nodes);
      this.edges_vis.update(data.edges);
    },

    removeNodesEdges: function(data){
      this.nodes_vis.remove(data.nodes);
      this.edges_vis.remove(data.edges);
    },

    areDescendantsShowing: function(node_id){

      var descendant_data = this.finderHelper.getDescendants(node_id,1);
      var node_vis = this.nodes_vis.get(node_id);
      var children_edges = this.edges_vis.get({
        filter: function(edge){
          return (edge.to == node_id);
        }
      });
      return descendant_data.edges.length == children_edges.length;
    }

  }// end displayHelper object definition

  return displayHelper;

}


