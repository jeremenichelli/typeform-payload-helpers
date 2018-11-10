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

test('returns correct answer value for a ref', t => {
  const result = helpers.getAnswerValueFromRef('picture_choice', payload)
  t.is(result, 'Mediterranean');
});

test('returns undefined with not found ref', t => {
  const result = helpers.getAnswerValueFromRef('does_not_exist', payload)
  t.is(result, undefined);
});
