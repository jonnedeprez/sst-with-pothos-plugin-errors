
var Article_possibleTypes = ['Article']
export var isArticle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isArticle"')
  return Article_possibleTypes.includes(obj.__typename)
}



var BaseError_possibleTypes = ['BaseError']
export var isBaseError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBaseError"')
  return BaseError_possibleTypes.includes(obj.__typename)
}



var Error_possibleTypes = ['BaseError','LengthError']
export var isError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isError"')
  return Error_possibleTypes.includes(obj.__typename)
}



var LengthError_possibleTypes = ['LengthError']
export var isLengthError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLengthError"')
  return LengthError_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
export var isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}
