const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const handler = require("./handler");

app.use(express.static(path.join(__dirname, '../react-client/build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.post('/addStu', handler.addStudent);
app.get('/getStu', handler.getStudent);
app.post('/deleteStu', handler.deleteStudent);
app.post('/updateStu', handler.updateStudent);
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../react-client/build/index.html')))
})

const PORT = process.env.PORT || 3000;
if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`The Port : ${PORT}`);
    });
}

module.exports = app;