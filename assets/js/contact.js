const apiUrl = "https://qik55uvqck.execute-api.us-east-1.amazonaws.com/contact";

document.getElementById("contact-form").addEventListener("submit", async (e) => {

    e.preventDefault();

    const body = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {

            document.getElementById("status-message").textContent =
                "✅ Message sent successfully!";

            document.getElementById("contact-form").reset();

        } else {

            document.getElementById("status-message").textContent =
                "❌ Failed to send message.";

        }

    } catch (error) {

        document.getElementById("status-message").textContent =
            "❌ An error occurred.";

        console.error(error);

    }

});