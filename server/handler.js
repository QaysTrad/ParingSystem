const db = require('./database/index.js');

exports.addStudent = (req, res) => {
    const studentName = req.body.studentName;
    const studentLevel = req.body.studentLevel;

    const student = new db.studentSchema({
        studentName,
        studentLevel
    })
    student.save((err, data) => {
        if (err)
            throw err;
        res.send(data);
    })
}

exports.getStudent = (req, res) => {
    db.studentSchema.find({}, (err, data) => {
        if (err)
            throw err;
        res.send(data);
    })
}