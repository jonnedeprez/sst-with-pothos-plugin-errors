import SchemaBuilder from "@pothos/core";
import ErrorsPlugin from '@pothos/plugin-errors';

export const builder = new SchemaBuilder({
  plugins: [ErrorsPlugin],
  errorOptions: {
    defaultTypes: [Error],
  },
});

builder.queryType({});
builder.mutationType({});
