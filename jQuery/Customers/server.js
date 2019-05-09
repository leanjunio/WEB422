const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(express.static('public'))

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.header("Access-Control-Max-Age", "1000");
  next();
})

const path = __dirname + '/views/';

router.use((req,res,next) => {
  console.log('/' + req.method);
  next();
})

app.get('/',(req,res) => {
  res.sendFile(path + 'index.html');
})

app.post('/api/customers/save', (req, res) => {
  console.log(`Posting customer: ${JSON.stringify(req.body)}`)

  const customer = {
    first: req.body.name,
    last: req.body.last
  }

  console.log({customer: customer})
})

app.listen(8081, () => {
  console.log(`Listening on port 8081`)
})