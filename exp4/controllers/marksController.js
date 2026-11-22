exports.viewMarks = (req, res) => {
    res.send('Student Marks View Page');
};

exports.getMarksById = (req, res) => {
    res.send('Marks of Student ID: ' + req.params.id);
};