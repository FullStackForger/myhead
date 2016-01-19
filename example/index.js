'use strict'
const
  myhead = require('../'),
  path = require('path'),
  srcPath = path.resolve(__filename, '../README.md'),
  outPath = path.resolve(__filename, '../README_OUT.md')

myhead
  .readFrom(srcPath)
  .then((data) => {
    // add some data to orignal header
    data.foo = 'bar'
    // write data to output file
    return myhead.writeTo(outPath, data)
  }).then((yml) => {
    console.log(yml)
  }).catch((err) => {
    console.log(err)
  })
