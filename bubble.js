document.getElementById('sortButton').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number).filter(num => !isNaN(num)); // Filter invalid numbers
    if (array.length > 0) {
        bubbleSort(array);
    } else {
        alert("Please enter valid numbers.");
    }
});

async function bubbleSort(array) {
    const visualization = document.getElementById('visualization');
    visualization.innerHTML = ''; // Clear previous visualization

    const maxVal = Math.max(...array); // Get the maximum value for scaling

    // Create bars for visualization
    array.forEach(num => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${(num / maxVal) * 100}px`; // Scale height based on max value
        visualization.appendChild(bar);
    });

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Update visualization
            updateBars(visualization.children, j, j + 1);

            if (array[j] > array[j + 1]) {
                // Swap elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                await new Promise(resolve => setTimeout(resolve, 500)); // Pause for visualization

                // Update the bars after swapping
                updateBarHeight(visualization.children, array);
            }
        }
    }

    // Final visualization
    updateBars(visualization.children, -1, -1);
}

function updateBars(bars, index1, index2) {
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = (i === index1 || i === index2) ? 'red' : 'teal';
    }
}

function updateBarHeight(bars, array) {
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = `${(array[i] / Math.max(...array)) * 100}px`; // Update height based on current array
    }
}
