import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [OpenaiController],
  providers: [OpenaiService,ConfigService]
})
export class OpenaiModule {}
