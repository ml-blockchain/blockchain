import SHA256 from 'crypto-js/sha256';

export default input => {
  if (typeof input === 'object')
    return SHA256(JSON.stringify(input)).toString();

  return SHA256(input).toString();
};
