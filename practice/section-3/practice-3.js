'use strict';

/* eslint-disable no-unused-vars */

function createUpdatedCollection(collectionA, objectB) {
  collectionA = countSameElements(collectionA);
  for (let i = 0; i < objectB.value.length; i++) {
    for (let j = 0; j < collectionA.length; j++) {
      if (collectionA[j].key === objectB.value[i]) {
        collectionA[j].count -= parseInt(collectionA[j].count / 3);
      }
    }
  }
  return collectionA;
}

/* eslint-enable no-unused-vars */

function countSameElements(collection) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].indexOf('-') !== -1) {
      updateResult(result, collection[i].split('-')[0], parseInt(collection[i].split('-')[1]));
    } else if (collection[i].indexOf(':') !== -1) {
      updateResult(result, collection[i].split(':')[0], parseInt(collection[i].split(':')[1]));
    } else if (collection[i].indexOf('[') !== -1) {
      updateResult(result, collection[i].split('[')[0], parseInt(collection[i].split('[')[1].split(']')[0]));
    } else {
      updateResult(result, collection[i], 1);
    }
  }
  return result;
}

function updateResult(result, key, count) {
  for (let j = 0; j < result.length; j++) {
    if (result[j]['key'] === key) {
      result[j]['count'] += count;
      return;
    }
  }
  result.push({key: key, count: count});
}
