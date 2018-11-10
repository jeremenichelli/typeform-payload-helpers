import getIdFromRef from './get-id-from-ref';
import getAnswerFromId from './get-answer-from-id';
import getAnswerValue from './get-answer-value';

const getAnswerValueFromRef = (ref, payload) => {
  let value

  try {
    const id = getIdFromRef(ref, payload);
    const answer = getAnswerFromId(id, payload);
    value = getAnswerValue(answer);
  } catch (e) {
    console.log(`typeform helpers: couldn't get answer value with ref ${ref}`)
  }
  
  return value;
}

export default getAnswerValueFromRef;
