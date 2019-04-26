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

}
main();