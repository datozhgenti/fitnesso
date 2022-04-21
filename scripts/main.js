// alert("This website is not completed yet. I am working on that.");

$(document).ready(() => {
    $("nav li:last-child").on("click", () => {
        $(".cart").toggle();
    });

    $(".fa-close").on("click", () => {
        $(".cart").toggle();
    });
})