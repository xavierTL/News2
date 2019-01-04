export const capitliseFirst = word => {
  if (word.length) {
    const out = word.split('')[0].toUpperCase() + word.slice(1).toLowerCase();
    return out;
  }
};

export const formatArticleData = arrayOfData => {
  return `posted by "${arrayOfData[0]}", ${arrayOfData[1]}, ${
    arrayOfData[2]
  } votes, ${arrayOfData[3]} comments.`;
};
