var MenuList = document.getElementById("MenuList");
    function openMenu(){
        if(MenuList.style.height == '160px')
        {
        MenuList.style.height = '0px';
        MenuList.style.opacity = '0%';
        MenuList.style.visibility = 'hidden';
        document.getElementsByClassName('menu')[0].innerHTML = '&#9776;'
        }
        else
        {
        MenuList.style.height = '160px';
        MenuList.style.opacity = '100%';
        MenuList.style.visibility = 'visible';
        document.getElementsByClassName('menu')[0].innerHTML = '&#x2715;'
        }
    }