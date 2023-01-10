let textBack = "";
var hA = 0;
var vA = 0;
var minA;
var maxA;
let totalH = 0;
let totalV = 0;
let lettersN = 0;

let generatedTagsArray = [];
let defaultTagsArray = [
   "apple",
   "banana",
   "orange",
   "strawberry",
   "grapes",
   "watermelon",
   "mango",
   "pineapple",
   "peach",
   "blueberries",
   "carrots",
   "potatoes",
   "onions",
   "cucumber",
   "tomatoes",
   "broccoli",
   "cabbage",
   "lettuce",
   "spinach",
   "kale",
   "audi",
   "bmw",
   "mercedesbenz",
   "porsche",
   "ferrari",
   "lamborghini",
   "ford",
   "chevrolet",
   "dodge",
   "jeep",
   "iphone",
   "samsung",
   "googlepixel",
   "oneplus",
   "lg",
   "motorola",
   "sony",
   "htc",
   "nokia",
   "huawei",
   "onion",
   "cauliflower",
   "asparagus",
   "brusselsprouts",
   "greenbeans",
   "eggplant",
   "sweetpotato",
   "turnip",
   "parsnip",
   "radish",
   "audi",
   "bmw",
   "porsche",
   "lamborghini",
   "ford",
   "dodge",
   "jeep",
   "hyundai",
   "subaru",
   "kia",
   "apple",
   "banana",
   "orange",
   "strawberry",
   "grapes",
   "watermelon",
   "mango",
   "pineapple",
   "peach",
   "blueberries",
   "carrots",
   "potatoes",
   "onions",
   "cucumber",
   "tomatoes",
   "broccoli",
   "cabbage",
   "lettuce",
   "spinach",
   "kale",
   "iphone",
   "samsung",
   "googlepixel",
   "oneplus",
   "lg",
   "motorola",
   "sony",
   "htc",
   "nokia",
   "huawei",
   "avocado",
   "guava",
   "kiwi",
   "lime",
   "lemon",
   "pomegranate",
   "fig",
   "passionfruit",
   "grapefruit",
   "raspberry",
];

let unique = 0;
let c = 0;
let d = 0;

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
      c += 0.01;
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
   let usedTags = [];

   // Fill the usedTags set with random tags from generateTags function

   for (let i = 0; i < totalTags; i++) {
      let tag = generateTags(lettersN);
      if (usedTags.includes(tag)) {
         if (d > 99) d = 0;
         usedTags.push(defaultTagsArray[d]);
         d += 1;
      } else {
         usedTags.push(tag);
      }
      //tags += " " + generateTags(lettersN);
   }

   // Loop through the usedTags aaray and append them to the tags string
   for (let i = 0; i < totalTags; i++) {
      tags += " " + usedTags[i];
   }

   let text = generateType2(h4, v4) + " " + totalTags + "" + tags;
   return text;
}

function generateDocumnet(id, items, horizontal, vertical, dif, lettersItem, uniqueT) {
   hA = Number(horizontal);
   vA = Number(vertical);
   let totalItems = items;
   lettersN += lettersItem;
   unique += uniqueT / 100;
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
