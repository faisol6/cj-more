# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to use Taginput components

import TagInput from './components/TagInput';

function App() {
  return <TagInput maxTags={5} />;
}

### Props:

- **maxTags**: (number): The maximum number of tags that can be added. If the number of tags exceeds this limit, no more tags can be added.
Example: maxTags={5},
- **Add Tags**: : (string[]): Custom separators for multiple tags (e.g., comma, semicolon, space, tab).
Example: separators={[";", ",", " ", "\t"]}
This allows users to separate tags by any of the specified characters.

**Note**: Both maxTags and separators are optional props.


### Features:
- **Add Tags**: Users can add tags by typing and pressing Enter or using the provided separators..
- **Remove Tags**: Users can remove tags by clicking the "❌" button next to each tag.
- **Tag Limit**: The number of tags can be limited by setting the maxTags prop.
- **Custom Separators**: Define custom separators (e.g., semicolon, comma, space) for multiple tags in a single input field.
- **Warning Message**: A warning message will appear when the tag limit is reached.

