 var sessionStatus = function sessionstatus(req,res,next){
    if(req.session.userId){
        next();
}else{
    res.redirect('/login');
};
};
module.exports = sessionStatus;