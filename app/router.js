import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('nodes', function() {
    this.route('show', {
      path: ':node_id'
    });
  });
  this.resource('edges', function() {});
});
