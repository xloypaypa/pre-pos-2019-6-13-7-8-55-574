'use strict';

/* eslint-disable no-unused-vars */

function countSameElements(collection) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {

    if (collection[i].length !== 1) {
      const key = collection[i].split('-')[0];
      const count = parseInt(collection[i].split('-')[1]);
      result.push({key: key, count: count});
    } else {
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
  }
  return result;
}

/* eslint-enable no-unused-vars */

