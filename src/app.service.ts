import {
  Injectable, 
  HttpStatus,
  HttpException,
} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  analyze(text) {
    try {
      const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
      const characterCount = text.trim().length;
      const paragraphCount = text.trim().split(/\n\s*\n/).filter(Boolean).length;
      const sentenceCount = (text.match(/[.!?]+/g) || []).length;
      const longestWord = this.findLongestWords(text);

      return {
        wordCount,
        characterCount,
        paragraphCount,
        sentenceCount,
        longestWord
      }
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }

  findLongestWords(text) {
    try {
      const paragraphs = text.trim().split(/\n\s*\n/).filter(Boolean);
      const longestWords = paragraphs.map(paragraph => {
        const words = paragraph.replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
        const maxLength = words.reduce((max, word) => Math.max(max, word.length), 0);
        const longestWordsInParagraph = words.filter(word => word.length === maxLength);
        return longestWordsInParagraph;
      });
      return longestWords;
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }
  
  countWord(text) {
    try {
      return text.trim().split(/\s+/).filter(Boolean).length;
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }

  countCharacter(text) {
    try {
      return text.trim().length;
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }

  countParagraph(text) {
    try {
      return text.trim().split(/\n\s*\n/).filter(Boolean).length;
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }

  countSentence(text) {
    try {
      return (text.match(/[.!?]+/g) || []).length;
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }
}
