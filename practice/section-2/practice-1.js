'use strict';

/* eslint-disable no-unused-vars */

function countSameElements(collection) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    let isNewElement = true;
    for (let j = 0; j < result.length; j++) {
      if (result[j]['key'] === collection[i]) {
        isNewElement = false;
        result[j]['count']++;
        break;
      }
    }
    if (isNewElement) {
      result.push({key: collection[i], count: 1});
    }
  }
  return result;
}

/* eslint-enable no-unused-vars */
