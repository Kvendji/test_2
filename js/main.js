
//likes
document.addEventListener("DOMContentLoaded", function(event) {
    var likes_elements = document.getElementsByClassName('likes');
    for(var i = 0; i < likes_elements.length; i++) {
        var likes_element = likes_elements[i];
        likes_element.onclick = function() {
            var count =  parseInt(this.innerHTML) + 1;
            this.innerHTML = count
        }
    }
});




