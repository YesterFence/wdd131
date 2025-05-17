// const button = document.getElementById('.menuButton');
const button = document.querySelector('.menuButton');
const link = document.querySelector('.links');
const image = document.querySelectorAll('.pictures img');
const enlarge = document.querySelector('.enhance');
const enlargeImg = document.querySelector('.enhance-img');
const close = document.querySelector('.close-enhance');

button.addEventListener('click', function ()
{
    link.classList.toggle('hide');
});

enlarge.addEventListener('click', function(event)
{
    if (event.target === enlarge)
    {
        enlarge.classList.add('hide');
    }
});
// Needed !!!!
const modal = document.createElement('dialog');
modal.innerHTML=`<img><button class='close-viwer'>X</button>`;

close.addEventListener('click', function()
{
    enlargeImg.src = 'coolpics2/pics/norris-full.jpeg';
    enlarge.classList.add('hide');
});
// Do NOT USE FOR EACH
image.forEach(function(img)
{
    img.addEventListener('click', function()
    {
        enlargeImg.src = img.src;
        enlarge.classList.remove('hide');
    });
});

function handleResize()
{
    if (window.innerWidth > 1000)
    {
        link.classList.remove("hide");
    }
    else
    {
        link.classList.add("hide");
    }
}


let btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu')
btn.addEventListener('click', toggleMenu);
function toggleMenu()
{
    menubar.classList.toggle('hide');
}


handleResize();
window.addEventListener("resize", handleResize);