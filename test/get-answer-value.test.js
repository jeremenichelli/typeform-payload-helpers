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

test('returns correct type of value for boolean answers', t => {
  const answer = helpers.getAnswerFromId('NGXQV4HTpXZw', payload)
  t.is(helpers.getAnswerValue(answer), true);
});

test('returns array for multiple choice answers', t => {
  const answer = helpers.getAnswerFromId('IVzkMhrHh9a8', payload)
  t.truthy(Array.isArray(helpers.getAnswerValue(answer)));
  t.deepEqual(helpers.getAnswerValue(answer), [ 'Oregano' ])
});

test('returns correct type of value for short text answers', t => {
  const answer = helpers.getAnswerFromId('HkBESHByy7LI', payload)
  t.is(helpers.getAnswerValue(answer), 'Beer');
});

test('returns correct type of value for long text answers', t => {
  const answer = helpers.getAnswerFromId('EtTRuQkE4hjk', payload)
  t.is(helpers.getAnswerValue(answer), 'They should stop eating and die');
});

test('returns correct type of value for picture choice answers', t => {
  const answer = helpers.getAnswerFromId('xTwhj9PkF3Hz', payload)
  t.is(helpers.getAnswerValue(answer), 'Mediterranean');
});

test('returns correct type of value for opinion scale answers', t => {
  const answer = helpers.getAnswerFromId('MWnRmsfmoByz', payload)
  t.is(helpers.getAnswerValue(answer), 5);
});

test('returns correct type of value for email answers', t => {
  const answer = helpers.getAnswerFromId('EswVlznrQiX5', payload)
  t.is(helpers.getAnswerValue(answer), 'me@pizza.net');
});

test('returns correct type of value for date answers', t => {
  const answer = helpers.getAnswerFromId('elYYECCcCzkc', payload)
  t.is(helpers.getAnswerValue(answer), '2018-10-21');
});

test('returns correct type of value for number answers', t => {
  const answer = helpers.getAnswerFromId('Lzb4em2zDvSu', payload)
  t.is(helpers.getAnswerValue(answer), 6);
});

test('returns correct type of value for choice answers', t => {
  const answer = helpers.getAnswerFromId('nGfcKUzurcej', payload)
  t.is(helpers.getAnswerValue(answer), 'Italy');
});

test('returns correct type of value for legal answers', t => {
  const answer = helpers.getAnswerFromId('s9DPZ6OBZNkr', payload)
  t.is(helpers.getAnswerValue(answer), true);
});

test('returns correct type of value for file upload answers', t => {
  const answer = helpers.getAnswerFromId('gvK23LCKLZM6', payload)
  const url = 'https://admin.typeform.com/form/results/file/download/CEIcOU/gvK23LCKLZM6/e35015251422-41304832_283393435601513_2743585903397131013_n.jpg?key=aHR0cHM6Ly90eXBlZm9ybS1maWxlLXVwbG9hZC5zMy5hbWF6b25hd3MuY29tL0NFSWNPVS9ndksyM0xDS0xaTTYvZTM1MDE1MjUxNDIyLTQxMzA0ODMyXzI4MzM5MzQzNTYwMTUxM18yNzQzNTg1OTAzMzk3MTMxMDEzX24uanBnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUpYWVRRQzVURElTQlQ1M1ElMkYyMDE4MTAyNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAxODEwMjZUMTAzNjA2WiZYLUFtei1FeHBpcmVzPTg2NDAwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZYLUFtei1TaWduYXR1cmU9NWQ0NDE2NmNmMGM0M2YwZjgzNTgwNjFiNTY4OTI5NjNlMGE3ZmZjYTI3YTVlYmY1ZWJmNGVlOTIzZmEwYTk2NQ%3D%3D'
  t.is(helpers.getAnswerValue(answer), url);
});

test('returns correct type of value for rating answers', t => {
  const answer = helpers.getAnswerFromId('yLV97kWxKB7i', payload)
  t.is(helpers.getAnswerValue(answer), 5);
});

test('returns correct type of value for website answers', t => {
  const answer = helpers.getAnswerFromId('tr7WgzVrvqnd', payload)
  t.is(helpers.getAnswerValue(answer), 'https://www.google.com/maps/search/pizza');
});

test('returns correct type of value for website answers', t => {
  const answer = helpers.getAnswerFromId('tr7WgzVrvqnd', payload)
  t.is(helpers.getAnswerValue(answer), 'https://www.google.com/maps/search/pizza');
});
