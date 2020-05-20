export const concatArray = (...arrays: Uint8Array[]) => {
  const len = arrays.reduce((acc, array) => {
    return acc + array.byteLength;
  }, 0);
  const result = new Uint8Array(len);
  let offset = 0;
  for (const array of arrays) {
    result.set(array, offset);
    offset += array.byteLength;
  }
  return result;
};
