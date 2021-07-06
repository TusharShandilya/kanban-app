export const randomRoundValue = (max) => Math.floor(Math.random() * max);

export const randomRgbValue = (opacity = 1) => {
  return `rgba(${randomRoundValue(255)}, ${randomRoundValue(
    255
  )}, ${randomRoundValue(255)}, ${opacity})`;
};
