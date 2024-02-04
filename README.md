<h1>Feathers React Chat</h1>
<p>Welcome to the Feathers React Chat application! This chat app showcases real-time messaging using FeathersJS and React. Follow the simple steps below to get started with the app.</p>
<h2>Prerequisites</h2>
<ul>
    <li>Docker Desktop installed and running on your computer.</li>
    <li>Latest version of Node.js installed on your computer.</li>
</ul>
<h2>Getting Started</h2>
<ol>
    <li><strong>Clone the Repository</strong>:
        <p>First, clone the Feathers React Chat application repository to your local machine using the following command:</p>
        <pre><code>git clone https://github.com/PrinceDisant/feathersjs-react-chat-app.git</code></pre>
    </li>
    <li><strong>Navigate to the Project Directory</strong>:
        <p>Change into the project directory with:</p>
        <pre><code>cd feathersjs-react-chat-app</code></pre>
    </li>
    <li><strong>Start the Application</strong>:
        <p>Run the following command to start the application:</p>
        <pre><code>docker-compose up --build -d</code></pre>
        <p>Wait for the process to complete. You should see messages indicating that the containers have started:</p>
        <pre><code>✔ Container feathers-react-chat-feathers-backend-1  Started                                    
✔ Container feathers-react-chat-react-frontend-1    Started</code></pre>
    </li>
    <li><strong>Access the Application</strong>:
        <p>Once the containers are up and running, open your web browser and go to:</p>
        <a href="http://localhost:3000/">http://localhost:3000/</a>
        <p>You will be directed to the login page of the chat application.</p>
    </li>
    <li><strong>Using the Application</strong>:
        <ul>
            <li>If you're a new user, feel free to create a new account.</li>
            <li>If you already have an account, simply log in with your credentials.</li>
            <li>Once logged in, you can explore the chat page and test the instant chat functionality powered by FeathersJS.</li>
        </ul>
    </li>
</ol>
<h2>Troubleshooting</h2>
<p>If you encounter a build error similar to <code>ERROR [react-frontend build 6/6] RUN npm run build</code>, it might be due to an issue with the <code>node_modules</code> in the React app. Here's how you can resolve it:</p>
<ol>
    <li>Navigate to the React app directory:</li>
    <pre><code>cd react-chat/react-chat-app</code></pre>
    <li>Delete the <code>node_modules</code> folder:</li>
    <pre><code>rm -rf node_modules</code></pre>
    <li>Return to the root directory of the project and rerun the Docker Compose command:</li>
    <pre><code>cd ../..
docker-compose up --build -d</code></pre>
</ol>
<p>This should resolve the build issue and allow the application to start successfully.</p>
<h2>Support</h2>
<p>If you need help or have any questions, feel free to open an issue in this repository.</p>