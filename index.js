var self = this;
// Generic helper function that can be used for the three operations:
// https://stackoverflow.com/questions/33356504/difference-and-intersection-of-two-arrays-containing-objects
const operation = ( list1, list2, isUnion = false, intersectIdent = undefined ) =>
		list1.filter(
				(set => a => isUnion === set.has( intersectIdent !== undefined ? a[ intersectIdent ] :
												  a ))( new Set( list2.map( b => intersectIdent !== undefined ?
																				 b[ intersectIdent ] : b ) ) )
		);

exports.isArray = function ( arr ) {
	return arr != undefined && arr.constructor === Array;
};

exports.isFunction = function ( func ) {
	return func != undefined && func.constructor === Function;
};

exports.isString = function ( str ) {
	return str != undefined && str.constructor === String;
};

exports.isObject = function ( str ) {
	return str != undefined && str.constructor === Object;
};

exports.firstOrDefault = function ( arr, condition ) {
	return self.isArray( arr ) ? arr.firstOrDefault( condition ) : undefined;
};

Array.prototype.firstOrDefault = function ( condition ) {
	for ( var i = 0; i < this.length; ++i ) {
		if ( condition == undefined ) {
			return this[ i ];
		}

		if ( self.isFunction( condition ) ) {
			if ( condition( this[ i ] ) ) {
				return this[ i ];
			} else {
				continue;
			}
		}

		if ( self.isObject( condition ) ) {
			var keyAmount     = 0;
			var continueOuter = false;
			for ( var key in condition ) {
				++keyAmount;
				if ( this[ i ][ key ] != condition[ key ] ) {
					continueOuter = true;
					break;
				}
			}

			if ( continueOuter ) {
				continue;
			}

			if ( keyAmount == 0 && condition == this[ i ] ) {
				return this[ i ];
			}

			return this[ i ];
		}

		if ( self.isString( condition ) ) {
			return this.firstOrDefault( ( s ) => s === condition );
		}

		debugger;
	}

	return undefined;
};

Array.prototype.count = function ( runFunc ) {
	var matches = this.length;
	if ( runFunc ) {
		for ( var i = 0; i < this.length; ++i ) {
			if ( !runFunc( this[ i ], i ) ) {
				--matches;
			}
		}
	}

	return matches;
};

Array.prototype.each = function ( runFunc ) {
	for ( var i = 0; i < this.length; ++i ) {
		runFunc( this[ i ], i );
	}
};

Array.prototype.eachR = function ( runFunc ) {
	for ( var i = this.length - 1; i >= 0; --i ) {
		runFunc( this[ i ], i );
	}
};

Array.prototype.take = function ( amount ) {
	var result = [];

	for ( var i = 0; i < amount && i < this.length; ++i ) {
		result.push( this[ i ] );
	}

	return result;
};

Array.prototype.remove = function ( checkFunc ) {
	for ( var i = this.length - 1; i >= 0; --i ) {
		if ( self.isFunction( checkFunc ) && checkFunc( this[ i ] ) ) {
			this.splice( i, 1 );
		} else if ( checkFunc == this[ i ] ) {
			this.splice( i, 1 );
		}
	}
};

Array.prototype.skip = function ( amount ) {
	return this.slice( amount );
};

Array.prototype.filter = function ( filterFunc ) {
	var result = [];

	if ( filterFunc != undefined ) {
		for ( var i = 0; i < this.length; ++i ) {
			if ( filterFunc( this[ i ] ) ) {
				result.push( this[ i ] );
			}
		}
	}

	return result;
};

Array.prototype.notIn = function ( targetArray, key ) {
	var result = [];

	this.each( function ( sourceObj ) {
		var equivalent = targetArray.firstOrDefault( function ( newObj ) { return sourceObj[ key ] == newObj[ key ]; } );
		if ( equivalent == undefined ) {
			result.push( sourceObj );
		}
	} );

	return result;
};

Array.prototype.intersect = function ( array2, intersectIdent ) {
	return operation( this, array2, true, intersectIdent );
};

Array.prototype.groupBy = function ( func, skipUndefined, returnArray ) {
	skipUndefined = skipUndefined === true;
	returnArray   = returnArray === true;

	if ( func == undefined ) {
		return;
	}

	/* Allow direct property name */
	if ( self.isString( func ) ) {
		return this.groupBy( function ( obj ) {
			return obj[ func ];
		}, skipUndefined, returnArray );
	}

	var result = returnArray ? [] : {};

	if ( self.isFunction( func ) ) {
		for ( var i = 0; i < this.length; ++i ) {
			var key = func( this[ i ] );
			if ( key == undefined && skipUndefined ) {
				continue;
			} else if ( key == undefined ) {
				key = "__default";
			}

			var entry = { key : key, items : [] };

			if ( returnArray ) {
				var existingEntry = result.firstOrDefault( ( p ) => p !== undefined && p.key === key );
				if ( existingEntry === undefined ) {
					result.push( entry );
				} else {
					entry = existingEntry;
				}
			} else {
				if ( result[ key ] == undefined ) {
					result[ key ] = [];
				}
			}

			var subList = returnArray ? entry.items : result[ key ];

			subList.push( this[ i ] );
		}
	}

	return result;
};

Array.prototype.toSet = function ( func, skipUndefined ) {
	skipUndefined = skipUndefined === true;

	if ( func == undefined ) {
		return;
	}

	/* Allow direct property name */
	if ( self.isString( func ) ) {
		return this.toSet( function ( obj ) {
			return obj[ func ];
		} )
	}

	var result = [];
	if ( self.isFunction( func ) ) {
		for ( var i = 0; i < this.length; ++i ) {
			var value = func( this[ i ] );
			if ( self.isArray( value ) ) {
				for ( var i = 0; i < value.length; ++i ) {

				}
			}
			console.log( "result: ", result );
			console.log( "value: ", value );
			if ( !result.contains( value ) ) {
				result.push( value );
			}
		}
	}

	return result;
};

Array.prototype.shuffle = function () {
	for ( var j, x, i = this.length; i; j = Math.floor( Math.random() * i ), x = this[ --i ], this[ i ] = this[ j ], this[ j ] = x )
		;
};

/*
 Array.prototype.shuffleCopy = function () {
 var copy = [];

 return copy;
 };
 */

Array.prototype.contains = function ( obj ) {
	if ( self.isArray( obj ) ) {
		for ( var i = 0; i < obj.length; ++i ) {
			if ( this.contains( obj[ i ] ) ) {
				return true;
			}
		}

		return false;
	}

	return this.indexOf( obj ) >= 0;
};

Array.prototype.equals = function ( arr2 ) {
	if ( !self.isArray( arr2 ) ) {
		return false;
	}
};

Array.prototype.pushRange = function ( newarray ) {
	if ( !self.isArray( newarray ) ) {
		return;
	}

	for ( var i = 0; i < newarray.length; ++i ) {
		this.push( newarray[ i ] );
	}
};

module.exports = this;