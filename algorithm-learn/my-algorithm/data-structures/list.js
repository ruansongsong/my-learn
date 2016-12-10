/**
 * List
 *
 * @example
 *
 * var L = require('./list');
 * var List = new L.List();
 */
(function (exports) {
	'use strict';
	/**
	 * List
	 * @public
	 * @constructor
	 */
	exports.List = function () {
		this.dataStore = [];
		this.listSize = 0;
		this.pos = 0;
	};
	/**
	 * Append a data to List
	 * @public
	 * @method
	 * @param  {Number|String} data Data which should be appended
	 *
	 */
	exports.List.prototype.append = function (data) {
		this.dataStore[this.listSize++] = data;
	};
	/**
	 * Return List
	 * @public
	 * @method
	 * @return {Array} Return List
	 */
	exports.List.prototype.toString = function () {
		return this.dataStore;
	};
	/**
	 * Find data whether is in the List
	 * @public
	 * @method
	 * @param  {Number|String} data want to find
	 * @return {Number}      return position if data is found
	 */
	exports.List.prototype.find = function (data) {
		for (var i = 0; i < this.listSize; i++) {
			if(this.dataStore[i] == data) {
				return i;
			}
		}
		return -1;
	}
	/**
	 * remove remove a data if it is exist
	 * @public
	 * @method
	 * @param  {Number|String} data want to remove
	 * @return {boolean}      return true if data is exist
	 */
	exports.List.prototype.remove = function(data) {
		var pos = this.find(data);
		if(pos > -1){
			this.dataStore.splice(pos, 1);
			--this.listSize;
			return true;
		}
		return false;
	}
	/**
	 * length return the length of List
	 * @public
	 * @method
	 * @return {Number} the length of List
	 */
	exports.List.prototype.length = function() {
		return this.listSize;
	}
	/**
	 * insert insert a element after a element
	 * @param  {Number|string} data  which element to insert
	 * @param  {Number|String} after which position to insert
	 * @return {Boolean}       if inserted, return true
	 */
	exports.List.prototype.insert = function (data, after) {
		var pos = this.find(after);
		if(pos > -1) {
			this.dataStore.splice(pos + 1, 0, data);
			++this.listSize;
			return true;
		}
		return false;
	};
	/**
	 * clear List
	 * @public
	 * @method
	 *
	 */
	exports.List.prototype.clear = function () {
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = this.pos = 0;
	};
	/**
	 * check
	 * @param  {Number|String}
	 * @return {Boolean}      return true if it is found
	 */
	exports.List.prototype.contains = function (data) {
		for (let i = 0; i < this.dataStore.length; i++) {
			if(this.dataStore[i] == data) {
				return true;
			}
		}
		return false;
	};
	// traversal List
	exports.List.prototype.front = function () {
		this.pos = 0;
	};
	exports.List.prototype.end = function () {
		this.pos = this.listSize - 1;
	};
	exports.List.prototype.prev = function () {
		if(this.pos > 0){
			this.pos--;
		}
	};
	exports.List.prototype.next = function () {
		if(this.pos < this.listSize - 1){
			this.pos++;
		}
	};
	exports.List.prototype.currPos = function () {
		return this.pos;
	};
	exports.List.prototype.moveTo = function (pos) {
		this.pos = pos;
	};
	exports.List.prototype.getElement = function () {
		return this.dataStore[this.pos];
	};
})(typeof window === 'undefined' ? module.exports : window);
