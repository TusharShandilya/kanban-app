export const cardEditFormUtils = {
  isValid: (text, textMaxLength = 3000) => {
    let validityData = {
      valid: true,
      error: '',
    }
    if (text.length > textMaxLength) {
      validityData.valid = false
      validityData.error = 'Max length exceeded'
    }

    return validityData
  },
}
