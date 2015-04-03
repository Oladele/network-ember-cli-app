import DS from 'ember-data';

var Edge = DS.Model.extend({
  from: DS.attr(),
  to: DS.attr()
});

Edge.reopenClass({
  FIXTURES:  [
    {id: 1, from: 1, to: 2},
    {id: 2, from: 1, to: 3},
    {id: 3, from: 2, to: 4},
    {id: 4, from: 2, to: 5}
  ]
});

export default Edge
