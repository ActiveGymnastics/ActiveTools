module.exports = function (app: any) {
  app.get('/converters', function (req: any, res: any) {
    res.json({ message: 'Active Tools', ver: '0.0.1' })
  })
  app.get('/converters/test', function (req: any, res: any) {
    res.json({ message: 'Active Tools', ver: '0.0.1' })
  })

  // other routes..
}
