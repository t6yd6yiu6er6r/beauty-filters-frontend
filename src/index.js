import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// Backend URL (Replace with your actual Render backend URL)
const backendURL = "https://beauty-filters-backend.onrender.com";

function App() {
    const [message, setMessage] = useState("");

    // Fetch data from backend when the app loads
    useEffect(() => {
        fetch(`${backendURL}/api/welcome`)
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Welcome to the Beauty Filters App</h1>
            <p>Apply 90s aesthetic filters and save your memories!</p>
            <p><strong>Backend Message:</strong> {message || "Loading..."}</p>
        </div>
    );
}

ReactD
