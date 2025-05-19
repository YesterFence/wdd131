// Menu Management
const button = document.querySelector('#menuToggle');
const theLinks = document.querySelector('#headLinks');
// Picture Management
const image = document.querySelectorAll('.pictures');
const enlarge = document.querySelector('.enhance');
const enlargeImg = document.querySelector('.enhance-img');
const close = document.querySelector('.close-enhance');


button.addEventListener('click', () =>
{
    theLinks.classList.toggle('hide');
});

function handleResize()
{
    if (window.innerWidth > 1200)
    {
        theLinks.classList.remove("hide");
    }
    else
    {
        theLinks.classList.add("hide");
    }

}
// button.addEventListener('click', toggleMenu);
handleResize();
window.addEventListener("resize", handleResize);
// image.addEventListener('click', function()
// {
//     enlargeImg.src = "pics/norris-full.jpeg";
//     enlarge.classList.remove('hide');
// });

// close.addEventListener('click', function()
// {
//     enlarge.classList.add('hide');
//     enlargeImg.src = '';
// });




// enlarge.addEventListener('click', function(event)
// {
//     if (event.target === enlarge)
//     {
//         enlarge.classList.add('hide');
//     }
// });

// // Needed !!!!
// const modal = document.createElement('dialog');
// modal.innerHTML=`<img><button class='close-viwer'>X</button>`;

// close.addEventListener('click', function()
// {
//     enlargeImg.src = 'coolpics2/pics/norris-full.jpeg';
//     enlarge.classList.add('hide');
// });


// let btn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu')
// btn.addEventListener('click', toggleMenu);
// function toggleMenu()
// {
//     menubar.classList.toggle('hide');
// }