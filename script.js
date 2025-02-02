document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    sections.forEach(section => {
        section.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#e0f7fa";
            this.style.transition = "background-color 0.3s ease";
        });
        
        section.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "white";
        });
    });
});
