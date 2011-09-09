goog.provide('namespace.project.View');

goog.require('namespace.project.Model');
goog.require('namespace.project.Router');

goog.require('Logger');

/**
 * View component of the Model View Controller implementation
 * @param {*} el The dom object used in this view
 * @constructor
 */
namespace.project.View = Backbone.View.extend({
	

	initialize: function(){
		$(this.el).append('<div id="time_display"></div>');	
	},
	/**
	 * Updates the current time displayed in the view
	 * @param {Date} time The time to display
	 */
	updateTime: function(){
		this.$('#time_display').html( namespace.project.View.TIME_PREFIX + this.model.getTime().toString() );
	}
});

/**
 * The message to prefix the current time with
 * @const
 * @type {string}
 */
namespace.project.View.TIME_PREFIX = "The Time Is: ";
