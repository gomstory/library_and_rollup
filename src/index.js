import _ from 'lodash';
import numRef from './ref.json';
import { echo } from './echo';

export function numToWord(num) {
  return _.reduce(numRef, (accum, ref) => {
    echo('numToWord');
    return ref.num === num ? ref.word : accum;
  }, '');
}

export function wordToNum(word) {
  return _.reduce(numRef, (accum, ref) => {
    echo('wordToNum');
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
}