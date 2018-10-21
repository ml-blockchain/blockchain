const errorHandler = msg => new Error(`Error: ${msg}`);

export default {
  verifyNewPerson: errorHandler('Error: verify new person'),
  verifyNewArticle: errorHandler('Error: verify new article'),
  verifyNewFriend: errorHandler('Error: verify new friend')
};
