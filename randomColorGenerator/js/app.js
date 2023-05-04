const getColor = () => {
    const hexNum = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + hexNum.toString(16);
    console.log(hexNum, randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('colorCode').innerHTML = randomCode;

    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener('click', getColor);

getColor();