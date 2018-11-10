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
  const result = helpers.getIdFromRef('boolean', payload)
  t.is(result, 'NGXQV4HTpXZw');
});

test('returns undefined with not found ref', t => {
  const result = helpers.getIdFromRef('does_not_exist', payload)
  t.is(result, undefined);
});
