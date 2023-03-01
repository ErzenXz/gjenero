/////////////////

const modelUrl =
   "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/4";
let model;
let images = [];

async function loadModel() {
   model = await mobilenet.load();
   console.log("Model loaded");
}

function previewFiles() {
   const previewContainer = document.getElementById("selected-images");
   previewContainer.innerHTML = "";
   const fileList = document.getElementById("fileInput").files;
   for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();
      reader.onload = function (event) {
         const imageSrc = event.target.result;
         const image = new Image();
         image.src = imageSrc;
         image.classList.add("selected-image");
         images.push(image);
         previewContainer.appendChild(image);
      };
      reader.readAsDataURL(file);
   }
}

async function classifyImages() {
   const predictionsContainer = document.createElement("div");
   predictionsContainer.classList.add("predictions");
   const output = document.getElementById("output");
   output.innerHTML = "";
   output.appendChild(predictionsContainer);

   for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const predictions = await classifyImage(image);
      const predictionText = predictions
         .map((p) => `${p.className}: ${(p.probability * 100).toFixed(2)}%`)
         .join(", ");
      const imageContainer = document.createElement("div");
      imageContainer.appendChild(image);
      const predictionElement = document.createElement("p");
      predictionElement.innerHTML = predictionText;
      imageContainer.appendChild(predictionElement);
      predictionsContainer.appendChild(imageContainer);
   }
}

async function classifyImage(image) {
   return await model.classify(image);
}

loadModel();
