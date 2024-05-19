const menuButton = document.querySelector(".menu-Button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);
handleResize();

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === "IMG") {
        const src = clickedElement.getAttribute("src");
        const fullPath = src.split("-")[0] + "-full.jpeg";
        const viewerHTML = viewerTemplate(fullPath, clickedElement.alt);
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);
        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);



// const menuButton = document.querySelector(".menu-button");
// const menu = document.querySelector(".menu");

// function toggleMenu() {
//     menu.classList.toggle("hide");
// }

// menuButton.addEventListener("click", toggleMenu);

// function handleResize() {
//     if (window.innerWidth > 1000) {
//         menu.classList.remove("hide");
//     } else {
//         menu.classList.add("hide");
//     }
// }

// handleResize();
// window.addEventListener("resize", handleResize);

// function viewerTemplate(pic, alt) {
//     return `<div class="viewer">
//       <button class="close-viewer">X</button>
//       <img src="${pic}" alt="${alt}">
//       </div>`;
// }

// function viewHandler(event) {
//     const clickedElement = event.target;

//     if (clickedElement.tagName === "IMG") {
//         const src = clickedElement.getAttribute("src");
//         const fullPath = src.split("-")[0] + "-full.jpeg";
//         const viewerHTML = viewerTemplate(fullPath, clickedElement.alt);
//         document.body.insertAdjacentHTML("afterbegin", viewerHTML);
//         const closeButton = document.querySelector(".close-viewer");
//         closeButton.addEventListener("click", closeViewer);
//     }
// }

// function closeViewer() {
//     const viewer = document.querySelector(".viewer");
//     if (viewer) {
//         viewer.remove();
//     }
// }

// const gallery = document.querySelector(".gallery");
// gallery.addEventListener("click", viewHandler);