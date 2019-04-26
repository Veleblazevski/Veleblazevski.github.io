import { PageLogic } from "../3buisness/bussnes-logic.js"
export function ImageData() {
    this.pageLogic = new PageLogic();
    this.pageData = null;

    this.renderImgData = async function() {
        this.pageData = await this.pageLogic.getDataFromImgChar();
        var $textImgDiv = $("<div>").addClass("container-text-img").appendTo("#galleryApi");
        var $repoImgDiv = $("<div>").addClass("divImages").appendTo("#galleryApi");

        var $textImgDivinside = $("<div>").addClass("special-text").appendTo($textImgDiv);
        var $textImgDiv = $("<span>").text("Gallery").addClass("spanImgText").appendTo($textImgDivinside);
        var $textImgDivunder = $("<div>").addClass("effect").appendTo($textImgDivinside);


        for (let index = 0; index < this.pageData.pictures.length; index++) {
            var $siteDivAlbum = $("<div>").appendTo($repoImgDiv);
            var $aHrefImg = $("<a>").attr("data-toggle", "lightbox").attr("data-gallery", "hidden-images").attr("href", this.pageData.pictures[index]).addClass("col-4").appendTo($siteDivAlbum);
            var $imgAlbum = $("<img>").addClass("imgfromapi img-fluid").appendTo($aHrefImg);
            $imgAlbum.attr("src", this.pageData.pictures[index]);

        }



    }





}