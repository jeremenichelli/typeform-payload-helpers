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

test('returns correct answer value for an id', t => {
  const answer = helpers.getAnswerValueFromId('NGXQV4HTpXZw', payload)
  t.is(answer, true);
});

test('returns undefined with not found ref', t => {
  const answer = helpers.getAnswerValueFromId('does_not_exist', payload)
  t.is(answer, undefined);
});
