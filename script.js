window.onload = function () {
    let count = 0;

    const countDisplay = document.getElementById('counterDisplayBtnId');
    const incrementBtn = document.getElementById('incrementBtnId');
    const decrementBtn = document.getElementById('decrementBtnId');

    incrementBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });

    decrementBtn.addEventListener('click', () => {
        if (count > 0) {
            count--;
            countDisplay.textContent = count;
        }
    });

    // Part D2: Color Changer
    const colorBox = document.getElementById('colorBoxId');
    const colorChangeBtn = document.getElementById('changeColorBtn');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];

    colorChangeBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        colorBox.style.backgroundColor = colors[randomIndex];
    });

    // Part D3: Quote Generator

    const quoteBtn = document.getElementById('quoteBtnId');
    const quoteDisplay = document.getElementById('quoteDisplayId');

    quoteBtn.addEventListener('click', () => {
        fetch("https://api.api-ninjas.com/v1/quotes", {
            method: 'GET',
            headers: {
                'X-Api-Key': 'Ys9FAuFBgVj6Ou1MK/iRRQ==DFK7CinEJyidABoS'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const quote = data[0];
                    quoteDisplay.textContent = `"${quote.quote}" - ${quote.author}`;
                } else {
                    quoteDisplay.textContent = "No quote found.";
                }
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteDisplay.textContent = "Error loading quote.";
            });
    });
}