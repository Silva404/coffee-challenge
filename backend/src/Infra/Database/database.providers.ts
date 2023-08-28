import { Coffee } from '@/Domain/Coffee';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [Coffee],
        synchronize: true,
        entitySkipConstructor: true,
      });

      return dataSource.initialize();
    },
  },
];
