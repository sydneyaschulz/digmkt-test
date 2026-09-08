document.addEventListener("DOMContentLoaded", function () {

    const nav = document.getElementById("navigation");

    nav.innerHTML = `
        <nav class="navbar">

            <div class="nav-name">
                <a href="index.html">Sydney Schulz</a>
            </div>

            <ul class="nav-links">
                <li><a href="about.html">About Me</a></li>
                <li><a href="jobs.html">Prior Jobs</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="personal.html">Personal</a></li>
            </ul>

        </nav>
    `;
});
