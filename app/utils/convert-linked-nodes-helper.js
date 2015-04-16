export default function convertLinkedNodesHelper(linkedNodes) {
  var edges_result = [];
  var nodes_result = linkedNodes;
  $.each(linkedNodes, function(index, node){
    _pushParentEdges(node, edges_result);
    _pushChildrenEdges(node, edges_result);
  })
  return {
    nodes: nodes_result,
    edges: edges_result
  };
}

function _pushParentEdges(node, edges_result){
  var edges = node.parent_edges;
  _pushUniqueItemsToArray(edges, edges_result)
}

function _pushChildrenEdges(node, edges_result){
  var edges = node.children_edges;
  _pushUniqueItemsToArray(edges, edges_result)
}

function _pushUniqueItemsToArray(items_to_push, array){
  $.each(items_to_push, function(index, item){
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