// todo When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
console.log("Let's get ready to party with jQuery!");

// $(function () {
//     console.log("Let's get ready to party with jQuery!");

// todo Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$("article img").addClass("image-center");

// todo Remove the last paragraph in the article.
$("article p:last-child").remove();

// todo Set the font size of the title to be a random pixel size from 0 to 100.
const getRandomInt = () => {
  return Math.floor(Math.random() * 101);
};

$("h1").css("font-size", getRandomInt);

// $("#title").css("font-size", Math.random() * 100);

// todo Add an item to the list; it can say whatever you want.
$("ol").append("<li>this is a new line!!</li>");

// $("ol").append($("<li>", {text: "I can add to lists with jQuery!"}));

// todo Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("ol").remove();
$("aside").append("<p>i am so sorry for the list's existance</p>");

// $("aside")
// .empty()
// .append($("<p>", {text: "Sorry about that list :("}));

// todo When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$("input").on("change", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();

  $("body").css(
    "background-color",
    "rgb(" + red + "," + green + "," + blue + ")"
  );
});

// todo Add an event listener so that when you click on the image, it is removed from the DOM.
$("article img").on("click", function () {
  $(this).remove();
});
