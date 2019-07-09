'use strict';

/* eslint-disable no-unused-vars */

function collectSameElements(collectionA, collectionB) {
  const result = [];
  for (let i = 0; i < collectionA.length; i++) {
    let wanted = collectionA[i];
    let found = includes(collectionB, wanted);
    if (found) {
      result.push(collectionA[i]);
    }
  }
  return result;
}

function includes(collection, wanted) {
  for (let j = 0; j < collection.length; j++) {
    if (collection[j] === wanted) {
      return true;
    }
  }
}

/* eslint-enable no-unused-vars */
