/**
 * Stack
 * @example
 * var Stack = require('stack').Stack();
 * var s = new Stack();
 */
(function (exports){
	'use strict';
	/**
	 * Stack
	 * @public
	 * constructor
	 */
	exports.Stack = function () {
		this.dataStore = [];
		this.top = 0;
	}
	/**
	 * push push a element into Stack
	 * @param  {Number|String} element a element which want to be pushed
	 *
	 */
	exports.Stack.prototype.push = function (element) {
		this.dataStore[this.top++] = element;
	};
	/**
	 * pop pop a element
	 * @return {Number|String} return the top element of stack
	 */
	exports.Stack.prototype.pop = function () {
		return this.dataStore[--this.top];
	};
	/**
	 * peek return the top element of stack
	 * @return {Number|String} return the top element of stack
	 */
	exports.Stack.prototype.peek = function () {
		return this.dataStore[this.top - 1];
	};
	exports.Stack.prototype.clear = function () {
		delete this.dataStore;
		this.dataStore = [];
		this.top = 0;
	};
	exports.Stack.prototype.toString = function () {
		return this.dataStore;
	};
})(typeof window === 'undefined' ? module.exports : window)
