
export const environment = {
  production: true,
  db: {
    type: 'postgres',
    port: 5432,
    database: 'nest-whisper',
    host: 'localhost',
    username: 'postgres',
    password: 'Fiorelo03',
    synchronize: true
  }
};