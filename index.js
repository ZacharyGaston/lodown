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
 * @return {*} value: returns the value unchanged.
 * 
 */
 
 function identity(value){
    return value;
}
module.exports.identity = identity;



/**
 * typeOf: takes a value and defines datatypes in string format. The value
 * can be a string, array, object, number, function, or any other datatype and
 * the function will tell us, which type it is. 
 * 
 * @param {*} value: single value that can be any datatype.
 * 
 * @return {string}: The value of our parameter written as a string. 
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
 * first: Through the use of conditional statements, the first function will
 * return the <number> of items that are specified from the array, beginning
 * from the front of the array. If the number evaluates to be negative, then
 * the function will return an empty array. If the number happens to be greater
 * than the length of the array, then the function will return the entire array.
 * 
 * @param {array} array: This parameter goes under examination in order to find the values
 * that will be returned.
 * 
 * @param {number} number: This parameter represents the number of values to return starting
 * from the beginning of the array.
 * 
 * @return {array} array: The function will return a new array of values from the original array.
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
 * last:Through the use of conditional statements, the last function will
 * return the <number> of items that are specified from the array, beginning
 * from the end of the array. If the number evaluates to be negative, then
 * the function will return an empty array. If the number happens to be greater
 * than the length of the array, then the function will return the entire array.
 * 
 * @param {array} array: This parameter goes under examination in order to find the values
 * that will be returned.
 * 
 * @param {number} number: This parameter represents the number of values to return starting
 * from the end of the array.
 * 
 * @return {array} array: The function will return a new array of values from the original array
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
 * indexOf: The indexOf function uses a for loop to identify the first index's value
 * that is within a given array. If the value happens to be not found within the array, 
 * than negative one is returned. 
 * 
 * @param {array} array: This parameter is to be iterated through while the function searches 
 * for the value. 
 * 
 * @param {*} value: The value will be identified by the function, returning to us its index.
 * 
 * @return {number} number: The function will return the index number of where our argument first appears.
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
 * Contains: The contains function uses a ternary operator to decide whether or 
 * not if a given array happens to contain a given value.
 * 
 * @param {array} array: This parameter is to be checked for to see if it has the given value.
 * 
 * @param {*} value: This can be any datatype and the purpose is to see if it is determined
 * to be in the array.
 * 
 * @return {boolean value} boolean: This will evaluate to a boolean of either true or false. This 
 * depends on whether or not the given array contains the given value.
 * 
 */

 function contains(array, value){
    return (array.includes(value)) ? true : false;
}
module.exports.contains = contains;


/**
 * unique: The unique function's purpose is to iterate over an array. Through that
 * iteration, the function is designed to remove any duplicate values and push the unique
 * values to a separate array.
 * 
 * @param {array} array: This parameter is to be iterated over to find the unique values it holds.
 * 
 * @return {array} array: Our function will return a new array containing the unique values.
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
 * filter: The filter function implements a for loop to pass an array's elements
 * into a test. Within the test, a conditional statement is used to make a decision:
 * if the elements from the array happen to pass the test, then push those elements
 * to a new array. If the test evaluates to be undefined, then the filter function 
 * will still iterate through the array, and pass all the truthy elements to a new array.
 * 
 * @param {array} array: This parameter represents the array that will have the elements we need
 * iterated through.
 * 
 * @param {test} test: This parameter is our test function that will make the final decision
 * upon passing the elements from the array.
 * 
 * @return {array} new array: The function will return a new array filled with elements that have 
 * returned true from the test function.
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
 * reject: The reject function implements a for loop to pass an array's elements
 * into a test. Within the test, a conditional statement is used to make a decision:
 * if the elements from the array happen to fail the test, then push those elements
 * to a new array. If the test evaluates to be undefined, then the reject function 
 * will still iterate through the array, and pass all the falsey elements to a new array.
 * 
 * @param {array} array: This parameter represents the array that will have the elements we need
 * iterated through.
 * 
 * @param {test} test: This parameter is our test function that will make the final decision
 * upon passing the elements from the array.
 * 
 * @return {array} new array: The function will return a new array filled with elements that have 
 * returned false from the test function.
 * 
 */
 
  function reject(array, test){
    return filter(array, function(element, index, array){
        return !test(element, index, array);
    });
}
module.exports.reject = reject;



