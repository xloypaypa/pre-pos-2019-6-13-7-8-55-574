'use strict';

/* eslint-disable no-unused-vars */

function collectSameElements(collectionA, collectionB) {
  const result = [];
  for (let i = 0; i < collectionA.length; i++) {
    if (collectionB.indexOf(collectionA[i]) !== -1) {
      result.push(collectionA[i]);
    }
  }
  return result;
}

/* eslint-enable no-unused-vars */
