export default function convertLinkedNodesHelper(linkedNodes) {
  var edges_result = [];
  var nodes_result = linkedNodes;
  $.each(linkedNodes, function(index, node){
    _addParentEdgesToResult(node, edges_result);
  })
  return {
    nodes: nodes_result,
    edges: edges_result
  };
}

function _addParentEdgesToResult(node, edges_result){
  var edges = node.parent_edges;
  _addUniqueItemsToArray(edges, edges_result)
}

function _addUniqueItemsToArray(items_to_add, array){
  $.each(items_to_add, function(index, item){
    var alreadyAdded = _doesArrayContainItem(array, item)
    if (!alreadyAdded) {
      array.push(item);
    };
  })
}

function _doesArrayContainItem(array, item_to_find){
  var found = $.grep(array, function(item){
    return item.id == item_to_find.id;
  })
  return found.length > 0
}