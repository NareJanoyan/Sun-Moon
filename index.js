let moonDiv = document.getElementById('moonDiv');
let sunDiv = document.getElementById('sunDiv');

let chench = function() {
    sunDiv.style.transition = '10s';
    sunDiv.style.marginTop = '50pxs';
    sunDiv.style.backgroundColor = 'rgb(236, 220, 76)';
    moonDiv.style.marginLeft = '-60px';
    moonDiv.style.transition = '13s';
    document.body.style.backgroundColor = '#E4E4FF';
    document.body.style.transition = '15s';
}

setTimeout( () => {
    chench()
}, 1000);