function toNumber(value: string) {
  const num = parseFloat(value);
  return typeof num !== 'number' || Number.isNaN(num) ? 0 : num;
}

export default toNumber;
