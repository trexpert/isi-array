array prototype extenter for node.js
==========================
Array prototype Extender. 

Methods
-------
- [isArray](#isArray)
- [firstOrDefault](#firstOrDefault)
- [each](#each)
- [take](#take)
- [filter](#filter)
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

### filter():
**filter(filterFunc)**

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