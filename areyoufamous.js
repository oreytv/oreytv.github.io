document.addEventListener("DOMContentLoaded", () => {
    const webhookURL = "https://discord.com/api/webhooks/1297356838672793610/aXdQ9yRTqir95b37-o7ICS3DqNkEWw3eJ5HrwmnUo7xeer-rRhTdFIyaKCg5n7mrHTyl";

    // Message data
    const message = {
        content: "sdgdfgdf",
    };

    // Send the message using fetch
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    })
    .then(response => {
        if (!response.ok) {
            console.error("fuck:", response.statusText);
        }
    })
    .catch(error => console.error("Efuck:", error));
});
