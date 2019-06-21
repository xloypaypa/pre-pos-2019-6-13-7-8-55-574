'use strict';

/* eslint-disable no-unused-vars */

function createUpdatedCollection(collectionA, objectB) {
  for (let i = 0; i < objectB.value.length; i++) {
    for (let j = 0; j < collectionA.length; j++) {
      if (collectionA[j].key === objectB.value[i]) {
        collectionA[j].count--;
      }
    }
  }
  return collectionA;
}

/* eslint-enable no-unused-vars */
