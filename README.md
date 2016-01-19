# myhead
**(m)arkdown (y)aml (head)er**

Small library reading and writing headers, yaml flavored markdown code blocks into markdown files

Inspired by hexo headers, designed for assimilator blogging engine.

## Installation
```
npm install myhead --save
```
and then from your js script
```
const myhead = require('myhead')
```
## Methods
### `readFrom(filePath)`

Returns promise, resolving with either `null` value if header doesn't exist, or `yml` data parsed to an `object`.
```
myhead.read('path/to/some/file')
  .then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log('error', err)
  })
```

## `writeTo(filePath, data)`

Converts `data` to `yml` format and writes it into a target file located at `filePath`. Method returns promise witch resolves with yaml data string parsed from `data` object passed into a function.

**Important:** If target file already has a header it will be overwritten.

```
myhead.read('path/to/some/file', { title: 'some title' })
  .then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log('error', err)
  })
```

## `parse(source)`

Synchronous helper method. It takes markdown source string as a parameter and returns either `null` value if header doesn't exist, or `yml` data parsed to an `object`.

Lets pretend you have a `.md` file that starts with yaml code block as follows.
```
```yml
title: some arbitrary title
tags: tag1, tag2, tag3
``````

You could then read file content and pass it into a `parse(source)` method.

```
console.log(parse(source))
```

It will return object with `title` and `tags` properties.
```
{
  title: 'some arbitrary title'
  tags: ['tag1', 'tag2', 'tag3']
}
```
