# Notesy
[![Version](https://img.shields.io/badge/version-1.0.1-brightgreen.svg)](https://github.com/seanjmurray/notesy)
[![Build Status](https://travis-ci.com/seanjmurray/notesy.svg?branch=master)](https://travis-ci.com/seanjmurray/notesy)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://github.com/seanjmurray/notesy/blob/master/LICENSE)
## Installation 

To install the app run the following:

```
$ npm i -g @seanjmurray/notesy
```


## Usage

To enter a note run the following

```
$ notes --add "This is the note" --category "category"
```
To view notes
```
$ notes --list (optional --category "category")
```
To delete notes
```
$ notes --delete "id"
```

### Flags
- --add or -a  --category or -c to add a note
- --list or -l to view notes optional category flag 
- --delete or -d to delete a note

## Testing

```
$ npm test
```
Jest will test all functionality 

```
$ npm run lint
```
Checks for linting errors

## Changelog
- 2020-08-10 Add files and start README
- 2020-08-11 Refactor to ES6 classes and add tests
- 2020-08-12 Add CRUD to note class with mongoose
- 2020-08-13 Refactor CRUD to collection file and publish V1