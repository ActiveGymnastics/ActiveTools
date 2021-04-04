import { xlsxtojson } from './converters/exceltojson'
import multer = require('multer');

const upload:any = multer({
  dest: 'uploads/',
  storage: multer.memoryStorage()
})

module.exports = function (app: any) {
  app.get('/converters', function (req: any, res: any) {
    res.json({ message: 'Active Tools', ver: '0.0.1' })
  })
  app.get('/converters/test', function (req: any, res: any) {
    res.json({ message: 'Active Tools', ver: '0.0.1' })
  })

  app.post('/converters/xlsx-json/', function (req: any, res:any, upload:any) {
    res.json(xlsxtojson(upload))
  })

  // other routes..
}
