import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('text-analyze')
  analyze(@Query() query) {
    return this.appService.analyze(query.text);
  }

  @Get('count/words')
  wordCount(@Query() query) {
    return this.appService.countWord(query.text);
  }

  @Get('count/characters')
  countCharacter(@Query() query) {
    return this.appService.countCharacter(query.text);
  }

  @Get('count/paragraphs')
  countParagraph(@Query() query) {
    return this.appService.countParagraph(query.text);
  }

  @Get('count/sentences')
  countSentence(@Query() query) {
    return this.appService.countSentence(query.text);
  }

  @Get('longestwords')
  findLongestWords(@Query() query) {
    return this.appService.findLongestWords(query.text);
  }
}
