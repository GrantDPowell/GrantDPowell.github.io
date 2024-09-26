# Grant Powell's Portfolio

Welcome to my portfolio site! This website showcases my projects and provides a way to contact me. The site is now built using **React** and **Material UI**, and it dynamically pulls data from the GitHub API to display my repositories.

## Features

- **Dynamic Project Display**: The website uses React components to fetch and dynamically display my GitHub repositories, including project descriptions and README files.
- **Responsive Design**: The site is built with a responsive layout using Material UI, ensuring it looks great on all devices.
- **Expandable Project Details**: Each project is displayed in an expandable card, making it easy to browse through project details and README files.
- **README Rendering**: The site fetches README files from each repository and renders them using `react-markdown`, converting Markdown to HTML while omitting images.
- **Project Filtering**: The home page shows specific featured projects, while the projects page displays all repositories categorized into Projects and Games.
- **Contact Form**: A contact form is available for visitors to send me messages, integrated using Formspree.

## Technologies Used

- **React**: The site is built using the React JavaScript library for building user interfaces.
- **Material UI**: Components from Material UI are used for a modern and responsive design.
- **JavaScript (ES6+)**: The functionality of dynamically fetching and displaying repository data is implemented in JavaScript.
- **React Markdown**: GitHub README files are rendered using `react-markdown` to convert Markdown into HTML while handling various formatting options.
- **GitHub API**: GitHub's API is used to fetch repository data and README files dynamically.
- **GitHub Pages**: The site is hosted on GitHub Pages, which provides a fast and free hosting solution.

## How It Works

### React Structure

The site's structure is defined through React components. The core components include:
- `Home`: Displays featured projects.
- `Projects`: Lists all repositories, split into Projects and Games.
- `GithubProjectDisplay`: A reusable component that fetches and displays repositories from the GitHub API.

### CSS Styling

Material UI is used for styling. Components are customized to provide a clean and responsive interface.

### JavaScript Functionality

Key functionality includes:
1. Fetching the list of repositories from my GitHub account using the GitHub API.
2. Rendering each project in a card that expands to show more details and README content.
3. Fetching and displaying the README file for each repository using `react-markdown` (images are omitted).
4. Dynamic filtering of repositories into Projects and Games.

### Contact Form

The contact form is implemented using a React form component and integrated with Formspree to handle submissions.

## Setup

The site uses GitHub Pages for hosting and automatic deployment via the `gh-pages` package.

Visit the portfolio at [GrantDPowell.github.io](https://GrantDPowell.github.io) to view it live.

