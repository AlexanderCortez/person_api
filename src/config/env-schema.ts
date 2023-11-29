import { envSchema, JSONSchemaType } from 'env-schema';
import { Env } from 'types';

const schema: JSONSchemaType<Env> = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'number',
    },
  },
};

const config = envSchema({
  schema,
  dotenv: true,
});

export default config;