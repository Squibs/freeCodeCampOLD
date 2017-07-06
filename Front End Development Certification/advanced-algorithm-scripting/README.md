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

##### Exact Change

```JavaScript
// CONDENSED VERSION - NO CONSOLE OUTPUTS
const checkCashRegister = function (price, cash, cid) {
  const change = [];
  let owe = Number(cash - price).toFixed(2);
  let worth = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY'];
  const cashRegister = {
    PENNY: {
      value: 0.01,
      amount: 0,
    },
    NICKEL: {
      value: 0.05,
      amount: 0,
    },
    DIME: {
      value: 0.10,
      amount: 0,
    },
    QUARTER: {
      value: 0.25,
      amount: 0,
    },
    ONE: {
      value: 1.00,
      amount: 0,
    },
    FIVE: {
      value: 5.00,
      amount: 0,
    },
    TEN: {
      value: 10.00,
      amount: 0,
    },
    TWENTY: {
      value: 20.00,
      amount: 0,
    },
    'ONE HUNDRED': {
      value: 100.00,
      amount: 0,
    },
  };

  cid.forEach((e) => {
    const currency = cashRegister[e[0]];
    currency.amount = Math.ceil(e[1] / currency.value);
  });

  worth = worth.filter((e) => {
    const currency = cashRegister[e];
    if (currency.value < owe && currency.amount !== 0) {
      let amount = 0;
      while (currency.value <= owe && currency.amount !== 0) {
        amount += 1;
        currency.amount -= 1;
        owe = Number(owe).toFixed(2) - Number(currency.value).toFixed(2);
      }
      change.push([e, parseFloat(Number(amount * currency.value).toFixed(2))]);
    }
    if (currency.amount === 0) { return false; }
    return true;
  });

  if (owe === 0 && worth.length === 0) { return 'Closed'; }
  if (owe > 0) { return 'Insufficient Funds'; }

  return change;
};
```

(exact-change.js)

For this challenge I wanted to work with an object, because there have not been too many challenges where they were used; and every challenge has been using arrays and their methods.

The passed cash register <em>inventory</em> or the amount of demonimations the cash register has, was in a two dimensional array. Converting this array to values in my `cashRegister` object is where I learned about some <em>experimental features</em> dealing with objects in JavaScript. I learned about `Object.entries()` and `Object.values()`. These two methods allow for iterating through objects without having to use a for loop such as `for (var key in obj)` or `for (const key of Object.keys(obj))`. Instead you would be able to do:
```JavaScript
Object.entries(obj).forEach(([key, value]) => {
  console.log('do things other than a console log')
});
```

Or use `Object.values` similarly; or even combine the two in some way.

I avoided using these for now. Instead I opted for using what I already knew in conjunction with my `cashRegister` object. My object stores each denomination/currency, their value, and the amount of each denomination passed to the function.

After storing any denomination related information, I use the `filter()` method to go through a `worth` array I created which is holding the denomination names in order from highest value to lowest value. I had to create this array, because I opted to not use experimental object methods. Iterating through this array I check if the currency value is equel to or less than that of what is owed and if the currency amount is not 0. 

If the checks pass I have a while loop that counts the amount of a currency that will be given to the customer, subtracts one of the currency from the cash register and updates the amount still owed to the customer. This loop is controlled by if the currency value is less than or equal to the amount owed and if the currency amount is not 0.

Once that loop finishes the change type and amount is pushed to the change variable in an array. And finally if the currency amount is equal to 0, return false to remove it from the worth array. Otherwise return true to leave it in the array.

Finally I have two final checks after that ordeal. If the amount still owed to the customer is equal to 0 and the worth array length is 0, meaning there is nothing left in the register, return 'closed'. If the amount owed is greater than 0 return 'insufficient funds'. Finally, after all that return the change array.

Explanation over.

While my solution does work for these cases there are some specific cases, where this would not work. I learned this out once I finished and was looking for the bonfire / provided solution for this challenge. I came across [this post](https://medium.freecodecamp.org/exact-solution-for-exact-change-81e1d23bfe58) which pretty much states what is wrong with my answer.

In a case where 30 cents in change is needed and the cash register has 10 dimes and 10 quarters, my solution will return insufficient funds instead of 3 dimes due to the way I created it. Going from the largest denomination to the smallest causes this issue.

I would solve this issue in my final check of the amount owed (`owe > 0`). In this check before I return 'insufficient funds' I would loop back through my worth array backwards and check for the correct change in a similar way as before. If that then fails, then I would finally return 'insufficient funds'. However, I'm not sure if there would be more cases in doing this, where the same problem could show up.

In the end, I'm glad I decided to use an object in this algorithm challenge instead of just arrays. I got to learn just a bit more about working with objects.

---