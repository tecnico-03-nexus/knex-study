const knex = require('../config/databse');

const data = [
    {
        bio: 'Lorem Ipsum 1',
        description: 'Beef chicken pork bacon chuck shortloin sirloin shank bresaola hamburger id aliquip beefribs pancetta, cupidatat occaecat reprehenderit ribeye enim commodo aliqua est biltong ',
        user_id: 4,
    },
    {
        bio: 'Lorem Ipsum 2',
        description: 'Beef chicken bacon chuck shortloin sirloin shank bresaola hamburger id aliquip beefribs pancetta, cupidatat occaecat reprehenderit ribeye enim commodo aliqua est biltong ',
        user_id: 5,
    },
    {
        bio: 'Lorem Ipsum 3',
        description: 'Beef  pork bacon chuck shortloin sirloin shank bresaola hamburger id aliquip beefribs pancetta, cupidatat occaecat reprehenderit ribeye enim commodo aliqua est biltong ',
        user_id: 3,
    },
    {
        bio: 'Lorem Ipsum 4',
        description: 'Beef chicken pork bacon chuck shortloin sirloin shank bresaola hamburger id aliquip beefribs pancetta, cupidatat occaecat reprehenderit ribeye enim commodo aliqua est biltong ',
        user_id: 2,
    },

];

const insert = knex('profiles').insert(data);

console.log(insert.toString());
console.log(insert.toSQL().toNative());

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERRO', e.message);
}).finally(() => {
    knex.destroy();
})