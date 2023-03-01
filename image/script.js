const modelUrl =
   "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/4";
let model;

let min = 0;
let max = 0;

let prog = document.getElementById("progress");
if (prog.value != undefined || prog.value != null) {
   prog.value = 0;
}

async function loadModel() {
   model = await mobilenet.load();
   console.log("Model loaded");
}

async function classifyImages(images) {
   const tags = [];

   for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const predictions = await model.classify(img);
      prog.value += 1;
      const imageTags = predictions
         .map((p) => p.className.replace(/,/g, ""))
         .filter((c) => c.indexOf("'") === -1)
         .slice(0, 5); // keep top 5 tags

      tags.push({ tags: imageTags, orientation: img.height > img.width ? "V" : "H" });
   }

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
   element.href = URL.createObjectURL(file);
   element.download = `tags-${dateTime}.txt`;
   document.body.appendChild(element);
   element.click();
   document.getElementById("fileInput").classList.remove("hidden");
   document.getElementById("running").classList.add("hidden");
}

async function handleFileUpload(event) {
   const files = event.target.files;
   max = files.length;
   prog.value = 0;
   prog.max = max;

   const images = [];

   document.getElementById("fileInput").classList.add("hidden");
   document.getElementById("running").classList.remove("hidden");

   for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const img = document.createElement("img");
      const reader = new FileReader();

      reader.onload = function (e) {
         img.src = e.target.result;
         images.push(img);

         if (images.length === files.length) {
            classifyImages(images).then((tags) => {
               downloadTxtFile(tags);
            });
         }
      };

      reader.readAsDataURL(file);
   }
}

document.getElementById("fileInput").addEventListener("change", handleFileUpload);

loadModel();
