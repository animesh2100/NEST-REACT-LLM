import { Controller, Post, Body } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
     constructor(private readonly openaiService: OpenaiService) {}

    @Post('ask')
    async ask(@Body('prompt') prompt: string) {
        const answer = await this.openaiService.getChatCompletion(prompt);
        return { answer };
    }
}
