document.addEventListener("DOMContentLoaded", function () {
    const defaultPfp = "./Images/Default-pfp.png"; // Path to default profile picture

    // Open file input when profile container is clicked
    document.querySelector(".Profile-Picture-Container").addEventListener("click", function () {
        document.getElementById("profileInput").click();
    });

    // Update profile picture when a new file is selected
    document.getElementById("profileInput").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("profilePicture").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Reset profile picture to default
    document.getElementById("deletePfp").addEventListener("click", function () {
        document.getElementById("profilePicture").src = defaultPfp;
    });
});
