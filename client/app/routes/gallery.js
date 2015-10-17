import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('map').then(maps => maps.filter(map => !!map.get('id')))
    }
});