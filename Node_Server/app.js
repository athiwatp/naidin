var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function(req, res){
  res.send('Yo yo hello world')
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/getall', function(req, res) {
  var jsonObj = {
    cart: [],
    products: [
      { id: 'HR0001',
        name: 'Harry Potter and the Philosopher\'s Stone',
        price: 100.00,
        amount: 1,
        imgUrl: 'static/imgs/1.jpg'
      },
      { id: 'HR0002',
        name: 'Harry Potter and the Chamber of Secrets',
        price: 100.00,
        amount: 1,
        imgUrl: 'static/imgs/2.jpg'
      },
      { id: 'HR0003',
        name: 'Harry Potter and the Prisoner of Azkaban',
        price: 100.00,
        amount: 1,
        imgUrl: 'static/imgs/3.jpg'
      },
      { id: 'HR0004',
        name: 'Harry Potter and the Goblet of Fire',
        price: 100.00,
        amount: 1,
        imgUrl: 'static/imgs/4.jpg'
      },
      { id: 'HR0005',
        name: 'Harry Potter and the Order of the Phoenix',
        price: 100.00,
        amount: 1,
        imgUrl: 'static/imgs/5.jpg'
      },
      { id: 'HR0006',
        name: 'Harry Potter and the Half-Blood Prince',
        price: 100.00,
        amount: 1,
        imgUrl: 'static/imgs/6.jpg'
      },
      { id: 'HR0007',
        name: 'Harry Potter and the Deathly Hallows',
        price: 100.00,
        amount: 1,
        imgUrl: 'static/imgs/7.jpg'
      }]
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(jsonObj));
})

app.listen(3333, function () {
  console.log('Example app listening on port 3000!');
})