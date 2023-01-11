document.getElementById("loading").style.display = "none";

let start, end, time;
let nameOfGenerated, nameOfHorizontal, nameOfVertical;

let numbersARRAY = [];
let horizontalARRAY = [];
let verticalARRAY = [];

const smallLength = 1000;

const statusP = document.getElementById("status");

function split(x, n, array) {
   if (x < n)
      alert(
         "An error has occurred while splitting, please refresh the page and try again. If this error persists please contact us!"
      );
   else if (x % n == 0) {
      for (let i = 0; i < n; i++) array.push(x / n);
   } else {
      let zp = n - (x % n);
      let pp = Math.floor(x / n);
      for (let i = 0; i < n; i++) {
         if (i >= zp) {
            array.push(pp + 1);
         } else {
            array.push(pp);
         }
      }
   }
}

function fastGEN(items) {
   let array = [];
   split(items, 2, array);
   let h = array[0];
   let v = array[1];
   let tagsMIN = 10;
   let tagsMAX = 20;
   let unique = 50;
   let tagLetters = 5;

   document.getElementById("number").value = items;
   document.getElementById("numberH").value = h;
   document.getElementById("letters").value = tagLetters;
   document.getElementById("unique").value = unique;
   document.getElementById("min").value = tagsMIN;
   document.getElementById("max").value = tagsMAX;
   generateDocumnet();
}

let running = false;

function generateDocumnet() {
   if (running) {
      Swal.fire("The generator is already running, please wait until the generator completes.");
      return false;
   }
   statusP.innerText = "Validating the generator data...";
   let itemsNow = Number(document.getElementById("number").value);

   let hImages = Number(document.getElementById("numberH").value);
   let tagLetters = Number(document.getElementById("letters").value);
   let uniqueTags = Number(document.getElementById("unique").value);
   let vImages;
   if (hImages > itemsNow) hImages = itemsNow;
   document.getElementById("numberH").value = hImages;
   if (hImages == "") {
      hImages = itemsNow;
      document.getElementById("numberH").value = hImages;
   }
   vImages = itemsNow - hImages;
   if (hImages == "1.01") {
      hImages = 0;
      vImages = itemsNow;
      document.getElementById("numberH").value = hImages;
      document.getElementById("numberV").value = vImages;
   }
   if (uniqueTags == "" || uniqueTags > 100 || uniqueTags < 0) {
      uniqueTags = 50;
      document.getElementById("unique").value = uniqueTags;
   }
   if (tagLetters == "" || tagLetters > 100 || tagLetters < 0) {
      tagLetters = 4;
      document.getElementById("letters").value = tagLetters;
   }
   document.getElementById("numberV").value = vImages;
   let minTags = Number(document.getElementById("min").value);
   let maxTags = Number(document.getElementById("max").value);

   if (minTags == "" || maxTags == "") {
      minTags = 1;
      maxTags = 20;
      document.getElementById("min").value = minTags;
      document.getElementById("max").value = maxTags;
   }

   if (minTags > maxTags) {
      minTags = 1;
      document.getElementById("min").value = minTags;
   }

   if (itemsNow == "" || itemsNow < 5 || itemsNow > 250000000) {
      alert("Please enter a valid number, between 1000 and 25,000,000.");
      return false;
   }

   if (itemsNow < smallLength) {
   } else {
      statusP.innerText = "Splitting the job and collecting data...";

      split(itemsNow, 100, numbersARRAY);
      if (hImages == 0) {
         for (let i = 0; i < 100; i++) {
            horizontalARRAY.push(0);
         }
      } else {
         split(hImages, 100, horizontalARRAY);
      }

      if (vImages == 0) {
         for (let i = 0; i < 100; i++) {
            verticalARRAY.push(0);
         }
      } else {
         split(vImages, 100, verticalARRAY);
      }
   }

   console.log(hImages + "   " + vImages);
   startThreads(itemsNow, minTags, maxTags, hImages, vImages, tagLetters, uniqueTags);
   console.time();
   start = Date.now();
   statusP.innerText = "Validating finished successfully!";
}

let response;

function perqind(num, amount) {
   return Math.floor((num * amount) / 100);
}

// Web Worker Setup

