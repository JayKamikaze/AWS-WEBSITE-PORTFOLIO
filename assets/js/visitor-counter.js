const apiUrl = "https://869itnn6y5.execute-api.us-east-1.amazonaws.com/visitor-count";

async function getVisitorCount() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById("visitor-count").textContent = data.count;
    } catch (error) {
        console.error("Error loading visitor count:", error);
    }
}

getVisitorCount();