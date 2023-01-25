const capitalize = (string) => {
  if (string.match(/[0-9]/)) {
    throw new Error('invalid string');
  }
  return string.split('')[0].toUpperCase() + string.slice(1);
};
export default capitalize;
