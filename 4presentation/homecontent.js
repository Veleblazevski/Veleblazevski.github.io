import { PageLogic } from "../3buisness/bussnes-logic.js"

export function HomeContent() {
    this.pageLogic = new PageLogic();
    this.pageData = null;

    var videos = ["Video/dmc.mp4", "Video/video2.mp4", "Video/video3.mp4", "Video/video4.mp4"];
    var videoId = 0;
    this.renderHomeContent = () => {

        $("#dropDownCart").hide();

        var video = $('<video />', {
            id: 'video',
            src: videos[videoId],
            type: 'video/mp4',
            controls: false,
            width: '100%',
            height: '70%',
            loop: "true",
            autoplay: "true",
            muted: "true"
        });

        video.prop('muted', 'true');
        video.appendTo($('#container-content'));
        var $divBuy = ($("<div>")).attr("id", "buyDiv").appendTo($("#container-content"));
        $("#container-content").show();
        var $logoDMC = ($("<img>")).attr("src", "Pictures/logodevil.png").attr("id", "logoDevil").appendTo($divBuy);
        $(document).ready(function() {
            // Hide the div
            $logoDMC.hide();
            // Show the div after 5s
            $logoDMC.delay(500).fadeIn(500).fadeIn("slow");
        });
        var $paraAvailable = ($("<p>")).text("Available now on PC,PlayStation and Xbox!").attr("id", "paraAva").appendTo($divBuy);
        $(document).ready(function() {
            // Hide the div
            $paraAvailable.hide();
            // Show the div after 5s
            $paraAvailable.delay(1000).fadeIn(500).fadeIn("slow");
        });
        var $divBtn = ($("<div>")).addClass("section three").attr("id", "clickMe").appendTo($divBuy);
        var $btnId = ($("<div>")).attr("id", "button").text("Click to change video!").appendTo($divBtn);
        var $divBtn = ($("<div>")).addClass("ring one").appendTo($btnId);
        var $divBtn = ($("<div>")).addClass("ring two").appendTo($btnId);
        var $divBtn = ($("<div>")).addClass("ring three").appendTo($btnId);
        var $divBtn = ($("<div>")).addClass("ring four").appendTo($btnId);
        $(document).ready(function() {
            // Hide the div
            $("#button").hide();
            $divBtn.hide();
            // Show the div after 5s
            $divBtn.delay(1500).fadeIn(500).fadeIn("slow");
            $("#button").delay(1500).fadeIn(500).fadeIn("slow");
        });


        ($("#clickMe")).click(function(e) {

            switch (videoId) {
                case 0:
                    $("#video").attr("src", videos[videoId]);
                    videoId++;

                    break;
                case 1:
                    $("#video").attr("src", videos[videoId]);
                    videoId++;
                    break;
                case 2:
                    $("#video").attr("src", videos[videoId]);
                    videoId++;
                    break;
                case 3:
                    $("#video").attr("src", videos[videoId]);
                    videoId = 0;
                    break;


            }



        });


        var $information = ($("<h2>")).attr("id", "heading-two").text("Hover on the images to see more information!").appendTo($("#container-content"));
        var $gridCardFlip = ($("<div>")).addClass("grid").appendTo($("#container-content"));
        var $firstCard = ($("<div>")).addClass("card").appendTo($gridCardFlip);
        var $cardFront = ($("<div>")).addClass("card-front cardNumOne").appendTo($firstCard);
        var $cardBaco = ($("<div>")).addClass("card-back").appendTo($firstCard);
        var $cardText = ($("<h2>")).text("More than just its topical relevance, DmC: Devil May Cry excels at telling a story with subtlety,that’s perfectly fine for those games, but Ninja Theory’s climactic end sees Dante and Vergil discover the differences in their respective Dante believes in their freedom.philosophies. Both are interested in protecting humanity but disagree on the approach. While Vergil wishes to “rule” humankind, Dante believes in their freedom.").appendTo($($cardBaco));

        var $firstCard = ($("<div>")).addClass("card").appendTo($gridCardFlip);
        var $cardFront = ($("<div>")).addClass("card-front cardNumTwo").appendTo($firstCard);
        var $cardBaco = ($("<div>")).addClass("card-back").appendTo($firstCard);
        var $cardText = ($("<h2>")).text("Buildings crumble and cave in to reveal demons hiding in wait, and the world itself often seems more out to get Dante than any of its creatures. Carpenter’s They Live was a clear source of inspiration, but the closest comparison in the medium is 2014’s The Evil Within where a seemingly peaceful world is just one step away from distorting itself to unleash chaos.").appendTo($($cardBaco));

        var $firstCard = ($("<div>")).addClass("card").appendTo($gridCardFlip);
        var $cardFront = ($("<div>")).addClass("card-front cardNumThree").appendTo($firstCard);
        var $cardBaco = ($("<div>")).addClass("card-back").appendTo($firstCard);
        var $cardText = ($("<h2>")).text("DmC:It wasn’t developed by Capcom’s internal team or director Hideaki Itsuno, the latter of whom served only as a supervisor for the project. It would release nearly five years after Devil May Cry 4, leaving longtime fans without a continuation of its story and no clear plan for its future.These problems only made the pill harder to swallow when they saw the radically redesigned look for protagonist Dante.").appendTo($($cardBaco));

        var $divBoxes = ($("<div>")).addClass("divBoxGrid").appendTo($("#container-content"));
        var $boxSystem = ($("<div>")).addClass("one-third first").appendTo($divBoxes);
        var $box = ($("<div>")).addClass("box").appendTo($boxSystem);
        var $boxOne = ($("<div>")).addClass("box-inner").appendTo($box);
        var $boxText = ($("<h2>")).text("DmC Devil May Cry System Requirements(Minimum)").appendTo($boxOne);
        for (let index = 0; index < 10; index++) {
            var $li = ($("<li>")).addClass("liBox").appendTo($boxOne);
            if (index === 0) {
                $li.text("CPU:Intel Core 2 Duo 2.4Ghz or better, AMDthlon64X2 2.8Ghz or better");
            }
            if (index === 1) {
                $li.text("CPU SPEED:Info");
            }
            if (index === 2) {
                $li.text("OS:Windows Vista/XP, Windows7, Windows8");
            }
            if (index === 3) {
                $li.text("VIDEO CARD:NVIDIA GeForce 8800GTS or better, ATI Radeon HD3850 or better");
            }
            if (index === 4) {
                $li.text("PIXEL SHADER:3.0");
            }
            if (index === 5) {
                $li.text("VERTEX SHADER:3.0");
            }
            if (index === 6) {
                $li.text("SOUND CARD:Yes");
            }
            if (index === 7) {
                $li.text("FREE DISK SPACE:9GB");
            }
            if (index === 8) {
                $li.text("DEDICATED VIDEO RAM:256MB");
            }
            if (index === 9) {
                $li.text("RAM:2GB");
            }

        }
        var $boxSystemm = ($("<div>")).addClass("one-third").appendTo($divBoxes);
        var $boxx = ($("<div>")).addClass("box").appendTo($boxSystemm);
        var $boxOnee = ($("<div>")).addClass("box-inner").appendTo($boxx);
        var $boxTextt = ($("<h2>")).text("DmC Devil May Cry Recommended Requirements(Maximum)").appendTo($boxOnee);
        for (let index = 0; index < 10; index++) {
            var $li = ($("<li>")).addClass("liBox").appendTo($boxOnee);
            if (index === 0) {
                $li.text("CPU: Intel Core2 Quad2.7Ghz or better, AMDPhenomIIX43Ghz or better");
            }
            if (index === 1) {
                $li.text("CPU SPEED:Info");
            }
            if (index === 2) {
                $li.text("OS:Windows Vista/XP, Windows7, Windows10");
            }
            if (index === 3) {
                $li.text("VIDEO CARD:ATIRadeonHD6950 or better/GeforceGTX470");
            }
            if (index === 4) {
                $li.text("PIXEL SHADER:3.0");
            }
            if (index === 5) {
                $li.text("VERTEX SHADER:3.0");
            }
            if (index === 6) {
                $li.text("SOUND CARD:Yes");
            }
            if (index === 7) {
                $li.text("FREE DISK SPACE:9GB");
            }
            if (index === 8) {
                $li.text("DEDICATED VIDEO RAM:1024MB");
            }
            if (index === 9) {
                $li.text("RAM:4GB");
            }
        }
        var divTextAnim = $("<div>").addClass("text").appendTo($("#container-content"));
        var span1 = $("<span>").text("S").appendTo(divTextAnim);
        var span2 = $("<span>").text("I").appendTo(divTextAnim);
        var span3 = $("<span>").text("M").appendTo(divTextAnim);
        var span4 = $("<span>").text("U").appendTo(divTextAnim);
        var span5 = $("<span>").text("L").appendTo(divTextAnim);
        var span6 = $("<span>").text("A").appendTo(divTextAnim);
        var span7 = $("<span>").text("R").appendTo(divTextAnim);
        var span8 = $("<span>").text("").appendTo(divTextAnim);
        var span9 = $("<span>").text("G").appendTo(divTextAnim);
        var span10 = $("<span>").text("A").appendTo(divTextAnim);
        var span11 = $("<span>").text("M").appendTo(divTextAnim);
        var span12 = $("<span>").text("E").appendTo(divTextAnim);
        var span13 = $("<span>").text("S").appendTo(divTextAnim);
        var divDropDownSim = $("<div>").attr("id", "simularGames").appendTo($("#container-content"));
        this.renderSimData = async function() {
            this.pageData = await this.pageLogic.getDataFromSimGames();
            console.log(this.pageData);
            for (let index = 0; index < this.pageData.games.length; index++) {
                if (this.pageData.games[index].aliases != null) {
                    var simular = $("<div>").addClass("apiSimularImages").appendTo($("#contentSimular"));

                    var $aHrefImg = $("<img>").attr("id", "hidden-images").attr("src", this.pageData.games[index].image.medium_url).addClass("sadadas").bind("mouseenter", function(e) {

                        ($(e.target).next().show().css({
                            display: 'grid',
                            cursor: 'pointer',
                        }));


                    }).appendTo(simular);
                    var $hoverDiv = $("<div>").attr("id", "hoverMeText").hide().appendTo(simular);

                    var $nameGame = $("<span>").attr("id", "nameForGame").html("Name:" + "<br/>" + this.pageData.games[index].name).appendTo($hoverDiv);
                    var $releaseData = $("<span>").attr("id", "DataGameRelease").html("Release Date:" + "<br/>" + this.pageData.games[index].original_release_date).appendTo($hoverDiv);
                    var $platform = $("<span>").attr("id", "platform").html("Platform:" + "<br/>" + this.pageData.games[index].platforms[0].abbreviation).appendTo($hoverDiv);
                    $hoverDiv.mouseleave(function(e) {

                        $(e.target).parent().css({
                            display: "none"
                        })
                    });

                }

            }
        }

        var spanClose = $("<i>").addClass("fas fa-times").attr("id", "closeHoverSim").css({
            marginTop: '50px',
            fontSize: '36px',
            cursor: 'pointer'
        }).appendTo(divDropDownSim);
        var dropdownContentApi = $("<div>").attr("id", "contentSimular").appendTo(divDropDownSim);
        divDropDownSim.hide();
        divTextAnim.click(function(e) {
            divDropDownSim.show(500);
            divDropDownSim.css({
                display: 'grid',
            })
        });
        spanClose.click(function(e) {
            divDropDownSim.hide(500);

        });
        var $slider = ($("<div>")).addClass("splitview skewed").appendTo($("#container-content"));
        var $panel = ($("<div>")).addClass("panel bottom").appendTo($slider);
        var $contentSlide = ($("<div>")).addClass("content").appendTo($panel);
        var $imgSlide = ($("<img>")).addClass("first-img").attr("src", "Pictures/sliderimg2.jpg").attr("alt", "Original").appendTo($contentSlide);

        var $panelTwo = ($("<div>")).addClass("panel top").appendTo($slider);
        var $contentSlider = ($("<div>")).addClass("content").appendTo($panelTwo);
        var $imgSlide = ($("<img>")).addClass("second-img").attr("src", "Pictures/sliderimg.jpg").appendTo($contentSlider);

        var $handle = ($("<div>")).addClass("handle").appendTo($slider);
        ////////////////////////////
        var parent = document.querySelector('.splitview'),
            topPanel = parent.querySelector('.top'),
            handle = parent.querySelector('.handle'),
            skewHack = 0,
            delta = 0;
        // If the parent has .skewed class, set the skewHack var.
        if (parent.className.indexOf('skewed') != -1) {
            skewHack = 1000;
        }
        parent.addEventListener('mousemove', function(event) {
            // Get the delta between the mouse position and center point.
            delta = (event.clientX - window.innerWidth / 2) * 0.5;
            // Move the handle.
            handle.style.left = event.clientX + delta + 'px';
            // Adjust the top panel width.
            topPanel.style.width = event.clientX + skewHack + delta + 'px';
        });

    }
}