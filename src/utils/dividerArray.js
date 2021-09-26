export const dividerArray = (divider, arrayToEach, arrayPushed) => {
  for (let index = 0; index < arrayToEach.length; index += divider) {
    arrayPushed.push(arrayToEach.slice(index, index + divider));
  }
};
