module.exports = {
    client: 'postgresql',
    connection: {
      host: '192.168.1.103',  // Pode usar '127.0.0.1' se preferir
      port: 5432,
      user: 'postgres',
      password: 'Nexus243',
      database: 'test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
