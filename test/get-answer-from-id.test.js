import test from 'ava';
import helpers from '../src';
import payload from './__mocked-payload__';

const originalConsoleLog = global.console.log;

test.before(() => {
  global.console.log = f => f
});

test.after(() => {
  global.console.log = originalConsoleLog
});

test('returns correct id', t => {
  const result = helpers.getAnswerFromId('HkBESHByy7LI', payload)
  t.deepEqual(result, {
    type: 'text',
    text: 'Beer',
    field: {
      id: 'HkBESHByy7LI',
      type: 'short_text',
      ref: '4fe9a8f8-a0c8-489f-aab3-d421a4d96d43'
    }
  });
});

test('returns undefined with not found id', t => {
  const result = helpers.getAnswerFromId('does_not_exist', payload)
  t.is(result, undefined);
});

