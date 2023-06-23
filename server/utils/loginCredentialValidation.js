import Joi from 'joi';

export function loginCredentialValidation(body){
    const { names, phone} = body
     const schema = Joi.object({
        name:Joi.string().max(20).required(),
        phone:Joi.string().max(11).min(11).required(),
     })

    return schema.validate({name:names, phone});
}