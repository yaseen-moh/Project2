script.js:

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("community-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const location = document.getElementById("location").value;
        const needs = document.getElementById("needs").value;
        
        const communityList = document.getElementById("community-list");
        const entry = document.createElement("p");
        entry.textContent = `${name} (${location}): ${needs}`;
        communityList.appendChild(entry);
        
        this.reset();
    });
    
    document.getElementById("search").addEventListener("keyup", function() {
        const filter = this.value.toLowerCase();
        const providers = document.querySelectorAll("#provider-list li");
        providers.forEach(provider => {
            if (provider.textContent.toLowerCase().includes(filter)) {
                provider.style.display = "block";
            } else {
                provider.style.display = "none";
            }
        });
    });
});
