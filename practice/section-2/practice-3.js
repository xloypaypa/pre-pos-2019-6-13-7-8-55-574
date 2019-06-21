'use strict';

/* eslint-disable no-unused-vars */

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

/* eslint-enable no-unused-vars */

function updateResult(result, key, count) {
  for (let j = 0; j < result.length; j++) {
    if (result[j]['name'] === key) {
      result[j]['summary'] += count;
      return;
    }
  }
  result.push({name: key, summary: count});
}
