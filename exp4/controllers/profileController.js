exports.viewProfile = (req, res) => {
    res.send('Student Profile View Page');
};

exports.getProfileById = (req, res) => {
    res.send('Student Profile ID: ' + req.params.id);
};