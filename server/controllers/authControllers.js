
import {registerCredentialValidation} from '../utils/registerCredentialValidation.js';
import {loginCredentialValidation} from '../utils/loginCredentialValidation.js';
import {User} from '../Model/User.js';



export const loginController = async (req, res)=>{

   try{
         // login credential validation
         const {error} = loginCredentialValidation(req.body);
         if(error) {
            return res.status(400).json({'status':'error', 'message': error.message});
         }
         
         const user =  await User.findOne({email:req.body.email});
         if(!user){
            return res.status(400).json({'status':'error', 'message': "Email is not registered"});
         }

         //compare the login password with the one in the db
          const compareHashed =  await bcrypt.compare(req.body.password, user.password);
          if(!compareHashed){
             return res.status(400).json({'status':'error', 'message': "user password incorrect"});
          }
          return res.status(200).json({'status':'success', 'message': "login successfully", user});
          
   }catch(err){
      console.log(err)
     return res.status(500).json({status:'error', message: "login failed"});
   }

}



export const registerController = async (req, res)=>{
   const body = req.body;
   // console.log(body)
  
   const {error} =  registerCredentialValidation(body);
   if(error){
      // console.log(error)
      return res.status(400).json({status:'error', message:error.message})
   }

   const phone =  await User.findOne({phone:body.phone});

   if(phone){
      return res.status(400).json({status:'error', message:'phone already in use'})
   }

   const name =  await User.findOne({name:body.name});
      if (name) {
         return res.status(400).json({status:'error', message:'name(s) already exist'})
      }
     
        const new_user = await new User({
         name:body.name, 
         phone:body.phone, 
         month:body.month ,
         day:body.day ,
         year:body.year ,
        })
        
        await new_user.save().catch(err=>{
         if(err){
            return res.status(500).json({status:'error',  message:'register fails'})
         }else{
            console.log('saved')
            return res.status(200).json({status:'success',  message:'register successfully'});
         }
        });
   
   }


