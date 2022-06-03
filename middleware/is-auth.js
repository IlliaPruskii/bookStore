export default (req, res, next) => {
  if(!req.session.isLoggedIn) {
    return res.send('You dont have permission to this route')
  }
  next()
}