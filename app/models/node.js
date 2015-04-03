import DS from 'ember-data';

var Node = DS.Model.extend({
  label: DS.attr('string')
});

Node.reopenClass({
  FIXTURES: [
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]
});


export default Node