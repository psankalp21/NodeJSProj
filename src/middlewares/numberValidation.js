const Joi = require('joi');
const schema = Joi.number().required();

function isNum(x)
{
    const { error } = schema.validate(x);
    if (error) {
    return false;
    }
    else{
        return true;
    }
}

module.exports={
    isNum
};