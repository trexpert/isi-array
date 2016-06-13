var self = this;

exports.isArray = function (arr) {
	return arr != undefined && arr.constructor === Array;
};

Array.prototype.firstOrDefault = function (condition) {
	for (var i = 0; i < this.length; ++i) {
		if (condition( this[i] ) == true)
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