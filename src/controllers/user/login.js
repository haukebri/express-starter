
/**
 * Echo endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const loginController = (req, res) => {
  const json = req.body
  res.json(json)
}

export default loginController