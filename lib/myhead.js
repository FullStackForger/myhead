'use strict'
const
  fs = require('fs'),
  path = require('path'),
  yml = require('yamljs'),
  headPrefix = '```yml',
  headPostfix = '```',
  headRegex = /^\n*`{3}yml\s*[\r\n?|\n]((.*[\r\n?|\n])+?)`{3}/g,
  myhead = {}

module.exports = myhead

myhead.readFrom = function (filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, (err, source) => {
      if (err) return reject(err)
      resolve(myhead.parse(source.toString()))
    })
  })
}

myhead.parse = function (source) {
  // resetting 'sticky' index (regex with /g flag)
  headRegex.lastIndex = 0
  let execObj = headRegex.exec(source)
  let ymlObj = (execObj) ? execObj[1] : null
  let jsObj =  (ymlObj) ? yml.parse(ymlObj) : null
  return jsObj
}

myhead.writeTo = function (filepath, data) {
  let ymlData = yml.stringify(data, 10, 2)
  //ymlData.replace(/\n\s*$/, '\n')
  return new Promise((resolve, reject) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        fs.closeSync(fs.openSync(filepath, 'w'));
      } else if (stats.isDirectory()) {
        return reject(new Error(filepath + 'is a directory'))
      }

      fs.readFile(filepath, (err, source) => {
        if (err) return reject(err)

        let content = ''
        let header = headPrefix + '\n' + ymlData + headPostfix
        let jsObj = myhead.parse(source.toString())
        let sourceStr = source.toString()

        content =  jsObj
          ? sourceStr.replace(headRegex, header)
          : header + source

        fs.writeFile(filepath, content, function (err) {
          if (err) reject(err);
          resolve(ymlData)
        });
      })
    });
  })
}
