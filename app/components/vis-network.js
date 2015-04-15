import Ember from 'ember';
import visHelper from '../utils/vis-helpers';
import {visFilter} from '../utils/vis-helpers';
import makeLinkedNodesHelper from '../utils/make-linked-nodes-helper';
import searchLinkedNodesHelper from '../utils/search-linked-nodes-helper';

export default Ember.Component.extend({
  // passed-in
  nodes: [],
  edges: [],
  // other instance variables
  nodes_vis: [], //visHelper.DataSet()
  edges_vis: [], //visHelper.DataSet()
  network: null, // visHelper.network
  linkedNodes: null,

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

    nodes_pojos = this.toPojoArray(values[0]);
    edges_pojos = this.toPojoArray(values[1]);
    
    this.linkedNodes = makeLinkedNodesHelper(nodes_pojos, edges_pojos);
    console.log("linkedNodes:", this.linkedNodes);

    this.searchHelper = searchLinkedNodesHelper(this.linkedNodes);
    this.searchHelper.findNode(96418);

    this.nodes_vis = new visHelper.DataSet(nodes_pojos);
    this.edges_vis = new visHelper.DataSet(edges_pojos);

    visFilter({
      nodes_vis: this.nodes_vis,
      edges_vis: this.edges_vis,
      level: 4
    });

    this.createNetwork();
  },

  createNetwork: function(){
    var container = document.getElementById('vis-network-container');
    var data= {
      nodes: this.nodes_vis,
      edges: this.edges_vis,
    };
    var options = this.getNetworkOptions();

    this.network = new visHelper.Network(container, data, options);
    this.network.ember_component = this;
    this.network.on('select', this.onSelectNode);
  },

  getNetworkOptions: function(){
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
    return options;
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

  filterNetworkShowAllChildrenOfNode: function(node_id){

  }
});
