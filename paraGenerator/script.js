const input = document.querySelector('#numberOfWords');
const container = document.querySelector('.container');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

let generateWord = () => {
    const wordLength = Math.floor(Math.random() * 12);

    let word = '';
    for (let i = 0; i < wordLength; i++){
        let index = Math.floor(Math.random() * 25);
        word += alphabet[index];
    }
    word += ' ';

    return word;
}

function getValue() {
    console.log(input.value);

    const words = Number(input.value);
    
    let para = '';
    for (var i = 0; i < words; i++){
        para += generateWord();
    }

    // console.log(para[0])
    // para[0] = para[0].toUpperCase();
    // console.log(para)

    const paragraph = document.createElement('p');
    paragraph.classList.add('para');
    paragraph.append(para);
    container.append(paragraph);
}