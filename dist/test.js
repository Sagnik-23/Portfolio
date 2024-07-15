const text = ["Web Development.", "DSA.", "Gaming."];
        const typingSpeed = 150;
        let currentTextIndex = 0;
        let currentCharIndex = 0;

        function typeWriter() {
            if (currentTextIndex < text.length) {
                if (currentCharIndex < text[currentTextIndex].length) {
                    document.getElementById("typing-effect").innerHTML += text[currentTextIndex].charAt(currentCharIndex);
                    currentCharIndex++;
                    setTimeout(typeWriter, typingSpeed);
                } else {
                    // Move to the next word after a brief pause
                    setTimeout(() => {
                        currentCharIndex = 0;
                        currentTextIndex++;
                        document.getElementById("typing-effect").innerHTML = ""; // Clear the text for the new word
                        setTimeout(typeWriter, typingSpeed);
                    }, typingSpeed * 3); // Adjust the pause duration as needed
                }
            } else {
                // Restart the typing effect after completing all words
                setTimeout(() => {
                    currentTextIndex = 0;
                    currentCharIndex = 0;
                    document.getElementById("typing-effect").innerHTML = ""; // Clear the text for the new cycle
                    setTimeout(typeWriter, typingSpeed);
                }, typingSpeed * 3); // Adjust the pause duration as needed
            }
        }

        document.addEventListener("DOMContentLoaded", typeWriter);
