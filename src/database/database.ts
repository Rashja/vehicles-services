import { MongooseModule } from '@nestjs/mongoose';

export class Database {
  static features<T>(name:string,schema:T) {
    return {
      User: MongooseModule.forFeature([{ name, schema }]),
    }[name];
  }

  static root() {
    return MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.l0syj.mongodb.net/vehicles-db?retryWrites=true&w=majority`,
    );
  }
}