if (typeof Worker !== "undefined") {
   // Web worker support!

   function startThreads(length, min, max, h, v, letters, unique) {
      let ReturnedText = length;
      let prog = document.getElementById("progress");
      prog.max = length;
      if (prog.value != undefined || prog.value != null) {
         prog.value = 0;
      }
      //prog.value = 0;
      document.getElementById("container").classList.add("hidden");
      document.getElementById("fastGenerate").classList.add("hidden");
      document.getElementById("loading").style.display = "flex";
      let lengthV = Math.ceil(length / 100);
      let uniqueTags = perqind(lengthV, unique);
      running = true;
      statusP.innerText = "Getting the worker ready...";

      let defaultWorker = new Worker("./small-engine.js");

      worker1 = new Worker("./worker.js");
      worker2 = new Worker("./worker.js");
      worker3 = new Worker("./worker.js");
      worker4 = new Worker("./worker.js");
      worker5 = new Worker("./worker.js");
      worker6 = new Worker("./worker.js");
      worker7 = new Worker("./worker.js");
      worker8 = new Worker("./worker.js");
      worker9 = new Worker("./worker.js");
      worker10 = new Worker("./worker.js");
      worker11 = new Worker("./worker.js");
      worker12 = new Worker("./worker.js");
      worker13 = new Worker("./worker.js");
      worker14 = new Worker("./worker.js");
      worker15 = new Worker("./worker.js");
      worker16 = new Worker("./worker.js");
      worker17 = new Worker("./worker.js");
      worker18 = new Worker("./worker.js");
      worker19 = new Worker("./worker.js");
      worker20 = new Worker("./worker.js");
      worker21 = new Worker("./worker.js");
      worker22 = new Worker("./worker.js");
      worker23 = new Worker("./worker.js");
      worker24 = new Worker("./worker.js");
      worker25 = new Worker("./worker.js");
      worker26 = new Worker("./worker.js");
      worker27 = new Worker("./worker.js");
      worker28 = new Worker("./worker.js");
      worker29 = new Worker("./worker.js");
      worker30 = new Worker("./worker.js");
      worker31 = new Worker("./worker.js");
      worker32 = new Worker("./worker.js");
      worker33 = new Worker("./worker.js");
      worker34 = new Worker("./worker.js");
      worker35 = new Worker("./worker.js");
      worker36 = new Worker("./worker.js");
      worker37 = new Worker("./worker.js");
      worker38 = new Worker("./worker.js");
      worker39 = new Worker("./worker.js");
      worker40 = new Worker("./worker.js");
      worker41 = new Worker("./worker.js");
      worker42 = new Worker("./worker.js");
      worker43 = new Worker("./worker.js");
      worker44 = new Worker("./worker.js");
      worker45 = new Worker("./worker.js");
      worker46 = new Worker("./worker.js");
      worker47 = new Worker("./worker.js");
      worker48 = new Worker("./worker.js");
      worker49 = new Worker("./worker.js");
      worker50 = new Worker("./worker.js");
      worker51 = new Worker("./worker.js");
      worker52 = new Worker("./worker.js");
      worker53 = new Worker("./worker.js");
      worker54 = new Worker("./worker.js");
      worker55 = new Worker("./worker.js");
      worker56 = new Worker("./worker.js");
      worker57 = new Worker("./worker.js");
      worker58 = new Worker("./worker.js");
      worker59 = new Worker("./worker.js");
      worker60 = new Worker("./worker.js");
      worker61 = new Worker("./worker.js");
      worker62 = new Worker("./worker.js");
      worker63 = new Worker("./worker.js");
      worker64 = new Worker("./worker.js");
      worker65 = new Worker("./worker.js");
      worker66 = new Worker("./worker.js");
      worker67 = new Worker("./worker.js");
      worker68 = new Worker("./worker.js");
      worker69 = new Worker("./worker.js");
      worker70 = new Worker("./worker.js");
      worker71 = new Worker("./worker.js");
      worker72 = new Worker("./worker.js");
      worker73 = new Worker("./worker.js");
      worker74 = new Worker("./worker.js");
      worker75 = new Worker("./worker.js");
      worker76 = new Worker("./worker.js");
      worker77 = new Worker("./worker.js");
      worker78 = new Worker("./worker.js");
      worker79 = new Worker("./worker.js");
      worker80 = new Worker("./worker.js");
      worker81 = new Worker("./worker.js");
      worker82 = new Worker("./worker.js");
      worker83 = new Worker("./worker.js");
      worker84 = new Worker("./worker.js");
      worker85 = new Worker("./worker.js");
      worker86 = new Worker("./worker.js");
      worker87 = new Worker("./worker.js");
      worker88 = new Worker("./worker.js");
      worker89 = new Worker("./worker.js");
      worker90 = new Worker("./worker.js");
      worker91 = new Worker("./worker.js");
      worker92 = new Worker("./worker.js");
      worker93 = new Worker("./worker.js");
      worker94 = new Worker("./worker.js");
      worker95 = new Worker("./worker.js");
      worker96 = new Worker("./worker.js");
      worker97 = new Worker("./worker.js");
      worker98 = new Worker("./worker.js");
      worker99 = new Worker("./worker.js");
      worker100 = new Worker("./worker.js");

      defaultWorker.onmessage = defaultHasCompleted;

      worker1.onmessage = workerHasCompleted;
      worker2.onmessage = workerHasCompleted;
      worker3.onmessage = workerHasCompleted;
      worker4.onmessage = workerHasCompleted;
      worker5.onmessage = workerHasCompleted;
      worker6.onmessage = workerHasCompleted;
      worker7.onmessage = workerHasCompleted;
      worker8.onmessage = workerHasCompleted;
      worker9.onmessage = workerHasCompleted;
      worker10.onmessage = workerHasCompleted;
      worker11.onmessage = workerHasCompleted;
      worker12.onmessage = workerHasCompleted;
      worker13.onmessage = workerHasCompleted;
      worker14.onmessage = workerHasCompleted;
      worker15.onmessage = workerHasCompleted;
      worker16.onmessage = workerHasCompleted;
      worker17.onmessage = workerHasCompleted;
      worker18.onmessage = workerHasCompleted;
      worker19.onmessage = workerHasCompleted;
      worker20.onmessage = workerHasCompleted;
      worker21.onmessage = workerHasCompleted;
      worker22.onmessage = workerHasCompleted;
      worker23.onmessage = workerHasCompleted;
      worker24.onmessage = workerHasCompleted;
      worker25.onmessage = workerHasCompleted;
      worker26.onmessage = workerHasCompleted;
      worker27.onmessage = workerHasCompleted;
      worker28.onmessage = workerHasCompleted;
      worker29.onmessage = workerHasCompleted;
      worker30.onmessage = workerHasCompleted;
      worker31.onmessage = workerHasCompleted;
      worker32.onmessage = workerHasCompleted;
      worker33.onmessage = workerHasCompleted;
      worker34.onmessage = workerHasCompleted;
      worker35.onmessage = workerHasCompleted;
      worker36.onmessage = workerHasCompleted;
      worker37.onmessage = workerHasCompleted;
      worker38.onmessage = workerHasCompleted;
      worker39.onmessage = workerHasCompleted;
      worker40.onmessage = workerHasCompleted;
      worker41.onmessage = workerHasCompleted;
      worker42.onmessage = workerHasCompleted;
      worker43.onmessage = workerHasCompleted;
      worker44.onmessage = workerHasCompleted;
      worker45.onmessage = workerHasCompleted;
      worker46.onmessage = workerHasCompleted;
      worker47.onmessage = workerHasCompleted;
      worker48.onmessage = workerHasCompleted;
      worker49.onmessage = workerHasCompleted;
      worker50.onmessage = workerHasCompleted;
      worker51.onmessage = workerHasCompleted;
      worker52.onmessage = workerHasCompleted;
      worker53.onmessage = workerHasCompleted;
      worker54.onmessage = workerHasCompleted;
      worker55.onmessage = workerHasCompleted;
      worker56.onmessage = workerHasCompleted;
      worker57.onmessage = workerHasCompleted;
      worker58.onmessage = workerHasCompleted;
      worker59.onmessage = workerHasCompleted;
      worker60.onmessage = workerHasCompleted;
      worker61.onmessage = workerHasCompleted;
      worker62.onmessage = workerHasCompleted;
      worker63.onmessage = workerHasCompleted;
      worker64.onmessage = workerHasCompleted;
      worker65.onmessage = workerHasCompleted;
      worker66.onmessage = workerHasCompleted;
      worker67.onmessage = workerHasCompleted;
      worker68.onmessage = workerHasCompleted;
      worker69.onmessage = workerHasCompleted;
      worker70.onmessage = workerHasCompleted;
      worker71.onmessage = workerHasCompleted;
      worker72.onmessage = workerHasCompleted;
      worker73.onmessage = workerHasCompleted;
      worker74.onmessage = workerHasCompleted;
      worker75.onmessage = workerHasCompleted;
      worker76.onmessage = workerHasCompleted;
      worker77.onmessage = workerHasCompleted;
      worker78.onmessage = workerHasCompleted;
      worker79.onmessage = workerHasCompleted;
      worker80.onmessage = workerHasCompleted;
      worker81.onmessage = workerHasCompleted;
      worker82.onmessage = workerHasCompleted;
      worker83.onmessage = workerHasCompleted;
      worker84.onmessage = workerHasCompleted;
      worker85.onmessage = workerHasCompleted;
      worker86.onmessage = workerHasCompleted;
      worker87.onmessage = workerHasCompleted;
      worker88.onmessage = workerHasCompleted;
      worker89.onmessage = workerHasCompleted;
      worker90.onmessage = workerHasCompleted;
      worker91.onmessage = workerHasCompleted;
      worker92.onmessage = workerHasCompleted;
      worker93.onmessage = workerHasCompleted;
      worker94.onmessage = workerHasCompleted;
      worker95.onmessage = workerHasCompleted;
      worker96.onmessage = workerHasCompleted;
      worker97.onmessage = workerHasCompleted;
      worker98.onmessage = workerHasCompleted;
      worker99.onmessage = workerHasCompleted;
      worker100.onmessage = workerHasCompleted;

      if (length < smallLength) {
         defaultWorker.postMessage({
            id: 1,
            count: length,
            minimum: min,
            maximum: max,
            horizontal: h,
            vertical: v,
            lett: letters,
            unique: perqind(length, unique),
         });
         statusP.innerText = "Starting S-Engine and transferring data...";
      } else {
         statusP.innerText = "Starting workers...";
         worker1.postMessage({
            id: 1,
            count: numbersARRAY[0],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[0],
            vertical: verticalARRAY[0],
            lett: letters,
            unique: perqind(numbersARRAY[0], unique),
         });
         worker2.postMessage({
            id: 2,
            count: numbersARRAY[1],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[1],
            vertical: verticalARRAY[1],
            lett: letters,
            unique: perqind(numbersARRAY[1], unique),
         });
         worker3.postMessage({
            id: 3,
            count: numbersARRAY[2],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[2],
            vertical: verticalARRAY[2],
            lett: letters,
            unique: perqind(numbersARRAY[2], unique),
         });
         worker4.postMessage({
            id: 4,
            count: numbersARRAY[3],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[3],
            vertical: verticalARRAY[3],
            lett: letters,
            unique: perqind(numbersARRAY[3], unique),
         });
         worker5.postMessage({
            id: 5,
            count: numbersARRAY[4],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[4],
            vertical: verticalARRAY[4],
            lett: letters,
            unique: perqind(numbersARRAY[4], unique),
         });
         worker6.postMessage({
            id: 6,
            count: numbersARRAY[5],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[5],
            vertical: verticalARRAY[5],
            lett: letters,
            unique: perqind(numbersARRAY[5], unique),
         });
         worker7.postMessage({
            id: 7,
            count: numbersARRAY[6],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[6],
            vertical: verticalARRAY[6],
            lett: letters,
            unique: perqind(numbersARRAY[6], unique),
         });
         worker8.postMessage({
            id: 8,
            count: numbersARRAY[7],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[7],
            vertical: verticalARRAY[7],
            lett: letters,
            unique: perqind(numbersARRAY[7], unique),
         });
         worker9.postMessage({
            id: 9,
            count: numbersARRAY[8],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[8],
            vertical: verticalARRAY[8],
            lett: letters,
            unique: perqind(numbersARRAY[8], unique),
         });
         worker10.postMessage({
            id: 10,
            count: numbersARRAY[9],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[9],
            vertical: verticalARRAY[9],
            lett: letters,
            unique: perqind(numbersARRAY[9], unique),
         });
         worker11.postMessage({
            id: 11,
            count: numbersARRAY[10],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[10],
            vertical: verticalARRAY[10],
            lett: letters,
            unique: perqind(numbersARRAY[10], unique),
         });
         worker12.postMessage({
            id: 12,
            count: numbersARRAY[11],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[11],
            vertical: verticalARRAY[11],
            lett: letters,
            unique: perqind(numbersARRAY[11], unique),
         });
         worker13.postMessage({
            id: 13,
            count: numbersARRAY[12],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[12],
            vertical: verticalARRAY[12],
            lett: letters,
            unique: perqind(numbersARRAY[12], unique),
         });
         worker14.postMessage({
            id: 14,
            count: numbersARRAY[13],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[13],
            vertical: verticalARRAY[13],
            lett: letters,
            unique: perqind(numbersARRAY[13], unique),
         });
         worker15.postMessage({
            id: 15,
            count: numbersARRAY[14],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[14],
            vertical: verticalARRAY[14],
            lett: letters,
            unique: perqind(numbersARRAY[14], unique),
         });
         worker16.postMessage({
            id: 16,
            count: numbersARRAY[15],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[15],
            vertical: verticalARRAY[15],
            lett: letters,
            unique: perqind(numbersARRAY[15], unique),
         });
         worker17.postMessage({
            id: 17,
            count: numbersARRAY[16],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[16],
            vertical: verticalARRAY[16],
            lett: letters,
            unique: perqind(numbersARRAY[16], unique),
         });
         worker18.postMessage({
            id: 18,
            count: numbersARRAY[17],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[17],
            vertical: verticalARRAY[17],
            lett: letters,
            unique: perqind(numbersARRAY[17], unique),
         });
         worker19.postMessage({
            id: 19,
            count: numbersARRAY[18],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[18],
            vertical: verticalARRAY[18],
            lett: letters,
            unique: perqind(numbersARRAY[18], unique),
         });
         worker20.postMessage({
            id: 20,
            count: numbersARRAY[19],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[19],
            vertical: verticalARRAY[19],
            lett: letters,
            unique: perqind(numbersARRAY[19], unique),
         });
         worker21.postMessage({
            id: 21,
            count: numbersARRAY[20],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[20],
            vertical: verticalARRAY[20],
            lett: letters,
            unique: perqind(numbersARRAY[20], unique),
         });
         worker22.postMessage({
            id: 22,
            count: numbersARRAY[21],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[21],
            vertical: verticalARRAY[21],
            lett: letters,
            unique: perqind(numbersARRAY[21], unique),
         });
         worker23.postMessage({
            id: 23,
            count: numbersARRAY[22],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[22],
            vertical: verticalARRAY[22],
            lett: letters,
            unique: perqind(numbersARRAY[22], unique),
         });
         worker24.postMessage({
            id: 24,
            count: numbersARRAY[23],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[23],
            vertical: verticalARRAY[23],
            lett: letters,
            unique: perqind(numbersARRAY[23], unique),
         });
         worker25.postMessage({
            id: 25,
            count: numbersARRAY[24],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[24],
            vertical: verticalARRAY[24],
            lett: letters,
            unique: perqind(numbersARRAY[24], unique),
         });
         worker26.postMessage({
            id: 26,
            count: numbersARRAY[25],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[25],
            vertical: verticalARRAY[25],
            lett: letters,
            unique: perqind(numbersARRAY[25], unique),
         });
         worker27.postMessage({
            id: 27,
            count: numbersARRAY[26],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[26],
            vertical: verticalARRAY[26],
            lett: letters,
            unique: perqind(numbersARRAY[26], unique),
         });
         worker28.postMessage({
            id: 28,
            count: numbersARRAY[27],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[27],
            vertical: verticalARRAY[27],
            lett: letters,
            unique: perqind(numbersARRAY[27], unique),
         });
         worker29.postMessage({
            id: 29,
            count: numbersARRAY[28],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[28],
            vertical: verticalARRAY[28],
            lett: letters,
            unique: perqind(numbersARRAY[28], unique),
         });
         worker30.postMessage({
            id: 30,
            count: numbersARRAY[29],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[29],
            vertical: verticalARRAY[29],
            lett: letters,
            unique: perqind(numbersARRAY[29], unique),
         });
         worker31.postMessage({
            id: 31,
            count: numbersARRAY[30],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[30],
            vertical: verticalARRAY[30],
            lett: letters,
            unique: perqind(numbersARRAY[30], unique),
         });
         worker32.postMessage({
            id: 32,
            count: numbersARRAY[31],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[31],
            vertical: verticalARRAY[31],
            lett: letters,
            unique: perqind(numbersARRAY[31], unique),
         });
         worker33.postMessage({
            id: 33,
            count: numbersARRAY[32],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[32],
            vertical: verticalARRAY[32],
            lett: letters,
            unique: perqind(numbersARRAY[32], unique),
         });
         worker34.postMessage({
            id: 34,
            count: numbersARRAY[33],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[33],
            vertical: verticalARRAY[33],
            lett: letters,
            unique: perqind(numbersARRAY[33], unique),
         });
         worker35.postMessage({
            id: 35,
            count: numbersARRAY[34],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[34],
            vertical: verticalARRAY[34],
            lett: letters,
            unique: perqind(numbersARRAY[34], unique),
         });
         worker36.postMessage({
            id: 36,
            count: numbersARRAY[35],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[35],
            vertical: verticalARRAY[35],
            lett: letters,
            unique: perqind(numbersARRAY[35], unique),
         });
         worker37.postMessage({
            id: 37,
            count: numbersARRAY[36],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[36],
            vertical: verticalARRAY[36],
            lett: letters,
            unique: perqind(numbersARRAY[36], unique),
         });
         worker38.postMessage({
            id: 38,
            count: numbersARRAY[37],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[37],
            vertical: verticalARRAY[37],
            lett: letters,
            unique: perqind(numbersARRAY[37], unique),
         });
         worker39.postMessage({
            id: 39,
            count: numbersARRAY[38],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[38],
            vertical: verticalARRAY[38],
            lett: letters,
            unique: perqind(numbersARRAY[38], unique),
         });
         worker40.postMessage({
            id: 40,
            count: numbersARRAY[39],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[39],
            vertical: verticalARRAY[39],
            lett: letters,
            unique: perqind(numbersARRAY[39], unique),
         });
         worker41.postMessage({
            id: 41,
            count: numbersARRAY[40],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[40],
            vertical: verticalARRAY[40],
            lett: letters,
            unique: perqind(numbersARRAY[40], unique),
         });
         worker42.postMessage({
            id: 42,
            count: numbersARRAY[41],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[41],
            vertical: verticalARRAY[41],
            lett: letters,
            unique: perqind(numbersARRAY[41], unique),
         });
         worker43.postMessage({
            id: 43,
            count: numbersARRAY[42],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[42],
            vertical: verticalARRAY[42],
            lett: letters,
            unique: perqind(numbersARRAY[42], unique),
         });
         worker44.postMessage({
            id: 44,
            count: numbersARRAY[43],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[43],
            vertical: verticalARRAY[43],
            lett: letters,
            unique: perqind(numbersARRAY[43], unique),
         });
         worker45.postMessage({
            id: 45,
            count: numbersARRAY[44],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[44],
            vertical: verticalARRAY[44],
            lett: letters,
            unique: perqind(numbersARRAY[44], unique),
         });
         worker46.postMessage({
            id: 46,
            count: numbersARRAY[45],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[45],
            vertical: verticalARRAY[45],
            lett: letters,
            unique: perqind(numbersARRAY[45], unique),
         });
         worker47.postMessage({
            id: 47,
            count: numbersARRAY[46],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[46],
            vertical: verticalARRAY[46],
            lett: letters,
            unique: perqind(numbersARRAY[46], unique),
         });
         worker48.postMessage({
            id: 48,
            count: numbersARRAY[47],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[47],
            vertical: verticalARRAY[47],
            lett: letters,
            unique: perqind(numbersARRAY[47], unique),
         });
         worker49.postMessage({
            id: 49,
            count: numbersARRAY[48],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[48],
            vertical: verticalARRAY[48],
            lett: letters,
            unique: perqind(numbersARRAY[48], unique),
         });
         worker50.postMessage({
            id: 50,
            count: numbersARRAY[49],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[49],
            vertical: verticalARRAY[49],
            lett: letters,
            unique: perqind(numbersARRAY[49], unique),
         });
         worker51.postMessage({
            id: 51,
            count: numbersARRAY[50],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[50],
            vertical: verticalARRAY[50],
            lett: letters,
            unique: perqind(numbersARRAY[50], unique),
         });
         worker52.postMessage({
            id: 52,
            count: numbersARRAY[51],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[51],
            vertical: verticalARRAY[51],
            lett: letters,
            unique: perqind(numbersARRAY[51], unique),
         });
         worker53.postMessage({
            id: 53,
            count: numbersARRAY[52],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[52],
            vertical: verticalARRAY[52],
            lett: letters,
            unique: perqind(numbersARRAY[52], unique),
         });
         worker54.postMessage({
            id: 54,
            count: numbersARRAY[53],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[53],
            vertical: verticalARRAY[53],
            lett: letters,
            unique: perqind(numbersARRAY[53], unique),
         });
         worker55.postMessage({
            id: 55,
            count: numbersARRAY[54],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[54],
            vertical: verticalARRAY[54],
            lett: letters,
            unique: perqind(numbersARRAY[54], unique),
         });
         worker56.postMessage({
            id: 56,
            count: numbersARRAY[55],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[55],
            vertical: verticalARRAY[55],
            lett: letters,
            unique: perqind(numbersARRAY[55], unique),
         });
         worker57.postMessage({
            id: 57,
            count: numbersARRAY[56],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[56],
            vertical: verticalARRAY[56],
            lett: letters,
            unique: perqind(numbersARRAY[56], unique),
         });
         worker58.postMessage({
            id: 58,
            count: numbersARRAY[57],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[57],
            vertical: verticalARRAY[57],
            lett: letters,
            unique: perqind(numbersARRAY[57], unique),
         });
         worker59.postMessage({
            id: 59,
            count: numbersARRAY[58],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[58],
            vertical: verticalARRAY[58],
            lett: letters,
            unique: perqind(numbersARRAY[58], unique),
         });
         worker60.postMessage({
            id: 60,
            count: numbersARRAY[59],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[59],
            vertical: verticalARRAY[59],
            lett: letters,
            unique: perqind(numbersARRAY[59], unique),
         });
         worker61.postMessage({
            id: 61,
            count: numbersARRAY[60],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[60],
            vertical: verticalARRAY[60],
            lett: letters,
            unique: perqind(numbersARRAY[60], unique),
         });
         worker62.postMessage({
            id: 62,
            count: numbersARRAY[61],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[61],
            vertical: verticalARRAY[61],
            lett: letters,
            unique: perqind(numbersARRAY[61], unique),
         });
         worker63.postMessage({
            id: 63,
            count: numbersARRAY[62],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[62],
            vertical: verticalARRAY[62],
            lett: letters,
            unique: perqind(numbersARRAY[62], unique),
         });
         worker64.postMessage({
            id: 64,
            count: numbersARRAY[63],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[63],
            vertical: verticalARRAY[63],
            lett: letters,
            unique: perqind(numbersARRAY[63], unique),
         });
         worker65.postMessage({
            id: 65,
            count: numbersARRAY[64],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[64],
            vertical: verticalARRAY[64],
            lett: letters,
            unique: perqind(numbersARRAY[64], unique),
         });
         worker66.postMessage({
            id: 66,
            count: numbersARRAY[65],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[65],
            vertical: verticalARRAY[65],
            lett: letters,
            unique: perqind(numbersARRAY[65], unique),
         });
         worker67.postMessage({
            id: 67,
            count: numbersARRAY[66],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[66],
            vertical: verticalARRAY[66],
            lett: letters,
            unique: perqind(numbersARRAY[66], unique),
         });
         worker68.postMessage({
            id: 68,
            count: numbersARRAY[67],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[67],
            vertical: verticalARRAY[67],
            lett: letters,
            unique: perqind(numbersARRAY[67], unique),
         });
         worker69.postMessage({
            id: 69,
            count: numbersARRAY[68],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[68],
            vertical: verticalARRAY[68],
            lett: letters,
            unique: perqind(numbersARRAY[68], unique),
         });
         worker70.postMessage({
            id: 70,
            count: numbersARRAY[69],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[69],
            vertical: verticalARRAY[69],
            lett: letters,
            unique: perqind(numbersARRAY[69], unique),
         });
         worker71.postMessage({
            id: 71,
            count: numbersARRAY[70],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[70],
            vertical: verticalARRAY[70],
            lett: letters,
            unique: perqind(numbersARRAY[70], unique),
         });
         worker72.postMessage({
            id: 72,
            count: numbersARRAY[71],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[71],
            vertical: verticalARRAY[71],
            lett: letters,
            unique: perqind(numbersARRAY[71], unique),
         });
         worker73.postMessage({
            id: 73,
            count: numbersARRAY[72],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[72],
            vertical: verticalARRAY[72],
            lett: letters,
            unique: perqind(numbersARRAY[72], unique),
         });
         worker74.postMessage({
            id: 74,
            count: numbersARRAY[73],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[73],
            vertical: verticalARRAY[73],
            lett: letters,
            unique: perqind(numbersARRAY[73], unique),
         });
         worker75.postMessage({
            id: 75,
            count: numbersARRAY[74],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[74],
            vertical: verticalARRAY[74],
            lett: letters,
            unique: perqind(numbersARRAY[74], unique),
         });
         worker76.postMessage({
            id: 76,
            count: numbersARRAY[75],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[75],
            vertical: verticalARRAY[75],
            lett: letters,
            unique: perqind(numbersARRAY[75], unique),
         });
         worker77.postMessage({
            id: 77,
            count: numbersARRAY[76],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[76],
            vertical: verticalARRAY[76],
            lett: letters,
            unique: perqind(numbersARRAY[76], unique),
         });
         worker78.postMessage({
            id: 78,
            count: numbersARRAY[77],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[77],
            vertical: verticalARRAY[77],
            lett: letters,
            unique: perqind(numbersARRAY[77], unique),
         });
         worker79.postMessage({
            id: 79,
            count: numbersARRAY[78],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[78],
            vertical: verticalARRAY[78],
            lett: letters,
            unique: perqind(numbersARRAY[78], unique),
         });
         worker80.postMessage({
            id: 80,
            count: numbersARRAY[79],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[79],
            vertical: verticalARRAY[79],
            lett: letters,
            unique: perqind(numbersARRAY[79], unique),
         });
         worker81.postMessage({
            id: 81,
            count: numbersARRAY[80],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[80],
            vertical: verticalARRAY[80],
            lett: letters,
            unique: perqind(numbersARRAY[80], unique),
         });
         worker82.postMessage({
            id: 82,
            count: numbersARRAY[81],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[81],
            vertical: verticalARRAY[81],
            lett: letters,
            unique: perqind(numbersARRAY[81], unique),
         });
         worker83.postMessage({
            id: 83,
            count: numbersARRAY[82],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[82],
            vertical: verticalARRAY[82],
            lett: letters,
            unique: perqind(numbersARRAY[82], unique),
         });
         worker84.postMessage({
            id: 84,
            count: numbersARRAY[83],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[83],
            vertical: verticalARRAY[83],
            lett: letters,
            unique: perqind(numbersARRAY[83], unique),
         });
         worker85.postMessage({
            id: 85,
            count: numbersARRAY[84],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[84],
            vertical: verticalARRAY[84],
            lett: letters,
            unique: perqind(numbersARRAY[84], unique),
         });
         worker86.postMessage({
            id: 86,
            count: numbersARRAY[85],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[85],
            vertical: verticalARRAY[85],
            lett: letters,
            unique: perqind(numbersARRAY[85], unique),
         });
         worker87.postMessage({
            id: 87,
            count: numbersARRAY[86],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[86],
            vertical: verticalARRAY[86],
            lett: letters,
            unique: perqind(numbersARRAY[86], unique),
         });
         worker88.postMessage({
            id: 88,
            count: numbersARRAY[87],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[87],
            vertical: verticalARRAY[87],
            lett: letters,
            unique: perqind(numbersARRAY[87], unique),
         });
         worker89.postMessage({
            id: 89,
            count: numbersARRAY[88],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[88],
            vertical: verticalARRAY[88],
            lett: letters,
            unique: perqind(numbersARRAY[88], unique),
         });
         worker90.postMessage({
            id: 90,
            count: numbersARRAY[89],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[89],
            vertical: verticalARRAY[89],
            lett: letters,
            unique: perqind(numbersARRAY[89], unique),
         });
         worker91.postMessage({
            id: 91,
            count: numbersARRAY[90],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[90],
            vertical: verticalARRAY[90],
            lett: letters,
            unique: perqind(numbersARRAY[90], unique),
         });
         worker92.postMessage({
            id: 92,
            count: numbersARRAY[91],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[91],
            vertical: verticalARRAY[91],
            lett: letters,
            unique: perqind(numbersARRAY[91], unique),
         });
         worker93.postMessage({
            id: 93,
            count: numbersARRAY[92],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[92],
            vertical: verticalARRAY[92],
            lett: letters,
            unique: perqind(numbersARRAY[92], unique),
         });
         worker94.postMessage({
            id: 94,
            count: numbersARRAY[93],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[93],
            vertical: verticalARRAY[93],
            lett: letters,
            unique: perqind(numbersARRAY[93], unique),
         });
         worker95.postMessage({
            id: 95,
            count: numbersARRAY[94],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[94],
            vertical: verticalARRAY[94],
            lett: letters,
            unique: perqind(numbersARRAY[94], unique),
         });
         worker96.postMessage({
            id: 96,
            count: numbersARRAY[95],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[95],
            vertical: verticalARRAY[95],
            lett: letters,
            unique: perqind(numbersARRAY[95], unique),
         });
         worker97.postMessage({
            id: 97,
            count: numbersARRAY[96],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[96],
            vertical: verticalARRAY[96],
            lett: letters,
            unique: perqind(numbersARRAY[96], unique),
         });
         worker98.postMessage({
            id: 98,
            count: numbersARRAY[97],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[97],
            vertical: verticalARRAY[97],
            lett: letters,
            unique: perqind(numbersARRAY[97], unique),
         });
         worker99.postMessage({
            id: 99,
            count: numbersARRAY[98],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[98],
            vertical: verticalARRAY[98],
            lett: letters,
            unique: perqind(numbersARRAY[98], unique),
         });
         worker100.postMessage({
            id: 100,
            count: numbersARRAY[99],
            minimum: min,
            maximum: max,
            horizontal: horizontalARRAY[99],
            vertical: verticalARRAY[99],
            lett: letters,
            unique: perqind(numbersARRAY[99], unique),
         });
      }

      let doneWorkers = [];
      function workerHasCompleted(e) {
         ReturnedText += e.data.result;
         doneWorkers.push(e.data.id);
         workerSave(e.data.id);
         prog.value += lengthV;
         statusP.innerText = "Completing data transfer from worker" + e.data.id + "...";
      }

      function defaultHasCompleted(e) {
         statusP.innerText = "Getting data from all workers...";
         ReturnedText += e.data.result;
         nameOfGenerated = numeral(length).format("0a");
         nameOfHorizontal = numeral(h).format("0a");
         nameOfVertical = numeral(v).format("0a");
         let text = shuffleLines(ReturnedText);
         const blob = new Blob([text], { type: "text/plain" });
         const fileUrl = URL.createObjectURL(blob);
         const link = document.createElement("a");
         link.download = `P${nameOfGenerated}_H${nameOfHorizontal}_V${nameOfVertical}`;
         link.href = fileUrl;
         link.click();
         document.getElementById("container").classList.remove("hidden");
         document.getElementById("fastGenerate").classList.remove("hidden");
         document.getElementById("loading").style.display = "none";
         console.timeEnd();
         end = Date.now();
         time = (end - start) / 1000;
         Swal.fire("Generated successfully in " + time + " seconds.");
         let arrayEMPTY = [];
         numbersARRAY = arrayEMPTY;
         horizontalARRAY = arrayEMPTY;
         verticalARRAY = arrayEMPTY;
         running = false;
         prog.value += length;

         // Terminate the default worker
         defaultWorker.terminate();
      }

      function workerSave(id) {
         switch (id) {
            case 1:
               worker1.terminate();
               break;
            case 2:
               worker2.terminate();
               break;
            case 3:
               worker3.terminate();
               break;
            case 4:
               worker4.terminate();
               break;
            case 5:
               worker5.terminate();
               break;
            case 6:
               worker6.terminate();
               break;
            case 7:
               worker7.terminate();
               break;
            case 8:
               worker8.terminate();
               break;
            case 9:
               worker9.terminate();
               break;
            case 10:
               worker10.terminate();
               break;
            case 11:
               worker11.terminate();
               break;
            case 12:
               worker12.terminate();
               break;
            case 13:
               worker13.terminate();
               break;
            case 14:
               worker14.terminate();
               break;
            case 15:
               worker15.terminate();
               break;
            case 16:
               worker16.terminate();
               break;
            case 17:
               worker17.terminate();
               break;
            case 18:
               worker18.terminate();
               break;
            case 19:
               worker19.terminate();
               break;
            case 20:
               worker20.terminate();
               break;
            case 21:
               worker21.terminate();
               break;
            case 22:
               worker22.terminate();
               break;
            case 23:
               worker23.terminate();
               break;
            case 24:
               worker24.terminate();
               break;
            case 25:
               worker25.terminate();
               break;
            case 26:
               worker26.terminate();
               break;
            case 27:
               worker27.terminate();
               break;
            case 28:
               worker28.terminate();
               break;
            case 29:
               worker29.terminate();
               break;
            case 30:
               worker30.terminate();
               break;
            case 31:
               worker31.terminate();
               break;
            case 32:
               worker32.terminate();
               break;
            case 33:
               worker33.terminate();
               break;
            case 34:
               worker34.terminate();
               break;
            case 35:
               worker35.terminate();
               break;
            case 36:
               worker36.terminate();
               break;
            case 37:
               worker37.terminate();
               break;
            case 38:
               worker38.terminate();
               break;
            case 39:
               worker39.terminate();
               break;
            case 40:
               worker40.terminate();
               break;
            case 41:
               worker41.terminate();
               break;
            case 42:
               worker42.terminate();
               break;
            case 43:
               worker43.terminate();
               break;
            case 44:
               worker44.terminate();
               break;
            case 45:
               worker45.terminate();
               break;
            case 46:
               worker46.terminate();
               break;
            case 47:
               worker47.terminate();
               break;
            case 48:
               worker48.terminate();
               break;
            case 49:
               worker49.terminate();
               break;
            case 50:
               worker50.terminate();
               break;
            case 51:
               worker51.terminate();
               break;
            case 52:
               worker52.terminate();
               break;
            case 53:
               worker53.terminate();
               break;
            case 54:
               worker54.terminate();
               break;
            case 55:
               worker55.terminate();
               break;
            case 56:
               worker56.terminate();
               break;
            case 57:
               worker57.terminate();
               break;
            case 58:
               worker58.terminate();
               break;
            case 59:
               worker59.terminate();
               break;
            case 60:
               worker60.terminate();
               break;
            case 61:
               worker61.terminate();
               break;
            case 62:
               worker62.terminate();
               break;
            case 63:
               worker63.terminate();
               break;
            case 64:
               worker64.terminate();
               break;
            case 65:
               worker65.terminate();
               break;
            case 66:
               worker66.terminate();
               break;
            case 67:
               worker67.terminate();
               break;
            case 68:
               worker68.terminate();
               break;
            case 69:
               worker69.terminate();
               break;
            case 70:
               worker70.terminate();
               break;
            case 71:
               worker71.terminate();
               break;
            case 72:
               worker72.terminate();
               break;
            case 73:
               worker73.terminate();
               break;
            case 74:
               worker74.terminate();
               break;
            case 75:
               worker75.terminate();
               break;
            case 76:
               worker76.terminate();
               break;
            case 77:
               worker77.terminate();
               break;
            case 78:
               worker78.terminate();
               break;
            case 79:
               worker79.terminate();
               break;
            case 80:
               worker80.terminate();
               break;
            case 81:
               worker81.terminate();
               break;
            case 82:
               worker82.terminate();
               break;
            case 83:
               worker83.terminate();
               break;
            case 84:
               worker84.terminate();
               break;
            case 85:
               worker85.terminate();
               break;
            case 86:
               worker86.terminate();
               break;
            case 87:
               worker87.terminate();
               break;
            case 88:
               worker88.terminate();
               break;
            case 89:
               worker89.terminate();
               break;
            case 90:
               worker90.terminate();
               break;
            case 91:
               worker91.terminate();
               break;
            case 92:
               worker92.terminate();
               break;
            case 93:
               worker93.terminate();
               break;
            case 94:
               worker94.terminate();
               break;
            case 95:
               worker95.terminate();
               break;
            case 96:
               worker96.terminate();
               break;
            case 97:
               worker97.terminate();
               break;
            case 98:
               worker98.terminate();
               break;
            case 99:
               worker99.terminate();
               break;
            case 100:
               worker100.terminate();
               break;
         }
         if (doneWorkers.length === 100) {
            nameOfGenerated = numeral(length).format("0a");
            nameOfHorizontal = numeral(h).format("0a");
            nameOfVertical = numeral(v).format("0a");
            let text = shuffleLines(ReturnedText);
            const blob = new Blob([text], { type: "text/plain" });
            const fileUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = `P${nameOfGenerated}_H${nameOfHorizontal}_V${nameOfVertical}`;
            link.href = fileUrl;
            link.click();
            statusP.innerText = "Saving data...";
            document.getElementById("container").classList.remove("hidden");
            document.getElementById("fastGenerate").classList.remove("hidden");
            document.getElementById("loading").style.display = "none";
            console.timeEnd();
            end = Date.now();
            time = (end - start) / 1000;
            Swal.fire("Generated successfully in " + time + " seconds.");
            let arrayEMPTY = [];
            numbersARRAY = arrayEMPTY;
            horizontalARRAY = arrayEMPTY;
            verticalARRAY = arrayEMPTY;
            running = false;
         }
      }
   }
} else {
   // No Web Worker support..
   alert("Your browser does not support the Web Worker. Please upgrade to Chrome or Firefox!");
   running = false;
}

function shuffleLines(input) {
   statusP.innerText = "Formating data...";
   // Split the input into an array of lines
   const lines = input.split("\n");

   // Remove the first line from the array
   const firstLine = lines.shift();

   // Shuffle the remaining lines
   for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
   }

   // Add the first line back to the beginning of the array
   lines.unshift(firstLine);

   // Join the lines back into a single string and return it
   return lines.join("\n");
}
