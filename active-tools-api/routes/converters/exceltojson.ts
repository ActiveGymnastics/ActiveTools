// import xlsx = require('xlsx');

// app.post('/exceltocsv', upload.single('classes'), (req, res) => {
//   res.json(xlsx.read(req.file))
// })

// import multer = require('multer');

// const upload:any = multer({
//   dest: 'uploads/',
//   storage: multer.memoryStorage()
// })

export function xlsxtojson (req:any, res:any, xlsxfile: File) {
  res.json('a')
}
