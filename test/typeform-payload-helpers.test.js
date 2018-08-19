import test from 'ava';
import helpers from '../src/';
import mockedFormObject from './mocked-form-object';

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
  t.is(typeof helpers.getIdFromRef, 'function');
  t.is(typeof helpers.getAnswerFromId, 'function');
});

test('getIdFromRef grabs correct id from definition', t => {
  const id = helpers.getIdFromRef('readable_ref_email', mockedFormObject);
  t.is(id, 'SMEUb7VJz92Q');
});

test('getIdFromRef returns undefined when ref does not exist', t => {
  const id = helpers.getIdFromRef('not_found_ref', mockedFormObject);
  t.is(id, undefined);
});


test('getAnswerFromId grabs correct answer object', t => {
  const answer = helpers.getAnswerFromId('SMEUb7VJz92Q', mockedFormObject);
  t.deepEqual(
    answer,
    {
      "type": "email",
      "email": "laura@example.com",
      "field": {
        "id": "SMEUb7VJz92Q",
        "type": "email"
      }
    }
  );
});

test('getAnswerFromId returns undefined when answer does not exist', t => {
  const answer = helpers.getAnswerFromId('not_found_id', mockedFormObject);
  t.is(answer, undefined);
});

test('getIdFromRef and getAnswerFromId combined return correct answer', t => {
  const id = helpers.getIdFromRef('readable_ref_email', mockedFormObject);
  const answer = helpers.getAnswerFromId(id, mockedFormObject);
  t.deepEqual(
    answer,
    {
      "type": "email",
      "email": "laura@example.com",
      "field": {
        "id": "SMEUb7VJz92Q",
        "type": "email"
      }
    }
  );
});

test('getAnswerValue returns correct answer value', t => {
  const value = helpers.getAnswerValue({ type: 'text', text: 'Laura' });
  t.is(value, 'Laura');
});

test('getAnswerValueFromRef returns correct answer value', t => {
  const value = helpers.getAnswerValueFromRef('readable_ref_email', mockedFormObject);
  t.is(value, 'laura@example.com');
});

test('getAnswerValueFromRef returns correct dropdown answer', t => {
  const value = helpers.getAnswerValueFromRef('readable_ref_place', mockedFormObject);
  t.is(value, 'Barcelona');
});

test('getAnswerValueFromRef returns correct multiple choice answer', t => {
  const value = helpers.getAnswerValueFromRef('readable_ref_technologies', mockedFormObject);
  t.deepEqual(
    value,
    [
      "Vue",
      "React",
      "CSS"
    ]
  )
});
