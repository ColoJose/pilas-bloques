import Ember from 'ember';

export default Ember.Controller.extend({
  layout: true,
  queryParams: ['layout'],
  notificador: Ember.inject.service()
});
