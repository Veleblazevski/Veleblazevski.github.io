export function PicturesRepo() {
    this.getGamePic = async function getSomeData() {
        try {
            var response = await fetch("http://api.giantbomb.com/search/?api_key=9f62907a5f7583c36821dc6b7440c790827d04a6&format=json&query=devil%may%cry&resources=video");

            var data = await response.json();
            // console.log(data);

            return data.results.map((results) => {
                return results.image.original_url;
            });
        } catch (error) {
            // console.log("error out" + error);
            return null;
        }
    }



}