const getAnswerFromId = (id, payload) => {
  let answer;

  try {
    answer = payload.answers.find(answer => answer.field.id === id);
  } catch (e) {
    console.log(`typeform helpers: couldn't get answer object with id ${ id }`)
  }

  return answer;
}

export default getAnswerFromId
