const articles = [
    {
      id: 1,
      title: "Septimus Heap Book One: Magyk",
      date: "July 5, 2022",
      description:
        "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      imgAlt: "Book cover for Septimus Heap 1",
      ages: "10-14",
      genre: "Fantasy",
      stars: "****"
    },
    {
      id: 2,
      title: "Magnus Chase Book One: Sword of Summer",
      date: "December 12, 2021",
      description:
        "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
      imgSrc:
        "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      imgAlt: "Book cover for Magnus Chase 1",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐"
    },
    {
      id: 3,
      title: "Belgariad Book One: Pawn of Prophecy",
      date: "Feb 12, 2022",
      description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
      imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
      imgAlt: "Book cover for Pawn of Prophecy",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐⭐"
    }
];

const articlesContainer = document.querySelector('.articles');

function columnContent(content) {
    const article = document.createElement('div');
    article.classList.add('article');

    const contentLeft = document.createElement('div');
    contentLeft.classList.add('info');
    contentLeft.innerHTML = `
        <p>${content.date}</p>
        <p>${content.ages}</p>
        <p>${content.genre}</p>
        <p>${content.stars}</p>
    `;

    const middleBorder = document.createElement('div');
    middleBorder.classList.add('middle-border');

    const contentMidd = document.createElement('div');
    contentMidd.classList.add('book');
    contentMidd.innerHTML = `
        <h2>${content.title}</h2>
        <img src="${content.imgSrc}">
        <p>${content.description}</p>
    `;

    article.appendChild(contentLeft);
    article.appendChild(middleBorder);
    article.appendChild(contentMidd);
    articlesContainer.appendChild(article);
}

articles.forEach(content => {columnContent(content);});


// articles.forEach(columnContent);

// const leftSide = document.querySelector('.info');
// const middSide = document.querySelector('.book');
// const righSide = document.querySelector('.filter');

// function columnContent(content)
// {
//   const contentLeft = document.createElement('div');
//   contentLeft.innerHTML = `
//   <p>${content.date}</p>
//   <p>${content.ages}</p>
//   <p>${content.genre}</p>
//   <p>${content.stars}</p>
//   `;

//   const contentMidd = document.createElement('div');
//   contentMidd.innerHTML = `
//   <p>${content.title}</p>
//   <img src="${content.imgSrc}">
//   <p>${content.description}</p>
//   `;

//   leftSide.appendChild(contentLeft);
//   middSide.appendChild(contentMidd);
// }

// articles.forEach(content => {columnContent(content);});