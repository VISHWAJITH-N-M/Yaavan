var MenuList = document.getElementById("MenuList");
var CateMenu = document.getElementsByClassName("ParentCate");
var CateList = document.getElementById("CateList");
let ch = CateMenu[0].style.height;
let test_ch = CateMenu[0].style.height + '280px';
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
function openCate(){
    if(CateMenu[0].style.height == test_ch)
    {
    CateMenu[0].style.height = ch;
    CateList.style.height = '0px';
    CateList.style.visibility = 'hidden';
    CateList.style.opacity = '0';
    }
    else
    {
        CateList.style.height = '280px';
        CateList.style.visibility = 'visible';
        CateList.style.opacity = '1';
        CateMenu[0].style.height = test_ch; 
    }
} 
function closeCate(){
    setTimeout(function(){ 
    CateMenu[0].style.height = ch;
    CateList.style.height = '0px';
    CateList.style.visibility = 'hidden';
    CateList.style.opacity = '0';
     }, 500);
    
} 