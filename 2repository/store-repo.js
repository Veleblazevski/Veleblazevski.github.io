import { Items } from "../1constructors/items.js"
export function StoreRepo() {

    this.getItems = function() {
        var cosplayCostumes = [];
        cosplayCostumes.push(new Items("Dante Cosplay Costume-Red", "450", "cartimg/danteCos.jpg", "danteRed"));
        cosplayCostumes.push(new Items("Vergil Cosplay Costume-Blue", "350", "cartimg/cosplayBlue.jpg", "vergilBlue"));
        cosplayCostumes.push(new Items("Vergil Cosplay Costume-Black", "375", "cartimg/vergilblack.jpg", "vergilBlack"));

        cosplayCostumes.push(new Items("Dante Cosplay Costume-Red-Style2", "400", "cartimg/danteCosplat2.jpg", "danteRed2"));
        cosplayCostumes.push(new Items("Nero Cosplay Costume-Casual", "300", "cartimg/nero.jpg", "neroBlack"));
        cosplayCostumes.push(new Items("Nero Cosplay Costume-Jacket-Casual", "300", "cartimg/nerojack.jpg", "nerojack"));



        var accessories = [];
        accessories.push(new Items("Devil May Cry-Pendant-Red", "100", "cartimg/pendantred.jpg", "pendantRed"));
        accessories.push(new Items("Devil May Cry-Pendant-Blue", "100", "cartimg/pendantblue.jpg", "pendantBlue"));
        accessories.push(new Items("Devil May Cry-Cosplay-Guns", "150", "cartimg/gunscosplayone.jpg", "gunsStyleOne"));
        accessories.push(new Items("Devil May Cry-Cosplay-Rapid-Guns", "150", "cartimg/cosplaygunstwo.jpg", "gunsStyleTwo"));
        accessories.push(new Items("Devil May Cry-Cosplay-Sword-Red", "200", "cartimg/cosplaysword.jpg", "swordRed"));
        accessories.push(new Items("Devil May Cry-Cosplay-Sword-Black", "220", "cartimg/cosplayswordtwo.jpg", "swordTwo"));

        var mystore = {
            cosplayCostumes: cosplayCostumes,
            accessories: accessories
        }
        return mystore;
    }

}