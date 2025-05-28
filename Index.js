 const bday = new Date("2025-10-15");
                const interval = setInterval(() => {
                    const now = new Date();
                    const time = bday - now;
                    if (time < 0) return clearInterval(interval);
                    const days = Math.floor(time / (1000 * 60 * 60 * 24));
                    document.getElementById("countdown").innerText = `🎉 ${days} days until Teddy’s Birthday! 🎈`;
                }, 1000);

                // Array of fun teddy bear facts
                const facts = [
                    "The first teddy bear was created in 1902.",
                    "Teddy bears are named after President Theodore Roosevelt.",
                    "The most expensive teddy bear ever sold cost over $2 million!",
                    "Teddy bears are often used in therapy for comfort and healing.",
                    "There are museums around the world dedicated to teddy bears."
                ];

                // Function to display a random fact
                function showRandomFact() {
                    const fact = facts[Math.floor(Math.random() * facts.length)];
                    document.getElementById("factDisplay").textContent = fact;
                }

                // Wait for the DOM to load before assigning the button handler
                document.addEventListener("DOMContentLoaded", function () {
                    const button = document.getElementById("factButton");
                    if (button) {
                        button.addEventListener("click", showRandomFact);
                        const bear = document.getElementById("teddyBear");
                        const newLeft = Math.floor(Math.random() * 80); // Move between 0% and 80%
                        bear.style.left = `${newLeft}%`;

                    }
                });
            
