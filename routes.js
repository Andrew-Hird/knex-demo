var db = require('./data/db')
var path = require('path')

module.exports = {
  displayUsers: displayUsers,
}

function displayUsers(req, res) {
  db.fetchUsers()
    .then(function (users) {
      res.render('home', {users:users})
    })
    .catch(console.error)
}
