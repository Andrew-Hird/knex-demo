exports.up = function(knex, Promise) {
    return knex.schema.createTable('users2', function(table){
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.string('email')
      table.timestamps()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users2')
};
