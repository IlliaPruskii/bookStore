export default (req: any, res: any, next: any) => {
  if(!req.session.isLoggedIn) {
    return res.send('You dont have permission to this route')
  }
  next()
}