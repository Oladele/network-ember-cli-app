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

      var descendantsAreShowing = this._areDescendantsShowing(node_id);
      
      if (descendantsAreShowing) {
        this._hideDescendants(node_id);
      } else{
        this._showDescendants(node_id);
      };
    },

    showEqualOrLessThanLevel: function(level){
      var data = this.finderHelper.findEqualOrLessThanLevel(level);
      this._clearNodesEdges();
      this._updateNodesEdges(data);
    },

    _showDescendants: function(node_id){
      var data = this.finderHelper.findDescendants(node_id,2);
      this._updateNodesEdges(data);
    },

    _updateNodesEdges: function(data){
      this.nodes_vis.update(data.nodes);
      this.edges_vis.update(data.edges);
    },

    _clearNodesEdges: function(){
      this.nodes_vis.clear();
      this.edges_vis.clear();
    },

    _hideDescendants: function(node_id){
      var data = this.finderHelper.findDescendants(node_id);
      this._removeNodesEdges(data);
    },

    _removeNodesEdges: function(data){
      this.nodes_vis.remove(data.nodes);
      this.edges_vis.remove(data.edges);
    },

    _areDescendantsShowing: function(node_id){

      var descendant_data = this.finderHelper.findDescendants(node_id,1);
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


