'use strict';

/* eslint-disable no-unused-vars */

function collectSameElements(collectionA, collectionB) {
  const result = [];
  for (let i = 0; i < collectionA.length; i++) {
    for (let j = 0; j < collectionB.length; j++) {
      if (collectionB[j] === collectionA[i]) {
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}

/* eslint-enable no-unused-vars */
