import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var nodes = this.store.findAll('node');
    var edges = this.store.findAll('edge');
    return {
      nodes: nodes,
      edges: edges
    };
  }
});
