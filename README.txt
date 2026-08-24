# Patente Quiz

A modern Italian driving-licence true/false quiz website.

## Included
- Topic-wise navigation
- True/False buttons
- Correct-answer highlighting in green/red after selection
- Italian, English and Urdu interface/question translations
- Dark/light mode
- Animated multi-colour background
- Responsive mobile/desktop design
- Progress, answered count and score
- Reset topic
- Previous/Next topic navigation
- localStorage so selected answers/theme remain after refresh

## Add your real book questions
Open `script.js` and replace the sample `topics` array. Each question uses:
{
  it: "Italian question",
  en: "English translation",
  ur: "Urdu translation",
  a: true
}

`a` must be `true` when the statement is correct and `false` when it is incorrect.

For a large book, keep the questions in a separate JSON file later; the same UI can load it.

## Run
Open `index.html` in a browser. For best results in VS Code, use Live Server.


## Updated behaviour
TRUE/FALSE are now automatic indicators. The visitor does not click an answer.
For each question, the correct answer stored in `a` is automatically highlighted:
- `a: true` -> TRUE/VERO is green
- `a: false` -> FALSE/FALSO is red

The supplied page from section 22.3 "Primo soccorso" has been added as a topic with the 10 visible questions from the uploaded image. All ten are marked TRUE based on the statements shown on that page.
