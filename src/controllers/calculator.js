const calculatorServices = require('../services/calculator');

function add(num1,num2)
{
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    const result = calculatorServices.add(n1,n2);
    return(result)
}
function sub(num1,num2)
{
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    const result = calculatorServices.sub(n1,n2);
    return(result)
}
function mul(num1,num2)
{
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    const result = calculatorServices.mul(n1,n2);
    return(result)
}
function div(num1,num2)
{
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    const result = calculatorServices.div(n1,n2);
    return(result)
}

module.exports={
    add,sub,mul,div
};