import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
    private openai: OpenAI;

    constructor(private configService: ConfigService) {
        this.openai = new OpenAI({
           // apiKey: this.configService.get<string>('OPENAI_API_KEY'),
           apiKey: this.configService.get<string>('TOGETHER_API_KEY'),
           baseURL: 'https://api.together.xyz/v1',
        });
    }

    async getChatCompletion(prompt: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model: 'meta-llama/Llama-3-8b-chat-hf',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt },
            ],
        });

        return response.choices[0].message.content!;
    }
}
