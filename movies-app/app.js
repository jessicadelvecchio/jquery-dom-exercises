// ** Build an application that uses jQuery to do the following:

///// Todo Contains a form with two inputs for a title and rating along with a button to submit the form.

// Todo When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

// Todo When the button to remove is clicked, remove each title and rating from the DOM.

$(function () {
  $("#add").on("click", function () {
    let movieInput = $("#movie-input").val();
    let ratingInput = $("#rating-input").val();
    let rmButton = $("<button/>", {
      text: "X",
      click: function () {
        $(this).parent().remove();
      },
    });
    if (movieInput && ratingInput !== "") {
      $("<li/>")
        .append(movieInput, ratingInput, rmButton)
        .appendTo.$("#movie-list");
    }
  });
});

// **Further Study**

// Todo Ensure that the rating of a movie can only be between 0 and 10.

// Todo Ensure that a title has at least 2 characters in it.

// Todo Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.
