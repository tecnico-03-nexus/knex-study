const knex = require('../config/databse');

const data = [
    {
        first_name: 'Airton',
        last_name: 'Senna',
        email: 'as@gmail.com',
        password_hash: '123',
        salary: '24',
    },
    {
        first_name: 'Mussum',
        last_name: 'Senna',
        email: 'ms@gmail.com',
        password_hash: '12453',
        salary: '2458',
    },
    {
        first_name: 'Rafa',
        last_name: 'Borges',
        email: 'rb@gmail.com',
        password_hash: '156423',
        salary: '12524',
    },
    {
        first_name: 'Marta',
        last_name: 'Oliveira',
        email: 'mo@gmail.com',
        password_hash: '456123',
        salary: '123524',
    },
];

const insert = knex('users').insert(data);

console.log(insert.toString());
console.log(insert.toSQL().toNative());

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERRO', e.message);
}).finally(() => {
    knex.destroy();
})