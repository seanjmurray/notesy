# Notesy
[![Version](https://img.shields.io/badge/version-1.1.0-brightgreen.svg)](https://github.com/seanjmurray/notesy)
[![Build Status](https://travis-ci.com/seanjmurray/notesy.svg?branch=master)](https://travis-ci.com/seanjmurray/notesy)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://github.com/seanjmurray/notesy/blob/master/LICENSE)
![Coverage](././coverage/badge-lines.svg)
## Installation 

To install the app run the following:

```
$ git clone https://github.com/seanjmurray/notesy.git
$ cd notesy
$ npm i
```

## Testing

```
$ npm test
```
Jest will test all functionality 

```
$ npm run lint
```
Checks for linting errors

## Usage

To enter a note run the following

```
$ node . --add "This is the note"
```

### Flags
- --add or -a to add a note

## Changelog
- 2020-08-10 Add files and start README
- 2020-08-11 Refactor to ES6 classes and add tests