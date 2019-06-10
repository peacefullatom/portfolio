/**
 * convert number to string and pad result with zeros to match mask '00'
 * @param n value to be padded
 */
export const pad = (n: number): string => fill(n.toString(), '00');

/**
 * pad number in string format to match given mask
 * @param s number in string format
 * @param mask mask to be applied, default is '0000'
 */
export const fill = (s: string, mask?: string): string => {
  mask = mask || '0000';
  return (mask + s).slice(-mask.length);
};
