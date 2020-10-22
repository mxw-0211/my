const fetch = require('node-fetch')
const cheerio = require('cheerio')
const fs = require('fs')
fetch('https://wenku.baidu.com/view/8a775e544631b90d6c85ec3a87c24028915f85e2.html?fr=search-1_income7')
  .then(res => res.text())
  .then(body => {
    const $ = cheerio.load(body)
    const imgArr = Array.from($('.ppt-image-wrap img'))
    Array.from($('.ppt-image-wrap img')).forEach((item, index) => {
      // console.log(index, item.attribs.src, item.attribs['data-src'])
      fetch(item.attribs.src || item.attribs['data-src']).then(res => res.buffer()).then(buffer => {
        fs.createWriteStream(`./imgs/${index}.jpeg`).write(buffer)
      })
    })
  })