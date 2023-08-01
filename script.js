let pRef = document.getElementById("p-button");
let imgRef = document.getElementById("img-button");
let noRef = document.getElementById("nothing-button");

let pDivRef = document.getElementById("p-div");
let imgDivRef = document.getElementById("img-div");
let noDivRef = document.getElementById("no-div");

let pAdd; 
let imgAdd;

noDivRef.style.display = "none";

let imgCount = 0;
let pCount = 0;
let nothingCount = 0;



imgRef.onclick = function() {
    imgDivRef.style.display = "block";
    pDivRef.style.display = "none";
    noDivRef.style.display = "none";
    imgAdd = document.createElement("img");
    imgDivRef.appendChild(imgAdd);

    imgAdd.src = "chopper.png";

    imgCount++;
    
   document.getElementById("imgC").innerHTML = "imgCount: " + imgCount;
}

pRef.onclick = function() {
    pDivRef.style.display = "block";
    imgDivRef.style.display = "none";
    noDivRef.style.display = "none";
    pAdd = document.createElement("p");
    pAdd.innerText = "Hot chocolate is bad today!";
    pDivRef.appendChild(pAdd);

    pCount ++;

    document.getElementById("pC").innerHTML = "pCount: " + pCount;
}

noRef.onclick = function() {
    noDivRef.style.display = "block";
    pDivRef.style.display = "none";
    imgDivRef.style.display = "none";

    nothingCount ++;

    document.getElementById("noC").innerHTML = "nothingCount: " + nothingCount;
}