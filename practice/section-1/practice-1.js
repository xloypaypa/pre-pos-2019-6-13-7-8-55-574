'use strict';

/* eslint-disable no-unused-vars */

function collectSameElements(collectionA, collectionB) {
  const result = [];
  for (let i = 0; i < collectionA.length; i++) {
    const wanted = collectionA[i];
    const isInclude = includes(collectionB, wanted);
    if (isInclude) {
      result.push(wanted);
    }
  }
  return result;
}

function includes(collection, wanted) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === wanted) {
      return true;
    }
  }
  return false;
}

/* eslint-enable no-unused-vars */
