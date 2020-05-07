# Future Connect UI

Future Connect is an admin template developed using angular.

ng-Future Connect is a free template for angular.

[see demo](http://122.166.167.113:4200)

## Getting Started

### Install dependencies

- step 1 - Angular is the core of Future Connect.

- step 2 - Angular Material is the primary UI library of Future Connect. It's a set of Angular components, directives and services that implements Material Design Specifications and it's in active development by Google.

- step 3 - Angular Cli is a tool to initialize, develop, scaffold and maintain Angular applications

### Installation

- Install Nodejs
- Open the terminal and type npm install -g @angular/cli
- Open the terminal and navigate into your work folder, run the following command and wait for npm install to finish.
```
npm install
```

- Run the project with angular cli with
```
ng serve
```
or type
```
npm start
```
- Build production with
```
npm run build-prod
```
or
```
ng build --prod
```

### Directory Structure
Future Connect has a fairly simple directory structure. All source code that you will need stays inside the /src folder. Once you build your app, a /dist folder will appear at the root which will contain the built app. You can simply upload the contents of it to your server to start running your app.

### Source Directory (/Src)
The source folder has the general Angular CLI project structure along with an additional folder called /@addapptable which contains the core elements of Future Connect.

- /App
This folder contains the AppComponent along with the bellow directories. Everything that these folders contains inside belongs to your app and you can edit them; however, if you prefer you can modify it while building your app:

### Directory layout
    .
    ├── admin                   # Pages and page layouts.
    ├── auth                    # Authorization pages.
    ├── localication            # Source files (alternatively `lib` or `app`)
    ├── shared                  # Automated tests (alternatively `spec` or `tests`)
    ├── documentation
    ├── startup-template.zip    # Contains skeleton template with authorization component and menu component
    ├── LICENSE
    └── README.md

### Multi Language
Future Connect uses ngx-translate module and supports multiple languages and translations.

Usage:
In order to use the translations, create your translation file within the module you want to use the translations.
For example, for the English translation, create assets/i18n/en.json file.

### Components
Future Connect has created several components for community use. You can see these components on the following links
