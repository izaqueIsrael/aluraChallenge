require('@testing-library/jest-dom');

const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

Object.assign(global.navigator, {
  clipboard: {
    writeText: jest.fn().mockResolvedValue(''),
    readText: jest.fn().mockResolvedValue(''),
  },
});