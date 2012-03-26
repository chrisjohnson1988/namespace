/**
* @description The following is a jQuery plugin which will ease namespacing of 
*	objects which are not part of jQuery.
* @author Christopher Johnson
* @version 0.2 Lookup Enabled
* @dependancies jQuery
* @usage The following are sample usages of this namespacing functionality in javascript and coffeescript.
*	<code lang="javascript" filename="my/uber/awesome/namespaced/Object.js">
*		(function() {
*			$.namespace.call($.GLOBAL, "my.uber.awesome.namespaced.Object", {
*				someMethod: function() {
*					return "Hurray, I work";				
*				}
*			});
*		})();
*	</code>
*
*	<code lang="coffeescript" filename="my/uber/awesome/namespaced/Object.coffeescript">
*		do ->
*			$.namespace.call $.GLOBAL, "my.uber.awesome.namespaced.Object"
*				someMethod: ->	"Hurray. I Work";
*	</code>
*
*	It is also possible to look up an existing namespace variables. Since we can traverse arbitary Javascript 
*		structures, we can even obtain things that were not defined with the namespace plugin.
*	<code lang="javascript">
*		(function() {
*			var objectFound = $.namespace.call($.GLOBAL, "something.that.has.been.declared.in.javascript");
*		})();
*	</code>
*/
(function($, undefined) {
	function lookupNamespace(currPackage, packages) {
		for(var i in packages)
			if(!(currPackage = currPackage[packages[i]])) return undefined; //traverse, if nothing is found along the way return undefined
		return currPackage;
	}

	$.namespace = function(name, entity) {
		var i, packages = name.split('.'), currPackage = this; //split the namespace and store the global context
		if(!entity) return lookupNamespace(currPackage, packages); //if no entity has been specified. Do a lookup
		for(i=0; i<packages.length-1; i++)
			currPackage = (currPackage[packages[i]] = currPackage[packages[i]] || {}); //define and assign
		return currPackage[packages[i]] = entity; //set the entity to the final namespace
	};
})(jQuery);