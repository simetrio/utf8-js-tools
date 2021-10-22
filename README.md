utf8-js-tools
=========

[![NPM Version](http://img.shields.io/npm/v/utf8-js-tools.svg?style=flat)](https://www.npmjs.com/package/utf8-js-tools)

Encode/Decode text in utf8 encoding

## Demo

[Online Unicode To UTF8 Converter](https://www.olrix.net/tools/unicode-to-utf8-converter/)

## With npm

### Install

```shell
$ npm install --save utf8-js-tools
```

### Import

```javascript
import { UTF8 } from "utf8-js-tools";
```

or

```javascript
const { UTF8 } = require("utf8-js-tools");
```

## In web browsers 

```javascript
<script src="utf8.min.js"></script>
```

or

```javascript
<script src="https://cdn.jsdelivr.net/npm/utf8-js-tools@1.0.2/lib/utf8.min.js"></script>
```

## Usage

### Encode

```javascript
UTF8.encode("u")                    //    \x75
UTF8.encode("\xAF")                 //    \xC2\xAF
UTF8.encode("\u263A")               //    \xE2\x98\xBA
UTF8.encode("utf\xAF8\u263A")       //    \x75\x74\x66\xC2\xAF\x38\xE2\x98\xBA
UTF8.encode("utf¯8☺")               //    \x75\x74\x66\xC2\xAF\x38\xE2\x98\xBA
```

### Decode

```javascript
UTF8.decode("\x75")                                     //    u
UTF8.decode("\xC2\xAF")                                 //    \xAF
UTF8.decode("\xE2\x98\xBA")                             //    \u263A
UTF8.decode("\x75\x74\x66\xC2\xAF\x38\xE2\x98\xBA")     //    utf\xAF8\u263A
UTF8.decode("\x75\x74\x66\xC2\xAF\x38\xE2\x98\xBA")     //    utf¯8☺
```
