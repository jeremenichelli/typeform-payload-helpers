import getAnswerValue from './get-answer-value';
import getAnswerFromId from './get-answer-from-id';

const getAnswerValueFromId = (id, payload) => {
  let value

  try {
    const answer = getAnswerFromId(id, payload);
    value = getAnswerValue(answer);
  } catch (e) {
    console.log(`typeform helpers: couldn't get answer value with id ${id}`)
  }

  return value;
}

export default getAnswerValueFromId;
