const knex = require('../config/databse');

const selectBetween = knex('users')
    .select('*')
    .whereBetween('id', [4, 5])
    .orWhereBetween('id', [1, 2]);

selectBetween.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERRO', e.message);
}).finally(() => {
    knex.destroy();
})