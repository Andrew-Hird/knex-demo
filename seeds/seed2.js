exports.seed = function (knex, Promise) {
  return knex('users2').del()
    .then(function () {
      return Promise.all([
        knex('users2').insert({firstName: 'Tim', lastName: 'Coomer', email: 'thcoomer@hotmail.com'}),
        knex('users2').insert({firstName: 'Andrew', lastName: 'Hird', email: 'andrew.james.hird@gmail.com'}),
        knex('users2').insert({firstName: 'Bob', lastName: 'Smith', email: 'bob@smith.com'})
      ])
    })
}
