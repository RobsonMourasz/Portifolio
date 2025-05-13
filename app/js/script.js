(()=>{
    window.addEventListener("scroll", function() {
        let scrollTop = this.window.scrollY;
        if (scrollTop > 1) {
            document.querySelector(".header").classList.add("fixed");
        }else if (scrollTop < 1){
            document.querySelector(".header").classList.remove("fixed");
        }
    });
})();