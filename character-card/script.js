const character = 
{
    name: "Snortleblat",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    
    attacked() 
    {
    if (this.health >= 20) 
        {
            this.level -= 1;
            this.health -= 20;
        } 
    else 
        {
            alert('Character Died');
        }
    },

    levelUp() 
    {
        this.level += 1;
        this.health += 20;
    }
};

document.querySelector(".name").textContent = character.name;
document.querySelector(".image").src = character.image;
document.querySelector("#class").textContent = character.class;


const levels = document.getElementById("level");
const healths = document.getElementById("health");

function checkStats()
{
    levels.textContent = character.level;
    healths.textContent = character.health;
}

document.getElementById("attacked").addEventListener("click", () => 
    {
        const damaged = character.attacked();
        checkStats();
    });

document.getElementById("levelup").addEventListener("click", () => 
    {
        const upgrade = character.levelUp();
        checkStats();
    });

checkStats();