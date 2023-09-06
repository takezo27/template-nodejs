const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('*', (req, res) => {
    console.log({xForwardedFor: req.header('x-forwarded-for'), remoteAddress: req.connection.remoteAddress, ip: req.ip})
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
