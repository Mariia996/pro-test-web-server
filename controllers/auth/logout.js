const { users: service } = require('../../services')

const logout = async (req, res, next) => {
  const { _id } = req.user
  try {
    await service.update(_id, { ...req.user, token: null })
    res.json({
      status: 'success',
      code: 200,
      message: 'Logout success',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = logout
