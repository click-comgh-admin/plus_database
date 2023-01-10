import { Buffer } from 'buffer';

export const base64Encode = (obj: any, removeTrail: boolean = false) => {
  const rawEncode = Buffer.from(obj).toString('base64');
  if (removeTrail) {
    // @ts-ignore
    return rawEncode.replaceAll("=", '');
  }
  return rawEncode;
}
export const base64Decode = (str: string) => {
  return Buffer.from(str, 'base64').toString();
}