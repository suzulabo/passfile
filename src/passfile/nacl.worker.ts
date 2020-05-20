import nacl from 'tweetnacl';

export const workerEncrypt = async (
  publicKey: ArrayBuffer,
  secretKey: ArrayBuffer,
  data: ArrayBuffer
) => {
  const nonce = nacl.randomBytes(nacl.box.nonceLength);
  const encrypted = nacl.box(
    new Uint8Array(data),
    nonce,
    new Uint8Array(publicKey),
    new Uint8Array(secretKey)
  );
  return { nonce: nonce, data: encrypted };
};

export const workerDecrypt = async (
  data: ArrayBuffer,
  nonce: ArrayBuffer,
  publicKey: ArrayBuffer,
  secretKey: ArrayBuffer
) => {
  const decrypted = nacl.box.open(
    new Uint8Array(data),
    new Uint8Array(nonce),
    new Uint8Array(publicKey),
    new Uint8Array(secretKey)
  );
  return decrypted;
};
