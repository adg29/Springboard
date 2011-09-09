goog.provide('namespace.project.App');

goog.require('namespace.project.Model');
goog.require('namespace.project.Router');
goog.require('namespace.project.View');
goog.require('namespace.project.Command');

goog.require('Logger');

namespace.project.App = function( page ) {
	$(document).ready(function(){
		/*
			Determine which page we are on...
		*/
		
		Logger.debug( "document.ready :: " + page );
		
		var	controller,
			model,
			view,
			dom = {};
		
		switch( page ) {
			
			case "index" : default :
			
				dom.output = $("#output");
				
				model		= new namespace.project.Model();
				view		= new namespace.project.View( {el: dom.output, model: model} );
				controller	= new namespace.project.Router( model, view );
				
				controller.command(namespace.project.Command.START_TIMER);
				
			break;
		}
	});
}

goog.exportSymbol('namespace.project.App', namespace.project.App);
