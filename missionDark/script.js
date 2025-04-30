const themeSelector = document.querySelector('select')
const byuiLogo = document.querySelector('img');

function changeTheme() 
{
    const selectedTheme = themeSelector.value;
    if (selectedTheme == 'dark') 
        {
            document.body.classList.add('dark');
            byuiLogo.src = 'byui-logo_dark.png';
        }

    else if (selectedTheme == 'light')
        {
            document.body.classList.remove('dark');
            byuiLogo.src = 'byui-logo_blue.webp';
        }

    else 
        {
            // Keep the previous choice
        }
}

themeSelector.addEventListener('change', changeTheme);