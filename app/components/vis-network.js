import Ember from 'ember';
import visHelper from '../utils/vis-helpers'

export default Ember.Component.extend({
  // passed-in
  nodes: [],
  edges: [],
  // other instance variables
  nodes_vis: [], //visHelper.DataSet()
  edges_vis: [], //visHelper.DataSet()
  network: null, // visHelper.network

  showGraph: function(){
    var self = this;

    Promise.all([
      this.get('nodes'),
      this.get('edges')
    ]).then(function(values){
        self.makeGraph(values);
    });
  }.on('didInsertElement'),

  toPojoArray: function(storeRecords){
    var pojos = storeRecords.toArray().map(function(record){
      return record.get('data')
    });
    return pojos
  },

  makeGraph: function(values){
    var nodes_pojos, edges_pojos;

    nodes_pojos = this.toPojoArray(values[0]);
    edges_pojos = this.toPojoArray(values[1]);

    this.nodes_vis = new visHelper.DataSet(nodes_pojos)
    this.edges_vis = new visHelper.DataSet(edges_pojos)


    // create a network
    var container = document.getElementById('vis-network-container');
    var data= {
      nodes: this.nodes_vis,
      edges: this.edges_vis,
    };
    var options = {
      width: '400px',
      height: '400px'
    };
    
    this.network = new visHelper.Network(container, data, options);
  },
});
