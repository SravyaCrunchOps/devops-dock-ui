## DEVELOPMENT CHAT
---

https://chat.openai.com/c/32175855-b95e-45d1-b073-397573e38540

### Color Palette Followed
--- 

website - https://coolors.co/palattes/trending

Header-Footer => Dark Brown - #e29578
Body => Light Brown -#ffddd2
Text => Light Color - #edf6f9
Light Greenish-Blue - #83c5be
Dark Greenish-Blue - #006d77

Final Color theme used
https://colorhunt.co/palette/27374d526d829db2bfdde6ed


### background-pattern
---

https://heropatterns.com/
new

---

### Audio Effect
---

Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=43637">Pixabay</a>

Sound Effect by <a href="https://pixabay.com/users/microsammy-22905943/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=8761">Microsammy</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=8761">Pixabay</a>

## fonts
---

1. Heading - young serif 48px
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,400;0,400;1,900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&family=Young+Serif&display=swap" rel="stylesheet">

--------------------------------------------------------------------------------

## To remove duplicates 
const uniqueTaskList = removeDuplicateTasks(finish);
console.log('unique: ', uniqueTaskList)

function removeDuplicateTasks(fin) {
    const uniqueTask = fin.filter((obj, index) => index === fin.findIndex(o => o.id === obj.id))     
    return uniqueTask
}