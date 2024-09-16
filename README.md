## Acowale News

**AcoNews** is a responsive news platform that fetches and displays dynamic news articles using the GNews.io. The project is built with React for the frontend, Express and Node.js for the backend, and Firebase for hosting.

Features

- Fetches real-time news articles using NewsAPI
- Displays clickable news headlines that link to full articles
- Dynamic image handling for news articles
- Pagination and search functionality
- Responsive design for mobile and desktop views

## Project Structure

aconews4-frontend/ │ ├── public/  index.html │ └──styles.css │ └─script.js │ ├── src │ │ └──app.js ├── server.js ├── package.json └── firebase.json


## Getting Started

### Prerequisites

- **Node.js** installed
- **Firebase CLI** (for deployment)
- API key from **GNews.io**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/aconews4-frontend.git
   cd aconews4-frontend

Install dependencies:
npm install

Create a .env file in the root and add your GNews.io key

Start the development server:
npm start

Backend Setup
The backend is set up with Express and Node.js to fetch news articles and serve static files.

Run the backend server:
node server.js
The backend will serve static files from the public directory and fetch news using the /news endpoint.

Deployment
To deploy the app on Firebase:

Build the project:
npm run build

Deploy to Firebase:
firebase deploy

Known Issues
Reached the GNews API request limit during testing
The placeholder image fallback is disabled

Technologies Used
React: Frontend framework
Express: Backend framework
Node.js: Server environment
NewsAPI: News data provider
Firebase: Hosting platform

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.
