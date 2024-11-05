const canvas = document.getElementById('sortCanvas');
const ctx = canvas.getContext('2d');

document.getElementById('startButton').addEventListener('click', async () => {
    const input = document.getElementById('inputArray').value;
    const array = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    if (array.length > 0) {
        await selectionSort(array);
    } else {
        alert('Please enter valid numbers.');
    }
});

const drawArray = (array, minIndex, currentIndex) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    array.forEach((value, index) => {
        ctx.fillStyle = (index === minIndex) ? 'red' : (index <= currentIndex) ? 'green' : 'white';
        ctx.fillRect(index * 10, canvas.height - value, 10, value);
    });
};

const selectionSort = async (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            drawArray(array, minIndex, i);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        drawArray(array, minIndex, i);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
};
