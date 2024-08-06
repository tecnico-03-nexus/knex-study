const knex = require('../config/databse');

const select = knex('users').select('id', 'first_name').where('id', '=', 3);

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERRO', e.message);
}).finally(() => {
    knex.destroy();
})