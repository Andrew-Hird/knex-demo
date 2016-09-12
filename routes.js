var db = require('./data/db')
var path = require('path')

module.exports = {
  readUsers: readUsers,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}

function readUsers(req, res) {
  db.fetchUsers()
    .then(function (users) {
      res.render('home', {users:users})
    })
    .catch(console.error)
}

function createUser(req, res) {
  db.addUser()
  .then(function (users) {
    res.redirect('/')
  })
  .catch(console.error)
}

function updateUser(req, res) {
  db.putUser()
  .then(function (users) {
    res.redirect('/')
  })
  .catch(console.error)
}

function deleteUser(req, res) {
  var userId = req.query.user_id
  db.removeUser(userId)
  .then(function (users) {
    res.redirect('/')
  })
  .catch(console.error)
}
