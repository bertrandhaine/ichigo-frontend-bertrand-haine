import { generateRandomColor, generateRandomColors } from "./colors";

test("should generate random color each time it's called", () => {
  const randomColor = generateRandomColor();
  const randomColor2 = generateRandomColor();

  expect(randomColor).not.toEqual(randomColor2);
});

test("should generate random color each time when called 100 times", () => {
  let randomColor;
  let randomColor2;

  for (let i = 0; i < 100; i++) {
    randomColor = generateRandomColor();
    randomColor2 = generateRandomColor();

    // we still have a low possibility to get the same color,
    // so we check it ONE time, and try to get another color.
    // If it's still the same, then our random generator can be improved
    if (randomColor === randomColor2) {
      randomColor2 = generateRandomColor();
    }

    expect(randomColor).not.toEqual(randomColor2);
  }
});

test("should generate exact number of wanted colors", () => {
  expect(generateRandomColors(12).length).toEqual(12);
});
