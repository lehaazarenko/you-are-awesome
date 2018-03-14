const createEnumerableProperty = (propertyName) => {
	return propertyName;
};
const createNotEnumerableProperty = (propertyName) => { 
	Object.defineProperty(Object.prototype, propertyName, { 
		enumerable: false, 
		value: 'value' 
	}); 
	return propertyName; 
};
const createProtoMagicObject = () => {
	function magicFunction() {};
	magicFunction.prototype = magicFunction.__proto__;
	return magicFunction;
};
const incrementor = () => {
	incrementor.count = incrementor.count ? incrementor.count : 1;
	    function inc() {
	        incrementor.count++;
	        return inc;
	    }

	    inc.valueOf = function() {
	        return incrementor.count++;
	    }
	    return inc;
};
const asyncIncrementor = () => {
	asyncIncrementor.count = asyncIncrementor.count ? asyncIncrementor.count : 0;
	let prom;
    prom = new Promise((resolve, reject) => {
        asyncIncrementor.count++;
        return resolve(asyncIncrementor.count);
    });
    return prom;
};
const createIncrementer = () => {
	function * generator(n = 1) {
		yield n;
		yield n + 1;
		yield n + 2;
	}
	return generator();
};
const returnBackInSecond = (x) => {
	let prom;
	prom = new Promise((resolve, reject) => {
		setTimeout(() => resolve(x), 1000)
	});
	return prom;
};
const getDeepPropertiesCount = (object) => {
	let count = 0;
	    function deepPropCount(object) {
	        for(let key in object) {
	            if( typeof(object[key]) === 'object'){
	                deepPropCount(object[key]);
	            }
	            count++;
	        }
	        return count;
	    }
	return deepPropCount(object);
};
const createSerializedObject = () => {
	return null;
};
const sortByProto = (arr) => {
	return arr.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;