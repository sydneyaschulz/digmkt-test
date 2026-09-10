document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    navigation.innerHTML = `
        <nav class="top-nav">

            <div class="nav-links">

                <a href="index.html#about">About Me</a>

                <a href="index.html#jobs">Prior Jobs</a>

                <a href="index.html#resume">Resume</a>

                <a href="index.html#personal">Personal</a>

                <a href="products.html" class="products-link">Products</a>

            </div>

        </nav>
    `;

});
