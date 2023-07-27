import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'ep-morning-moon-398098-pooler.us-east-1.postgres.vercel-storage.com',
        port: 5432,
        username: 'default',
        password: 'K9FE3WkAGQrP',
        database: 'verceldb',
        entities: [
            __dirname + '/../**/*.entity.{js,ts}',
        ],
        synchronize: true,
        ssl: true,
      });

const a = dataSource.initialize()

      return a;
    },
  },
];
