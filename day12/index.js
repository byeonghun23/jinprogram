export default async function main() {

    console.log('start App')

    const main_menu = document.queryselecter('mein-menu')

    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-item");

    console.log(menuitems.length)
    const menuitem_const = menuitems.length

    menuitems[currentIndex].classList.add("select")
    
    window.addEventListener("keydown", (e) => {

        console.log(e.key)

        menuitems[currentIndex].classList.remove('select')

        if(e.key == "ArrowUP") {
        currentIndex--
        if(currentIndex < 0) {
            currentIndex = menuitem_count-1
        }
    }
    else if(e.key == "ArrowDown") {
        currentIndex++
        currentIndex %=menuitem_count
    }
    else if(e.key == "Enter") {
        console.log(menuitems[currentIndex].dataset.action)
        const select_action = menuitem[currentIndex].dataset.action

        if(select_action == 'credit') {

            main_menu.classList.add('hide')
            creditscreen.classList.remove('hide')
        }

        }
    })

    
    
    


    
} 