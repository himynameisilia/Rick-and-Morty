const router = require("express").Router();
const Added = require('../models/added');
const User = require('../models/user');

router.get('/', async (req, res) => {
  const { user } = req.session;
  const list = (await User.findOne({ email: user.email }).populate('added')).added;
  res.render('profile', {
    list,
  })
})

router.delete('/', async (req, res) => {
  const { user } = req.session;
  await Added.findByIdAndDelete(req.body.id)
  const userList = await User.findOne({ email: user.email })
  userList.added = userList.added.filter(el => el != req.body.id)
  await userList.save()
  res.send('deleted')
})


module.exports = router;
