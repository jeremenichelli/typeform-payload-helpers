const getIdFromRef = (ref, payload) => {
  let id;

  try {
    id = payload.definition.fields.find(field => field.ref === ref).id;
  } catch (e) {
    console.log(`typeform helpers: couldn't get id from ref ${ ref }`)
  }

  return id;
}

export default getIdFromRef
