const app = require('./server');
let port = process.env.PORT

if (process.env.NODE_ENV === 'development') {
    port = process.env.PORT || '3001';
} else {
    port = process.env.PORT || '3000';
}

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})