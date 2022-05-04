// alert("This website is not completed yet. I am working on that.");

$(document).ready(() => {
    $("nav li:last-child").on("click", () => {
        $(".cart").toggle();
    });

    $(".fa-close").on("click", () => {
        $(".cart").toggle();
    });

    $(".nav_links_wrapper").prepend(`<div class="burger_btn_wrapper" style="padding: 20px;cursor: pointer;z-index:7;">
    <i class="fa fa-bars"></i>
    </div>`);

    $("nav").append(`<div class="responsive_nav center_elements">
    <ul>
        <li><a href="about.html">about</a></li>
        <li><a href="workouts.html">free workouts</a></li>
        <li><a href="shop.html">shop</a></li>
        <li><a href="contact.html">book a call</a></li>
    </ul>
    </div>`);

    $(".burger_btn_wrapper").on("click", () => {
        var isOpen = $(".responsive_nav").hasClass("slideIn");

        $(".burger_btn_wrapper").css({
            "background-color": isOpen ? "transparent" : "#081158",
            "color": isOpen ? "black" : "#fff"
        })
        $(".responsive_nav").attr("class", isOpen ? "responsive_nav center_elements slideOut" : "responsive_nav center_elements slideIn")
    });
})