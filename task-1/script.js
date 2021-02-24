function changeBigPicture(eventObj) {
    var appDiv = document.getElementById("big_picture"); // Место, куда будем вставлять большую картинку
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.id.split("_");
    var src = "big/b00" + imageNameParts[1] + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.onerror = function () {
        console.log("Файл не найден!");
    }
    appDiv.appendChild(imageDomElement);
}

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}
window.onload = init;