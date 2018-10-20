import SHA256 from 'crypto-js/sha256';

export default input => SHA256(input).toString();
