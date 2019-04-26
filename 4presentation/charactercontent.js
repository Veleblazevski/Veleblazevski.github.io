export function Characters() {
    this.renderCharacters = () => {
        var $characterAllDiv = $("<div>").attr("id", "charDiv").appendTo($("#Characters"));
        var $oneCharDiv = $("<div>").attr("id", "singleChar").appendTo($characterAllDiv);
        var $divImg = $("<div>").attr("id", "divImgChar").appendTo($oneCharDiv);
        var $charImgone = $("<img>").attr("src", "Pictures/dante.gif").attr("id", "imgChar").appendTo($divImg);
        var $divTextChar = $("<div>").attr("id", "charTextDiv").appendTo($oneCharDiv);
        var $paraCharText = $("<p>").attr("id", "charText").text("Dante (Japanese: ダンテ) is a fictional character first introduced as the protagonist of the 2001 action game Devil May Cry created and published by Capcom.In the first four games Dante is a mercenary, private investigator and demon-hunting vigilante dedicated to exterminating them and other supernatural foes, a mission he follows in pursuit of those who killed his mother and corrupted his brother.").appendTo($divTextChar);


        var $secondCharDiv = $("<div>").attr("id", "singleChar").appendTo($characterAllDiv);
        var $divTextChar = $("<div>").attr("id", "charTextDiv").appendTo($secondCharDiv);
        var $paraCharTextt = $("<p>").attr("id", "charText").addClass("mySecondCharText").text("Vergil (Japanese: バージル Hepburn: Bājiru) is a fictional character from the Devil May Cry series that was created and published by Capcom. He was introduced in the first Devil May Cry game as a boss called Nelo Angelo (ネロアンジェロ) Nero Anjero, which is Italian for Black Angel.Vergil is one of two hybrid sons of a demon knight called Sparda and as a result possesses supernatural powers.").appendTo($divTextChar);
        var $divImgg = $("<div>").attr("id", "divImgChar").appendTo($secondCharDiv);
        var $charImgTwo = $("<img>").attr("src", "Pictures/vergil.gif").attr("id", "imgChar").appendTo($divImgg);


        var $thirdCharDiv = $("<div>").attr("id", "singleChar").appendTo($characterAllDiv);
        var $divImggg = $("<div>").attr("id", "divImgChar").appendTo($thirdCharDiv);
        var $charImggThree = $("<img>").attr("src", "Pictures/lady.gif").attr("id", "imgChar").appendTo($divImggg);
        var $divTextChar = $("<div>").attr("id", "charTextDiv").appendTo($thirdCharDiv);
        var $paraCharTexttt = $("<p>").attr("id", "charText").addClass("myThirdTextChar").text("Lady (Japanese: レディ Hepburn: Redi), born Mary, is a fictional character in Devil May Cry, an action-adventure hack and slash video game series created by Japanese developer and publisher Capcom. She was introduced in the 2005 title Devil May Cry 3: Dante's Awakening, as a demon hunter on a mission to avenge her mother's death at the hands of her father, Arkham. ").appendTo($divTextChar);

        var $fourCharDiv = $("<div>").attr("id", "singleChar").appendTo($characterAllDiv);
        var $divTextChar = $("<div>").attr("id", "charTextDiv").appendTo($fourCharDiv);
        var $paraCharTextOne = $("<p>").attr("id", "charText").addClass("myFourTextChar").text("Nero (Japanese: ネロ) is a fictional character and one of the main protagonists of the Devil May Cry video game series, which was created and published by Capcom. He first appeared in Devil May Cry 4 in 2008. Nero is a teenager working for the Order of the Sword; he uses his devil powers inherited from Sparda to hunt enemies. ").appendTo($divTextChar);
        var $divImgOne = $("<div>").attr("id", "divImgChar").appendTo($fourCharDiv);
        var $charImgFour = $("<img>").attr("src", "Pictures/nero.gif").attr("id", "imgChar").appendTo($divImgOne);

        var $fiveCharDiv = $("<div>").attr("id", "singleChar").appendTo($characterAllDiv);
        var $divImg = $("<div>").attr("id", "divImgChar").appendTo($fiveCharDiv);
        var $charImgFive = $("<img>").attr("src", "Pictures/trish.gif").attr("id", "imgChar").appendTo($divImg);
        var $divTextChar = $("<div>").attr("id", "charTextDiv").appendTo($fiveCharDiv);
        var $paraCharTextlast = $("<p>").attr("id", "charText").addClass(".fiveTextChar").text("Trish is a fictional character in the Devil May Cry franchise. She debuted in the first installment of the series, released in 2001 by Japanese developer and publisher Capcom. A demon taking a female human form, Trish seeks the aid of protagonist Dante in eliminating her creator, Mundus. Besides being a supporting character in subsequent games, she also appears in the other titles created by Capcom.").appendTo($divTextChar);

    }
}