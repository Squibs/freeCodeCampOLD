# [freeCodeCamp](https://github.com/Squibs/freeCodeCamp#freecodecamp)

## [Front End Development Certification](https://github.com/Squibs/freeCodeCamp/tree/master/Front%20End%20Development%20Certification#intermediate-algorithms) (Go Back)

<img src="" height="400" alt="Screenshot of algorithms"/>

### Advanced Algorithms

<em>INSERT COMPLETION DATE HERE</em>

WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS

<img src="../../Images/icon-javascript.png" height="48" alt="JavaScript Icon"/>

---

#### My notes for these algorithms:

<b>Advanced Algorithms</b>

1. [General Notes](#general-notes)

##### General Notes
WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS

---

##### Validate US Telephone Numbers

```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const telephoneCheck = function (str) {
  return /^1*\s?(\s?\(\d{3}\)\s?|\d{3}-?\s?)\d{3}\s?-?\d{4}$/g.test(str);
};
```

(validate-telephone.js)

This challenge was all bout using `regular expressions`. Two sources made this possible to figure out on my own:
- [A Regular Expressions reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [regex101](https://regex101.com/)

Using these I was able to work my way through finding a correct match for the required, passed phone numbers/strings.

1. `^1*` Selects zero or more occurrences of (number/digit/integer) `1` at the start of a string.
2. `\s?` Indicates a possible whitespace after the zero or more selected `1`
3. `(\s?\(\d{3}\)\s?|\d{3}-?\s?)`
	1. `(\s?` The `(` groups together two expressions, `(\s?` Indicates a possible whitespace before
	2. `\(` Selects an open parenthesis
	3. `\d{3}` Selects a set of three digits
	4. `\)` Selects a close parenthesis
	5. `\s?` Indicates a possible whitespace after
	6. `|` Indicates an alternative expression; why there was a beginning parenthesis
	7. `\d{3}` Selects a set of three digits
	8. `-?` Indicates a possible hyphen
	9. `\s?)` Indicates a possible whitespace, `)` closes the grouped expressions
4. `\d{3}` Selects a set of three digits
5. `\s?` Indicates a possible whitespace
6. `-?` Indicates a possible hyphen
7. `\d{4}$` Selects a set of four digits, that is at the end of a string

Together this selects a possible area code that can only be 1, two sets of 3 digits, and a set of 4 digits. The first set of 3 digits can have parentheses around it or not, and both must be present. There can be spaces or hyphens between each group of digits (including the area code), but if the first set of 3 digits has parentheses it cannot have a hyphen after it.

The basic cod solution provided is pretty similar to mine:
```JavaScript
function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}
```

While the Intermediate Code Solution, Checks for a lot more things using regular expressions:
```JavaScript
function telephoneCheck(str) {
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return re.test(str);
}
telephoneCheck("555-555-5555");
```

freeCodeCamp states that this example, the intermediate code solution, is an example of a very comprehensive and robust solution. And that in such cases it might be much better and easier to implement this library [libphonenumber](https://github.com/googlei18n/libphonenumber).

In the end I feel I completed this challenge in a way quite similar to the way freeCodeCamp would be expecting someone to finish this challenge at this stage of progress through the Front End Development Certification.

In the future I would probably split the regular expression up into different variables and them combine them later to keep things neater and give more explaination of what is happening; and to make changes to the expression easier. This could also mean in longer strands of regex, previously variables could be used again instead of rewriting what may be already written if everything is formatted in a logical way.

---

##### Record Collection

```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const updateRecords = function (id, prop, value) {
if (!collection[id][prop]) {
	if (prop === 'tracks') {
	collection[id][prop] = [];
	} else {
	collection[id][prop] = value;
	}
}
if (value === '') {
	delete collection[id][prop];
} else if (Array.isArray(collection[id][prop])) {
	collection[id][prop].push(value);
} else {
	collection[id][prop] = value;
}
return collection;
};
```

(record-collection.js)

This challenge felt out of place. The entire time I was thinking there is probably going to be a better way to handle this; however, going to the provided solutions for this problem after completing my solution, I was left slightly confused. The provided solution, only a basic solution is available for this challenge, is much like mine. A lot of if statements, and nested if statements:

```JavaScript
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}
```

This challenge didn't take very long at all to complete and I almost feel like it should not be in the advanced algorithm challenges. I know freeCodeCamp has a beta site up for a future restructure, and I have gone through some of it before returning back to the released version of freeCodeCamp; hopefully this is something that they will be fixing (or perhaps it already is fixed). Nonetheless I do now know how to work with objects just a little more.

I now know how to add a property and how to delete a property. Adding a property is simply just setting a wanted property to a value with an `=` operator. And deleting a property is as simple as using the `delete` operator and listing the `object.property` or `object[varForProp]`.

---

##### Symmetric Difference

```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const sym = function (...argument) {
  let args = argument.map(value => value.sort().join(''));

  return args.reduce((prev, cur) => {
    const symmilar = [];
    for (let i = 0; i < cur.length; i += 1) {
      if (!prev.includes(cur.charAt(i)) && !symmilar.join('').includes(cur.charAt(i))) {
        symmilar.push(cur.charAt(i));
      }
    }
    for (let i = 0; i < prev.length; i += 1) {
      if (!cur.includes(prev.charAt(i)) && !symmilar.join('').includes(prev.charAt(i))) {
        symmilar.push(prev.charAt(i));
      }
    }
    return symmilar.sort().join('');
  }).split('').map(value => parseInt(value, 10));
};
```

(symmetric-difference.js)

I had to redo this challenge several times. It definitely helps to understand what you are trying to accomplish before jumping in and finding an incorrect solution. Initially I grouped every argument into a single array, flattened the array, sorted the array, and the removed all duplicate values `(1, 1, 2, 2, 3, 4, 5, 5) => (3, 4)`; as this is what I believed this challenge was asking for. This was not the case, as I soon found out after trying to submit my answer. I then went back and modified my original answer several times, before finally giving into the fact that I had no idea what the challenge was asking for.

I ended up going through each case and breaking down what was happening step by step, until I figured out the answer. Below is an example of what I did to understand what was happening for this challenge:

```
[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3] should return [2, 3, 4, 6, 7]
[3, 3, 3, 2, 5]     △     [2, 1, 5, 7]     =     [1, 3, 7]
          •  •             •     •
      [1, 3, 7]     △     [3, 4, 6, 6]     =     [1, 4, 6, 7]
          •                •
   [1, 4, 6, 7]     △     [1, 2, 3]        =     [2, 3, 4, 6, 7]
    •                      •
```

After going through the first few of cases for this challenge in the same manner as the above, I understood what was happening to get the desired results. Having examples written out like the above for each case was also useful for debugging my code.

Looking at the provided solutions, I feel as though I provided an adequate solution for this algorithm challenge. Of course as usual my solution could definitely be improved, but it does do what this challenge is asking for.

---