'use strict';

/* eslint-disable no-unused-vars */

function collectSameElements(collectionA, collectionB) {
  const result = [];
  for (let i = 0; i < collectionA.length; i++) {
    let wanted = collectionA[i];
    let found = false;
    for (let j = 0; j < collectionB.length; j++) {
      if (collectionB[j] === wanted) {
        found = true;
      }
    }
    if (found) {
      result.push(collectionA[i]);
    }
  }
  return result;
}

/* eslint-enable no-unused-vars */