/**
 * partition: The partition function implements a for loop to iterate through an
 * array. It will then push he values to a callback test function, which will decide
 * if those values are either truthy or falsey and separates the values based upon that
 * determination. The partition function then pushes the values into two separate
 * arrays nested inside one larger array. The values that have been determined to be
 * truthy will lie within one array, and the wvalues thay have been determined to be
 * falsey will lie within the other array. 
 * 
 * @param {array} array: This paramater contains the elements that will be passed through the test.
 * 
 * @param {test} test: This parameter is our test function that will determine whether the elements
 * passed into it or either truthy or falsey.
 * 
 * @return {array} array of arrays: The partition function will return an array of arrays: one array that will
 * contain our truthy values, an array that will contain our falsey values, and a larger 
 * array that will house both the truthy and falsey arrays. 
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
 * map: The map function determines if the collection parameter is either an object
 * or an array. After concluding one or the other, it will then use a for loop or
 * a for-in loop to iterate over the collection and pass each value to a callback function,
 * pushing the return value to a new array.
 * 
 * @param {collection} collection: This parameter represents the collection to be iterated over and
 * have its said values passed to the test function and pushed into the new array.
 * 
 * @param {test} test: This parameter is the callback test function for the elements to be used on.
 * 
 * @return {array} array: The map function return a new array of values returned from the callback
 * test function.
 * 
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
 * pluck: The pluck function implements the map function in order to examinate
 * an array of objects and return the value of <property> for every element inside
 * an <array>.
 * 
 * @param {array} array: This parameter represents an array of objects to be examined using the 
 * map function.
 * 
 * @param {property} property: This parameter is to be identified that will have its value return the said
 * property. 
 * 
 * @return {array} array: The pluck function will return an array to be filled with the properties
 * of each element in the given array. 
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
 * every: The every function implements the reject function to iterate through
 * a collection and passes the values to the function test to decide if the values 
 * are either true or false.If all the values are determined to be true, then return
 * true. Otherwise, return false. If there is no function, then have the values to be
 * iterated through and determine if the values are either truthy or falsey. 
 * 
 * @param {collection} collection: This is the parameter that will be iterated over where the parameters
 * will be passed to the function.
 * 
 * @param {function} function: This parameter represents the callback function which will evaluate our values.
 * 
 * @return {boolean value} true or false: The every function will return a boolean value that will evaluate
 * to be either true or false. If any value is false, or falsey where in the instance there is not 
 * a function, then this will be false. If all of the elements evaluate to be true, or truthy
 * in the instance there is not a function, then this will be true.
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
 * some: The some function will first determine if the collection is either an array or an object.
 * Next, it will loop through the collection and pass the values tot he test function, determining
 * if the values are either true or false. If some of the values are determined to be true, then the 
 * function returns true. If none of the values are determined to be true, then the function returns
 * false.
 * 
 * @param {collection} collection: This is the parameter that will be iterated over where the parameters
 * will be passed to the function.
 * 
 * @param {function} function: This parameter represents the callback function which will evaluate our values
 * determining if they are either true or false.
 * 
 * @return {boolean value} true or false: The some function will return a boolean value of either true or false.
 * The value of true will be returned if at least one value is true. The value of false is returned 
 * if there are no true values within the collection.
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
 * reduce: The reduce function passes each value from the array to a function. Its
 * purpose is to reduce the total number of values within the array. This function uses 
 * the seed as its first value. If the seed does not exist, then the function will use the
 * first value in the array, at array[0], as the seed, and the second value, at array[1], as the first.
 * 
 * @param {array} array: This parameter represents the array to be iterated over, sending the
 * values to the function call in order to reduce the total number of values in the array.
 * 
 * @param {function} function: This parameter accepts the values from the array, and combines them into a bigger number
 * so it only concludes with one value.
 * 
 * @param {*} seed: This parameter represents the starting value for the function to begin with. If it 
 * is evaluated ot be undefined, then the seed will start at array[0].
 * 
 * @param {*} value: The reduce function will be returned with all of the other values from the array
 * combined into it. It will be the same datatype that the seed is set starting as. 
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
 * extend: The extend function copies all of the properties from the object2 parameter
 * and any subsequent objects to the object1 parameter in the exact order they are passed.
 * 
 * @param {object} object1: This parameter represents the object in which all of the other
 * object's properties will be added towards. 
 * 
 * @param {object} object2: This parameter represents the object to add to object1
 * 
 * @param {object} ...object: This parameter represents objects in which may exist or not exist.
 * If they do exist then, the properties will be added to object1.
 * 
 * @return {object} object1: The extend function will return object1, after all of the other object's 
 * properties are added to it first. 
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