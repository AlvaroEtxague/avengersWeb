//SUBMIT YOUR HERO VALIDATION
$("#addAvenger-form").submit(function (event) {
  $(addHeroAlert).addClass("hide");

  if ($("#heroInput").val() === "") {
    $("#addHeroAlert").removeClass("hide");
    $("#addHeroAlert").text("Please enter a hero name here");
  } else {
    $("#hero-list").append(
      "<li class='list-group-item'>" + $("#heroInput").val() + "</li>"
    );
    $("#heroInput").val("");
  }
  event.preventDefault();
});

//MOVIE VOTES COUNTER
$("#vote-form").submit(function (event) {
  let movie1Vote = $("#movieVotes1").text();
  let movie2Vote = $("#movieVotes2").text();
  let movie3Vote = $("#movieVotes3").text();
  let movie4Vote = $("#movieVotes4").text();
  let movie5Vote = $("#movieVotes5").text();

  if ($("#heroMovieRadio1").is(":checked")) {
    movie1Vote = parseInt(movie1Vote) + 1;
    $("#movieVotes1").text(movie1Vote);
  } else if ($("#heroMovieRadio2").is(":checked")) {
    movie2Vote = parseInt(movie2Vote) + 1;
    $("#movieVotes2").text(movie2Vote);
  } else if ($("#heroMovieRadio3").is(":checked")) {
    movie3Vote = parseInt(movie3Vote) + 1;
    $("#movieVotes3").text(movie3Vote);
  } else if ($("#heroMovieRadio4").is(":checked")) {
    movie4Vote = parseInt(movie4Vote) + 1;
    $("#movieVotes4").text(movie4Vote);
  } else if ($("#heroMovieRadio5").is(":checked")) {
    movie5Vote = parseInt(movie5Vote) + 1;
    $("#movieVotes5").text(movie5Vote);
  }

  event.preventDefault();
});

//HIDE FORM AFTER VOTE AND SHOW MESSAGE
$("#vote-form").submit(function (event) {
  $("#movie-vote-success").removeClass("hide");
  $("#vote-form").addClass("hide");

  event.preventDefault();
});

//SEARCH FORM
$("#search-form").submit(function (event) {
  if ($("#search-box").val() === "") {
  } else if ($("#search-box").val().toLowerCase() === "ironman") {
    alert("Ironman is awesome check our Ironman section on the Heroes Info");
  } else if ($("#search-box").val().toLowerCase() === "hulk") {
    alert("Hulk is awesome check our Hulk section on the Heroes Info");
  } else if ($("#search-box").val().toLowerCase() === "black widow") {
    alert(
      "Black Widow is awesome check our Black Widow section on the Heroes Info"
    );
  } else if ($("#search-box").val().toLowerCase() === "thor") {
    alert("Thor is awesome check our Thor section on the Heroes Info");
  } else {
    alert(
      "Your search for " +
        $("#search-box").val() +
        " returned 0 results. Please try a different hero."
    );
    $("#search-box").val("");
  }
  $("#search-box").val("");

  event.preventDefault();
});

//DISPLAY VALIDATION ON EMAIL AND PASSWORD
$("#login-form").submit(function (event) {
  $("#login-alert").addClass("hide");
  if ($("#loginEmail").val() == "" || $("#loginPassword").val() == "") {
    $("#login-alert").removeClass("hide");
  }

  event.preventDefault();
});

//REMOVE OVERLAY ON SUCCESSFUL LOGIN
$("#login-form").submit(function (event) {
  if ($("#loginEmail").val() != "" && $("#loginPassword").val() != "") {
    //IF REMEMBER ME IS SELECTED THEN STORE USER AND PASS
    if ($("#rememberMeCheckbox").is(":checked")) {
      let userEmail = $("#loginEmail").text();
      let userPassword = $("#loginPassword").text();
    } else {
      $("#loginEmail").val("");
      $("#loginPassword").val("");
    }
    $("#overlay").addClass("hide");
  }

  event.preventDefault();
});

//USER CLICKS LOGOUT
const logout = () => {
  $("#overlay").removeClass("hide");
  $("#loginEmail").val(userEmail);
  $("#loginPassword").val(userPassword);
};
