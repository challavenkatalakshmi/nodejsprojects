//To use local version of passport
const LocalStrategy=require('passport-local').Strategy
const bcrypt=require('bcrypt')

async function initialize(passport,getUserByEmail,getUserById){

    const authernticateUser=async (email,password,done)=>{
        const user = getUserByEmail(email)
        if(user == null){
            return done(null,false,{message:'No user with that email'})
        }
        try{
            if(await bcrypt.compare(password,user.password)){
                return done(null,user)
            }else{
                return done(null,false,{message:'Password incorrect'})
            }
        }catch(e){
            return done(e)
        }
    }
    //passport gonna use LocalStrategy,This LocalStrategy contains options,usernameFIeld
    //password 
    //and after that we call/use function to return. 
    passport.use(new LocalStrategy({usernameField:'email'},authernticateUser))
    //Serialize our user to initialize session.
    passport.serializeUser((user,done)=>done(null,user.id))
    passport.deserializeUser((id,done)=>{
        return done(null,getUserById(id))
    })

}
module.exports=initialize;

