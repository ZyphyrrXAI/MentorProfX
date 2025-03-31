document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start-demo").addEventListener("click", function() {
        const responses = {
            general: [
                "Hello! How can I assist you today?",
                "MentorProfX is here to help! Ask me anything.",
                "Let's explore knowledge together! What's your question?",
                "Your virtual professor is always listening. How can I guide you?"
            ],
            math: [
                "Did you know? The Fibonacci sequence appears in nature, from flowers to galaxies!",
                "Math is the language of the universe. What equation can I help with?",
                "The sum of the angles in a triangle is always 180 degrees!",
                "Pi (π) is an infinite, non-repeating decimal. Want to learn more?"
            ],
            science: [
                "Water expands when it freezes, making ice less dense than liquid water.",
                "The speed of light is approximately 299,792 kilometers per second!",
                "Did you know? Human DNA is about 99.9% identical among all people.",
                "Energy cannot be created or destroyed, only transformed."
            ]
        };

        const categories = Object.keys(responses);
        const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomResponse = responses[selectedCategory][Math.floor(Math.random() * responses[selectedCategory].length)];
        
        document.getElementById("response").textContent = randomResponse;
    });
});
