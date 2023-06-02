"use strict";

// const modelUrl =
//    "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/4"; // Efficient model

// const modelUrl = "https://tfhub.dev/google/imagenet/inception_v3/classification/5"; // Hard model
const modelUrl = "https://tfhub.dev/google/imagenet/mobilenet_v3_large_100_224/classification/5"; // Efficient model 2
// const modelUrl = "https://tfhub.dev/google/imagenet/resnet_v1_152/classification/5"; // imagenet/resnet_v1_152/classification
// const modelUrl =
// "https://tfhub.dev/google/imagenet/efficientnet_v2_imagenet21k_ft1k_b0/classification/2"; // imagenet/efficientnet_v2_imagenet21k_ft1k_b0/classification

// const modelUrl = "https://tfhub.dev/google/imagenet/efficientnet_v2_imagenet1k_b3/classification/2"; // Intense model

let model;

let min = 0;
let max = 0;

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
   document.getElementById("status").innerText = "Engine is currently running...";

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

      tags.push({
         tags: uniqueTags,
         orientation:
            Number(img.getAttribute("oldHeight")) > Number(img.getAttribute("oldWidth"))
               ? "V"
               : "H",
      });
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

   // Start the charts

   // Get the names and sizes of the files as separate arrays
   const names = filesArray.map((file) => file.name);
   const sizes = filesArray.map((file) => file.size);

   // Create a bar chart to show the sizes of the files
   const ctx = document.getElementById("fileSize").getContext("2d");
   const fileSizeChart = new Chart(ctx, {
      type: "bar",
      data: {
         labels: names,
         datasets: [
            {
               label: "Image Size",
               data: sizes,
               backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
               borderWidth: 1,
            },
         ],
      },
      options: {
         scales: {
            y: {
               ticks: {
                  callback: function (value, index, values) {
                     return formatBytes(value);
                  },
               },
            },
         },
      },
   });

   // Create a pie chart to show the percentage of file types
   const types = filesArray.map((file) => file.name.split(".").pop());
   const typeCounts = {};
   types.forEach((type) => {
      typeCounts[type] = (typeCounts[type] || 0) + 1;
   });
   const typeLabels = Object.keys(typeCounts);
   const typeData = typeLabels.map((label) => typeCounts[label]);

   const ctx2 = document.getElementById("fileType").getContext("2d");
   const fileTypeChart = new Chart(ctx2, {
      type: "pie",
      data: {
         labels: typeLabels,
         datasets: [
            {
               data: typeData,
               backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF8A80",
                  "#C5CAE9",
                  "#E0E0E0",
                  "#BDBDBD",
               ],
               borderWidth: 1,
            },
         ],
      },
      options: {
         legend: {
            position: "bottom",
         },
      },
   });
}

let filesArray = [];
let sizeArray = [];

async function handleFileUpload(event) {
   console.time();
   try {
      const files = event.target.files;
      max = files.length;
      document.getElementById("time").innerText = calculateTime(max);
      if (max < 2) {
         alert("The minimum number of files required to upload is 1");
         return false;
      }
      prog.value = 0;
      prog.max = max + max;

      const images = [];
      let totalSize = 0;

      document.getElementById("fileInput").classList.add("hidden");
      document.getElementById("running").classList.remove("hidden");
      document.getElementById("results").classList.add("hidden");
      let index = 0;

      for (let i = 0; i < files.length; i++) {
         const file = files[i];
         let fileName = file.name;
         filesArray.push({
            name: fileName,
            size: file.size,
         });

         sizeArray.push(file.size);
         const img = document.createElement("img");
         const reader = new FileReader();
         document.getElementById("status").innerText = `Preparing to resize images...`;

         reader.onload = function (e) {
            img.onload = function () {
               const canvas = document.createElement("canvas");
               canvas.width = 224;
               canvas.height = 224;
               const ctx = canvas.getContext("2d");
               ctx.drawImage(img, 0, 0, 224, 224);
               const resizedImg = new Image();
               resizedImg.setAttribute("oldWidth", `${img.width}`);
               resizedImg.setAttribute("oldHeight", `${img.height}`);
               resizedImg.onload = function () {
                  images.push(resizedImg);
                  if (images.length === files.length) {
                     classifyImages(images).then((tags) => {
                        downloadTxtFile(tags);
                     });
                  }
               };
               // Update the time until completion
               document.getElementById("timeLeft").innerText = calculateTime(max - i, 1);
               resizedImg.src = canvas.toDataURL();
               index++;
               prog.value += 1;
               document.getElementById(
                  "status"
               ).innerText = `Engine is currently resizing images... (${index}/${files.length})`;
            };
            img.src = e.target.result;
         };
         reader.readAsDataURL(file);
      }

      for (let i = 0; i < sizeArray.length; i++) {
         totalSize += sizeArray[i];
      }

      totalSize = formatBytes(totalSize);

      document.getElementById("fileSizeA").innerHTML = "Total image size: " + totalSize;
   } catch (error) {
      alert("An error occurred : " + error.message);
   }
}

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

document.getElementById("fileInput").addEventListener("change", handleFileUpload);

loadModel();

// Set up presets with number of images and time in milliseconds
const presets = [
   { numImages: 2, time: 783 },
   { numImages: 3, time: 1258 },
   { numImages: 4, time: 1654 },
   { numImages: 5, time: 2504 },
   { numImages: 12, time: 4566 },
   { numImages: 15, time: 5733 },
   { numImages: 17, time: 7898 },
   { numImages: 20, time: 8949 },
   { numImages: 30, time: 11801 },
   { numImages: 45, time: 18870 },
   { numImages: 60, time: 28408 },
   { numImages: 65, time: 30726 },
   { numImages: 80, time: 50525 },
   { numImages: 106, time: 52566 },
   { numImages: 132, time: 71483 },
];

function calculateTime(numImages, type) {
   // Find the preset with the minimum number of images greater than or equal to numImages
   const preset = presets.find((p) => p.numImages >= numImages);

   if (!preset) {
      // If there is no preset for the given number of images, return null
      return null;
   }

   // Calculate the time per image by dividing the preset time by the number of images
   const timePerImage = preset.time / preset.numImages;

   // Calculate the estimated time to edit numImages by multiplying the time per image by numImages
   const estimatedTime = timePerImage * numImages;

   // Return the estimated time rounded to the nearest millisecond
   //console.log("Estimated time to classify images is " + estimatedTime / 1000 + " seconds");
   let text;
   if (type == 1) {
      text = Math.round(estimatedTime / 1000) + " seconds left";
   } else {
      text = "ETA: " + Math.round(estimatedTime / 1000) + " seconds";
   }
   return text;
}

function timeConvert(ms) {
   let seconds = (ms / 1000).toFixed(1);
   let minutes = (ms / (1000 * 60)).toFixed(1);
   let hours = (ms / (1000 * 60 * 60)).toFixed(1);
   let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
   if (seconds < 60) return seconds + " seconds";
   else if (minutes < 60) return minutes + " minutes";
   else if (hours < 24) return hours + " hours";
   else return days + " days";
}

function formatBytes(bytes, decimals = 2) {
   if (!+bytes) return "0 bytes";

   const k = 1024;
   const dm = decimals < 0 ? 0 : decimals;
   const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

   const i = Math.floor(Math.log(bytes) / Math.log(k));

   return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
