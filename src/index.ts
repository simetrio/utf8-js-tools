import { encode, decode } from "./utf8";

export { encode, decode } from "./utf8";

export const UTF8: IUTF8 = {
    encode,
    decode,
};

interface IUTF8 {
    encode: (unicodeText: string) => string;
    decode: (utf8Text: string) => string;
}
