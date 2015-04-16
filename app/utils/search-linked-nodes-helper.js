export default function searchLinkedNodesHelper(linkedNodes) {
  var searchHelper = {};
  searchHelper.linkedNodes = linkedNodes;
  searchHelper.getDescendants = getDescendants;
  return searchHelper;
}

function getDescendants(node_id){
  console.log("you called searchHelper.getDescendantLinkedNodes id:", node_id);
  var node = _findNode(node_id, this.linkedNodes);
  var descendants = _getDescendants(node);
  var ancestors = _getAncestors(node);
  return descendants;
}

function _findNode(node_id, nodes){
  var node = $.grep(nodes,function(node){
    return node_id == node.id;
  });
  return node[0];
}

function _getDescendants(node, result){
  result = result || [];
  var children = node.children_nodes;

  $.each(children, function(index, node){
    result.push(node);
    _getDescendants(node, result);
  });
  return result;
}

function _getAncestors(node, result){
  result = result || [];
  var parents = node.parent_nodes;

  $.each(parents, function(index, node){
    result.push(node);
    _getAncestors(node, result);
  });
  return result;
}