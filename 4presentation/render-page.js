import { PageLogic } from "../3buisness/bussnes-logic.js";
import { LoginForm } from "../4presentation/loginform.js";
import { HomeContent } from "../4presentation/homecontent.js";
import { Characters } from "../4presentation/charactercontent.js";
import { ShopContent } from "../4presentation/shopcontetnt.js"
import { RenderApi } from "../4presentation/apimediacontent.js"
import { ImageData } from "../4presentation/imagecontentapi.js"
export function RenderPage() {
    this.pageData = new PageLogic();
    this.loginData = new LoginForm();
    this.homeContent = new HomeContent();
    this.charContent = new Characters();

    this.apiContent = new RenderApi();
    this.imgContent = new ImageData();
    this.shopContent = new ShopContent();
    var $self = this;
    this.renderAll = function() {


        $("#closeCart").click(function(e) {
            e.preventDefault;
            $("#dropDownCart").hide(500);
        })
        $("#cart-box").click(function(e) {
            e.preventDefault();
            $("#dropDownCart").show(500).css({
                display: 'grid',
            });

        });
        $("#closehover").mouseover(function(e) {
            $("#dropDownCart").hide(500);
        })

        $(window).scroll(function() { myFunction() });
        var navbar = document.getElementById("dropDownCart");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("cart-container");
            } else {
                navbar.classList.remove("cart-container");
            }
        }











        this.loginData.renderForm();
        this.pageData.getDataFromApiChar();
        this.apiContent.renderApiData();
        this.imgContent.renderImgData();
        this.shopContent.renderMyShop();


        setTimeout(function() {

            $(".loader").addClass("loader-hide").fadeOut();
            $self.homeContent.renderHomeContent();
            $self.charContent.renderCharacters();
            var loader = $(".loader");
            $("#home").on("click", (event) => {
                event.preventDefault();

                $("body").css("overflow-y", "hidden");
                $(loader).removeClass("loader-hide");
                $(document).ready(function() {
                    $(this).scrollTop(0);
                });
                $("#apicontent").hide();
                $("#galleryApi").hide();

                $("#buyItems").hide();
                $("#Characters").hide();
                $("#container-content").show();

                setTimeout(() => {
                    $(loader).addClass("loader-hide");
                    $("body").css("overflow-y", "scroll");
                    $("#logoDevil").hide();
                    $("#logoDevil").delay(500).fadeIn(500).fadeIn("slow");
                    $("#paraAva").hide();
                    $("#paraAva").delay(1000).fadeIn(500).fadeIn("slow");
                    $("#button").hide();
                    $("#clickMe").hide();
                    $("#clickMe").delay(1500).fadeIn(500).fadeIn("slow");
                    $("#button").delay(1500).fadeIn(500).fadeIn("slow");
                }, 2000)
            });
            $("#charPage").on("click", (event) => {
                event.preventDefault();
                $("body").css("overflow-y", "hidden");
                $(loader).removeClass("loader-hide");
                $(document).ready(function() {
                    $(this).scrollTop(0);
                });
                $("#apicontent").hide();

                $("#container-content").hide();
                $("#Characters").show();
                $("#buyItems").hide();
                $("#galleryApi").hide();

                setTimeout(() => {
                    $(loader).addClass("loader-hide");
                    $("body").css("overflow-y", "scroll");
                    $("#charText").hide();
                    // Show the div after 5s
                    $("#charText").delay(2000).fadeIn(1000).fadeIn("slow");
                    $(".mySecondCharText").hide();
                    // Show the div after 5s
                    $(".mySecondCharText").delay(2300).fadeIn(2000).fadeIn("slow");

                    $(".myThirdTextChar").hide();
                    // Show the div after 5s
                    $(".myThirdTextChar").delay(2600).fadeIn(3000).fadeIn("slow");

                    $(".myFourTextChar").hide();
                    // Show the div after 5s
                    $(".myFourTextChar").delay(2900).fadeIn(4000).fadeIn("slow");

                    $(".fiveTextChar").hide();
                    // Show the div after 5s
                    $(".fiveTextChar").delay(3200).fadeIn(5000).fadeIn("slow");
                }, 2000)
            });
            $("#scrollMeSystem").on("click", (event) => {
                event.preventDefault();
                $("body").css("overflow-y", "hidden");
                $(loader).removeClass("loader-hide");
                $(document).ready(function() {
                    $(this).scrollTop(0);
                });
                $("#container-content").hide();
                $("#Characters").hide();
                $("#apicontent").hide();
                $("#galleryApi").hide();

                $("#buyItems").show();

                setTimeout(() => {
                    $(loader).addClass("loader-hide");
                    $("body").css("overflow-y", "scroll");
                    $(".allcategories").hide();
                    // Show the div after 5s
                    $(".allcategories").delay(800).fadeIn(5000).fadeIn("slow");
                    $(".item").hide();
                    // Show the div after 5s
                    $(".item").delay(1000).fadeIn(5000).fadeIn("slow");
                    $("#footerBefore").hide();
                    // Show the div after 5s
                    $("#footerBefore").delay(1000).fadeIn(5000).fadeIn("slow");
                    $("#footerTwo").hide();
                    // Show the div after 5s
                    $("#footerTwo").delay(1000).fadeIn(5000).fadeIn("slow");
                }, 2000)
            });

            $("#gallery").on("click", (event) => {
                event.preventDefault();
                $("body").css("overflow-y", "hidden");
                $(loader).removeClass("loader-hide");
                $(document).ready(function() {
                    $(this).scrollTop(0);
                });
                $("#container-content").hide();
                $("#Characters").hide();
                $("#buyItems").hide();
                $("#apicontent").hide();
                $("#galleryApi").show();

                setTimeout(() => {
                    $(loader).addClass("loader-hide");
                    $("body").css("overflow-y", "scroll");
                    $(".container-text-img").hide();
                    // Show the div after 5s
                    $(".container-text-img").delay(800).fadeIn(5000).fadeIn("slow");
                    $(".divImages").hide();
                    // Show the div after 5s
                    $(".divImages").delay(1000).fadeIn(5000).fadeIn("slow");
                    $("#footerBefore").hide();
                    // Show the div after 5s
                    $("#footerBefore").delay(1500).fadeIn(5000).fadeIn("slow");
                    $("#footerTwo").hide();
                    // Show the div after 5s
                    $("#footerTwo").delay(1500).fadeIn(5000).fadeIn("slow");

                }, 2000)
            });







            $("#mediaContent").on("click", (event) => {
                event.preventDefault();
                $("body").css("overflow-y", "hidden");
                $(loader).removeClass("loader-hide");
                $(document).ready(function() {
                    $(this).scrollTop(0);
                });
                $("#container-content").hide();
                $("#Characters").hide();
                $("#buyItems").hide();
                $("#galleryApi").hide();

                $("#apicontent").show();
                initparticles();

                setTimeout(() => {
                    $(loader).addClass("loader-hide");
                    $("body").css("overflow-y", "scroll");
                    $(".textcontainer").hide();
                    // Show the div after 5s
                    $(".textcontainer").delay(800).fadeIn(5000).fadeIn("slow");
                    $(".mainDivForApi").hide();
                    // Show the div after 5s
                    $(".mainDivForApi").delay(1190).fadeIn(5000).fadeIn("slow");
                    $("#footerBefore").hide();
                    // Show the div after 5s
                    $("#footerBefore").delay(1500).fadeIn(5000).fadeIn("slow");
                    $("#footerTwo").hide();
                    // Show the div after 5s
                    $("#footerTwo").delay(1500).fadeIn(5000).fadeIn("slow");

                }, 2000)
            });




            function initparticles() {
                lines();
                sunbeams();
            }

            function lines() {
                $.each($(".particletext.lines"), function() {
                    var linecount = ($(this).width() / 50) * 10;

                    for (var i = 0; i <= linecount; i++) {
                        $(this).append('<span class="particle" style="top:' + $.rnd(-30, 30) + '%; left:' + $.rnd(-10, 110) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(20, 80) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
                    }
                });
            }

            function sunbeams() {
                $.each($(".particletext.sunbeams"), function() {
                    var linecount = ($(this).width() / 50) * 10;
                    for (var i = 0; i <= linecount; i++) {
                        $(this).append('<span class="particle" style="top:' + $.rnd(-50, 0) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(80, 160) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
                    }
                });
            }
            jQuery.rnd = function(m, n) {
                m = parseInt(m);
                n = parseInt(n);
                return Math.floor(Math.random() * (n - m + 6)) + m;
            }





        }, 2000);










    }

    console.log('done');

}