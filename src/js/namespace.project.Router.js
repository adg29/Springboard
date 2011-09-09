goog.provide('namespace.project.Router');

goog.require('namespace.project.Model');
goog.require('namespace.project.Command');
goog.require('namespace.project.Notification');

goog.require('Logger');
goog.require('Dispatcher');

/**
 * Controller/Router component of the Model View Controller implementation
 * @param {*} model The Backbone.Model instance for this Controller
 * @param {*} view The Backbone.View instance for this Controller
 * @constructor
 */
namespace.project.Router = Backbone.Router.extend({

  initialize: function( model , view ){

    this.model = model;
    this.view = view;

    /**
     * @private
     * @type {number}
    */
     this._timer;

     this.bind(namespace.project.Notification.TIME_UPDATED, this.updateTime, this );
  },

  /**
   * Designates callback that selects view to refresh  
  */
  updateTime: function(){
	this.view.updateTime();
  },

  /**
   * Define routes and assoicated parameters and actions 
   */
  routes: {
  },

  help: function() {
  },

  search: function(query, page) {
  },

  /**
   * Notify sent from view
   * @param {String} type The type of notification
   * @param {Object} data The data sent with notification
   */
  command: function(type, data){
	switch(type)
	{
		case(namespace.project.Command.START_TIMER):
			this.startTimer();
		break;
		case(namespace.project.Command.STOP_TIMER):
			this.stopTimer();
		break;
	}
  },

  /**
   * Starts the timer running
   */
   startTimer: function(){
	var self = this;
	
	var tick = function() {
		self.model.set( { "time": new Date()} );
		self.trigger(namespace.project.Notification.TIME_UPDATED);
	}
	
	this._timer = setInterval( tick, 1000 );
	tick();
   },
   
   /**
   * Stops the current time from running
   */
   stopTimer: function() {
	clearInterval( this._timer );
   }

});
