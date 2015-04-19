import makeLinkedNodesHelper from '../utils/make-linked-nodes-helper';
import convertLinkedNodesHelper from '../utils/convert-linked-nodes-helper';

export default function searchLinkedNodesHelper(nodes_vis, edges_vis) {
  var searchHelper = {};
  
  searchHelper.linkedNodes = makeLinkedNodesHelper(nodes_vis, edges_vis);
  searchHelper.getDescendants = getDescendants;
  return searchHelper;
}

function getDescendants(node_id, desired_depth){
  console.log("you called searchHelper.getDescendantLinkedNodes id:", node_id);
  var node = _findNode(node_id, this.linkedNodes);
  var descendants = _getDescendants(node, desired_depth);
  var descendant_data = convertLinkedNodesHelper(descendants);

  return descendant_data;
}

function _findNode(node_id, nodes){
  var node = $.grep(nodes,function(node){
    return node_id == node.id;
  });
  return node[0];
}

function _getDescendants(node, desired_depth, current_depth, result){
  desired_depth = desired_depth || 999; //max if non-specified
  current_depth = current_depth || 0;   //zero if non-specified
  result = result || [];                //empty if non specified
  
  var children = node.children_nodes;

  if (current_depth < desired_depth) {
    $.each(children, function(index, node){
      ++current_depth;
      result.push(node);
      _getDescendants(node, desired_depth, current_depth, result);
    });    
  };

  return result;
}