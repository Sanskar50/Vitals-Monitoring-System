const express = require('express');
const path = require('path');
const quescontroller = require('./controllers/model')

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.post('/ask', quescontroller.model);

app.use('/vitals',(req,res,next)=>{
    res.render('tabs/vitals',{
        pageTitle:'Vitals',
    });
})

app.use('/ml-model',(req,res,next)=>{
    res.render('tabs/ml-model',{
        pageTitle:'ML-Model',
    });
})

app.use('/about',(req,res,next)=>{
    res.render('tabs/about',{
        pageTitle:'About',
    });
})

app.use('/',(req,res,next)=>{
    res.render('tabs/vitals',{
        pageTitle:'Home Page',
    });
})


app.listen(3000);
