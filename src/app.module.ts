import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://biancasm:iKkX2WKtgjCu4u7@cluster-nestjs-crud.03vp6.mongodb.net/test'),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
