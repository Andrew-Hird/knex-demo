var path = require('path')
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./dev.sqlite3"
  }
})

module.exports = {
  fetchUsers: fetchUsers
}

// Method to show all current users
function fetchUsers () {
  return knex('users')
    .select('firstName', 'lastName', 'email')
    .then(function (data) {
      return data
    })
    .catch(console.error)
}
