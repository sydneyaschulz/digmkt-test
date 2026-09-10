document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    navigation.innerHTML = `
    <nav class="top-nav">

        <a href="#about">About Me</a>

        <a href="#jobs">Prior Jobs</a>

        <a href="#resume">Resume</a>

        <a href="#personal">Personal</a>

        <a href="#" class="products-link">Products</a>

    </nav>
`;

});
