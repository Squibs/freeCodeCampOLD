console.log('Check if a value is classified as a boolean primitive. Return true or false \n');

const booWho = function (bool) {
  if (bool === true || bool === false) {
    return true;
  }

  return false;
};

booWho(null); // should return false.
booWho(true); // should return true.
booWho(false); // should return true.
booWho([1, 2, 3]); // should return false.
booWho([].slice); // should return false.
booWho({ a: 1 }); // should return false.
booWho(1); // should return false.
booWho(NaN); // should return false.
booWho('a'); // should return false.
booWho('true'); // should return false.
booWho('false'); // should return false.
