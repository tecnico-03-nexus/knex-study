exports.up = function(knex) {
  return knex.schema.withSchema('balanco_hidrico').createTable('profiles', (table) => {
    table.increments('id').primary();
    table.text('bio');
    table.text('description');
    table.integer('user_id').unique().unsigned();
    table.foreign('user_id')
        .references('id')
        .inTable('balanco_hidrico.users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

  })
};

exports.down = function(knex) {
    return knex.schema.withSchema('balanco_hidrico').dropTable('profiles');
};
