
exports.up = function(knex) {
    return knex.schema.raw('CREATE SCHEMA balanco_hidrico');};

exports.down = function(knex) {
    return knex.schema.raw('DROP SCHEMA balanco_hidrico CASCADE');
};
