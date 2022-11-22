document.getElementById("loading").style.display = "none";

let start, end, time;

function generateDocumnet(){
    let itemsNow = Number(document.getElementById("number").value);
    let hImages = Number(document.getElementById("numberH").value);
    let tagLetters = Number(document.getElementById("letters").value);
    let uniqueTags = Number(document.getElementById("unique").value);
    let vImages;
    if(hImages > itemsNow) hImages = itemsNow;
    document.getElementById("numberH").value = hImages;
    if(hImages == ""){
        hImages = itemsNow;
        document.getElementById("numberH").value = hImages;
    }
    vImages = itemsNow - hImages;
    if(hImages == "1.01"){
        vImages = itemsNow;
        document.getElementById("numberV").value = vImages;
    }
    if(uniqueTags == ""){
        uniqueTags = 50;
        document.getElementById("unique").value = uniqueTags;
    }
    if(tagLetters == ""){
        tagLetters = 4;
        document.getElementById("letters").value = tagLetters;
    }
    document.getElementById("numberV").value = vImages;
    let minTags = Number(document.getElementById("min").value);
    let maxTags = Number(document.getElementById("max").value);

    if(minTags == "" || maxTags == ""){
        minTags = 1;
        maxTags = 20;
        document.getElementById("min").value = minTags;
        document.getElementById("max").value = maxTags;
    }

    if(minTags > maxTags){
        minTags = 1;
        document.getElementById("min").value = minTags;
    }

    if(itemsNow == "" || itemsNow < 500 || itemsNow > 5000000){
        alert("Please enter a valid number, between 500 and 5,000,000.");
        return false;
    }

    startThreads(itemsNow, minTags, maxTags, hImages, vImages, tagLetters, uniqueTags);
    console.time();
    start = Date.now();
}

let response;


function perqind(num, amount){
    return num * amount / 100;
}  

// Web Worker Setup

