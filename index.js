'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: takes a value and returns a value unchanged.
 * 
 * @param {*} value: single value that can be any datatype.
 *
 * @return {*} : returns the value unchanged.
 * 
 */
 
 function identity(value){
    return value;
}
module.exports.identity = identity;



/**
 * typeOf:
 * 
 */
 
 function typeOf(value){
    if(Array.isArray(value) === true){
        return "array";
    }else if (value instanceof Date === true){
        return "date";
    }else if (value === null){
        return "null";
    }else{
        return typeof(value);
    }
}
module.exports.typeOf = typeOf;


/**
 * first:
 * 
 */
 
 function first(array, number){
    if(Array.isArray(array) === false || number < 0){
        return [];
    }else if(number !== number || number === undefined){
        return array[0];
    }else if(number > array.length){
        return array;
    }else {
        return array.slice(0, number);
    }
}
module.exports.first = first;



/**
 * last
 */
 
 function last(array, number){
    if(Array.isArray(array) === false || number < 0){
        return [];
    }else if(number !== number || number === undefined){
        return array[array.length - 1];
    }else if (number > array.length){
        return array;
    }else{
        return array.slice(number -1, array.length);
    }
}
module.exports.last = last;



/**
 * indexOf
 * 
 */
 
  function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;


/**
 * Contains:
 * 
 * 
 */

 function contains(array, value){
    return (array.includes(value)) ? true : false;
}
module.exports.contains = contains;


/**
 * unique
 * 
 */
 
function unique(array){
    let uniqueElements = [];
    for(let i = 0; i < array.length; i++){
        if(uniqueElements.indexOf(array[i]) === -1){
            uniqueElements.push(array[i]);
        }
    }
    return uniqueElements;
}
module.exports.unique = unique;


/**
 * filter
 * 
 */
 
function filter(array, test){
    let filteredElements = [];
    for(let i = 0; i < array.length; i++){
        if(test(array[i], i, array) === true){
            filteredElements.push(array[i]);
        }
    }
    return filteredElements;
}
module.exports.filter = filter;


/**
 * reject
 * 
 */
 
  function reject(array, test){
    return filter(array, function(element, index, array){
        return !test(element, index, array);
    });
}
module.exports.reject = reject;



/**
 * 
 * partition
 */
 
function partition(array, test){
    let truePartition = [];
    let falsePartition = [];
    let allPartition = [];
    
    for(let i = 0; i < array.length; i++){
        if(test(array[i], i, array) === true){
            truePartition.push(array[i]);
        }else{
            falsePartition.push(array[i]);
        }
    }
    allPartition.push(truePartition);
    allPartition.push(falsePartition);
    return allPartition;
}
module.exports.partition = partition;


/**
 * 
 * map
 */
 
function map(collection, test){
    let storage = [];
    if(Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            storage.push(test(collection[i],i, collection));
        }
    }else{
        for(let key in collection){
            storage.push(test(collection[key], key, collection));
        }
    }
    return storage;
}
module.exports.map = map;


/**
 * 
 * pluck
 * 
 */

function pluck(array, property){
    let propertyValue = [];
    map(array, function(element){
        propertyValue.push(element[property]);
    });
    return propertyValue;
}
module.exports.pluck = pluck;


/**
 * every
 * 
 */
 
function every(collection, func){
    let array =reject(collection, function(element, index, array){
        if(!func){
            return element;
        }
        return func(element, index, array);
    });
    if(array.length > 0){
        return false;
    }
    return true;
}
module.exports.every = every;

/**
 * 
 * some
 */
 
function some(collection, test){
    let startingCount = 0;
    if(test === undefined && Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            if(collection[i]){
                startingCount += 1;
            }
        }
    }else if(test === undefined && Array.isArray(collection) === false){
        for (let key in collection){
            if(collection[key]){
                startingCount += 1;
            }
        }
    }else if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(test(collection[i], i, collection) === true){
                startingCount++;
            }
        }
    } else{
        for (let key in collection){
            if(test(collection[key], key, collection) === true){
                startingCount++;
            }
        }
    }if(startingCount > 0){
        return true;
    }else{
        return false;
    }
}
module.exports.some = some;


/**
 * reduce
 * 
 * 
 */
 
 function reduce(array, func, seed){
 each(array, function(element, index, array){
     if(seed === undefined){
         seed = element;
     }else{
         seed = func(seed, element, index);
     }
 });
 return seed;
}
module.exports.reduce = reduce;

/**
 * extend
 * 
 * 
 */

function extend(object1, object2, ...object){
    for(let key in object2){
        object1[key] = object2[key];
    }for(let i = 0; i < object.length; i++){
        for(let key in object[i]){
            object1[key[i]] = object[i][key];
        }
    }
    return object1;
}
module.exports.extend = extend;