document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    navigation.innerHTML = `
        <nav class="top-nav">

            <div class="nav-links">

                <a href="about.html">About Me</a>

                <a href="jobs.html">Prior Jobs</a>

                <a href="resume.html">Resume</a>

                <a href="personal.html">Personal</a>

                <a href="products.html" class="products-link">Products</a>

            </div>

        </nav>
    `;

});
