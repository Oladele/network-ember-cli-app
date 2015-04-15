export default function searchLinkedNodesHelper(linkedNodes) {
  var searchHelper = {};
  searchHelper.linkedNodes = linkedNodes;
  searchHelper.findNode = findNode;
  return searchHelper;
}

function findNode(node_id){
  console.log("you called searchHelper.findNode");
  console.log(_findNode(node_id, this.linkedNodes));
}

function _findNode(node_id, nodes){
  var node = $.grep(nodes,function(node){
    return node_id == node.id;
  });
  return node;
}