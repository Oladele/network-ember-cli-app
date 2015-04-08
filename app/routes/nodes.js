import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var nodes = this.store.findAll('node');
    var edges = this.store.findAll('edge');
    return {
      nodes: nodes,
      edges: edges
    };
  },
  actions: {
    showNode: function(show_node_params){
      console.log("showin node, show_node_params:", show_node_params);
      this.transitionTo('nodes.show', show_node_params.node_id);
    }
  }
});
