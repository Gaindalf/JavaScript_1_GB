var i = 1;
function changeTheImg(eventObj) {
    var eventElement = eventObj.target;
    var district = eventElement.id;
    var getImg = document.getElementById("pictures");
    getImg.innerHTML = "";
    if (district == "forward") {
        console.log("forward")
        if (i == 5) {
            var src = "img/00" + 1 + ".jpg";
            var imageDomElement = document.createElement("img");
            imageDomElement.src = src;
            imageDomElement.setAttribute("onclick", "changeTheImg()");
            imageDomElement.setAttribute("id", "img_" + 1);
            var text = document.getElementById("text");
            text.innerText = 1;
            i = 1;
            getImg.appendChild(imageDomElement);
            init();
            console.log(i);
        } else {
            var src = "img/00" + (i + 1) + ".jpg";
            var imageDomElement = document.createElement("img");
            imageDomElement.src = src;
            imageDomElement.setAttribute("onclick", "changeTheImg()");
            imageDomElement.setAttribute("id", "img_" + (i + 1));
            var text = document.getElementById("text");
            text.innerText = (i + 1);
            getImg.appendChild(imageDomElement);
            init();
            i++;
            console.log(i);
        }
    } else {
        console.log("back");
        if (i == 1) {
            var src = "img/00" + 5 + ".jpg";
            var imageDomElement = document.createElement("img");
            imageDomElement.src = src;
            imageDomElement.setAttribute("onclick", "changeTheImg()");
            imageDomElement.setAttribute("id", "img_" + 5);
            var text = document.getElementById("text");
            text.innerText = 5;
            i = 5;
            getImg.appendChild(imageDomElement);
            init();
            console.log(i);
        } else {
            var src = "img/00" + (i - 1) + ".jpg";
            var imageDomElement = document.createElement("img");
            imageDomElement.src = src;
            imageDomElement.setAttribute("onclick", "changeTheImg()");
            imageDomElement.setAttribute("id", "img_" + (i - 1));
            var text = document.getElementById("text");
            text.innerText = (i - 1);
            getImg.appendChild(imageDomElement);
            init();
            i--;
            console.log(i);
        }
    }
}



function init() {
    var button = document.getElementsByTagName("button");
    button[1].onclick = changeTheImg;
    button[0].onclick = changeTheImg;

}
window.onload = init;