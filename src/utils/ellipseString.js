export const ellipseString = (string, maxChar) => {
  let newString = string;

  if (newString.length > maxChar) {
    newString = newString.substring(0, maxChar) + "...";
    return newString;
  }

  return string;
};
