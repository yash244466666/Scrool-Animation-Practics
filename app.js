let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    let triggerBtm = window.innerHeight / 5 * 4;
    console.log(triggerBtm);

    boxes.forEach(function(box) {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBtm){
            box.classList.add('show')
        }else(
            box.classList.remove('show')

        )
    })
}