const getAnswerValue = (answer) => {
  const { type } = answer
  const value = answer[ type ]

  if (type === 'choices')
    return value.labels
  
  if (type === 'choice')
    return value.label
  
  return value
}

export default getAnswerValue;
