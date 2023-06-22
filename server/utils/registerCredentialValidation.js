import Joi from 'joi';

export function registerCredentialValidation(body){
    // const {firstname, lastname, email, password} = body
    // console.log('hello: '+body)
     const schema = Joi.object({
        name:Joi.string().max(20).required(),
        phone:Joi.string().max(11).min(11).required(),
        month:Joi.string().max(11).required(),
        day: Joi.number().required(),
        year: Joi.number().integer().min(1900).max(2023)
     })

    return schema.validate({
        name:body.name,
        phone:body.phone,
        month:body.month,
        day: body.day,
        year: body.year
        });
}