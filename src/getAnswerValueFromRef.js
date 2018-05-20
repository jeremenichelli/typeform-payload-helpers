import getIdFromRef from './getIdFromRef';
import getAnswerFromId from './getAnswerFromId';
import getAnswerValue from './getAnswerValue';

const getAnswerValueFromRef = (ref, payload) => {
  const id = getIdFromRef(ref, payload);
  const answer = getAnswerFromId(id, payload);
  const value = getAnswerValue(answer);

  return value;
}

export default getAnswerValueFromRef;
