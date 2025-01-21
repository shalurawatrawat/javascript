export function getRandomNumber(min, max) {
    if (min > max) {
      throw new Error("Min should be less than or equal to Max");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}