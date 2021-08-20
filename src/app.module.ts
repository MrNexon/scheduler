import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VkIoModule } from './vk-io/vk-io.module';

@Module({
  imports: [VkIoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
