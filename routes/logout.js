const router = require("express").Router();

router.get('/', async (req, res) => {
  if (req.session.user) {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.redirect('/');
  }
})

module.exports = router;