if (typeof(Worker) !== "undefined") {
    // Web worker support!

    function startThreads(length, min, max, h, v, letters, unique) {
        let ReturnedText = length;
        let prog = document.getElementById("progress");
        prog.max = length;
        if(prog.value != undefined || prog.value != null) {
            prog.value = 0;
        }
        //prog.value = 0;
        document.getElementById("container").classList.add("hidden");
        document.getElementById("loading").style.display = "flex";
        let lengthV = Math.ceil(length / 100);
        let uniqueTags = perqind(lengthV, unique);

        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Generating tags...',
            showConfirmButton: false,
            timer: 1500
        });

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
        worker51 = new Worker("./worker.js")
        worker52 = new Worker("./worker.js")
        worker53 = new Worker("./worker.js")
        worker54 = new Worker("./worker.js")
        worker55 = new Worker("./worker.js")
        worker56 = new Worker("./worker.js")
        worker57 = new Worker("./worker.js")
        worker58 = new Worker("./worker.js")
        worker59 = new Worker("./worker.js")
        worker60 = new Worker("./worker.js")
        worker61 = new Worker("./worker.js")
        worker62 = new Worker("./worker.js")
        worker63 = new Worker("./worker.js")
        worker64 = new Worker("./worker.js")
        worker65 = new Worker("./worker.js")
        worker66 = new Worker("./worker.js")
        worker67 = new Worker("./worker.js")
        worker68 = new Worker("./worker.js")
        worker69 = new Worker("./worker.js")
        worker70 = new Worker("./worker.js")
        worker71 = new Worker("./worker.js")
        worker72 = new Worker("./worker.js")
        worker73 = new Worker("./worker.js")
        worker74 = new Worker("./worker.js")
        worker75 = new Worker("./worker.js")
        worker76 = new Worker("./worker.js")
        worker77 = new Worker("./worker.js")
        worker78 = new Worker("./worker.js")
        worker79 = new Worker("./worker.js")
        worker80 = new Worker("./worker.js")
        worker81 = new Worker("./worker.js")
        worker82 = new Worker("./worker.js")
        worker83 = new Worker("./worker.js")
        worker84 = new Worker("./worker.js")
        worker85 = new Worker("./worker.js")
        worker86 = new Worker("./worker.js")
        worker87 = new Worker("./worker.js")
        worker88 = new Worker("./worker.js")
        worker89 = new Worker("./worker.js")
        worker90 = new Worker("./worker.js")
        worker91 = new Worker("./worker.js")
        worker92 = new Worker("./worker.js")
        worker93 = new Worker("./worker.js")
        worker94 = new Worker("./worker.js")
        worker95 = new Worker("./worker.js")
        worker96 = new Worker("./worker.js")
        worker97 = new Worker("./worker.js")
        worker98 = new Worker("./worker.js")
        worker99 = new Worker("./worker.js")
        worker100 = new Worker("./worker.js")


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

        worker1.postMessage({id: 1,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker2.postMessage({id: 2,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker3.postMessage({id: 3,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker4.postMessage({id: 4,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker5.postMessage({id: 5,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker6.postMessage({id: 6,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker7.postMessage({id: 7,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker8.postMessage({id: 8,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker9.postMessage({id: 9,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker10.postMessage({id: 10,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker11.postMessage({id: 11,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker12.postMessage({id: 12,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker13.postMessage({id: 13,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker14.postMessage({id: 14,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker15.postMessage({id: 15,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker16.postMessage({id: 16,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker17.postMessage({id: 17,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker18.postMessage({id: 18,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker19.postMessage({id: 19,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker20.postMessage({id: 20,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker21.postMessage({id: 21,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker22.postMessage({id: 22,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker23.postMessage({id: 23,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker24.postMessage({id: 24,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker25.postMessage({id: 25,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker26.postMessage({id: 26,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker27.postMessage({id: 27,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker28.postMessage({id: 28,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker29.postMessage({id: 29,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker30.postMessage({id: 30,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker31.postMessage({id: 31,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker32.postMessage({id: 32,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker33.postMessage({id: 33,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker34.postMessage({id: 34,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker35.postMessage({id: 35,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker36.postMessage({id: 36,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker37.postMessage({id: 37,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker38.postMessage({id: 38,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker39.postMessage({id: 39,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker40.postMessage({id: 40,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker41.postMessage({id: 41,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker42.postMessage({id: 42,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker43.postMessage({id: 43,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker44.postMessage({id: 44,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker45.postMessage({id: 45,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker46.postMessage({id: 46,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker47.postMessage({id: 47,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker48.postMessage({id: 48,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker49.postMessage({id: 49,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker50.postMessage({id: 50,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker51.postMessage({id: 51,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker52.postMessage({id: 52,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker53.postMessage({id: 53,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker54.postMessage({id: 54,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker55.postMessage({id: 55,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker56.postMessage({id: 56,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker57.postMessage({id: 57,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker58.postMessage({id: 58,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker59.postMessage({id: 59,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker60.postMessage({id: 60,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker61.postMessage({id: 61,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker62.postMessage({id: 62,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker63.postMessage({id: 63,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker64.postMessage({id: 64,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker65.postMessage({id: 65,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker66.postMessage({id: 66,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker67.postMessage({id: 67,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker68.postMessage({id: 68,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker69.postMessage({id: 69,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker70.postMessage({id: 70,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker71.postMessage({id: 71,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker72.postMessage({id: 72,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker73.postMessage({id: 73,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker74.postMessage({id: 74,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker75.postMessage({id: 75,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker76.postMessage({id: 76,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker77.postMessage({id: 77,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker78.postMessage({id: 78,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker79.postMessage({id: 79,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker80.postMessage({id: 80,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker81.postMessage({id: 81,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker82.postMessage({id: 82,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker83.postMessage({id: 83,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker84.postMessage({id: 84,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker85.postMessage({id: 85,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker86.postMessage({id: 86,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker87.postMessage({id: 87,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker88.postMessage({id: 88,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker89.postMessage({id: 89,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker90.postMessage({id: 90,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker91.postMessage({id: 91,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker92.postMessage({id: 92,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker93.postMessage({id: 93,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker94.postMessage({id: 94,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker95.postMessage({id: 95,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker96.postMessage({id: 96,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker97.postMessage({id: 97,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker98.postMessage({id: 98,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker99.postMessage({id: 99,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
        worker100.postMessage({id: 100,count: lengthV, minimum: min, maximum: max, horizontal: h, vertical: v, lett: letters, unique: uniqueTags});
    

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
            if (doneWorkers.length === 100){
                const blob = new Blob([ReturnedText], {type: "text/plain"});
                const fileUrl = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.download = new Date().getTime();
                link.href = fileUrl;
                link.click();
                document.getElementById("container").classList.remove("hidden");
                document.getElementById("loading").style.display = "none";
                console.timeEnd();
                end = Date.now();
                time = (end - start) / 1000;
                Swal.fire("Generated successfully in " + time + " seconds.");
            }   
        }

    };
    
  } else {
    // No Web Worker support..
    alert("Your browser does not support the Web Worker. Please upgrade to Chrome or Firefox!")
  }
