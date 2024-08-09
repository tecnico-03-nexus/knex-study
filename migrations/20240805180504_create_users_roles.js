
exports.up = function(knex) {
    return knex.schema.withSchema('balanco_hidrico').createTable('users_roles', (table) => {
        table.integer('user_id').unsigned();
        table.foreign('user_id')
            .references('id')
            .inTable('balanco_hidrico.users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('role_id').unsigned();
        table.foreign('role_id')
            .references('id')
            .inTable('balanco_hidrico.roles')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.primary(['user_id', 'role_id']);
      })
};

exports.down = function(knex) {
    return knex.schema.withSchema('balanco_hidrico').dropTable('users_roles');
};
