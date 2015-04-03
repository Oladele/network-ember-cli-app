import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr(),
  to: DS.attr()
});
