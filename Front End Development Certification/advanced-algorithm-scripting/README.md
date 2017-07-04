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
const telephoneCheck = function (str) {
  return /^1*\s?(\s?\(\d{3}\)\s?|\d{3}-?\s?)\d{3}\s?-?\d{4}$/g.test(str);
};
```

(validate-telephone.js)

This challenge was all bout using ```regular expressions```. Two sources made this possible to figure out on my own:
- [A Regular Expressions reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [regex101](https://regex101.com/)

Using these I was able to work my way through finding a correct match for the required, passed phone numbers/strings.

1. ```^1*``` Selects zero or more occurrences of (number/digit/integer) ```1``` at the start of a string.
2. ```\s?``` Indicates a possible whitespace after the zero or more selected ```1```
3. ```(\s?\(\d{3}\)\s?|\d{3}-?\s?)```
	1. ```(\s?``` The ```(``` groups together two expressions, ```(\s?``` Indicates a possible whitespace before
	2. ```\(``` Selects an open parenthesis
	3. ```\d{3}``` Selects a set of three digits
	4. ```\)``` Selects a close parenthesis
	5. ```\s?``` Indicates a possible whitespace after
	6. ```|``` Indicates an alternative expression; why there was a beginning parenthesis
	7. ```\d{3}``` Selects a set of three digits
	8. ```-?``` Indicates a possible hyphen
	9. ```\s?)``` Indicates a possible whitespace, ```)``` closes the grouped expressions
4. ```\d{3}``` Selects a set of three digits
5. ```\s?``` Indicates a possible whitespace
6. ```-?``` Indicates a possible hyphen
7. ```\d{4}$``` Selects a set of four digits, that is at the end of a string

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