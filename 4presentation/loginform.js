import { PageLogic } from "../3buisness/bussnes-logic.js"
export function LoginForm() {
    this.pageData = new PageLogic();
    this.renderForm = () => {
        var mytopHeader = $("<div>").attr("id", "container").appendTo($("#loginMenu"));
        var closeSpan = $("<span>").attr("id", "closeSpan").appendTo(mytopHeader);
        var icon = $("#closeDiv").appendTo(closeSpan);
        var userLoginDiv = $("<div>").attr("id", "loginShow").appendTo(mytopHeader);
        var userLoginIcon = $("#loginPopUp").appendTo(userLoginDiv);
        var userParaLogin = $("#logPara").appendTo(userLoginDiv);
        var userRegDiv = $("<div>").attr("id", "regShow").appendTo(mytopHeader);
        var regLoginIcon = $("#registerPopUp").appendTo(userRegDiv);
        var regParaLogin = $("#regPara").appendTo(userRegDiv);
        var myotherHeader = $("<div>").attr("id", "container-swipe").appendTo($("#loginMenu"));
        var mySpanClose = $("<span>").attr("id", "closeSwipe").appendTo(myotherHeader);
        var iconSpan = $("#closeDivHeader").appendTo(mySpanClose);
        var myHeading = $("<h1>").text("Need Help ?").appendTo(myotherHeader);
        var myhelpDiv = $("<div>").attr("id", "helpDiv").appendTo(myotherHeader);
        var myHelpIcon = $("#question-link").appendTo(myhelpDiv);
        var mySpanHelp = $("<span>").text("Visit Our Forums!").attr("id", "spanHelp").appendTo(myhelpDiv);
        /////////////////////////////////////////////////////////////////////////////////////////////////

        $(window).scroll(function() { myFunction() });
        var navbar = document.getElementById("menu-second");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("stick-container");
            } else {
                navbar.classList.remove("stick-container");
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////
        $("#user-icon").mouseover(function(e) {
            e.preventDefault();
            $("#container").show(500);
            $("#container-swipe").hide(500);
            $("#container").css({
                display: 'grid',
                justifyItems: "center",
                alignItems: "center"
            });
            $("#closeDiv").css({
                display: 'grid',
            })
        });
        $("#myQuestion").mouseover(function(e) {
            e.preventDefault();
            $("#container").hide(500);
            $("#container-swipe").show(500).css({
                display: 'grid',
            });
        });
        $("#loginPopUp").click(function() {
            $("#testtwo").show(500);
            $("#loginShow").hide(500);
            $("#testtwo").css({
                display: 'grid',
            })
        })
        $("#registerPopUp").click(function() {
            $("#test").show(500);
            $("#regShow").hide(500)
            $("#test").css({
                display: 'grid',
            })
        });
        $("#closeDiv").click(function() {
            $("#container").hide(500);
            $("#container-swipe").hide(500);
        })
        $("#closeDivHeader").click(function() {
                $("#container").hide(500);
                $("#container-swipe").hide(500);
            })
            ///Creating the login form
        var $logInDiv = $("<div>").addClass("myLogInDiv").attr("id", "testtwo").appendTo($("#container"));
        var $inputEmail = $("<input>").attr('type', 'text').attr("id", "inputLogin").attr("placeholder", "Enter Your Email Here").addClass("myEmailInput").appendTo($logInDiv);
        var $inputPassword = $("<input>").attr('type', 'password').attr("id", "inputPassword").attr("placeholder", "Enter Your Password Here").addClass("myPassowrdInput").appendTo($logInDiv);
        var $buttonLogin = $("<button>").addClass("myLoginBtn bubbly-button").text("Click here to login").appendTo($logInDiv);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Creating the register form
        var $registerDiv = $("<div>").addClass("myRegisterDiv").attr("id", "test").appendTo($("#container"));
        var $inputEmailRegister = $("<input>").attr('type', 'email').attr("placeholder", "Enter a valid Email here").attr("id", "forgot-email").addClass("myEmailInput").appendTo($registerDiv);
        var $inputPasswordRegister = $("<input>").attr('type', 'password').attr("placeholder", "Enter New Password Here").attr("id", "reset-pass").addClass("myPassowrdInput").appendTo($registerDiv);
        var $buttonRegister = $("<button>").addClass("myLoginBtn bubbly-button").attr("type", "submit").attr("value", "Reset password").attr("id", "sendAll").text("Click here to register").appendTo($registerDiv);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        var $logOut = $("<div>").addClass("myLogOut").attr("id", "logOut").appendTo($("#container"));
        var $smth = $("#logOutFromStorage").appendTo($logOut);
        var $span = $("<span>").text("Log Out").attr("id", "logOutText").appendTo($logOut);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        var isLoggedIn = localStorage.getItem("isLoggedIn");
        var isLoggedSession = sessionStorage.getItem("firstTimeLogged");
        $(document).ready(function() {
            if (isLoggedIn == "true" && isLoggedSession == "true") {
                $("#user-icon").css({
                    color: "green"
                })
                $("#logOut").show(500).css({
                    display: 'grid',
                });
                $logInDiv.hide(500);
                $("#regShow").hide(500);
                $("#test").hide(500);
                $("#loginShow").hide(500);
            } else if (isLoggedIn == "false" && isLoggedSession == "false") {
                $("#loginShow").show();
                $("#regShow").show();
                $("logOut").hide();
            }
        });

        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            } else {
                return true;
            }
        }
        $buttonRegister.on("click", (event) => {
            event.preventDefault();
            var emailReg = $("#forgot-email").val();
            var passwordReg = $("#reset-pass").val();
            if (IsEmail(emailReg) == false) {
                swal("Please Enter a Valid Email:Example:jonathan@yahoo.com", {
                    className: "swal-login-email"
                });
                return false;
            }
            if (emailReg === "" || passwordReg === "") {
                swal("The Email and the password can't be empty!", {
                    className: "swal-empty"
                });
                return false;
            }
            if (passwordReg.length <= 8 || emailReg === "") {
                swal("Please Enter Password that contains more then 8 letters or numbers!", {
                    className: "swal-password"
                });
                return false;
            } else {
                var userStorage = this.pageData.postUserData(emailReg, passwordReg);
                $inputEmailRegister.val("");
                $inputPasswordRegister.val("");
                swal("Registered Successfully", "", "success", {
                    className: "swal-succes"
                });
                $registerDiv.hide(500);
                $("#regShow").show(500);
            }
        });
        $buttonLogin.on("click", (event) => {
            var email = $("#inputLogin").val();
            var pass = $("#inputPassword").val();
            if (IsEmail(email) == false || email === "") {
                swal("Please Enter a Existing Email", {
                    className: "swal-login"
                });

            }
            if (email === "" || pass === "") {
                swal("The Email and the password can't be empty!", {
                    className: "swal-empty-login"
                });
                return;
            }
            if (pass.length <= 8 || email === "") {
                swal("Please enter existing password!", {
                    className: "swal-empty-login"
                });
                return false;
            }
            var userGet = this.pageData.getUserData(email, pass);
            if (userGet) {
                var loggedIn = localStorage.setItem("isLoggedIn", true);
                var sessionLogged = sessionStorage.setItem("firstTimeLogged", true);
                swal("Login Successfully", "", "success", {
                    className: "swal-mYlogin"
                });
                $("#logOut").show(500).css({
                    display: 'grid',
                });
                $logInDiv.hide(500);
                $("#regShow").hide(500);
                $("#test").hide(500);
                $("#user-icon").css({
                    color: "green"
                })
                $inputEmail.val("");
                $inputPassword.val("");
            } else {
                swal("Please enter existing password and e-mail!", {
                    className: "swal-wrong-pass"
                });
            }



        });
        $("#logOutFromStorage").on("click", (event) => {
            event.preventDefault();
            $("#user-icon").css({
                color: "#a0a0a0",
            })
            var loggedOut = localStorage.setItem("isLoggedIn", false);
            loggedOut = false;
            var loggedOut2 = sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", false);
            loggedOut2 = false;
            $("#loginShow").show(500);
            $("#regShow").show(500);
            $("#logOut ").hide(500);
        });

        var animateButton = function(e) {

            e.preventDefault;
            //reset animation
            e.target.classList.remove('animate');

            e.target.classList.add('animate');
            setTimeout(function() {
                e.target.classList.remove('animate');
            }, 700);
        };

        var bubblyButtons = document.getElementsByClassName("bubbly-button");

        for (var i = 0; i < bubblyButtons.length; i++) {
            bubblyButtons[i].addEventListener('click', animateButton, false);
        }

    }
}