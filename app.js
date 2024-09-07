// Event listeners for the navigation links
document.getElementById('home').addEventListener('click', function() {
    setActivePage('Home', 'Welcome to Crop Disease Prediction', `
        This is the Home page where you can predict crop diseases.<br /><br />
        <input type="file" id="imageInput" accept="image/*" />
        <br />
        <button id="predictBtn">Predict</button>
        <div class="result" id="result"></div>

        <h2>Chat with AI Assistant</h2>
        <input type="text" id="chatInput" placeholder="Ask a question..." />
        <br />
        <button id="chatBtn">Send</button>
        <div class="result" id="chatResult"></div>
    `);

    // Re-bind the events for the "Home" page functionalities (prediction and chat)
    bindHomePageFunctions();
});

document.getElementById('community').addEventListener('click', function() {
    setActivePage('Community', 'Join the Community', `
        This is the Community page where you can interact with farmers, researchers, and students.<br /><br />
        <div id="chatContainer">
            <h3>Community Chat</h3>
            <div id="chatMessages"></div>
            <input type="text" id="messageInput" placeholder="Type a message..." />
            <button id="sendMessageBtn">Send</button>
        </div>
    `);

    // Re-bind the events for the "Community" page functionalities (chat)
    bindCommunityPageFunctions();
});

document.getElementById('contact').addEventListener('click', function() {
    setActivePage('Contact', 'Get in Touch', `
        This is the Contact page. Feel free to reach out for any inquiries.<br /><br />
        <p>Email: support@cropdiseaseapp.com</p>
        <p>Phone: +123 456 7890</p>
    `);
});

document.getElementById('weather').addEventListener('click', function() {
    setActivePage('Weather', 'Weather Information', `
        <!-- Weather page content will be loaded here -->
        <div id="weather-page">
            <h1>Weather Information</h1>
            <div class="search">
                <input type="text" placeholder="Enter city" />
                <button>Search</button>
            </div>
            <div class="weather-details">
                <h2 class="city"></h2>
                <img class="weather-icon" src="" alt="Weather Icon" />
                <p class="temp"></p>
                <p class="humidity"></p>
                <p class="wind"></p>
            </div>
        </div>
    `);

    // Load weather script
    const script = document.createElement('script');
    script.src = 'weather.js';
    document.body.appendChild(script);
});

// Function to change page content dynamically and update active link styling
function setActivePage(pageTitle, heading, content) {
    document.title = pageTitle; // Update page title
    document.getElementById('content').innerHTML = `
        <h1>${heading}</h1>
        <p>${content}</p>
    `;

    // Update the active class for the nav links
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(link => {
        if (link.textContent === pageTitle) {
            link.classList.add('active');
        }
    });
}

// Function to bind events for the "Home" page functionalities (Prediction and Chat)
function bindHomePageFunctions() {
    // Prediction functionality
    const predictBtn = document.getElementById('predictBtn');
    if (predictBtn) {
        predictBtn.addEventListener('click', function() {
            const imageInput = document.getElementById('imageInput');
            const resultDiv = document.getElementById('result');
            if (imageInput.files.length > 0) {
                resultDiv.innerHTML = "<h2>Processing... Please wait.</h2>";
                // Simulate prediction process (replace this with actual prediction logic)
                setTimeout(() => {
                    resultDiv.innerHTML = "<h2>Prediction Complete: No Disease Detected</h2>";
                }, 2000);
            } else {
                resultDiv.innerHTML = "<h2>Please select an image to predict.</h2>";
            }
        });
    }

    // Chatbot functionality
    const chatBtn = document.getElementById('chatBtn');
    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
            const chatInput = document.getElementById('chatInput');
            const chatResultDiv = document.getElementById('chatResult');
            if (chatInput.value.trim() !== '') {
                chatResultDiv.innerHTML = "<h2>Thinking...</h2>";
                // Simulate chatbot response (replace with actual chatbot logic)
                setTimeout(() => {
                    chatResultDiv.innerHTML = `<h2>AI Response: Your question "${chatInput.value}" has been received!</h2>`;
                }, 1500);
            } else {
                chatResultDiv.innerHTML = "<h2>Please enter a question.</h2>";
            }
        });
    }
}

// Function to bind events for the "Community" page functionalities (Chat)
function bindCommunityPageFunctions() {
    // Send message functionality
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', function() {
            const messageInput = document.getElementById('messageInput');
            const chatMessages = document.getElementById('chatMessages');
            if (messageInput.value.trim() !== '') {
                const newMessage = document.createElement('p');
                newMessage.textContent = messageInput.value;
                chatMessages.appendChild(newMessage);
                messageInput.value = ''; // Clear input field
                chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to latest message
            }
        });
    }
}



