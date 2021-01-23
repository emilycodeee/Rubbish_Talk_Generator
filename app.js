const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbishtalk = require('./rubbish_talk')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// define defauldata
const defauldata = [
  {
    'career': 'engineer',
    'title': '工程師',
    'avatar': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5668/angry-developer.jpg'
  },
  {
    'career': 'designer',
    'title': '設計師',
    'avatar': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5667/angry-designer.jpg'
  },
  {
    'career': 'entrepreneur',
    'title': '創業家',
    'avatar': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5669/angry-founder.jpg'
  }
]


app.get('/', (req, res) => {
  res.render('index', { defauldata: defauldata })
})

app.post('/', (req, res) => {

  const selectedItem = req.body.career
  const selectedArray = defauldata.find(item => {
    return item.career === selectedItem
  })
  const rubbishtalk = generateRubbishtalk(selectedArray)

  res.render('index', { defauldata, rubbishtalk })
})


app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`)
})