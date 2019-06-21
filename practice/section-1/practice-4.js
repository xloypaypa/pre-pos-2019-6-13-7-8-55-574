'use strict';

/* eslint-disable no-unused-vars */

function collectSameElements(collectionA, objectB) {
  const result = [];
  for (let i = 0; i < collectionA.length; i++) {
    if (objectB.value.indexOf(collectionA[i].key) !== -1) {
      result.push(collectionA[i].key);
    }
  }
  return result;
}

/* eslint-enable no-unused-vars */
