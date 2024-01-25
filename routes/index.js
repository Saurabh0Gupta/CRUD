var express = require('express');
var router = express.Router();
const taskModel=require('./users')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const tasks=await taskModel.find()
  res.render('index',{tasks});
});
router.post('/create',async function(req, res, next) {
  const task=await taskModel.create({
    task:req.body.task,
  })
  res.redirect('/');
});
router.get('/delete/:id', async(req,res)=>{
  const task=await taskModel.findOneAndDelete({_id:req.params.id})
  res.redirect('/')
})
router.get('/update/:id', async function(req, res, next) {
  const tasks=await taskModel.findOne({_id:req.params.id})
  res.render('update',{tasks});
});

router.post('/updated/:id', async (req,res)=>{
  const tasks=await taskModel.findOneAndUpdate({_id:req.params.id},{task:req.body.task})
  res.redirect('/');
})

module.exports = router;
