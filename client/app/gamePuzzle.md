# Understanding the `puzzleClue` Function

## Overview

The logic behind this function take style deep small, but just take your time to understand the steps.
If you get questions, let me know.

The `puzzleClue` function is meant to provide clues for the user, letting them know which letters are no longer needed for guessing, based on the correct and most updated state of the game.
this way, users will be able to have an idea of the letters they need to enter while guesing.

## Function Signature

```typescript
puzzleClue: (state) => void
```

This function is a reducer in our Redux slice, which means it directly modifies the state.

## Prerequisites

First, let's understand the states I used and why:

- `state.userOption`: An array of strings representing the current user's guess. Empty strings represent unfilled positions.
- `state.correctWords`: An array of strings representing the correct answer.
- `state.unneededLetters`: An array of strings that will store the letters that are no longer needed for guessing.

## Step-by-Step Explanation

### 1. Initial Check

```typescript
if (state.userOption === null || state.correctWords === null) {
  return;
}
```

**Why?** We first check if we have the necessary data to proceed. If either `userOption` or `correctWords` is null, we can't perform our calculations, so we exit the function early.

### 2. Type ALias for letterCount and revealedCount

```typescript
type LetterCount = {
  [key: string]: number;
};

const letterCount: LetterCount = {};
const revealedCount: LetterCount = {};
```

**Why?** We create two objects to keep track of letter frequencies:

- `letterCount`: Will store the frequency of each letter in the correct word.
- `revealedCount`: Will store the frequency of each letter the user has correctly guessed.

### 3. Counting Correct Letters

```typescript
state.correctWords.forEach((letter) => {
  const lowerLetter = letter.toLowerCase();
  letterCount[lowerLetter] = (letterCount[lowerLetter] || 0) + 1;
});
```

**Why?** I made several mistakes here before realizing we need to convert the letters to lowercase.
We iterate through each letter in the correct word, converting it to lowercase for case-insensitive comparison. We then increment its count in `letterCount`. This gives us the total number of times each letter appears in the correct word.

### 4. Counting Revealed Letters

```typescript
state.userOption.forEach((letter) => {
  if (letter !== "") {
    const lowerLetter = letter.toLowerCase();
    revealedCount[lowerLetter] = (revealedCount[lowerLetter] || 0) + 1;
  }
});
```

**Why?** We do a similar count for the user's current guess, but only for non-empty strings (empty strings represent unfilled positions). This gives us the number of times each letter has been correctly guessed by the user.

### 5. Determining Unneeded Letters

```typescript
const unneeded: string[] = [];
state.userOption.forEach((letter) => {
  if (letter !== "") {
    const lowerLetter = letter.toLowerCase();
    if ((revealedCount[lowerLetter] || 0) >= (letterCount[lowerLetter] || 0)) {
      unneeded.push(lowerLetter);
    }
  }
});
```

**Why?** We iterate through the user's guess again. For each revealed letter, we compare its count in `revealedCount` to its count in `letterCount`. If the user has revealed this letter as many or more times than it appears in the correct word, we add it to the `unneeded` array.

### 6. Updating State

```typescript
state.unneededLetters = Array.from(new Set(unneeded));
```

**Why?** Finally, we update the state with our unneeded letters. We use `Set` to remove any duplicates, and `Array.from()` to convert it back to an array.

## Key Notes:

1. **Case Insensitivity**: We convert all letters to lowercase to ensure 'A' and 'a' are treated the same.
2. **Frequency Counting**: We use objects to efficiently count letter frequencies.
3. **Comparison Logic**: A letter is unneeded when the user has guessed it at least as many times as it appears in the correct word.
4. **Duplicate Removal**: We use a `Set` to ensure each unneeded letter is only listed once.
