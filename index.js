var self = this;

exports.isArray = function (arr) {
	return arr != undefined && arr.constructor === Array;
};

exports.isFunction = function (func) {
	return func != undefined && func.constructor === Function;
};

exports.isString = function (str) {
	return str != undefined && str.constructor === String;
};

exports.firstOrDefault = function (arr, condition) {
	return self.isArray( arr ) ? arr.firstOrDefault( condition ) : undefined;
};

Array.prototype.firstOrDefault = function (condition) {
	for (var i = 0; i < this.length; ++i) {
		if (condition == undefined || condition( this[i] ) == true)
			return this[i];
	}

	return undefined;
};

Array.prototype.each = function (runFunc) {
	for (var i = 0; i < this.length; ++i) {
		runFunc( this[i], i );
	}
};

Array.prototype.take = function (amount) {
	var result = [];

	for (var i = 0; i < amount && i < this.length; ++i) {
		result.push( this[i] );
	}

	return result;
};

Array.prototype.skip = function (amount) {
	return this.slice( amount );
};

Array.prototype.filter = function (filterFunc) {
	var result = [];

	if (filterFunc != undefined) {
		for (var i = 0; i < this.length; ++i) {
			if (filterFunc( this[i] ))
				result.push( this[i] );
		}
	}

	return result;
};

Array.prototype.groupBy = function (func, skipUndefined) {
	skipUndefined = skipUndefined === true;

	if (func == undefined)
		return;

	/* Allow direct property name */
	if (self.isString( func )) {
		return this.groupBy( (obj) => {
			return obj[func];
		} )
	}

	var result = {};
	if (self.isFunction( func )) {
		for (var i = 0; i < this.length; ++i) {
			var key = func( this[i] );
			if (key == undefined && skipUndefined)
				continue;
			else if (key == undefined)
				key = "__default";

			if (result[key] == undefined)
				result[key] = [];

			result[key].push( this[i] );
		}
	}

	return result;
};

Array.prototype.shuffle = function () {
	for (var j, x, i = this.length; i; j = Math.floor( Math.random() * i ), x = this[--i], this[i] = this[j], this[j] = x)
		;
};

/*
 Array.prototype.shuffleCopy = function () {
 var copy = [];

 return copy;
 };
 */

Array.prototype.contains = function (obj) {
	if (self.isArray( obj )) {
		for (var i = 0; i < obj.length; ++i) {
			if (this.contains( obj[i] ))
				return true;
		}

		return false;
	}

	return this.indexOf( obj ) >= 0;
};

Array.prototype.pushRange = function (newarray) {
	if (!self.isArray( newarray ))
		return;

	for (var i = 0; i < newarray.length; ++i) {
		this.push( newarray[i] );
	}
};

module.exports = this;