export const autentication = (req,res,next)=>{
    const token = req.headers.cookie;
    
    if(token){
        next()
    }else{
        res.render("signin",{message:""})
    }
    
}