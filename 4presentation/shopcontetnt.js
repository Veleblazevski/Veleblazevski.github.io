import { PageLogic } from "../3buisness/bussnes-logic.js"
import { Items } from "../1constructors/items.js";
export function ShopContent() {
    this.pageShop = new PageLogic();

    this.renderMyShop = () => {
        var text = "Add to Cart";
        var costumeData = this.pageShop.getItemsData();
        var $allCategories = $("<div>").addClass("allcategories").appendTo("#buyItems");
        var $myCategoryOne = $("<span>").text("Cosplay Costumes").addClass("myFirstCategory").appendTo($allCategories)
        var $myCategoryTwo = $("<span>").text("Accessories").addClass("mySecondCategory").appendTo($allCategories)
        var $costumeShop = $("<div>").appendTo("#buyItems").addClass("allShop").attr("id", "courses-list").show();
        var $accShop = $("<div>").appendTo("#buyItems").addClass("allAcc").hide();



        for (let i = 0; i < costumeData.cosplayCostumes.length; i++) {

            $("<div>").appendTo($costumeShop).addClass("item item-cosplayCostumes").attr("id", costumeData.cosplayCostumes[i].id).attr("ifStore", costumeData.cosplayCostumes[i].ifStore)
                .append($("<img>").addClass("myCartImg").attr("src", costumeData.cosplayCostumes[i].image))
                .append($("<h4>").addClass("myNameProduct").text(costumeData.cosplayCostumes[i].name))
                .append($("<h3>").addClass("myPrice").text("€" + costumeData.cosplayCostumes[i].price))
                .append($("<button>").addClass("myBuyButtom").attr("id", "btn" + costumeData.cosplayCostumes[i].id).attr("data-id", [i].id).text(text))

        }


        for (let i = 0; i < costumeData.accessories.length; i++) {

            $("<div>").appendTo($accShop).addClass("item item-cosplayCostumes").attr("id", costumeData.accessories[i].id).attr("ifStore", costumeData.accessories[i].ifStore)
                .append($("<img>").addClass("myCartImg").attr("src", costumeData.accessories[i].image))
                .append($("<h4>").addClass("myNameProduct").text(costumeData.accessories[i].name))
                .append($("<h3>").addClass("myPrice").text("€" + costumeData.accessories[i].price))
                .append($("<button>").attr("id", "btn" + costumeData.accessories[i].id).addClass("myBuyButtom").attr("data-id", [i].id).text(text));
        }
        var coursesLS = getCoursesFromStorage();
        if (coursesLS) {
            for (let j = 0; j < coursesLS.length; j++) {
                $("#btn" + coursesLS[j].id).text("Added to Cart")
            }


        }
        $myCategoryTwo.click(function(e) {
            e.preventDefault();
            $accShop.show(500);
            $costumeShop.hide(500);
        });
        $myCategoryOne.click(function(e) {
            e.preventDefault();
            $accShop.hide(500);
            $costumeShop.show(500);
        });


        // Variables
        const courses = document.querySelector('#buyItems'),
            shoppingCartContent = document.querySelector("#emptyDiv");




        // Listeners

        loadEventListeners();

        function loadEventListeners() {
            // When a new course is added
            courses.addEventListener('click', buyCourse);

            // When the remove button is clicked
            shoppingCartContent.addEventListener('click', removeCourse);



            // Document Ready
            document.addEventListener('DOMContentLoaded', getFromLocalStorage);
        }





        // Functions
        function buyCourse(e) {
            e.preventDefault();
            // Use delegation to find the course that was added

            if (e.target.classList.contains('myBuyButtom')) {
                // read the course values

                const course = e.target.parentElement;
                var textBtn = $(e.target).text()
                if (textBtn === "Add to Cart") {
                    getCourseInfo(course);

                } else {
                    console.log("bla")
                }
                // read the values
            }

        }
        // Reads the HTML information of the selected course
        function getCourseInfo(course) {

            // Create an Object with Course Data
            const courseInfo = {
                    image: course.querySelector('img').src,
                    title: course.querySelector('h4').textContent,
                    price: course.querySelector('h3').textContent,
                    id: course.id

                }
                // Insert into the shopping cart
            addIntoCart(courseInfo);
            var btn = course.querySelector('button');
            btn.innerHTML = "Added to cart";

        }
        // Display the selected course into the shopping cart

        function addIntoCart(course) {
            // create a <tr>
            const row = document.createElement('tr');

            // Build the template
            row.innerHTML = `
      <tr>
           <td>
                <img src="${course.image}" width=174>
           </td>
           <td>${course.title}</td>
           <td>${course.price}</td>
           <td>
                <a href="#!" class="remove" id="${course.id}">X</a>
           </td>
      </tr>
 `;
            // Add into the shopping cart
            shoppingCartContent.appendChild(row);

            // Add course into Storage
            saveIntoStorage(course);
        }

        // Add the courses into the local storage

        function saveIntoStorage(course) {
            let courses = getCoursesFromStorage();

            // add the course into the array
            courses.push(course);

            // since storage only saves strings, we need to convert JSON into String
            localStorage.setItem('courses', JSON.stringify(courses));
        }

        // Get the contents from storage
        function getCoursesFromStorage() {

            let courses;

            // if something exist on storage then we get the value, otherwise create an empty array
            if (localStorage.getItem('courses') === null) {
                courses = [];
            } else {
                courses = JSON.parse(localStorage.getItem('courses'));
                console.log(courses)
            }
            return courses;

        }

        // remove course from the dom
        function removeCourse(e) {
            let course, courseId;

            // Remove from the dom
            if (e.target.classList.contains('remove')) {
                course = e.target;
                courseId = course.getAttribute('id');
                e.target.parentElement.parentElement.remove();



            }
            // remove from the local storage
            removeCourseLocalStorage(courseId);

        }
        // remove from local storage
        function removeCourseLocalStorage(id) {
            // get the local storage data
            let coursesLS = getCoursesFromStorage();

            // loop trought the array and find the index to remove
            coursesLS.forEach(function(courseLS, index) {
                if (courseLS.id === id) {

                    $("#btn" + id).text("Add to Cart")
                    coursesLS.splice(index, 1);
                }
            });

            // Add the rest of the array
            localStorage.setItem('courses', JSON.stringify(coursesLS));
        }



        // Loads when document is ready and print courses into shopping cart

        function getFromLocalStorage() {
            let coursesLS = getCoursesFromStorage();

            // LOOP throught the courses and print into the cart
            coursesLS.forEach(function(course) {
                // create the <tr>
                const row = document.createElement('tr');

                // print the content
                row.innerHTML = `
           <tr>
                <td>
                     <img src="${course.image}" width=100>
                </td>
                <td>${course.title}</td>
                <td>${course.price}</td>
                <td>
                     <a href="#!" class="remove" id="${course.id}">X</a>
                </td>
           </tr>
      `;
                shoppingCartContent.appendChild(row);
            });
        }



    }



}