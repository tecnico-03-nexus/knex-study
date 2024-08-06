const knex = require('../config/databse');

const select = knex('profiles');

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERRO', e.message);
}).finally(() => {
    knex.destroy();
})
