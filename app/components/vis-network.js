import Ember from 'ember';
import visHelper from '../utils/vis-helpers';
import visDisplayHelper from '../utils/vis-display-helper';

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

  makeGraph: function(values){
    var nodes_pojos, edges_pojos;
    nodes_pojos = this.toPojoArray(values[0]);
    edges_pojos = this.toPojoArray(values[1]);
    this.initializeVisDatasets(nodes_pojos, edges_pojos);
    this.createNetwork();
  },

  toPojoArray: function(storeRecords){
    var pojos = storeRecords.toArray().map(function(record){
      return record.get('data');
    });
    return pojos;
  },

  initializeVisDatasets: function(nodes_pojos, edges_pojos){
    this.nodes_vis = new visHelper.DataSet(nodes_pojos);
    this.edges_vis = new visHelper.DataSet(edges_pojos);
    this.displayHelper = visDisplayHelper(this.nodes_vis, this.edges_vis);
    this.displayHelper.showEqualOrLessThanLevel(4);
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
      width: '800px',
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
    var ember_component = this.ember_component;
    if (properties.nodes.length > 0) {
      var node_id = properties.nodes[0]; 
      var show_node_params = { 
        node_id: node_id
        // graph_nodes: ember_component.get_graph_nodes()
      };

      // ember_component.toggleShowDescendants(node_id);
      ember_component.displayHelper.toggleShowDescendants(node_id);
      ember_component.sendAction('showNode', show_node_params );
    }
  },
});
