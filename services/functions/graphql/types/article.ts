import { builder } from "../builder";
import { ArticleEntity, ArticleEntityType } from "@/core/article";

const ErrorInterface = builder.interfaceRef<Error>('Error').implement({
  fields: (t) => ({
    message: t.exposeString('message'),
  }),
});

builder.objectType(Error, {
  name: 'BaseError',
  interfaces: [ErrorInterface],
});

class LengthError extends Error {
  minLength: number;

  constructor(minLength: number) {
    super(`string length should be at least ${minLength}`);

    this.minLength = minLength;
    this.name = 'LengthError';
  }
}

builder.objectType(LengthError, {
  name: 'LengthError',
  interfaces: [ErrorInterface],
  fields: (t) => ({
    minLength: t.exposeInt('minLength'),
  }),
});

const ArticleType = builder
  .objectRef<ArticleEntityType>("Article")
  .implement({
    fields: t => ({
      id: t.exposeID("articleID"),
      title: t.exposeString("title"),
      url: t.exposeString("url")
    })
  });

builder.queryFields(t => ({
  getArticle: t.field({
    type: ArticleType,
    args: {
      id: t.arg.string({ required: true })
    },
    errors: { types: [Error] },
    resolve: async (_, { id }) => {
      const result = await ArticleEntity.get(id)
      if (!result) {
        throw new Error('Not found');
      }
      return result;
    }
  })
}));

builder.mutationFields(t => ({
  createArticle: t.field({
    type: ArticleType,
    args: {
      title: t.arg.string({ required: true }),
      url: t.arg.string({ required: true })
    },
    resolve: async (_, { title, url }) => ArticleEntity.create(title, url)
  })
}));
