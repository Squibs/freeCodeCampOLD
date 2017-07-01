# [freeCodeCamp](https://github.com/Squibs/freeCodeCamp#freecodecamp)

## [Front End Development Certification](https://github.com/Squibs/freeCodeCamp/tree/master/Front%20End%20Development%20Certification#intermediate-algorithms) (Go Back)

<img src="" height="400" alt="Screenshot of algorithms"/>

### Intermediate Algorithms

<em>Completed INSERT DATE HERE</em>

description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description 

<img src="../../Images/icon-javascript.png" height="48" alt="JavaScript Icon"/>

---

#### My notes for these algorithms:

<b>Intermediate Algorithms</b>

1. [General Notes](#general-notes)
2. [Sum All Numbers in a Range](#sum-all-numbers-in-a-range)

##### General Notes
words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words

---

##### Sum All Numbers in a Range
```JavaScript
// CONDENSED VERSION - NO NOTES OR CONSOLE OUTPUTS
const sumAll = function (arr) {
  const start = Math.min(arr[0], arr[1]);
  const end = Math.max(arr[0], arr[1]);
  const newArr = [];

  for (let i = start; i <= end; i += 1) {
      newArr.push(i);
  }

  const sum = newArr.reduce((acc, cur) => acc + cur, 0);

return sum;
};
```

(sum-numbers-range.js)

I believe the point of this algorithm was to help understand the use of the reduce method. However I do not believe I have a full understanding of this method after coming up with my solution using this method. There are several other ways to go about solving this algorithm. One method which would have solved this even easier, which I probably should have remembered better from high school, is using summation (((max + min)(max - min + 1))/2).

---

##### Diff Two Arrays
```JavaScript
// CONDENSED VERSION - NO NOTES OR CONSOLE OUTPUTS
const diffArray = function (arr1, arr2) {
  const newArr = arr1.concat(arr2).filter(cur => !arr1.includes(cur) || !arr2.includes(cur));
  return newArr;
};
```

(diff-two-arrays.js)

This one was challenging for me. The last algorithm had me thinking I should use the reduce method for the solution of this. I got to the point where I could filter out the duplicates, but I was missing a way to remove both numbers if they were duplicates. In the end I ended up having to seek additional answers outside of the method documentation. That's where I learned about the includes method.

---

##### Roman Numeral Converter
```JavaScript
// CONDENSED VERSION - NO NOTES OR CONSOLE OUTPUTS
const convertToRoman = function (num) {
  let number = [];

  const romanNumeralsOne = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const romanNumeralsTen = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const romanNumeralsHundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const romanNumeralsThousand = ['M', 'MM', 'MMM'];

  for (let i = 0; i < num.toString().length; i += 1) {
    number.push(num.toString().charAt(i));
  }

  if (number.length > 3) {
    number[0] = romanNumeralsThousand[(number[0] - 1)];
    number[1] = romanNumeralsHundred[(number[1] - 1)];
    number[2] = romanNumeralsTen[(number[2] - 1)];
    number[3] = romanNumeralsOne[(number[3] - 1)];
    console.log(number);
  } else if (number.length > 2) {
    number[0] = romanNumeralsHundred[(number[0] - 1)];
    number[1] = romanNumeralsTen[(number[1] - 1)];
    number[2] = romanNumeralsOne[(number[2] - 1)];
    console.log(number);
  } else if (number.length > 1) {
    number[0] = romanNumeralsTen[(number[0] - 1)];
    number[1] = romanNumeralsOne[(number[1] - 1)];
    console.log(number);
  } else {
    number[0] = romanNumeralsOne[(number[0] - 1)];
    console.log(number);
  }

  number = number.filter(val => val !== undefined).join('');

  return number;
}
```

(roman-num-converter.js)

While I did come up with a solution for this algorithm, I believe I took the most unoptimal route in doing so. Taking a look at freeCodeCamp's basic code solution for this algorithm, I definitely could have done better. The more optimal way would to have just gone off of an array that goes off of values that are one behind introducing the next numeral letter (IX, XL); and decimalValues for these numerals.

---

##### Wherefore art thou
```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const whatIsInAName = function (collection, source) {
  const keys = Object.keys(source);

  let arr = collection.filter((curObject) => {
    for (let i = 0; i < Object.keys(source).length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(curObject, keys[i]) || curObject[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });

  return arr;
};
```

(wherefore-art-thou.js)

This one again took me a while to get to a point where I was understanding how I should go about finding a solution. At the start I was looping through collection and source, while source was converted to an array of keys, with two for loops. Then I was comparing the keys in the currently selected object in collection with those of in source; however I could not find a way to do this for the sources that had multiple keys/values. I had peek at the answer to find a better solution than what I was trying to create. Using the filter method was the correct choice for this algorithm, much like it was for the previous two algorithms. Using a for loop with the filter method allows for the correct arguments for the if statement to be made and allow the correct object properties to be filtered out.

---

##### Wherefore art thou
```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const myReplace = function (str, before, after) {
  let string = str.split(' ');

  string = string.map((cur) => {
    if (cur.toLowerCase() === before.toLowerCase()) {
      if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        return after.charAt(0).toUpperCase() + after.slice(1);
      }
      return after.charAt(0).toLowerCase() + after.slice(1);
    }
    return cur;
  });

  string = string.join(' ');

  return string;
};
```

(search-and-replace.js)

For this algorithm, since the previous algorithms were mainly working with arrays, I figured I should do the same here. I converted the passed string to an array and used the map method to iterate through the created array replacing the current value with the passed after variable if it was equal to the before value. The replaced value was checked for capitalization before replacing so the value replacing the before value would keep the same casing.

Checking the provided solutions for this algorithm, I could have done this a bit simpler by using the string methods indexOf() and replace rather than coverting everything to an array and using array methods.

---

##### Pig Latin
```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const translatePigLatin = function (str) {
  let pigLatin = str;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const ay = 'ay';
  const way = 'way';

  for (let k = 0; k < str.length; k += 1) {
    for (let i = 0; i < vowels.length; i += 1) {
      if (str.toLowerCase().search(vowels[i]) === 0) {
        pigLatin = str + way;
        return pigLatin;
      }

      if (str.charAt(k) === vowels[i]) {
        pigLatin = str.substr(k) + str.slice(0, k) + ay;
        return pigLatin;
      }
    }
  }

  pigLatin += ay;
  return pigLatin + ay;
};
```

(pig-latin.js)

I itterate through the string and a vowels array and compare the two. If the first letter is a vowel just add way to the end of the string. If the word contains a vowel somewhere else slice up to the vowel and put it to the end of the string then add ay to the end of that. If there is no vowel in the word, just ad ay to the end of the word.

After looking at the provided solutions for this, I'm learning that I take the long way around for most things right now. There are better solutions for itterating through strings and arrays and accomplishing what I'm doing in a more simplified / less lines of code way. I could use regex instead of an array to store the vowels and use the match method to search for those letters in the string.

---

##### DNA Pairing
```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const pairElement = function (str) {
  const pairs = { T: ['T', 'A'], A: ['A', 'T'], C: ['C', 'G'], G: ['G', 'C'] };

  const result = str.split('').map(curObj => pairs[curObj]);

  return result;
};
```

(dna-pairing.js)

I started off by putting each pair (AT TA CG GC) as an array in an array [[A,T],[T,A],[C,G],[G,C]]. Since I have been working with APIs in the previous intermediate front end development projects, I decided to turn the array of arrays into a format I'm now familiar with JSON / object. I then split the passed string into an array and used the map method to itterate through the created array. I used the currently selected object/value of the map method to return the correct DNA pair using the previously created object.

---

##### Missing Letters
```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const fearNotLetter = function (str) {
  const string = str.split('').map(curObj => curObj.charCodeAt(0));
  let count = str.charCodeAt(0);

  string.filter((curObj) => {
    if (curObj === count) {
      count += 1;
      return true;
    }
    return false;
  });

  if (count === str.charCodeAt(str.length - 1) + 1) {
    return undefined;
  }

  return String.fromCharCode(count);
};
```

(missing-letters.js)

I believe this might be one of the worst solutions I have come up with yet. After looking at the solutions and comparing to mine, I feel as if I'm going about everything incorrectly. I'm definitely using use the filter method wrong in this case. I should have used the map function to iterrate through instead of using filter to iterate through the created array from using split on the passed string.

<strong>Note from later:</strong>
After looking back at this again compared to the intermediate code solution for this algorithm, I was on the right track with ```const string = str.split('').map(curObj => curObj.charCodeAt(0));```

This is the provided intermediate code solution:

```JavaScript
function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}
```

If I would have used the index along with the currently selected object in the map method (or ```letter``` in the above solution), I think I could have gotten a solution very similar to this. Instead I decided to iterate again through the array using filter, instead of just using the map method I already used.

---

##### Boo who
```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const booWho = function (bool) {
if (bool === true || bool === false) {
  return true;
}
return false;
};
```

(boo-who.js)

I found this one to be quite easy; but of course looking at the provided solutions, I could have made this much simpler. The better solutions would have been: 

```JavaScript
return typeof bool === 'boolean';
```

If I want to find out if a variable matches a specific type of variable I can use the ```typeof``` operator. Then I can use something similar for any type of variable.

Type | Result
--- | ---
```Undefined``` | "undefined"
```Null``` | "object" (see below)
```Boolean``` | "boolean"
```Number``` | "number"
```String``` | "string"
```Symbol``` (New in ECMAScript 2015) | "symbol"
```Host object``` (provided by the JS environment) | <em>Implementation-dependent</em>
```Function object``` (implements [[Call]] in ECMA-262 terms) | "function"
Any other object | "object"

---

##### Sorted Union

```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
```

(sorted-union.js)


---