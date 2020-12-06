In this kata, we will be making a list of labels, like the ones in trello. For every step, there is a codesandbox showing the expected result. It's done with React, but any frontend framework will do (or in vanilla JS, if you want to play it that way). Of course, you can take a look at the implementation in codesandbox, but that's not the point of the exercise (:

Here is the final result: https://codesandbox.io/s/kata-labels-10-e1rls. Ready? Let's start!

## 1 - The label

First, we will create the label itself, displayed as a string on a small colored block, with rounded corners, a small shadow and a tiny bit of padding.

https://codesandbox.io/s/kata-labels-1-od1xx

## 2 - Multiple labels

Now, let's create a list of labels. This should not be too hard, I guess.

https://codesandbox.io/s/kata-labels-2-u1jri

## 3 - Adding and deleting labels

A static list in not fun. I say we should be able to add labels using some inputs for its value and color, and delete them with a mouse click. When adding labels, the color must be a `#` followed by 6 hexadecimal characters.

https://codesandbox.io/s/kata-labels-3-98ijj

## 4 - A set of labels

We will now introduce a new entity to our app: a closed list of all available labels, with their defined texts and colors. Let's call it "the set of all labels". Now, adding a label will only be possible if it matches one of the available labels from the set of all labels. As the colors are already defined in the set, we don't require the second input.

https://codesandbox.io/s/kata-labels-4-wozct

> The set of labels used in codesandbox are: "music", "colors", "cookies", "friend", "comedy", "videogame" and "code".

## 5 - Quick addition

To be more efficient, we want to be able to add labels by only typing its first letters. When pressing enter (and when the input is not empty), we will add the first label from the set that starts with the entered text.

https://codesandbox.io/s/kata-labels-5-xzhzg

## 6 - Quick deletion

Going a little further in improving our UX, let's add the ability to quickly delete the last label of the list when pressing the backspace key while the input is empty.

https://codesandbox.io/s/kata-labels-6-omi88

## 7 - Unicity

Having the same label in the list multiple times is kinda odd, don't you think? Rather than always add labels when pressing enter, we will toggle them from the list (if it is already present, we just remove it).

https://codesandbox.io/s/kata-labels-7-y6sp2

## 8 - Add button

Okay, to improve the user experience a bit, we want to see the input field only when editing labels. By default, let's display an "add" button at the end of the list, and only show the input when we click it. Oh, and we should be able to get out of edit mode by pressing the escape key, or by clicking outside the input field.

https://codesandbox.io/s/kata-labels-8-twx9t

## 9 - Contrast text

Instead of removing labels with a mouse click, let's toggle their text color between dark and light. The set of all labels will contain the default contrast text, but toggling a label's text color should only affect the one in the list, the set must not be mutated.

https://codesandbox.io/s/kata-labels-9-nei28

## 10 - Play with the selection

Our quick addition feature is pretty neat, but some kind of feedback would make it even better. Let's play with the browser's `setSelectionRange` function: when the user types some letters in the input, we want to fill the rest (after the cursor) with the first match from the set, but selected. This way, in case of ambiguity we can continue typing until we find the right label to add to the list.

https://codesandbox.io/s/kata-labels-10-e1rls
