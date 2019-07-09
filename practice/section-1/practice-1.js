'use strict';

/* eslint-disable no-unused-vars */

function collectSameElements(collectionA, collectionB) {
  const result = [];
  collectionA.includes = includes;
  collectionB.includes = includes;
updateResultIfCollectionAItemIsSameCollectionB(result, collectionA, collectionB);
  return result;
}

function updateResultIfCollectionAItemIsSameCollectionB(result, collectionA, collectionB) {
  for (let i = 0; i < collectionA.length; i++) {
    const wanted = collectionA[i];
    const isInclude = collectionB.includes(wanted);
    if (isInclude) {
      result.push(wanted);
    }
  }
}

function includes(wanted) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === wanted) {
      return true;
    }
  }
  return false;
}

/* eslint-enable no-unused-vars */
