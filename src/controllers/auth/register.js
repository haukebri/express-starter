exports.registerController = (req, res) => {
  const json = req.body
  return res.json(json)
}