export const randomRoundValue = (max) => Math.floor(Math.random() * max);

export const randomRgbValue = (opacity = 1, seed = 255) => {
  return `rgba(${randomRoundValue(seed)}, ${randomRoundValue(
    seed
  )}, ${randomRoundValue(seed)}, ${opacity})`;
};
