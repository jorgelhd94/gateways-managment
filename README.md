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
  -  ./server.js
- The implementation of the Rest API: 
  - functions/**

Finally, in the **./src/includes/firebase.js** file, the Firebase instance is implemented and configured:

Incluir foto Example 1

### **NextJs files**

The file **./next.config.js** contains the main configuration to NextJs.

The most important folders are:

- **./pages/**** - Contains the pages rendered by Nextjs, they are the views that are displayed in the browser 

- **./public/**** - Contains static files like images, icons, etc.

- **./src/components/**** - Contains the React components used in the app.

- **./src/contexts/**** - Contains the Context used by the component tree

- **./src/utils/**** - In this folder there are modules that contain important functions for the system and allow the reuse of code in different components.

- **./styles/**** - Contains the global css style.

### **Other files**

1. Testing (Jest) - Configuration files:
  - **./jest.config.js**
  - **./jest.setup.js**
  
2. CSS  Framework (TailwindCSS) - Configuration files:
  - **./tailwind.config.js**
  - **./postcss.setup.js**
  
3. ESLint and Prettier - Configuration files:
  - **./.eslintrc.js**
  - **./.prettierrc**

## Installation
### Prerequisites

Requirements for the software and other tools to build, test and push

- [Example 1](https://www.example.com)
- [Example 2](https://www.example.com)

### Installing

A step by step series of examples that tell you how to get a development
environment running

Say what the step will be

    Give the example

And repeat

    until finished

End with an example of getting some data out of the system or using it
for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Sample Tests

Explain what these tests test and why

    Give an example

### Style test

Checks if the best practices and the right coding style has been used.

    Give an example

## Deployment

Add additional notes to deploy this on a live system

## Built With

- [Contributor Covenant](https://www.contributor-covenant.org/) - Used
  for the Code of Conduct
- [Creative Commons](https://creativecommons.org/) - Used to choose
  the license

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Semantic Versioning](http://semver.org/) for versioning. For the versions
available, see the [tags on this
repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## Authors

- **Billie Thompson** - _Provided README Template_ -
  [PurpleBooth](https://github.com/PurpleBooth)

See also the list of
[contributors](https://github.com/PurpleBooth/a-good-readme-template/contributors)
who participated in this project.

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details

## Acknowledgments

- Hat tip to anyone whose code is used
- Inspiration
- etc
