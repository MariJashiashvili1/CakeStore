eventListeners();
function eventListeners() {
    const ui = new UI();
    window.addEventListener('load', function () {
        ui.hidePreloader();
    });

    // nav btn
    document.querySelector('.navBtn').addEventListener('click', function () {
        ui.showNav();
    });
    // control the video
    document.querySelector('.video_switch').addEventListener('click', function () {
        ui.videoControls();
    })

    // display modal
    // const links = document.querySelectorAll('.work-item-icon');

    // links.forEach(function (item) {
    //     item.addEventListener('click', function (event) {
    //         ui.showModal(event)
    //     });
    // });
    // // hide modal
    // document.querySelector('.work-modal-close').addEventListener('click', function () {
    //     ui.closeModal();
    // })
}

function UI() {
    
}

UI.prototype.hidePreloader = function () {
    document.querySelector('.preloader').style.display = 'none';
}
UI.prototype.showNav = function () {
    document.querySelector('.nav').classList.toggle('nav-show');
}

// play/pause the video
UI.prototype.videoControls = function () {
    let btn = document.querySelector('.video_switch_btn');
    if (!btn.classList.contains('btnSlide')) {
        btn.classList.add('btnSlide')
        document.querySelector('.video_item').pause();
    }
    else {
        btn.classList.remove('btnSlide')
        document.querySelector('.video_item').play();
    }
}





// show modal
// UI.prototype.showModal = function (event) {
//     event.preventDefault();
//     console.log(event.target.parentElement.classList.contains('work-item-icon'));
//     let id = event.target.parentElement.dataset.id;

//     const modal = document.querySelector('.work-modal');
//     const modalItem = document.querySelector('.work-modal-item');

//     modal.classList.add('work-modal-show');
//     modalItem.style.backgroundImage = `url(/img/work-${id}.jpg)`
// }

// hide modal
// UI.prototype.closeModal = function () {
//     document.querySelector('.work-modal').classList.remove('work-modal-show');
// }