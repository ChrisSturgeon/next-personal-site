export const projectsData = [
  {
    name: 'Session Hub',
    screenshot: './imgs/session-hub/home-1.png',
    images: [
      {
        isPriority: true,
        ref: '/imgs/session-hub/home-1.png',
        alt: 'The home page of Session Hub showing the users My Hub section and recent posts of their friends',
      },
      {
        isPriority: false,
        ref: '/imgs/session-hub/session-1.png',
        alt: 'A session page showing a surfing at Bigbury session with a location map on the right hand side',
      },
      {
        isPriority: false,
        ref: '/imgs/session-hub/profile-1.png',
        alt: 'A  profile page for the Example User with their profile picture, about section and recent posts',
      },
      {
        isPriority: false,
        ref: '/imgs/session-hub/mobile-1.png',
        alt: 'Two screenshots of Session Hub viewed in a mobile viewport. The left is a session of Windsurfing at Rustington Beach and the right a list of the users friends',
      },
    ],
    about:
      'An SPA built with React consuming a REST API built with Express. The project aim was to create a social media site where users can create accounts, add friends, and post about their recent surfing, windsurfing, kitesurfing etc. sessions for other users to like and comment on. ',
    challenges: [
      'Issuance, storage and authentication of JWTs using PassportJS',
      'Allowing users to drop pins for their session location to display with Leaflet and Open Street Map',
      'Writing custom React hooks for fetching, posting and updating data',
      'Mocking the API during front-end testing using msw',
      'Using Mongoose pipelines to collate data across multiple collections into a single server response',
    ],
    live: 'https://chrissturgeon.github.io/session-hub-front-end/',
    repo: 'https://github.com/ChrisSturgeon/session-hub-front-end',
  },

  {
    name: 'RedoneIt',
    images: [
      {
        isPriority: false,
        ref: '/imgs/redoneit/home-1.png',
        alt: 'RedoneIt Homepage showing recent posts from a selection of different subreddits',
      },
      {
        isPriority: false,
        ref: '/imgs/redoneit/subreddit-1.png',
        alt: 'Technology subreddit page screenshot showing recent posts and the about sidebar with subreddit rules',
      },
      {
        isPriority: false,
        ref: '/imgs/redoneit/mobile-selection.png',
        alt: 'Three screenshots of redoneit all viewed in a mobile viewport. From left to right these are: the homepage, the navigation menu, and the learn programming subreddit',
      },
    ],
    about:
      'A site to display information about countries with data fetched from the REST Countries API built as a challenge from Front End Mentor.',
    challenges: [
      'User authentication and session management with Firebase',
      'Effective data organisation with Firestore',
      'Creating maintanable and reusable React components for use across different pages',
      'How to increase user interactivity with the help of CSS animations and Framer Motion',
    ],
    live: 'https://chrissturgeon.github.io/redoneit/',
    repo: 'https://github.com/ChrisSturgeon/REST-Country-App',
  },
  {
    name: 'Where in the World?',
    images: [
      {
        isPriority: false,
        ref: '/imgs/RESTCountries/home-light.png',
        alt: 'REST Homepage in light-mode colour scheme',
      },
      {
        isPriority: false,
        ref: '/imgs/RESTCountries/home-dark.png',
        alt: 'REST Homepage in dark-mode colour scheme',
      },
      {
        isPriority: false,
        ref: '/imgs/RESTCountries/mobile-selection.png',
        alt: 'Country detail pages for Brazil and Portugal in mobile viewport',
      },
    ],
    about:
      'A site to display information about countries with data fetched from the REST Countries API built as a challenge from Front End Mentor. I decided to undertake this project in order to focus upon improving my knowledge of testing and accessibility, as well as dig under the hood of React and dabble with some CSS-in-JS using Styled Components.',
    challenges: [
      'How to setup React and integrate libraries from scratch without the help of Create React App or Vite etc.',
      'Using Styled Components within React, in particular global styles to allow users to toggle between dark and light themes',
      'Mocking the third party API with msw during testing to reduce unnecessary calls',
      'Testing with asynchronous user events with React Testing Library and Jest',
    ],
    live: 'https://chrissturgeon.github.io/REST-Country-App/#/all',
    repo: 'https://github.com/ChrisSturgeon/odin-shopping-cart',
  },

  {
    name: 'Battle Ships',
    images: [
      {
        isPriority: false,
        ref: '/imgs/battleships/battling.png',
        alt: 'An underway game of battleships',
      },
      {
        isPriority: false,
        ref: '/imgs/battleships/positioning.png',
        alt: 'Players positioning their ships in battleships',
      },
      {
        isPriority: false,
        ref: '/imgs/battleships/winner.png',
        alt: 'A game of battleships where player 1 has defeated their oponent',
      },
    ],
    about:
      'A BattleShips style game created with Vanilla JS to greater my understanding of OOP, Jest and TDD.',
    challenges: [
      'Learning how to write code in a modular manner so not only can it be tested during development, but also maintable in future.',
      'How to seperate game logic from the user interface',
      'How to use function factories to seperate game components and model them with with OOP',
    ],
    live: 'https://chrissturgeon.github.io/odin-battleships/',
    repo: 'https://github.com/ChrisSturgeon/odin-battleships',
  },
  {
    name: "Where's Fry?",
    images: [
      {
        isPriority: false,
        ref: '/imgs/wheres-fry/underway.png',
        alt: 'A game of Wheres Fry underway with 35 seconds on the clock',
      },
      {
        isPriority: false,
        ref: '/imgs/wheres-fry/selecting.png',
        alt: 'A game of Wheres Fry underway with the user selecting Nibler',
      },
      {
        isPriority: false,
        ref: '/imgs/wheres-fry/scores.png',
        alt: 'The top and recent scoreboards display on mobile viewport with a iPhone SE frame',
      },
      {
        isPriority: false,
        ref: '/imgs/wheres-fry/rules.png',
        alt: 'A page displaying the rules of the game Wheres Fry',
      },
    ],
    about:
      "The photo-tagging project from the Javascript and the Backend module of The Odin Project. The aim was to create an app using React and Firebase in which users race against the clock to find and correctly identify characters from a Where's Wally style photo to try and top a leaderboard stored on the backend.",
    challenges: [
      'How to use asynchronous functions within React',
      'Detecting where on an image a user has clicked, and verifying if the coordinates match those held in a database',
      'Creating a timer with JavaScript and publishing results on recent and all-time highscore leaderboards',
    ],
    live: 'https://chrissturgeon.github.io/odin-wheres-fry/',
    repo: 'https://github.com/ChrisSturgeon/odin-wheres-fry',
  },
];
