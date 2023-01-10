/* let textBack = "";
var hA = 0;
var vA = 0;
var minA;
var maxA;
let totalH = 0;
let totalV = 0;
let lettersN = 0;

let generatedTagsArray = [];

let unique = 0;
let c = 0;

function saveDATA(min, max, h, v) {
   minA = min;
   maxA = max;
   hA = Number(h);
   vA = Number(v);
}

function generateTags(length) {
   let result = "";
   let result2 = "";
   let characters = "abcdefghijklmnopqrstuvwxyz";
   let charactersLength = characters.length;

   if (c < unique) {
      for (let i = 0; i < length; i++) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
         result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      generatedTagsArray.push(result);
      c += 1;
      return result2;
   } else {
      let r = Math.floor(Math.random() * generatedTagsArray.length);
      result += generatedTagsArray[r];
      return result;
   }
}

function shuffle(array) {
   for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
}

function generate(hs, vs) {
   var a = new Array(hs + vs).fill("H", 0, hs).fill("V", hs, hs + vs);
   shuffle(a);

   var i = 0;
   return () => a[i++];
}

let type = "";

function generateType2(h7, v7) {
   let returnType = type();
   return returnType;
}

function getRandomInt(min, max) {
   let minB, maxB;
   minB = Math.ceil(Number(min));
   maxB = Math.floor(Number(max));
   return Math.floor(Math.random() * (maxB - minB + 1)) + minB;
}

function generateTagsInsideItem() {
   let totalTags = getRandomInt(minA, maxA);
   return totalTags;
}

function generateTagsItem(h4, v4) {
   let totalTags = generateTagsInsideItem();
   let tags = "";
   for (let i = 0; i < totalTags; i++) {
      tags += " " + generateTags(lettersN);
   }
   let text = generateType2(h4, v4) + " " + totalTags + "" + tags;
   return text;
}

function generateDocumnet(id, items, horizontal, vertical, dif, lettersItem, uniqueT) {
   hA = Number(horizontal);
   vA = Number(vertical);
   let totalItems = items;
   lettersN += lettersItem;
   unique += uniqueT;
   c += 0;
   for (let i = 0; i < totalItems; i++) {
      textBack += "\n" + generateTagsItem(hA, vA);
   }
}

self.addEventListener(
   "message",
   function (e) {
      //console.log("Worker : " + e.data.id + " has successfully started.");
      saveDATA(e.data.minimum, e.data.maximum, e.data.horizontal, e.data.vertical);
      type = generate(e.data.horizontal, e.data.vertical);
      generateDocumnet(
         e.data.id,
         e.data.count,
         e.data.horizontal,
         e.data.vertical,
         e.data.diff,
         e.data.lett,
         e.data.unique
      );
      this.postMessage({ id: e.data.id, result: textBack });
   },
   false
);

*/

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let textBack = "";
var hA = 0;
var vA = 0;
var minA;
var maxA;
let totalH = 0;
let totalV = 0;
let lettersN = 0;

let generatedTagsArray = [];

let unique = 0;
let c = 0;

function saveDATA(min, max, h, v) {
   minA = min;
   maxA = max;
   hA = Number(h);
   vA = Number(v);
}

function generateTags(length) {
   let result = "";
   let result2 = "";
   let characters = "abcdefghijklmnopqrstuvwxyz";
   let charactersLength = characters.length;

   if (c < unique) {
      for (let i = 0; i < length; i++) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
         result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      generatedTagsArray.push(result);
      c += 1;
      return result2;
   } else {
      let r = Math.floor(Math.random() * generatedTagsArray.length);
      result += generatedTagsArray[r];
      return result;
   }
}

function shuffle(array) {
   for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
}

function generate(hs, vs) {
   var a = new Array(hs + vs).fill("H", 0, hs).fill("V", hs, hs + vs);
   shuffle(a);

   var i = 0;
   return () => a[i++];
}

let type = "";

