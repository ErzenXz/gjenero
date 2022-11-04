

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];

let tags = [];
let items = [];
let index = 0;

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

function generateDocumnet(){
    let itemsNow = Number(document.getElementById("number").value);
    if(itemsNow == "" || itemsNow < 50 || itemsNow > 150000){
        alert("Please enter a valid number, between 50 and 150000.");
        return false;
    }
    startThreads(itemsNow);
    // // let totalItems = itemsNow;
    // // let text = "<br>" + totalItems;
    // // for(let i = 0; i < totalItems; i++){
    // //     text += "<br>" + generateTagsItem();
    // // }
    // // const blob = new Blob([text], {type: "text/html"});
    // // const fileUrl = URL.createObjectURL(blob);
    // // const link = document.createElement("a");
    // // link.download = new Date().getTime();
    // // link.href = fileUrl;
    // // link.click();
}

let response;

// Web Worker Setup

if (typeof(Worker) !== "undefined") {
    // Web worker support!

    function startThreads(length) {
        let ReturnedText = length;
        let prog = document.getElementById("progress");
        
        prog.max = length;
        prog.value = 0;
        
        lengthV = Math.ceil(length / 50);


        worker1 = new Worker("./worker.js")
        worker2 = new Worker("./worker.js")
        worker3 = new Worker("./worker.js")
        worker4 = new Worker("./worker.js")
        worker5 = new Worker("./worker.js")
        worker6 = new Worker("./worker.js")
        worker7 = new Worker("./worker.js")
        worker8 = new Worker("./worker.js")
        worker9 = new Worker("./worker.js")
        worker10 = new Worker("./worker.js")
        worker11 = new Worker("./worker.js")
        worker12 = new Worker("./worker.js")
        worker13 = new Worker("./worker.js")
        worker14 = new Worker("./worker.js")
        worker15 = new Worker("./worker.js")
        worker16 = new Worker("./worker.js")
        worker17 = new Worker("./worker.js")
        worker18 = new Worker("./worker.js")
        worker19 = new Worker("./worker.js")
        worker20 = new Worker("./worker.js")
        worker21 = new Worker("./worker.js")
        worker22 = new Worker("./worker.js")
        worker23 = new Worker("./worker.js")
        worker24 = new Worker("./worker.js")
        worker25 = new Worker("./worker.js")
        worker26 = new Worker("./worker.js")
        worker27 = new Worker("./worker.js")
        worker28 = new Worker("./worker.js")
        worker29 = new Worker("./worker.js")
        worker30 = new Worker("./worker.js")
        worker31 = new Worker("./worker.js")
        worker32 = new Worker("./worker.js")
        worker33 = new Worker("./worker.js")
        worker34 = new Worker("./worker.js")
        worker35 = new Worker("./worker.js")
        worker36 = new Worker("./worker.js")
        worker37 = new Worker("./worker.js")
        worker38 = new Worker("./worker.js")
        worker39 = new Worker("./worker.js")
        worker40 = new Worker("./worker.js")
        worker41 = new Worker("./worker.js")
        worker42 = new Worker("./worker.js")
        worker43 = new Worker("./worker.js")
        worker44 = new Worker("./worker.js")
        worker45 = new Worker("./worker.js")
        worker46 = new Worker("./worker.js")
        worker47 = new Worker("./worker.js")
        worker48 = new Worker("./worker.js")
        worker49 = new Worker("./worker.js")
        worker50 = new Worker("./worker.js")


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

        worker1.postMessage({id: 1,count: lengthV});
        worker2.postMessage({id: 2,count: lengthV});
        worker3.postMessage({id: 3,count: lengthV});
        worker4.postMessage({id: 4,count: lengthV});
        worker5.postMessage({id: 5,count: lengthV});
        worker6.postMessage({id: 6,count: lengthV});
        worker7.postMessage({id: 7,count: lengthV});
        worker8.postMessage({id: 8,count: lengthV});
        worker9.postMessage({id: 9,count: lengthV});
        worker10.postMessage({id: 10,count: lengthV});
        worker11.postMessage({id: 11,count: lengthV});
        worker12.postMessage({id: 12,count: lengthV});
        worker13.postMessage({id: 13,count: lengthV});
        worker14.postMessage({id: 14,count: lengthV});
        worker15.postMessage({id: 15,count: lengthV});
        worker16.postMessage({id: 16,count: lengthV});
        worker17.postMessage({id: 17,count: lengthV});
        worker18.postMessage({id: 18,count: lengthV});
        worker19.postMessage({id: 19,count: lengthV});
        worker20.postMessage({id: 20,count: lengthV});
        worker21.postMessage({id: 21,count: lengthV});
        worker22.postMessage({id: 22,count: lengthV});
        worker23.postMessage({id: 23,count: lengthV});
        worker24.postMessage({id: 24,count: lengthV});
        worker25.postMessage({id: 25,count: lengthV});
        worker26.postMessage({id: 26,count: lengthV});
        worker27.postMessage({id: 27,count: lengthV});
        worker28.postMessage({id: 28,count: lengthV});
        worker29.postMessage({id: 29,count: lengthV});
        worker30.postMessage({id: 30,count: lengthV});
        worker31.postMessage({id: 31,count: lengthV});
        worker32.postMessage({id: 32,count: lengthV});
        worker33.postMessage({id: 33,count: lengthV});
        worker34.postMessage({id: 34,count: lengthV});
        worker35.postMessage({id: 35,count: lengthV});
        worker36.postMessage({id: 36,count: lengthV});
        worker37.postMessage({id: 37,count: lengthV});
        worker38.postMessage({id: 38,count: lengthV});
        worker39.postMessage({id: 39,count: lengthV});
        worker40.postMessage({id: 40,count: lengthV});
        worker41.postMessage({id: 41,count: lengthV});
        worker42.postMessage({id: 42,count: lengthV});
        worker43.postMessage({id: 43,count: lengthV});
        worker44.postMessage({id: 44,count: lengthV});
        worker45.postMessage({id: 45,count: lengthV});
        worker46.postMessage({id: 46,count: lengthV});
        worker47.postMessage({id: 47,count: lengthV});
        worker48.postMessage({id: 48,count: lengthV});
        worker49.postMessage({id: 49,count: lengthV});
        worker50.postMessage({id: 50,count: lengthV});
    

        let doneWorkers = [];
        function workerHasCompleted(e) {
            ReturnedText += e.data.result;
            doneWorkers.push(e.data.id);
            workerSave(e.data.id);
            prog.value += lengthV;
        }

        function workerSave(id){
            switch(id){
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
            }
            if (doneWorkers.length === 50){
                const blob = new Blob([ReturnedText], {type: "text/plain"});
                const fileUrl = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.download = new Date().getTime();
                link.href = fileUrl;
                link.click();
            }   
        }

    };
    
  } else {
    // No Web Worker support..
  }