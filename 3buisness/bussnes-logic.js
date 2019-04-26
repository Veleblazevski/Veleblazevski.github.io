import { UserRepo } from "../2repository/user-repo.js";
import { User } from "../1constructors/user.js";
import { CharacterRepo } from "../2repository/char-repo.js"
import { StoreRepo } from "../2repository/store-repo.js"
import { PicturesRepo } from "../2repository/gameimage-repo.js"
export function PageLogic() {
    this.charData = new CharacterRepo();
    this.userRepo = new UserRepo();
    this.storeRepo = new StoreRepo();
    this.songsRepo = new PicturesRepo();
    this.getDataFromApiChar = async function() {
        var characerDecks = await this.charData.getCharText();
        var charVideos = await this.charData.GetCharVideos();
        var charSongs = await this.songsRepo.getGamePic();

        var pageData = {
            text: characerDecks,
            video: charVideos,
            pictures: charSongs,

        };
        // console.log(pageData)

        return pageData;
    }
    this.getDataFromImgChar = async function() {

        var charSongs = await this.songsRepo.getGamePic();
        var pageData = {

            pictures: charSongs
        };
        // console.log(pageData)

        return pageData;
    }


    this.postUserData = function(email, password) {
        var user = new User(email, password);
        var postData = this.userRepo.postUser(user);
        return postData;
    }



    this.getUserData = function(email, password) {
        var getData = this.userRepo.getUser(email);
        if (getData === null) {
            return false;
        } else {
            if (getData.password === password) {
                return true;
            } else {
                return false;
            }
        }
    }
    this.getItemsData = function() {
        return this.storeRepo.getItems();
    }

}