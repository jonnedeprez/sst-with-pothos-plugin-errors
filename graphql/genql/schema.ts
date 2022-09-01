import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    ID: string,
    String: string,
    Int: number,
    Boolean: boolean,
}

export interface Article {
    id: Scalars['ID']
    title: Scalars['String']
    url: Scalars['String']
    __typename: 'Article'
}

export interface BaseError {
    message: Scalars['String']
    __typename: 'BaseError'
}

export type Error = (BaseError | LengthError) & { __isUnion?: true }

export interface LengthError {
    message: Scalars['String']
    minLength: Scalars['Int']
    __typename: 'LengthError'
}

export interface Mutation {
    createArticle: Article
    __typename: 'Mutation'
}

export interface Query {
    getArticle: Article
    __typename: 'Query'
}

export interface ArticleRequest{
    id?: boolean | number
    title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BaseErrorRequest{
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ErrorRequest{
    message?: boolean | number
    on_BaseError?: BaseErrorRequest
    on_LengthError?: LengthErrorRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LengthErrorRequest{
    message?: boolean | number
    minLength?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    createArticle?: [{title: Scalars['String'],url: Scalars['String']},ArticleRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    getArticle?: [{id: Scalars['String']},ArticleRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Article_possibleTypes: string[] = ['Article']
export const isArticle = (obj?: { __typename?: any } | null): obj is Article => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isArticle"')
  return Article_possibleTypes.includes(obj.__typename)
}



const BaseError_possibleTypes: string[] = ['BaseError']
export const isBaseError = (obj?: { __typename?: any } | null): obj is BaseError => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBaseError"')
  return BaseError_possibleTypes.includes(obj.__typename)
}



const Error_possibleTypes: string[] = ['BaseError','LengthError']
export const isError = (obj?: { __typename?: any } | null): obj is Error => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isError"')
  return Error_possibleTypes.includes(obj.__typename)
}



const LengthError_possibleTypes: string[] = ['LengthError']
export const isLengthError = (obj?: { __typename?: any } | null): obj is LengthError => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLengthError"')
  return LengthError_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}


export interface ArticlePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ArticleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface BaseErrorPromiseChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface BaseErrorObservableChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface ErrorPromiseChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ErrorObservableChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface LengthErrorPromiseChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    minLength: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface LengthErrorObservableChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    minLength: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface MutationPromiseChain{
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>})
}

export interface MutationObservableChain{
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>})
}

export interface QueryPromiseChain{
    getArticle: ((args: {id: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>})
}

export interface QueryObservableChain{
    getArticle: ((args: {id: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>})
}