import { Module } from '@nestjs/common';
import { Web3Service } from './web3.service';
import { ConfigModule } from '@common/config/config.module';

@Module({
  imports: [
    ConfigModule,
  ],
    providers: [Web3Service],
})
export class Web3Module { }
