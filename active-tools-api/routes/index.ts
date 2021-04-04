import * as fs from 'fs'

module.exports = function (app: any) {
  fs.readdirSync(__dirname).forEach(function (file) {
    if (file === 'index.ts' || file.substr(file.lastIndexOf('.') + 1) !== 'ts') { return }
    const name = file.substr(0, file.indexOf('.'))
    require('./' + name)(app)
  })
}
