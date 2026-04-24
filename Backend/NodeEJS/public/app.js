 function toggleLike(el) {
        if (el.classList.contains("liked")) {
            el.classList.remove("liked");
            el.innerText = "🤍";
        } else {
            el.classList.add("liked");
            el.innerText = "❤️";
        }
    }

    function addComment(index) {
        let input = document.getElementById("input-" + index);
        let commentBox = document.getElementById("comments-" + index);

        if (input.value.trim() !== "") {
            let p = document.createElement("p");
            p.innerText = input.value;
            commentBox.appendChild(p);
            input.value = "";
        }
    }