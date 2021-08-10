export const randomRoundValue = (max) => Math.floor(Math.random() * max)

export const randomRgbValue = (opacity = 1, seed = 255) => {
  return `rgba(${randomRoundValue(seed)}, ${randomRoundValue(
    seed,
  )}, ${randomRoundValue(seed)}, ${opacity})`
}

export const textLengthValidation = (text, textMaxLength = 3000) => {
  let validityData = {
    valid: true,
    error: '',
  }
  if (text.length > textMaxLength) {
    validityData.valid = false
    validityData.error = 'length error'
  }

  return validityData
}
