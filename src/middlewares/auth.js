
const adminAuth = (req, res, next) => {
  // Logic of checking if the request is authorized
  console.log("Admin Auth is getting Checked");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Access");
  } else {
    next();
  }
};


const userAuth = (req, res , next)=>{
    console.log("User Auth is getting Checked");
    const token = "abc";
    const isUserAuthorized = token === "abc";
    if(!isUserAuthorized){
        res.status(401).send("Unauthorized Access - User");
    } else {
        next();
    }   
}

module.exports = { adminAuth , userAuth};