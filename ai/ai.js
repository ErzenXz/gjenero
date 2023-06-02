const net = new brain.NeuralNetwork();
let data = [];

const trainBtn = document.getElementById('train-btn');
trainBtn.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output').value;
    const inputVec = brain.utilities.oneHot(input);
    const outputVec = brain.utilities.oneHot(output);
    data.push({ input: inputVec, output: outputVec });
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
    net.train(data);
});

const predictBtn = document.getElementById('predict-btn');
predictBtn.addEventListener('click', () => {
    const message = document.getElementById('message').value;
    const inputVec = brain.utilities.oneHot(message);
    const output = net.run(inputVec);
    console.log(output);
});
