// tslint:disable:no-bitwise

export function encode(unicodeText: string): string {
    unicodeText = unicodeText.replace(/\r\n/g, "\n");
    let utf8Text = "";

    for (let i = 0; i < unicodeText.length; i++) {
        const char = unicodeText.charCodeAt(i);

        if (char < 128) {
            utf8Text += String.fromCharCode(char);
        } else if (char > 127 && char < 2048) {
            utf8Text += String.fromCharCode((char >> 6) | 192);
            utf8Text += String.fromCharCode((char & 63) | 128);
        } else {
            utf8Text += String.fromCharCode((char >> 12) | 224);
            utf8Text += String.fromCharCode(((char >> 6) & 63) | 128);
            utf8Text += String.fromCharCode((char & 63) | 128);
        }
    }

    return utf8Text;
}

export function decode(utf8Text: string): string {
    let unicodeText = "";
    let i = 0;
    let char1 = 0;
    let char2 = 0;
    let char3 = 0;

    while (i < utf8Text.length) {
        char1 = utf8Text.charCodeAt(i);

        if (char1 < 128) {
            unicodeText += String.fromCharCode(char1);
            i++;
        } else if (char1 > 191 && char1 < 224) {
            char2 = utf8Text.charCodeAt(i + 1);
            unicodeText += String.fromCharCode(((char1 & 31) << 6) | (char2 & 63));
            i += 2;
        } else {
            char2 = utf8Text.charCodeAt(i + 1);
            char3 = utf8Text.charCodeAt(i + 2);
            unicodeText += String.fromCharCode(
                ((char1 & 15) << 12) | ((char2 & 63) << 6) | (char3 & 63),
            );
            i += 3;
        }
    }

    return unicodeText;
}
