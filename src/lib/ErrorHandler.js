const errorHandler = msg => new Error(`[${global.appName} > Error: ${msg}`);

export default {
  verifyNewPerson: errorHandler('Error: verify new person'),
  verifyNewArticle: errorHandler('Error: verify new article'),
  verifyNewFriend: errorHandler('Error: verify new friend'),
  saveBlock: e => errorHandler('Error: save block: ' + e),
  loadBlock: e => errorHandler('Error: load block: ' + e),
  initBlock: e => errorHandler('Error: init block: ' + e),

};
