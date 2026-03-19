const cardData = [
    "Blokobobs helped me grow my portfolio steadily.",
    "Very reliable and data-driven platform.",
    "Great risk management and strategy.",
    "Simple and effective investing approach.",
    "Consistent performance over time."
];

const slider = document.getElementById("slider");

if (slider) {
    cardData.forEach(text => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "w-1/2 flex-shrink-0 px-6";

        const card = document.createElement("div");
        card.className = "bg-white p-4 shadow rounded";

        card.innerHTML = `<p class="text-gray-600">${text}</p>`;

        cardDiv.appendChild(card);
        slider.appendChild(cardDiv);
    });

    let index = 0;
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    function updateSlider() {
        const translateX = -(index * 50);
        slider.style.transform = `translateX(${translateX}%)`;
    }

    if (next) {
        next.addEventListener("click", () => {
            if (index < slider.children.length - 2) {
                index++;
                updateSlider();
            }
        });
    }

    if (prev) {
        prev.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateSlider();
            }
        });
    }
}