array prototype extenter for node.js
====================================

Array prototype Extender.
 
Export-Methods
--------------
- [isArray](#isArray)
- [isFunction](#isFunction)
- [isString](#isString)
- [firstOrDefault](#firstOrDefault)

Extended Methods
----------------
- [firstOrDefault](#firstOrDefault)
- [each](#each)
- [take](#take)
- [skip](#skip)
- [filter](#filter)
- [groupBy](#groupBy)
- [shuffle](#shuffle)
- [contains](#contains)
- [pushRange](#pushRange)
 
### isArray()
**isArray(objToTest)**

Test an object to be an array

```javascript
var isiArray = require( 'isi-array' );
var obj1 = undefined;
var obj2 = 'tst';
var obj3 = [];

isiArray.isArray(obj1);
// -> false

isiArray.isArray(obj2);
// -> false

isiArray.isArray(obj3);
// -> true
```

### isFunction()
**isFunction(objToTest)**

Test an object to be a function

```javascript
var isiArray = require( 'isi-array' );
isiArray.isFunction(undefined);
// -> false

isiArray.isFunction({});
// -> false

isiArray.isFunction(() => {});
// -> true
```

### isString()
**isString(objToTest)**

Test an object to be a string

```javascript
var isiArray = require( 'isi-array' );
isiArray.isString(undefined);
// -> false

isiArray.isString({});
// -> false

isiArray.isString("string to test");
// -> true
```

### firstOrDefault():
**firstOrDefault(conditionFunc)**

```javascript
// NEED TO BE DOCUMENTED
```

### each():
**each(repeatFunc)**

```javascript
// NEED TO BE DOCUMENTED
```

### take():
**take(amount)**

```javascript
// NEED TO BE DOCUMENTED
```

### skip():
**skip(amount)**

```javascript
// NEED TO BE DOCUMENTED
```

### filter():
**filter(filterFunc)**

```javascript
// NEED TO BE DOCUMENTED
```

### groupBy():
**groupBy(filterOrPropertyName, skipUndefined = false)**

```javascript
// NEED TO BE DOCUMENTED
```

### shuffle():
**shuffle()**

```javascript
// NEED TO BE DOCUMENTED
```

### contains():
**contains(obj)**

```javascript
// NEED TO BE DOCUMENTED
```

### pushRange():
**pushRange(arr)**

```javascript
// NEED TO BE DOCUMENTED
```

#### Version History:
**1.0.1**
- published project on github
- added callable functions to documentation

**1.0.0**
- initialize project