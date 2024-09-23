# MovieApp in React Native

## Description

This is a Movie App built using React Native, designed to provide users with an immersive experience to browse, search, and explore movies. The app features a smooth UI and integrates various popular libraries to enhance functionality and design.

## Libraries

- **@react-navigation/native**: Manages navigation between screens in the app.
- **@react-navigation/native-stack**: A stack navigator for implementing stack-based navigation patterns.
- **axios**: Simplifies HTTP requests and data fetching from APIs.
- **lodash**: A utility library that helps with common programming tasks such as manipulating arrays and objects.
- **nativewind**: Provides Tailwind CSS-like utility classes for styling components in React Native.
- **react-native-dotenv**: Manages environment variables in React Native.
- **react-native-gesture-handler**: Adds gesture-handling capabilities to React Native components.
- **react-native-heroicons**: Provides a set of Heroicons optimized for React Native apps.
- **react-native-linear-gradient**: Enables the creation of linear gradient backgrounds.
- **react-native-new-snap-carousel**: A highly customizable and performant carousel/slider component.
- **react-native-progress**: Displays progress bars and loading indicators.
- **react-native-reanimated**: A library that adds powerful, declarative animations for React Native.
- **react-native-reanimated-carousel**: A reanimated version of the carousel with smooth, performant animations.
- **react-native-safe-area-context**: Ensures content is rendered within safe areas to account for device notches and status bars.
- **react-native-screens**: Optimizes navigation performance by using native screen components.
- **react-native-svg**: Adds support for scalable vector graphics (SVG) in React Native.

## Preview

![](/assets/Movie-GIF.gif)

## Api

This app utilizes the The Movie Database (TMDb) API to fetch comprehensive movie data, including titles, ratings, and descriptions. TMDb provides an extensive library of movie-related information, allowing users to browse and discover new films. For more details, check out the TMDb documentation.[themoviedb.org](https://developer.themoviedb.org/docs/getting-started)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/KamilErdogmus/RN-MovieApp.git
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. Install dependencies:

#### Using npm

```bash
npm install
```

#### Using yarn

```bash
yarn install
```

If you're using MacOS, navigate to the ios folder and install CocoaPods dependencies:

```bash
cd ios
```

```bash
 pod install
```

```bash
 cd ..
```

## Step 1: Start the Metro Server

First, you'll need to start **Metro**, the JavaScript _bundler_ that comes with React Native.

To start Metro, run the following command from the _root_ of your React Native project:

#### Using npm

```bash
npm start
```

#### Using Yarn

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

#### Using npm

```bash
npm run android
```

#### Using Yarn

```bash
yarn android
```

### For iOS

##### using npm

```bash
npm run ios
```

#### Using Yarn

```bash
yarn ios
```

### If you encounter an error while starting the server

```bash
npx react-native start --reset-cache
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.jsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
