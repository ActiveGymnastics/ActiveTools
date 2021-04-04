import xlsx = require('xlsx');

// app.post('/exceltocsv', upload.single('classes'), (req, res) => {
//   res.json(xlsx.read(req.file))
// })

import multer = require('multer');

const upload:any = multer({
  dest: 'uploads/',
  storage: multer.memoryStorage()
})

module.exports = function (app: any) {
  app.post('/converters/xlsx-json', upload.single('classes'), function (req: any, res: any) {
    if (!req.file) {
      res.json({ error: 'no file supplied' })
    }
    res.json(xlsx.read(req.file.buffer))
  })

  // other routes..
}
