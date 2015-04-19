import makeLinkedNodesHelper from '../utils/make-linked-nodes-helper';
import convertLinkedNodesHelper from '../utils/convert-linked-nodes-helper';

export default function visFinderHelper(nodes_vis, edges_vis) {
  var finderHelper = makeFinderHelper(nodes_vis, edges_vis);
  return finderHelper;
}

function makeFinderHelper(nodes_vis, edges_vis){
  var finderHelper = {
    nodes_vis: nodes_vis,
    edges_vis: edges_vis,
    linkedNodes: makeLinkedNodesHelper(nodes_vis, edges_vis),

    findDescendants: function(node_id, desired_depth){
      console.log("you called finderHelper.getDescendantLinkedNodes id:", node_id);
      var node = this._getNode(node_id, this.linkedNodes);
      var descendants = this._getDescendants(node, desired_depth);
      var descendant_data = convertLinkedNodesHelper(descendants);
      return descendant_data;
    },

    findEqualOrLessThanLevel: function(level){
      var nodes = this._getNodesUpToLevel(level);
      var data = convertLinkedNodesHelper(nodes);
      return data;
    },

    _getNodesUpToLevel: function(level){
      var nodes = $.grep(this.linkedNodes,function(node){
        return node.level <= level;
      });
      return nodes;
    },

    _getNode: function(node_id, nodes){
      var node = $.grep(nodes,function(node){
        return node_id == node.id;
      });
      return node[0];
    },
    _getDescendants: function(node, desired_depth, current_depth, result){
      desired_depth = desired_depth || 999; //max if non-specified
      current_depth = current_depth || 0;   //zero if non-specified
      result = result || [];                //empty if non specified
      
      var self = this;
      var children = node.children_nodes;

      if (current_depth < desired_depth) {
        $.each(children, function(index, node){
          ++current_depth;
          result.push(node);
          self._getDescendants(node, desired_depth, current_depth, result);
        });    
      };
      return result;
    }
  }// end searcHelper object definition

  return finderHelper;
}