exports.up = function(knex) {
  return knex.schema.withSchema('balanco_hidrico').createTable('users', (table) => {
    table.increments('id').primary();
    table.string('first_name', 150).notNullable();
    table.string('last_name', 150);
    table.string('email', 255).notNullable().unique();
    table.string('password_hash', 255).notNullable().unique();
    table.decimal('salary', 15, 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.withSchema('balanco_hidrico').dropTable('users');
};
