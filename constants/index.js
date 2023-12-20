"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALID_URL_REGEX = exports.RESUMES_QUERY = exports.FONTS_QUERY = exports.FILENAME_TIMESTAMP = void 0;
// React Queries
var FONTS_QUERY = exports.FONTS_QUERY = 'fonts';
var RESUMES_QUERY = exports.RESUMES_QUERY = 'resumes';

// Regular Expressions
var VALID_URL_REGEX = exports.VALID_URL_REGEX = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;

// Date Formats
var FILENAME_TIMESTAMP = exports.FILENAME_TIMESTAMP = 'DDMMYYYYHHmmss';