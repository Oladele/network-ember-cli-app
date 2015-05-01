import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var nodes = this.store.findAll('node');
    var edges = this.store.findAll('edge');
    var cableRuns = this.store.findAll('cableRun');
    return {
      nodes: nodes,
      edges: edges,
      cableRuns: cableRuns
    };
  },
  actions: {
    showNode: function(show_node_params){
      console.log("showin node, show_node_params:", show_node_params);
      this.transitionTo('nodes.show', show_node_params.node_id);
    }
  }
});
