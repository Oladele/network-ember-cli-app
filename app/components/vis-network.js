import Ember from 'ember';
import myVis from '../utils/vis-helpers'

export default Ember.Component.extend({
  visdate: function(){
    // return myVis === window.vis ;
    return myVis().moment(new Date()).toString();
  }.property()
});
