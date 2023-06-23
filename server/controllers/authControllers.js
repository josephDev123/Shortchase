
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
         
         
         const name =  await User.findOne({name:req.body.names});
         //check whether the name is register already
         if(!name){
            return res.status(400).json({'status':'error', 'message': "name is not registered"});
         }

         const phone =  await User.findOne({phone:req.body.phone});
         //check whether the phone is register already
         if(!phone){
            return res.status(400).json({'status':'error', 'message': "phone is not registered"});
         }

         return res.status(200).json({'status':'success', 'message': "Login successful"});

   }catch(err){
      console.log(err)
     return res.status(500).json({status:'error', message: "login failed: "+ err.message});
   }

}



export const registerController = async (req, res)=>{
   try {
   const body = req.body;
   // console.log(body)
  
   const {error} =  registerCredentialValidation(body);
   if(error){
      // console.log(error)
      return res.status(400).json({status:'error', message:error.message})
   }

   //check whether the phone number is already in use
   const phone =  await User.findOne({phone:body.phone});

   if(phone){
      return res.status(400).json({status:'error', message:'phone already in use'})
   }

     //check whether the name is already in use
   const name =  await User.findOne({name:body.name});
      if (name) {
         return res.status(400).json({status:'error', message:'name(s) already exist'})
      }
     
        const new_user = new User({
         name:body.name, 
         phone:body.phone, 
         month:body.month ,
         day:body.day ,
         year:body.year ,
        })
        
        await new_user.save();
          return res.status(200).json({status:'success',  message:'register successfully'});
      }
        catch (error) {
         return res.status(500).json({status:'error',  message:'register fails: '+error.message})
        }
   
   }


