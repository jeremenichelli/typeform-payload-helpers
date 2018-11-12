import test from 'ava';
import helpers from '../src';

// mock up logs
const originalConsoleLog = global.console.log;

test.before(() => {
  global.console.log = f => f
});

test.after(() => {
  global.console.log = originalConsoleLog
});

test('module exports an object with helper methods', t => {
  t.is(typeof helpers, 'object');
  t.is(typeof helpers.getAnswerFromId, 'function');
  t.is(typeof helpers.getAnswerValue, 'function');
  t.is(typeof helpers.getAnswerValueFromRef, 'function');
  t.is(typeof helpers.getIdFromRef, 'function');
});
