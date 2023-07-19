function minimal(a, b) {
  if (a <= b) {
    return a;
  } else {
    return b;
  }
}

function findIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}
