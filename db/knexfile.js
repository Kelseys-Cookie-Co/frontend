module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER,
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
