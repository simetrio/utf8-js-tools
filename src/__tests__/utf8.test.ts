import { UTF8 } from "../index";

test("Encode", () => {
    expect(UTF8.encode("u")).toBe("\x75");
    expect(UTF8.encode("\xAF")).toBe("\xC2\xAF");
    expect(UTF8.encode("\u263A")).toBe("\xE2\x98\xBA");
    expect(UTF8.encode("utf\xAF8\u263A")).toBe("\x75\x74\x66\xC2\xAF\x38\xE2\x98\xBA");
    expect(UTF8.encode("utf¯8☺")).toBe("\x75\x74\x66\xC2\xAF\x38\xE2\x98\xBA");
});

test("Decode", () => {
    expect(UTF8.decode("\x75")).toBe("u");
    expect(UTF8.decode("\xC2\xAF")).toBe("\xAF");
    expect(UTF8.decode("\xE2\x98\xBA")).toBe("\u263A");
    expect(UTF8.decode("\x75\x74\x66\xC2\xAF\x38\xE2\x98\xBA")).toBe("utf\xAF8\u263A");
    expect(UTF8.decode("\x75\x74\x66\xC2\xAF\x38\xE2\x98\xBA")).toBe("utf¯8☺");
});
