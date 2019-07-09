'use strict';

/* eslint-disable no-unused-vars */

function collectSameElements(collectionA, collectionB) {
  const result = [];
  for (let i = 0; i < collectionA.length; i++) {
    const wanted = collectionA[i];
    updateResultIfCollectionHaveWanted(result, collectionB, wanted);
  }
  return result;
}

function updateResultIfCollectionHaveWanted(result, collection, wanted) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === wanted) {
      result.push(collection[i]);
    }
  }
}

/* eslint-enable no-unused-vars */
