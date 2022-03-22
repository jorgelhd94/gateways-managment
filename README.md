# Gateway Managment System

The goal of this system is offer a simple way to managing gateways that control multiple peripheral devices.

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on deploying the project on a live system.

## Important

This project uses the Firebase platform for its most important features, in case your country is blocked by Google please use VPN.

## Structure

The system was developed using the [NextJS](https://nextjs.org/) framework for the Frontend and [Firebase](https://firebase.google.com/) as the Backend. The Firebase tools used are Firestore, Authentication, Storage, Google Cloud Functions and Hosting.

### **Firebase files**

The configuration files to use Firebase are located in the root folder:

- .firebaserc
- firebase.json
- firestore.indexes.json
- firestore.rules
- storage.rules

In the **./firebase.json** file you will find the most important configuration, this file allows us to configure the local Firebase Emulator.

The files used to implement **Google Cloud Functions** are:

- Main file:
  - ./server.js
- The implementation of the Rest API:
  - functions/\*\*

Finally, in the **./src/includes/firebase.js** file, the Firebase instance is implemented and configured:

Incluir foto Example 1

### **NextJs files**

The file **./next.config.js** contains the main configuration to NextJs.

The most important folders are:

- **./pages/\*\*** - Contains the pages rendered by Nextjs, they are the views that are displayed in the browser

- **./public/\*\*** - Contains static files like images, icons, etc.

- **./src/components/\*\*** - Contains the React components used in the app.

- **./src/contexts/\*\*** - Contains the React Contexts used by the component tree

- **./src/utils/\*\*** - In this folder there are modules that contain important functions for the system and allow the reuse of code in different components.

- **./styles/\*\*** - Contains the global css style.

### **Other files**

1. Testing (Jest) - Configuration files:

- **./jest.config.js**
- **./jest.setup.js**

2. CSS Framework (TailwindCSS) - Configuration files:

- **./tailwind.config.js**
- **./postcss.setup.js**

3. ESLint and Prettier - Configuration files:

- **./.eslintrc.js**
- **./.prettierrc**

## Installation

### Prerequisites

**Node JS**

The Node version used is 16.

**Firebase CLI**

Before starting the project installation, you need to have the Firebase CLI installed. To install it use:

    npm install -g firebase-tools

Reference: [Install Firebase CLI](https://firebase.google.com/docs/cli)

### Installing

Steps to install and configure the project locally.

1. Clone the project from github

```
git clone https://github.com/jorgelhd94/gateways-managment.git
```

2. Install the requirements package with NPM. Run the following command in the root folder of the project:

```
npm install
```

3. Start the Firebase Emulator Suite. Run the following command in the root folder of the project:

**Important:** The use of VPN is necessary 

```
firebase emulators:start --only "functions,auth,firestore,hosting,storage"
```

4. Finally run the project:

```
npm run dev
```

**Important**

In case you want to use another Firebase project, please modify the instance located at **./src/includes/firebase.json**.


## Running the tests

The project uses the Jest library for unit tests. To run the tests use:

    npm test

## Deployment

This project could not be hosted on Firebase Hosting because the account used is not a paid one.

If you want to deploy it with your paid Firebase account, you need to modify the instance located at the file **./src/includes/firebase.json** with your project's registration data provided by Firebase. Then test the app locally. And follow the steps below:

1. Delete or comment the local configurations to Functions, Firestore, Authentication and Storage, located at the file **./src/includes/firebase.json**.

Foto 2


2. Build the project

```
npm run build
```

3. Deploy the project

```
npm run deploy
```

**To Test Hosting locally**

1. Build the project

```
npm run build
```

2. Use the Hosting Local Emulator

- Start the Firebase Emulator Suite:
```
firebase emulators:start --only "functions,auth,firestore,hosting,storage"
```

- Run the Hosting in the Browser. The port is configured in **./firebase.json**:
```
http://localhost:5000/
``` 

Photo Example 3

## Acknowledgments

Thanks to the Cuban Engineer team for the opportunity.
