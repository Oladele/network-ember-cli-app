import Ember from 'ember';
import visHelper from '../utils/vis-helpers'

export default Ember.Component.extend({

  didInsertElement: function(){
    this.showGraph()
  },

  showGraph: function(){
    var self = this;

    Promise.all([
      this.get('nodes'),
      this.get('edges')
    ]).then(function(values){
        self.makeGraph(values);
    });
  },

  makeGraph: function(values){
    var this_component = this
    var nodes_pojos, edges_pojos, nodes, edges;

    nodes_pojos = values[0].toArray().map(function(node){
      return node.get('data')
    });
    edges_pojos = values[1].toArray().map(function(edge){
      return edge.get('data')
    });

    this_component.nodes_vis = new visHelper.DataSet(nodes_pojos)
    this_component.edges_vis = new visHelper.DataSet(edges_pojos)


    // create a this_component.network
    var container = document.getElementById('vis-network-container');
    var data= {
      nodes: this_component.nodes_vis,
      edges: this_component.edges_vis,
    };
    var options = {
      width: '400px',
      height: '400px'
    };
    
    this_component.network = new visHelper.Network(container, data, options);
  },
});
