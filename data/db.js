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
    .select('firstName', 'lastName', 'email')
    .then(function (data) {
      return data
    })
    .catch(console.error)
}

function addUser () {
  return knex('users')
  .insert({firstName: 'inputTestName', lastName: 'ayylmao', email: 'dank@memes.com'})
  .catch(console.error)
}

function putUser () {
  return knex('users')
  .where('id', '=', 21)
  .update({
    firstName: 'BOB',
    lastName: 'SMITH'
  })
  .catch(console.error)
}

function removeUser () {
  return knex('users')
  .where('lastName', '=', 'ayylmao')
  .del()
  .catch(console.error)
}
