import getAnswerValue from './get-answer-value';

const getAnswerValueFromId = (id, payload) => {
  let value

  try {
    const answer = payload.answers.find(answer => answer.field.id === id);
    value = getAnswerValue(answer);
  } catch (e) {
    console.log(`typeform helpers: couldn't get answer value with id ${id}`)
  }

  return value;
}

export default getAnswerValueFromId;
