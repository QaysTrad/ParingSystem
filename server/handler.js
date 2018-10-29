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

exports.deleteStudent = (req, res) => {
    const id = req.body._id;
    db.studentSchema.findOneAndRemove({ _id: id }, (err, data) => {
        if (err)
            throw err;
        res.send(data)

    })
}

exports.updateStudent = (req, res) => {
    const id = req.body._id;
    const studentLevel = req.body.studentLevel;
    db.studentSchema.findOneAndUpdate({ _id: id }, { $set: { studentLevel } }, (err, data) => {
        if (err)
            throw err;
        res.send(data);
    })
}