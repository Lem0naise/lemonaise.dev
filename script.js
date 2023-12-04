function grow(){
    let c = document.getElementById("cont");
    let b = document.getElementById("bod");
    c.style.scale = "1.1 1.1"
    c.style.opacity = 1;
    setTimeout(() => {
        b.style.opacity = 1;
        b.style.scale = "1 1"
    }, 900);
    setTimeout(() => {
        c.style.top = "7%";
        c.style.scale = "0.8 0.8"
        c.style.opacity = 0.7;
    }, 1000);
    setTimeout(() => {
        //c.style.textDecoration = "underline";
    }, 1200);

}
window.onload = grow