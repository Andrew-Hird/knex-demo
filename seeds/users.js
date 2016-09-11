exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({firstName: 'Tim', lastName: 'Coomer', email: 'thcoomer@hotmail.com'}),
        knex('users').insert({firstName: 'Andrew', lastName: 'Hird', email: 'andrew.james.hird@gmail.com'}),
        knex('users').insert({firstName: 'Bob', lastName: 'Smith', email: 'bob@smith.com'})
      ])
    })
}
