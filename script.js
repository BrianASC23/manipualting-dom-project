
//Variables to reference the buttons
let pRef = document.getElementById("p-button");
let imgRef = document.getElementById("img-button");
let noRef = document.getElementById("nothing-button");

//Variables to reference the div boxes
let pDivRef = document.getElementById("p-div");
let imgDivRef = document.getElementById("img-div");
let noDivRef = document.getElementById("no-div");

//Variables to reference the creation of new elements.
let pAdd; 
let imgAdd;

//Hides the nothing div
noDivRef.style.display = "none";

//Introduces and sets the counters to 0
let imgCount = 0;
let pCount = 0;
let nothingCount = 0;


//Every time I click on the image button, the other two "div boxes" would be hidden 
//Only the "image div box" would be shown.
//Every click creates a new image element and appends that to the "image div box"
//Counter goes up using innerHTML (which updates the score every time we click)
//image is src to chopper.png
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

//Every time I click, only the "p div box" will appear and the other two will be hidden
//Creates new text every click
//Updates counter using innerHTML
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

//Every time I click, only the "nothing div box" will appear and the other two will be hidden
//Does nothing every click
//Updates counter using innerHTML
noRef.onclick = function() {
    noDivRef.style.display = "block";
    pDivRef.style.display = "none";
    imgDivRef.style.display = "none";

    nothingCount ++;

    document.getElementById("noC").innerHTML = "nothingCount: " + nothingCount;
}