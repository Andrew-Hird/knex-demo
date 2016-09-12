var path = require('path')
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./dev.sqlite3"
  }
})

module.exports = {
  fetchUsers: fetchUsers,
  addUser: addUser,
  putUser: putUser,
  removeUser: removeUser
}

// Method to show all current users
function fetchUsers () {
  return knex('users')
    .select('id', 'firstName', 'lastName', 'email')
    .then(function (data) {
      return data
    })
    .catch(console.error)
}

function addUser (data) {
  return knex('users')
  .insert({firstName: data.firstName, lastName: data.lastName, email: data.email})
  .catch(console.error)
}

function putUser () {
  return knex('users')
  .where('id', '>', 30)
  .update({
    lastName: 'bob'
  })
  .catch(console.error)
}

function removeUser (id) {
  return knex('users')
  .where('id', '=', id)
  .del()
  .catch(console.error)
}
