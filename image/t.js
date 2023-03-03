/////////////////////// OLD

// const modelUrl =
//    "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/4"; // Efficient model

// const modelUrl = "https://tfhub.dev/google/imagenet/inception_v3/classification/5"; // Hard model
const modelUrl = "https://tfhub.dev/google/imagenet/mobilenet_v3_large_100_224/classification/5"; // Efficient model 2

// const modelUrl = "https://tfhub.dev/google/imagenet/efficientnet_v2_imagenet1k_b3/classification/2"; // Intense model
let model;

let min = 0;
let max = 0;

function saveFile() {
   const element = document.createElement("a");
   const file = new Blob([document.getElementById("output").value], { type: "text/plain" });
   let date = new Date();
   let dateTime =
      date.getTime() +
      date.getUTCSeconds() +
      "/ " +
      date.getHours() +
      date.getMinutes() +
      ":" +
      date.getSeconds();

   element.href = URL.createObjectURL(file);
   element.download = `tags-${dateTime}.txt`;
   document.body.appendChild(element);
   element.click();
}

let prog = document.getElementById("progress");
if (prog.value != undefined || prog.value != null) {
   prog.value = 0;
}

async function loadModel() {
   //await tf.setBackend("cpu"); // switch to CPU backend
   model = await mobilenet.load();
   document.getElementById("mini").classList.remove("hidden");
   document.getElementById("loading").classList.add("hidden");
   console.log("Model loaded");
}

async function classifyImages(images) {
   const tags = [];
   document.getElementById("status").innerText = "Engine is running...";

   for (let i = 0; i < images.length; i++) {
      let img = images[i];
      const predictions = await model.classify(img);
      prog.value += 1;
      const imageTags = predictions
         .map((p) => p.className.replace(/,/g, "").split(" "))
         .flat()
         .filter((c) => c.indexOf("'") === -1)
         .slice(0, 5);

      const uniqueTags = [...new Set(imageTags)];

      tags.push({ tags: uniqueTags, orientation: img.height > img.width ? "V" : "H" });
      images[i] = null;
      img[i] = null;
      tf.dispose(predictions); // dispose of the predictions tensor
   }
   console.timeEnd();
   return tags;
}

function downloadTxtFile(tags) {
   let content = `${tags.length}\n`;

   for (let i = 0; i < tags.length; i++) {
      const imageTags = tags[i].tags.join(" ");
      const orientation = tags[i].orientation;
      const line = `${orientation} ${imageTags.split(" ").length} ${imageTags}\n`;
      content += line;
   }

   const element = document.createElement("a");
   const file = new Blob([content], { type: "text/plain" });
   let date = new Date();
   let dateTime =
      date.getTime() +
      date.getUTCSeconds() +
      "/ " +
      date.getHours() +
      date.getMinutes() +
      ":" +
      date.getSeconds();

   document.getElementById("output").innerHTML = content;

   element.href = URL.createObjectURL(file);
   element.download = `tags-${dateTime}.txt`;
   document.body.appendChild(element);
   //element.click();
   document.getElementById("fileInput").classList.remove("hidden");
   document.getElementById("running").classList.add("hidden");
   document.getElementById("results").classList.remove("hidden");
}

async function handleFileUpload(event) {
   console.time();
   try {
      const files = event.target.files;
      max = files.length;
      if (max < 2) {
         alert("The minimum number of files required to upload is 1");
         return false;
      }
      prog.value = 0;
      prog.max = max;

      const images = [];

      document.getElementById("fileInput").classList.add("hidden");
      document.getElementById("running").classList.remove("hidden");
      document.getElementById("results").classList.add("hidden");

      for (let i = 0; i < files.length; i++) {
         const file = files[i];
         let fileName = file.name;
         const img = document.createElement("img");
         const reader = new FileReader();
         document.getElementById(
            "status"
         ).innerText = `Resizing image (${fileName})...  ${i}/${files.length}`;

         reader.onload = function (e) {
            img.onload = function () {
               const canvas = document.createElement("canvas");
               canvas.width = 224;
               canvas.height = 224;
               const ctx = canvas.getContext("2d");
               ctx.drawImage(img, 0, 0, 224, 224);
               const resizedImg = new Image();
               resizedImg.onload = function () {
                  images.push(resizedImg);
                  if (images.length === files.length) {
                     classifyImages(images).then((tags) => {
                        downloadTxtFile(tags);
                     });
                  }
               };
               resizedImg.src = canvas.toDataURL();
            };
            img.src = e.target.result;
         };

         reader.readAsDataURL(file);
      }
   } catch (error) {
      alert("An error occurred : " + error.message);
   }
}

document.getElementById("fileInput").addEventListener("change", handleFileUpload);

loadModel();

document.getElementById("saveButton").addEventListener("click", function () {
   saveFile();
});
