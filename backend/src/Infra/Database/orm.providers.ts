import { Coffee } from '@/Domain/Coffee';
import { DataSource } from 'typeorm';

export const ormProviders = [
  {
    provide: 'COFFEE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Coffee),
    inject: ['DATA_SOURCE'],
  },
];
