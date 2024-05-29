# Grant Powell's Portfolio

Welcome to my portfolio site! This website showcases my projects and provides a way to contact me. The site is built using HTML, CSS, and JavaScript, and it dynamically pulls data from the GitHub API to display my repositories.

## Features

- **Dynamic Project Display**: The website uses JavaScript to fetch and display my GitHub repositories dynamically.
- **Responsive Design**: The site is built with a responsive layout using Bootstrap, ensuring it looks great on all devices.
- **Collapsible Project Details**: Each project is displayed in a collapsible section, making it easy to browse through multiple projects.
- **README Rendering**: The site fetches the README files from each repository and renders them using `marked.js`, converting Markdown to HTML.
- **Image Handling**: Images within README files are displayed correctly by converting relative URLs to absolute URLs.
- **Contact Form**: A contact form is available for visitors to send me messages, integrated using Formspree.

## Technologies Used

- **HTML**: The structure of the site is built using HTML5.
- **CSS**: Custom styles are applied through a separate CSS file, enhancing the Bootstrap framework for responsiveness and aesthetics.
- **JavaScript**: The functionality of dynamically fetching and displaying repository data is implemented in JavaScript.
- **GitHub API**: GitHub's API is used to fetch repository data and README files.
- **Bootstrap**: The site uses Bootstrap for its responsive design and prebuilt components.

## How It Works

### HTML Structure

The site's structure is defined in `index.html`. It includes sections for the header, home, projects, and footer.

### CSS Styling

Custom styles are defined in `styles.css`. This file ensures the site is visually appealing and responsive.

### JavaScript Functionality

The main functionality is implemented in `script.js`. This script:

1. Fetches the list of repositories from my GitHub account using the GitHub API.
2. Creates a collapsible section for each repository.
3. Fetches the README file for each repository and renders it using `marked.js`.
4. Converts relative image URLs in the README to absolute URLs to ensure they display correctly.

### Contact Form

The contact form is implemented using HTML and integrated with Formspree to handle submissions.

## Setup

Uses github pages for hosting

Go to GrantDPowell.github.io to view
