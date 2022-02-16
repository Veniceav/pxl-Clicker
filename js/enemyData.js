function displayImg() {
    const enemyImg = ["images/ghost1.png", "images/ghost2.png", "images/eyeball2.png"];
    const randomNum = Math.floor(Math.random() * enemyImg.length);
    document.querySelector('#targetImage').src = enemyImg[randomNum];
}