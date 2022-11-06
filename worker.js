

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];

let tags = [];
let items = [];
let index = 0;

let textBack = "";

var hA = 0;
var vA = 0;
var minA;
var maxA;

let totalH = 0;
let totalV = 0;

function saveDATA(min, max, h, v){
    minA = min;
    maxA = max;
    hA = Math.round(h / 50);
    vA = Math.round(v / 50);
}

function generateTags(totalTags){
    let tag;
    for(let i = 0; i < totalTags; i++){
        let r1 = Math.ceil(Math.random() * 15);
        let r2 = Math.ceil(Math.random() * 7);
        let r3 = Math.ceil(Math.random() * 5);
        let r4 = Math.ceil(Math.random() * 9);
        let r5 = Math.ceil(Math.random() * 17);
        // console.log(r1, r2, r3, r4, r5);
        tag = letters[r1] + letters[r2] + letters[r3] + letters[r4] + letters[r5];
        if(tags.includes(tag)){
            // Do nothing
            let random = Math.round(Math.random());
            if(random == 1){
                tags.push(tag);
                tags.concat(tag);
            }
        } else{ 
            tags.push(tag);
            tags.concat(tag);
            tags.push(tag);
            tags.concat(tag);
            items.push(tag);
        }
        if(totalTags < 2){
            return tag;
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
  
function generate(hs, vs) {
    var a = new Array(hs + vs)
      .fill('H', 0, hs)
      .fill('V', hs, hs + vs);
    shuffle(a);
  
    var i = 0;
    return () => a[i++];
}

let type = "";

function generateType2(h7, v7) {
    let returnType = type();
    return returnType;
}

console.log(type);

// // function generateType(h5, v5){
// //     let type = ["H", "V"];
// //     let randomType = Math.round(Math.random());
// //     let selectedType = type[randomType];
// //     return selectedType;
// // }

function getRandomInt(min, max) {
    let minB, maxB;
    minB = Math.ceil(Number(min));
    maxB = Math.floor(Number(max));
    return Math.floor(Math.random() * (maxB - minB + 1)) + minB;
}

function generateTagsInsideItem(){
    let totalTags = getRandomInt(minA, maxA);
    return totalTags;
}

function generateTagsItem(h4, v4){
    let totalTags = generateTagsInsideItem();
    let tags = "";
    for(let i = 0; i < totalTags; i++) {
        tags += " " + generateTags(1);
    }
    let text = generateType2(h4, v4) + " " + totalTags + " " + tags;
    return text;
}

function generateDocumnet(id, items, horizontal, vertical) {
    hA = Math.round(Number(horizontal) / 50);
    vA = Math.round(Number(vertical) / 50);
    let totalItems = items;
    for(let i = 0; i < totalItems; i++){
        textBack += "\n" + generateTagsItem(hA, vA);
    }
}


self.addEventListener("message", function(e) {
    saveDATA(e.data.minimum, e.data.maximum, e.data.horizontal, e.data.vertical);
    type = generate(e.data.horizontal, e.data.vertical);
    generateDocumnet(e.data.id, e.data.count, e.data.horizontal, e.data.vertical);
    this.postMessage({id: e.data.id , result: textBack});
}, false);