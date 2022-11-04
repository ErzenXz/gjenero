
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];

let tags = [];
let items = [];
let index = 0;

let textBack = "";

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

function generateType(){
    let type = ["H", "V"];
    let randomType = Math.round(Math.random());
    let selectedType = type[randomType];
    return selectedType;
}

function generateTagsInsideItem(){
    let totalTags = Math.round(Math.random() * letters.length * 2.7);
    return totalTags;
}

function generateTagsItem(){
    let totalTags = generateTagsInsideItem();
    let tags = "";
    for(let i = 0; i < totalTags; i++) {
        tags += " " + generateTags(1);
    }
    let text = generateType() + " " + totalTags + " " + tags;
    return text;
}

function generateDocumnet(id, items){
    let totalItems = items;
    for(let i = 0; i < totalItems; i++){
        textBack += "\n" + generateTagsItem();
    }
}

self.addEventListener("message", function(e) {
    generateDocumnet(e.data.id, e.data.count);

    this.postMessage({id: e.data.id , result: textBack});
}, false);