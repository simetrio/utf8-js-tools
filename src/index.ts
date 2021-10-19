import { encode, decode } from "./utf8";

export { encode, decode } from "./utf8";

export const UTF8: IUTF8 = {
    encode,
    decode,
};

interface IUTF8 {
    encode: (value: string) => string;
    decode: (value: string) => string;
}
