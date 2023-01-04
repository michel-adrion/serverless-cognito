import { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger';
import middy from '@middy/core';

const logger = new Logger({
  logLevel: 'INFO',
  serviceName: 'shopping-cart-api',
});

export const hello = middy(async (event: any) => {
  // logger.info('This is an INFO log with some context');

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
  };
}).use(injectLambdaContext(logger));
