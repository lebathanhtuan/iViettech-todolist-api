// import 'dotenv/config';
// import pg from 'pg';

// const { Pool } = pg;

// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'postgres',
//   password: 'postgres',
//   database: 'todolist_db',
//   max: 10,
//   idleTimeoutMillis: 30000,
// });

// export default pool;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'todolist_db', // database name
  'postgres', // username
  'postgres', // password
  {
    host: 'localhost', // host
    port: 5432, // port
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);

await sequelize.authenticate();

export default sequelize;

