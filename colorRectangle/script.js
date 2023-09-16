const rect = document.querySelector('#center');

rect.addEventListener('mousemove', function (details) {

    // console.log(rect.getBoundingClientRect().width);

    const boxLeft = Math.floor(rect.getBoundingClientRect().left);
    const boxRight = Math.floor(rect.getBoundingClientRect().right);
    const boxWidth = Math.floor(rect.getBoundingClientRect().width);

    let mouseX = details.x;
    mouseX -= boxLeft;
    mouseX = Math.floor(mouseX);

    const mid = (boxRight - boxLeft) / 2;
    // console.log(mid);

    const xDist = boxWidth - mouseX;
    let blueVal = gsap.utils.mapRange(0, boxWidth, 255, 0, xDist);
    let redVal = gsap.utils.mapRange(0, boxWidth, 0, 255, xDist);
    rect.style.backgroundColor = `rgb(${redVal}, 0, ${blueVal})`;


    // if (mouseX < mid) {

    //     // In left side

    //     const xDist = mid - mouseX;

    //     let redVal = gsap.utils.mapRange(0, boxWidth, 0, 255, xDist);

    //     rect.style.backgroundColor = `rgb(${redVal}, 0, 0)`;
    // }
    // else {

    //     // In right side
    //     const xDist = mouseX - mid;

    //     let blueVal = gsap.utils.mapRange(0, mid, 0, 255, xDist);
    //     rect.style.backgroundColor = `rgb(0, 0, ${blueVal})`;

    // }
})

rect.addEventListener('mouseleave', function () {
    rect.style.backgroundColor = 'white';
})