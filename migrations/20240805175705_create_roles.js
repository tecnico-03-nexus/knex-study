exports.up = function(knex) {
    return knex.schema.withSchema('balanco_hidrico').createTable('roles', (table) => {
        table.increments('id').primary();
        table.string('name', 150);  
    }) 
};

exports.down = function(knex) {
    return knex.schema.withSchema('balanco_hidrico').dropTable('roles');

};

