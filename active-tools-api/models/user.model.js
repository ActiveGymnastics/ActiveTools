module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    fname: {
      type: Sequelize.STRING
    }
  })

  return User
}
