const imgElement = document.getElementById('img');
const inputElement = document.querySelector('input[type=file]');

function loadImage(event) {
    imgElement.style.display = 'block';
    imgElement.src = URL.createObjectURL(event.target.files[0]);
    predictImage();
}
function predictImage() {
    mobilenet.load().then(model => {
        model.classify(img).then(predictions => {
            const pred = document.getElementById('pred')
            pred.innerText = ''
            pred.innerText = 'The image is ' + predictions[0].className + ' by ' + (predictions[0].probability * 100).toFixed(2) + '%'
        })
    })
}