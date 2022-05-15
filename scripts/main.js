// alert("This website is not completed yet. I am working on that.");

$(document).ready(() => {
    $("nav li:last-child").on("click", () => {
        $(".cart").toggle();
    });

    $(".cart_header i").on("click", () => {
        $(".cart").toggle();
    });

    $(".fa-close").on("click", () => {
        $(".youtube").hide();
        $('iframe').attr('src', $('iframe').attr('src'));
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

    let pictures1_left_margin = 300;
    let pictures2_left_margin = -700;
    var lastScrollTop = 0;
    $(window).on("scroll", () => {
        let s_top = $('.social_networks').offset().top;
        let f_top = $('footer').offset().top;
        let wH = $(window).height();
        let wS = $(window).scrollTop();

        if (wS > s_top - wH && wS < f_top - wH) {
            if (wS > lastScrollTop) {
                if (pictures1_left_margin > -10) {
                    $(".pictures_wrapper:nth-child(1)").css("margin-left", `${pictures1_left_margin-=20}px`);
                }

                if (pictures2_left_margin < -200) {
                    $(".pictures_wrapper:nth-child(3)").css("margin-left", `${pictures2_left_margin+=20}px`);
                }
            } else {
                if (pictures1_left_margin < 300) {
                    $(".pictures_wrapper:nth-child(1)").css("margin-left", `${pictures1_left_margin +=20}px`);

                }

                if (pictures2_left_margin > -700) {
                    $(".pictures_wrapper:nth-child(3)").css("margin-left", `${pictures2_left_margin-=20}px`);
                }
            }

            lastScrollTop = wS;
        }


    });


    $(".filter_btns a").on("click", (e) => {
        $(".filter_btns a").attr("id", "");

        e.target.id = "filter_active";
    });

    $(".video_wrapper a").on("click", () => {
        console.log("clicked");
        $(".youtube").css("display", "block");
    });




})