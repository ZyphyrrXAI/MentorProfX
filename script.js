document.addEventListener("DOMContentLoaded", function() {
    const categorySelect = document.getElementById("category-select");
    const startDemoButton = document.getElementById("start-demo");
    const responseDisplay = document.getElementById("response");
    
    // Set default category to 'general'
    categorySelect.value = "general";
    
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
        ],
        history: [
            "The Great Wall of China is over 13,000 miles long!",
            "Did you know? The first recorded Olympic Games were held in 776 BC in Greece.",
            "Leonardo da Vinci could write with one hand while drawing with the other!",
            "The printing press, invented by Johannes Gutenberg, revolutionized knowledge sharing."
        ],
        technology: [
            "The first computer was the size of a room and weighed over 27 tons!",
            "The internet was originally called ARPANET and developed in the 1960s.",
            "Did you know? The world's first website is still online: info.cern.ch.",
            "Quantum computers can process calculations exponentially faster than traditional ones."
        ],
        literature: [
            "William Shakespeare invented over 1,700 words still used today!",
            "The oldest known written story is the Epic of Gilgamesh from ancient Mesopotamia.",
            "Did you know? 'Moby-Dick' was a failure when first published but is now a classic!",
            "The Library of Alexandria was one of the greatest collections of knowledge in history."
        ]
    };
    
    startDemoButton.addEventListener("click", function() {
        const selectedCategory = categorySelect.value;
        if (responses[selectedCategory]) {
            const randomResponse = responses[selectedCategory][Math.floor(Math.random() * responses[selectedCategory].length)];
            responseDisplay.textContent = randomResponse;
        } else {
            responseDisplay.textContent = "Please select a valid category.";
        }
    });
});
