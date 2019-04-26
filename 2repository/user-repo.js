export function UserRepo() {
    this.postUser = function(user) {
        var member = JSON.stringify(user);
        console.log(member);
        localStorage.setItem(user.email, member);
        return true;
    }
    this.getUser = function(email) {
        var user = JSON.parse(localStorage.getItem(email));
        return user;
    }
}