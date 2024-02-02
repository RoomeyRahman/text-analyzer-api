<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Text Analyzer API

This is a NestJS application that provides APIs to analyze text. It offers functionality to count words, sentences, paragraphs, characters, and find the longest words in the text.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Endpoints

- **text-analyze**: Returns detailed analysis including words, sentences, paragraphs, characters, and longest words.
    - Method: GET
    - Endpoint: `/text-analyze`

- **count/words**: Returns the count of words in the text.
    - Method: GET
    - Endpoint: `/count/words`

- **count/sentences**: Returns the count of sentences in the text.
    - Method: GET
    - Endpoint: `/count/sentences`

- **count/paragraphs**: Returns the count of paragraphs in the text.
    - Method: GET
    - Endpoint: `/count/paragraphs`

- **count/characters**: Returns the count of characters in the text.
    - Method: GET
    - Endpoint: `/count/characters`

- **longestwords**: Returns the longest words in the text.
    - Method: GET
    - Endpoint: `/longestwords`

## Usage

You can use tools like cURL, Postman, or any HTTP client to interact with the API endpoints provided above.

### Example:

```bash
curl http://localhost:3000/text-analyze
```

## Stay in touch

- Author - [Md Ataur Rahman Bhuiyan](https://roomey.me)


## License

[MIT licensed](LICENSE).
