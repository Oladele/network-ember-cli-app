import Ember from 'ember';
import visHelper from '../utils/vis-helpers'

export default Ember.Component.extend({
  visdate: function(){
    // return visHelper === window.vis ;
    return visHelper.moment(new Date()).toString();
  }.property()
});
