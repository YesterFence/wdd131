const cheeses = [
    {
        name: "American",
        description: "",
        img: "Images/rsz_american.png",
        price: 3.59,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Gouda",
        description: "",
        img: "Images/rsz_gouda.jpg",
        price: 6.79,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Brie",
        description: "",
        img: "Images/rsz_brie.png",
        price: 4.45,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Cheddar",
        description: "",
        img: "Images/rsz_cheddar.jpg",
        price: 2.94,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Colby Jack",
        description: "",
        img: "Images/rsz_colbyjack.jpg",
        price: 3.50,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Ricotta",
        description: "",
        img: "Images/rsz_ricotta.png",
        price: 3.93,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Pepper Jack",
        description: "",
        img: "Images/rsz_pepperjack.jpg",
        price: 3.74,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Parmesan",
        description: "",
        img: "Images/rsz_parmesan.png",
        price: 4.95,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Mozzarella",
        description: "",
        img: "Images/rsz_mozzarella.jpg",
        price: 4.95,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Swiss",
        description: "",
        img: "Images/rsz_swiss.png",
        price: 2.99,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Gorgonzola",
        description: "",
        img: "Images/rsz_gorgonzola.png",
        price: 4.99,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Bleu",
        description: "",
        img: "Images/rsz_bleu.jpg",
        price: 7.06,
        quantity: 0,
        storeTag: ["", "", ""]
    },
    {
        name: "Unprocessed",
        description: "",
        img: "Images/unprocessed.jpeg",
        price: 3.75,
        quantity: 0,
        storeTag: ["", "", ""]
    }
]

let cheeseOrder = [];
let randomNum = Math.floor(Math.random() * cheeses.length);
const cheese = cheeses[randomNum];
const displayCheese = cheeses.slice(0, 12);
const sortSelector = document.querySelector('#sortCheeses')
let defaultOrder = cheeseShuffle(displayCheese);

function cheeseShuffle(jumble)
{
    const shuffled = [...jumble].sort(() => Math.random() - 0.5);
    cheeseOrder = [...shuffled];
    return shuffled;
}

function dropDown()
{
    const choice = sortSelector.value;
    let sortedCheeses;

    if (choice == 'alphabetical')
    {
        sortedCheeses = [...cheeseOrder].sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (choice == 'priceLow')
    {
        sortedCheeses = [...cheeseOrder].sort((a, b) => a.price - b.price);
    }
    else if (choice == 'priceHigh')
    {
        sortedCheeses = [...cheeseOrder].sort((a, b) => b.price - a.price);
    } 
    else if (choice == 'default')
    {
        sortedCheeses = [...cheeseOrder];
    }
    else
    {
        sortedCheeses = [...cheeseOrder];
    }

    renderCheeses(sortedCheeses);
}

function cheeseTemplate(cheese, index)
{
    return `
    <figure class="cheese">
        <div class="cheese-image">
            <img src="${cheese.img}" alt="image of ${cheese.name}" />
        </div>

    <figcaption>
    <h2>${cheese.name}</h2>
    <p>$${cheese.price.toFixed(2)}</p>
    <div class="quantity-controls">
        <button onclick="updateQuantityByName('${cheese.name}', 1)">+</button>
        <span id="qty-${cheese.name}">${cheese.quantity}</span>
        <button onclick="updateQuantityByName('${cheese.name}', -1)">-</button>
    </div>
    </figcaption>
    </figure>
    `;
}

function updateQuantityByName(name, change) {
    const cheese = cheeses.find(c => c.name === name);
    if (!cheese) return;
    cheese.quantity = Math.max(0, cheese.quantity + change);
    document.getElementById(`qty-${cheese.name}`).innerText = cheese.quantity;
}

function renderCheeses(cheeseList)
{
    const cheeseContainer = document.querySelector('#cheese-container');
    cheeseContainer.innerHTML = cheeseList.map((cheese, index) => cheeseTemplate(cheese, index)).join('');
}


function openReceipt() {
    // Sort cheeses alphabetically
    const sortedCheeses = [...cheeses].sort((a, b) => a.name.localeCompare(b.name));
    const receiptList = document.getElementById("receipt-list");
    receiptList.innerHTML = "";

    let total = 0;

    sortedCheeses.forEach(cheese => {
        if (cheese.quantity > 0) {
            const line = document.createElement("div");
            line.classList.add("receipt-line");

            const left = document.createElement("span");
            left.textContent = `${cheese.name} (${cheese.quantity})`;

            const right = document.createElement("span");
            const lineTotal = cheese.price * cheese.quantity;
            right.textContent = `$${lineTotal.toFixed(2)}`;
            total += lineTotal;

            line.appendChild(left);
            line.appendChild(right);
            receiptList.appendChild(line);
        }
    });

    document.getElementById("receipt-total").textContent = `Total: $${total.toFixed(2)}`;

    document.getElementById("receipt-modal").classList.remove("hidden");
}

function closeReceipt() {
    document.getElementById("receipt-modal").classList.add("hidden");
}

function calculateCheeseTotals() {
    const receiptList = document.getElementById("receipt-list");
    receiptList.innerHTML = "";

    let total = 0;

    cheeses.forEach((cheese) => {
        if (cheese.quantity > 0) {
            const line = document.createElement("div");
            line.classList.add("receipt-line");

            const left = document.createElement("span");
            left.textContent = `${cheese.name} (${cheese.quantity})`;

            const right = document.createElement("span");
            const lineTotal = cheese.price * cheese.quantity;
            total += lineTotal;
            right.textContent = `$${lineTotal.toFixed(2)}`;

            line.appendChild(left);
            line.appendChild(right);
            receiptList.appendChild(line);
        }
    });

    document.getElementById("receipt-total").textContent = `Total: $${total.toFixed(2)}`;
}


renderCheeses(defaultOrder);