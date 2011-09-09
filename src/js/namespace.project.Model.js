goog.provide('namespace.project.Model');
goog.provide('namespace.project.Views');

goog.require('Logger');

/**
 * Model component of the Model View Controller implementation
 * @constructor
 */
namespace.project.Model = Backbone.Model.extend({

   /**
    * Model default attributes 
    */
    defaults: {
	"time":	new Date()
    },

   /**
    * Setup event bindings and attribute values
    */
    initialize: function(){
    },

   /**
    * @return {Date} The current time.
    */
    getTime: function(){
	return this.get("time");
    },

  /**
   * @param {Date} time The current time
   */
   setTime: function( time ){
	this.set("time", time );
   }

});

