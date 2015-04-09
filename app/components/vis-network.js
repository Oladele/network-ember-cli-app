import Ember from 'ember';
import visHelper from '../utils/vis-helpers';
import {visFilter} from '../utils/vis-helpers';
import toLinkedListHelper from '../utils/to-linked-list-helper';

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
      return record.get('data');
    });
    return pojos;
  },

  makeGraph: function(values){
    var nodes_pojos, edges_pojos;

    toLinkedListHelper("yo", "go");

    nodes_pojos = this.toPojoArray(values[0]);
    edges_pojos = this.toPojoArray(values[1]);

    this.nodes_vis = new visHelper.DataSet(nodes_pojos);
    this.edges_vis = new visHelper.DataSet(edges_pojos);

    visFilter({
      nodes_vis: this.nodes_vis,
      edges_vis: this.edges_vis,
      level: 4
    });

    // create a network
    var container = document.getElementById('vis-network-container');
    var data= {
      nodes: this.nodes_vis,
      edges: this.edges_vis,
    };
    var options = {
      width: '1100px',
      height: '400px',
      smoothCurves: false,
      hierarchicalLayout: {
        levelSeparation: 400,
        direction: "LR"
      },
      nodes: {
        shape: 'dot',
        radius: 20,
        fontSize: 30
      }
    };
    
    this.network = new visHelper.Network(container, data, options);
    this.network.ember_component = this;
    this.network.on('select', this.onSelectNode);
  },

  onSelectNode: function(properties) {
    // 'this' references instance of Network that triggered this event Handler
    console.log("onSelectNode properties:", properties);
    var ember_component = this.ember_component;
    if (properties.nodes.length > 0) {
      var show_node_params = { 
        node_id: properties.nodes[0],
        // graph_nodes: ember_component.get_graph_nodes()
      };
      ember_component.sendAction('showNode', show_node_params );
    }
  },
});
