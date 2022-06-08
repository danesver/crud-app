const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ["dist/*/*/*.entity{.ts,.js}"],
    autoLoadEntities: true,
    // ssl: { rejectUnauthorized: false },
    synchronize: true,
    seeds: ["dist/*/*/*.seed{.ts,.js}"] ,
    factories: ["src/marketplace/factories/*{.ts,.js}"],
  // logging: true
};
