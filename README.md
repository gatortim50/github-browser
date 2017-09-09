# Github-Browser

- User may login, using username or email, and password
- View their personal details and number of repos

## TODO

- Search for repos by username
- View detailed list of user's repos

### This app has been ejected using 'yarn eject'

### Directions to run under expo (before eject)

- npm install / yarn install
- yarn run ios

### To revert to platforms IOS/Android

```yarn eject```

### Directions to run under react-native (after eject)

- npm install / yarn install
- react-native run-ios

```git clone git@github.com:gatortim50/github-browser.git```

```cd github-browser && npm install && react-native run-ios```


### rename env file to .env - this is only for testing

- edit the .env file and fill in the appropriate values below
- USERNAME=XXX  // your email or github user name
- PASSWORD=XXX  // your password

### Additional Packages

- dependencies
npm install axios buffer react-native-animatable react-native-keyboard-aware-scroll-view react-native-vector-icons react-navigation react-redux redux-thunk --save

- dev dependencies
npm install react-native-dotenv babel-preset-react-native --save-dev
