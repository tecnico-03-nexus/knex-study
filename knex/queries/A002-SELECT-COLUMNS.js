const knex = require('../config/databse');

const select = knex('users').select('email', 'first_name');

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERRO', e.message);
}).finally(() => {
    knex.destroy();
})
