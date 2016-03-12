/**
 * Created by jrf on 28.06.15.
 */
var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.status(200)
    res.send('Hello World')
});

app.listen(8888);