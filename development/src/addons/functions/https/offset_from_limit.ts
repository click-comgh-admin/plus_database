export const offsetFromLimit = (limit: number, offset: number) => {
  if (offset === 1) {
    offset = 0;
  } else {
    offset = limit * offset;
  }

  return offset;
}