import { PageLogic } from "../3buisness/bussnes-logic.js"
export function RenderApi() {
    this.pageLogic = new PageLogic();
    this.pageData = null;
    this.renderApiData = async function() {

        this.pageData = await this.pageLogic.getDataFromApiChar();
        // console.log(this.pageData);
        var $naslovDiv = $("<div>").addClass("textcontainer").appendTo("#apicontent");
        var $naslov = $("<span>").text("Media For DMC").addClass("particletext lines").appendTo($naslovDiv);

        var $apiDiv = $("<div>").addClass("mainDivForApi").appendTo("#apicontent");


        var $mediaApi = $("<div>").addClass("mediaApiDiv").appendTo($apiDiv);
        var $textApi = $("<div>").addClass("TextApiDiv").appendTo($apiDiv);

        for (let index = 0; index < this.pageData.text.length; index++) {
            if (this.pageData.video[index] != null) {
                var $paraAlbum = $("<p>").addClass("albumPara particletext lines").appendTo($textApi);
                $paraAlbum.text(this.pageData.text[index]);
            }

        }
        for (let index = 0; index < this.pageData.video.length; index++) {
            if (this.pageData.video[index] != null)
                var iframe = $("<iframe>").attr("src", "https://www.youtube.com/embed/" + this.pageData.video[index]).appendTo($mediaApi);

        }





    }



}