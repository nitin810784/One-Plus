function toggleMenu() {
    console.log("heloo")
    let element = document.getElementById("all_thre_line_productss");
    let e1 = document.getElementById("all_content");
    let menuLog = document.getElementById("menu_log");
   // e1.style.display="none";
    if (element.style.display === "block" ) {
        menuLog.innerText = "menu";
        element.style.display = "none";
        e1.style.display="block";
    
    } else {
        menuLog.innerText = "close";
        element.style.display = "block";
        e1.style.display="none";
    }
}
// function helo() {
    // console.log("Hello");
// }
