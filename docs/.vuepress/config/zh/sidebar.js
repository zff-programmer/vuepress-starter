let fs = require('fs')
let fileSource = '../../..' // 这里的路径取的是相对路径，取绝对路径不生效
let inputArr = []
const gen = function* (filename) {
  const data = yield getFilenameAndJointRoute(filename)
}
let g = gen()
function getGenPromise(gen, data) {
  return gen.next(data).value
}
function getFilenameAndJointRoute(filename) {
  return new Promise((resolve, reject) => {
    fs.readdir(fileSource + filename, 'utf8', (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
  // .then(data => {
  //   data.forEach(item => {
  //     if (/.md/.test(item)) {
  //       inputArr.push(filename + item)
  //     }
  //   })
  //   return inputArr
  // })
}
console.log(getGenPromise(g))
module.exports = {
  // 配置侧边栏部分
  '/zh/comps/': [
    '/zh/comps/',
    '/zh/comps/button.md',
    '/zh/comps/input.md',
    '/zh/comps/textarea.md',
    '/zh/comps/select.md',
    '/zh/comps/radio.md',
    '/zh/comps/checkbox.md',
  ],
  '/zh/guide/': ['/zh/guide/', '/zh/guide/design.md'],
}
