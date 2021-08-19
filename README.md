# OER Quiz

This package is a fork of [`H5P.QuizQuestionSet 1.17`](https://github.com/h5p/h5p-question-set). 

## Changes from Question Set
* Added support for `OER MultiChoice` as valid type for Question.
* Support for link or video to be shown or played after finishing quiz depending on results.

## Development
To run the library in development mode run the following commands from the library root:
* `npm install`
* `npm run dev`

Note that for the dev script here to work the [`oer-dev`](../../oer-dev/README.md) server needs to be running as well.

## Production
There are three different scripts used when building the library's production build. Remember to install the dependencies before running them with `npm install`.
* `npm run build-src`
    * Builds the frontend code and copies it into `H5P.OERQuiz/`
* `npm run build-h5p`
    * Packages all the content of `H5P.OERMultiChoice/` into a `.h5p` file named `oer-quiz` and puts it into the `dist/` folder. This file can be used to install the production build on any site that supports H5P content.
* `npm run build`
    * Runs both of the above scripts in sequence.
