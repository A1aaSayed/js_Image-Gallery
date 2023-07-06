const filterButtons = document.querySelectorAll('.filter_buttons button');
const imagesCard = document.querySelectorAll('.images_card .card')

const filterable = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    // console.log(e.target);   button
    imagesCard.forEach(card => {
        card.classList.add('hide');
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
        card.classList.remove('hide');
        }
    })
}

filterButtons.forEach(button => button.addEventListener('click', filterable))









































// const filterButtons = document.querySelectorAll('.filter_buttons button');
// const imgsCard = document.querySelectorAll('.imgs_card .card');

// const filterCards = e => {
//     document.querySelector('.active').classList.remove('active');
//     e.target.classList.add('active');

//     imgsCard.forEach(card => {
//         card.classList.add('hide')
//         if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
//             card.classList.remove('hide')
//         }
//     })
// }

// filterButtons.forEach(button => button.addEventListener('click', filterCards))