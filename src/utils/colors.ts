export const generateRandomColor = () => {
  return `#${Math.random().toString(16).substr(-6)}`;
};

export const generateRandomColors = (numberOfColors = 1) => {
  const colors = [];
  while (colors.length < numberOfColors) {
    colors.push(generateRandomColor());
  }
  return colors;
};
