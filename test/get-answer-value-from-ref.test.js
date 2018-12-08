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

test('returns correct answer for response API payloads', t => {
  const ref = "4fe9a8f8-a0c8-489f-aab3-d421a4d96d43"
  const __mocked__ = {
    answers: [ 
      {
        "type": "text",
        "text": "Beer",
        "field": {
          "id": "HkBESHByy7LI",
          "type": "short_text",
          ref
        }
      }
    ]
  }
  const result = helpers.getAnswerValueFromRef(ref, __mocked__)
  t.is(result, 'Beer');
});
