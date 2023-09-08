# Date-app

This is my latest and the most mature app, which is being made with Vue.js. 'Being made' because the app is't finished yet. 
This is dating app, which purpose is to help people find love based on their personality.
In the future I would like to use PHP for backend side, and use this project as my master thesis.

## Functionality
- On the main page User can click 'Go to the form' which redirects it to the form,
- The form consists of two parts: empathy test and personal informations.
  Empathy test is a test of 33 questions which goal is to measure emapthy level.
  Personal informations are additional informations which goal is to help User find better matches.
  After submiting both forms data is sent to mock server. Then data is processed and among all users,
  those who have met the requirements are selected.
  The requirements:
   - both the User and rest of users must look for the same gender. For example,
    if User is a 'female' and is looking for 'male' then only those users will be renderd whose gender is
    'male' and are looking for 'female'.
  - similiar proccess is made with empathy level. When User's empathy level is calculated and converted into
    string (like 'high emapthy level'), and when User select the emapthy level that it wants for its future partner
    (like 'low emapthy level), then list of users is filtered and only those users will be rendered who
    are looking for someone with 'high empathy level' and who have 'low emapthy level'.
- After completing the form User is redirected to Find Your Love page where matched users are rendered.
  This page contains also filter, to filter users.
- Blog is a page with a few blogs for User to read. 


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run JSON server

```sh
npm run server
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
