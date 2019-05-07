import { RenderPage } from "./4presentation/render-page.js"

async function main() {

    var renderer = await new RenderPage();

    renderer.renderAll();




    $(document).ready(function() {
        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    });
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop(),
            scrollAmount = 150;

        if (wScroll > scrollAmount) {
            $(".button__scroll--up").addClass("is_showing");
        } else {
            $(".button__scroll--up").removeClass("is_showing");
        }
    });


    $('.button__scroll--up').click(function() {
        $('html , body').animate({ scrollTop: 0 }, 1000);
    })






}
main();