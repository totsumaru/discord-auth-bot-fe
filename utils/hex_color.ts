export const numberToHexColor = (code: number): string => {
  let hex = code.toString(16);
  while (hex.length < 6) {
    hex = "0" + hex;
  }
  return "#" + hex;
}
