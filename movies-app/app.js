// ** Build an application that uses jQuery to do the following:

///// Todo Contains a form with two inputs for a title and rating along with a button to submit the form.

// Todo When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

// Todo When the button to remove is clicked, remove each title and rating from the DOM.

// **Further Study**

// Todo Ensure that the rating of a movie can only be between 0 and 10.

// Todo Ensure that a title has at least 2 characters in it.

// Todo Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.

$(document).ready(function () {
  $("form").on("submit", function (e) {
    //hadle click and "Enter" event
    let movieName = $(".movie-title-entry").val(); //get user input value
    let movieRating = $(".movie-rating-entry").val();

    if (movieName && movieRating !== "") {
      var elem = $("<li></li>").text(movieName, movieRating); //create new element
      $(elem).append("<button class='rem'>X</button>"); //add x button to new element
      $(".movie-list").append(elem); //add new element at the end of my list
      $("input").val(""); //clear the input
      $(".rem").on("click", function () {
        //handle click on x button
        $(this).parent().remove(); //remove "current => this" object
      });
    }
  });

  //   $("#value").keypress(function (e) {
  //     if (e.which == 13) {
  //       //Enter key pressed
  //       $("#add").click(); //Trigger Add button click event
  //     }
  //   });
});

// document.addEventListener("DOMContentLoaded", function () {
//   let todoForm = document.getElementById("newTodoForm");
//   let todoList = document.getElementById("todoList");

//   todoForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let removeButton = document.createElement("button");
//     removeButton.innerText = "X";

//     let newTodo = document.createElement("li");
//     newTodo.innerText = document.getElementById("task").value;

//     todoList.appendChild(newTodo);
//     newTodo.appendChild(removeButton);

//     todoForm.reset();
//   });

//   todoList.addEventListener("click", function (event) {
//     const targetTagToLowerCase = event.target.tagName.toLowerCase();
//     if (targetTagToLowerCase === "li") {
//       event.target.style.textDecoration = "line-through";
//     } else if (targetTagToLowerCase === "button") {
//       event.target.parentNode.remove();
//     }
//   });
// });
