function rollDice(){

    const input = document.getElementById("data");
    const resultTxt = document.getElementById("resultPara");
    const resultImg = document.getElementById("resultImg");
    const values = [];
    const images = [];

    for(let i = 0; i < input.value; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="assets/images/${value}.svg">`);
    }
    resultTxt.textContent = values.join(', ');
    resultImg.innerHTML = images.join('');
}