function generateType2(h7, v7) {
   let returnType = type();
   return returnType;
}

function getRandomInt(min, max) {
   let minB, maxB;
   minB = Math.ceil(Number(min));
   maxB = Math.floor(Number(max));
   return Math.floor(Math.random() * (maxB - minB + 1)) + minB;
}

function generateTagsInsideItem() {
   let totalTags = getRandomInt(minA, maxA);
   return totalTags;
}

// function generateTagsItem(h4, v4) {
//    let totalTags = generateTagsInsideItem();
//    let tags = "";
//    for (let i = 0; i < totalTags; i++) {
//       tags += " " + generateTags(lettersN);
//    }
//    let text = generateType2(h4, v4) + " " + totalTags + "" + tags;
//    return text;
// }

function generateListofTags(tags) {
   let text = "";
   let generatedTags = new Set();

   for (let i = 0; i < tags; i++) {
      let tag = generateTags(lettersN);
      while (generatedTags.has(tag)) {
         tag = generateTags(lettersN);
      }
      generatedTags.add(tag);
      text += " " + tag;
   }

   return text;
}

function generateTagsItem(h4, v4) {
   let totalTags = generateTagsInsideItem();
   let tags = "";
   for (let i = 0; i < totalTags; i++) {
      tags += " " + generateTags(lettersN);
   }
   let text = generateType2(h4, v4) + " " + totalTags + generateListofTags(totalTags);
   return text;
}

// // // shuffle function to shuffle an array in place
// // function shuffle(array) {
// //    for (let i = array.length - 1; i > 0; i--) {
// //       const j = Math.floor(Math.random() * (i + 1));
// //       [array[i], array[j]] = [array[j], array[i]];
// //    }
// // //}

function generateDocumnet(id, items, horizontal, vertical, dif, lettersItem, uniqueT) {
   hA = Number(horizontal);
   vA = Number(vertical);
   let totalItems = items;
   lettersN += lettersItem;
   unique += uniqueT;
   c += 0;
   for (let i = 0; i < totalItems; i++) {
      textBack += "\n" + generateTagsItem(hA, vA);
   }
}

self.addEventListener(
   "message",
   function (e) {
      //console.log("Worker : " + e.data.id + " has successfully started.");
      saveDATA(e.data.minimum, e.data.maximum, e.data.horizontal, e.data.vertical);
      type = generate(e.data.horizontal, e.data.vertical);
      generateDocumnet(
         e.data.id,
         e.data.count,
         e.data.horizontal,
         e.data.vertical,
         e.data.diff,
         e.data.lett,
         e.data.unique
      );
      this.postMessage({ id: e.data.id, result: textBack });
   },
   false
);

function generateTagsItem(h4, v4) {
   let totalTags = generateTagsInsideItem();
   let tags = "";

   let tagsARRAY = [];

   for (let i = 0; i < totalTags * 4; i++) {
      let tag = generateTags(lettersN);
      if (tagsARRAY.includes(tag)) {
         tagsARRAY.push(generateTags(lettersN));
      } else {
         tagsARRAY.push(tag);
      }
   }

   for (let i = 0; i < totalTags; i++) {
      let r = Math.round(Math.random() * 4);
      let tag = tagsARRAY[i + r];
      if (tags.includes(tag)) {
         tags += " " + tagsARRAY[i + r + 5];
      } else {
         tags += " " + tag;
      }
   }

   for (let i = 0; i < totalTags; i++) {
      let words = tags.split(" ");
      let wordsSet = new Set(words);
      let result = "";
      words.forEach((word) => {
         if (wordsSet.has(word)) {
            result += word + " ";
            wordsSet.delete(word);
         } else {
            let r = Math.round(Math.random() * alerdyGenerated.length - 1);
            result += alerdyGenerated[r] + " ";
         }
      });

      tags = result.trim();
   }

   let text = generateType2(h4, v4) + " " + totalTags + " " + tags;
   return text;
}
