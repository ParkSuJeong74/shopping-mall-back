import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validation } from './commons/utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : process.env.NODE_ENV === 'development'
          ? '.development.env'
          : '.env',
      isGlobal: true,
      validationSchema: validation,
    }),
  ],
})
export class AppModule {}
