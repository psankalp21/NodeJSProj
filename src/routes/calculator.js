
const express = require('express');
const app = express();
const router = express.Router();
const errorHandle = require('../middlewares/numberValidation');
const calculatorController = require('../controllers/calculator');

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


router.post('/add', (req, res) => {
  const {num1,num2} = req.body

  if (!errorHandle.isNum(num1) || !errorHandle.isNum(num2)) {
    return res.status(400).json({ error: 'Only numeric input is allowed' });
  } else {
    const result = calculatorController.add(num1, num2);
    res.status(200).json({ 
        num1 : num1,
        num2 : num2,
        opeartor : "+",
        result: result });
  }
});
router.post('/sub', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
  
    if (!errorHandle.isNum(num1) || !errorHandle.isNum(num2)) {
      return res.status(400).json({ error: 'Only numeric input is allowed' });
    } else {
      const result = calculatorController.sub(num1, num2);
      res.status(200).json({ 
          num1 : num1,
          num2 : num2,
          opeartor : "-",
          result: result });
    }
  });
  router.post('/mul', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
  
    if (!errorHandle.isNum(num1) || !errorHandle.isNum(num2)) {
      return res.status(400).json({ error: 'Only numeric input is allowed' });
    } else {
      const result = calculatorController.mul(num1, num2);
      res.status(200).json({ 
          num1 : num1,
          num2 : num2,
          opeartor : "*",
          result: result });
    }
  });
  router.post('/div', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
  
    if (!errorHandle.isNum(num1) || !errorHandle.isNum(num2)) {
      return res.status(400).json({ error: 'Only numeric input is allowed' });
    } else {
      const result = calculatorController.div(num1, num2);
      res.status(200).json({ 
          num1 : num1,
          num2 : num2,
          opeartor : "/",
          result: result });
    }
  });
module.exports = router;