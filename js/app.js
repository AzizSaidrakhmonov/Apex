$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".overlay").toggleClass("open");
    $(".overlay a").toggleClass("open");
    // $(".overlay a").toggleClass("open");
    // $(".overlay a").toggleClass("open");
    // $(".overlay a").toggleClass("open");
    // $(".overlay a").toggleClass("open");
    // $(".overlay a").toggleClass("open");
    // $(".overlay a").toggleClass("open");
  });
});

// MAIN SECTION MODAL

let registerCourse = document.querySelector(".register-course__modal-wrapper");
let closeRegisterCourse = document.querySelector(
  ".register-course__modal-header-close"
);
let showRegisterCourseModal = document.querySelector("#show");

showRegisterCourseModal.addEventListener("click", function () {
  registerCourse.classList.add("active");
  document.body.style.overflow = "hidden";
  registerCourse.style.overflow = "auto";
});

closeRegisterCourse.addEventListener("click", function () {
  registerCourse.classList.remove("active");
  document.body.style.overflow = "auto";
});

let acceptedModal = document.querySelector(".accepted-info__modal-wrapper");
let acceptedModalClose = document.querySelector(".accepted-info__modal-btn");
let showAcceptedModal = document.querySelector(".register-course__modal-btn");

showAcceptedModal.addEventListener("click", function () {
  acceptedModal.classList.add("active");
  registerCourse.classList.remove("active");
  document.body.style.overflow = "hidden";
  acceptedModal.style.overflow = "auto";
});

acceptedModalClose.addEventListener("click", function () {
  acceptedModal.classList.remove("active");
  document.body.style.overflow = "auto";
});

// MAIN SECTION MODAL

//NEWS SECTION MODAL

let subjectInfo = document.querySelector(".subject-info__modal-wrapper");
let closeSubjectInfo = document.querySelector(
  ".subject-info__modal-header-close"
);
let showSubjectInfoModal = document.querySelector("#show-subject-info__modal");

showSubjectInfoModal.addEventListener("click", function () {
  subjectInfo.classList.add("active");
  document.body.style.overflow = "hidden";
  subjectInfo.style.overflow = "auto";
});

let showSubjectInfoModal2 = document.querySelector(
  "#show-subject-info__modal2"
);

showSubjectInfoModal2.addEventListener("click", function () {
  subjectInfo.classList.add("active");
  document.body.style.overflow = "hidden";
  subjectInfo.style.overflow = "auto";
});

let showSubjectInfoModal3 = document.querySelector(
  "#show-subject-info__modal3"
);

showSubjectInfoModal3.addEventListener("click", function () {
  subjectInfo.classList.add("active");
  document.body.style.overflow = "hidden";
  subjectInfo.style.overflow = "auto";
});

let showSubjectInfoModal4 = document.querySelector(
  "#show-subject-info__modal4"
);

showSubjectInfoModal4.addEventListener("click", function () {
  subjectInfo.classList.add("active");
  document.body.style.overflow = "hidden";
  subjectInfo.style.overflow = "auto";
});

let showSubjectInfoModal5 = document.querySelector(
  "#show-subject-info__modal5"
);

showSubjectInfoModal5.addEventListener("click", function () {
  subjectInfo.classList.add("active");
  document.body.style.overflow = "hidden";
  subjectInfo.style.overflow = "auto";
});

let showSubjectInfoModal6 = document.querySelector(
  "#show-subject-info__modal6"
);

showSubjectInfoModal6.addEventListener("click", function () {
  subjectInfo.classList.add("active");
  document.body.style.overflow = "hidden";
  subjectInfo.style.overflow = "auto";
});


//NEWS SECTION MODAL

//COURSES SECTION MODAL

let showRegisterCourseModal1 = document.querySelector("#show-Register-Course1");

showRegisterCourseModal1.addEventListener("click", function () {
  registerCourse.classList.add("active");
  document.body.style.overflow = "hidden";
  registerCourse.style.overflow = "auto";
});

let showRegisterCourseModal2 = document.querySelector("#show-Register-Course2");

showRegisterCourseModal2.addEventListener("click", function () {
  registerCourse.classList.add("active");
  document.body.style.overflow = "hidden";
  registerCourse.style.overflow = "auto";
});

let showRegisterCourseModal3 = document.querySelector("#show-Register-Course3");

showRegisterCourseModal3.addEventListener("click", function () {
  registerCourse.classList.add("active");
  document.body.style.overflow = "hidden";
  registerCourse.style.overflow = "auto";
});

let showRegisterCourseModal4 = document.querySelector("#show-Register-Course4");

showRegisterCourseModal4.addEventListener("click", function () {
  registerCourse.classList.add("active");
  document.body.style.overflow = "hidden";
  registerCourse.style.overflow = "auto";
});

let showRegisterCourseModal5 = document.querySelector("#show-Register-Course5");

showRegisterCourseModal5.addEventListener("click", function () {
  registerCourse.classList.add("active");
  document.body.style.overflow = "hidden";
  registerCourse.style.overflow = "auto";
});

let showRegisterCourseModal6 = document.querySelector("#show-Register-Course6");

showRegisterCourseModal6.addEventListener("click", function () {
  registerCourse.classList.add("active");
  document.body.style.overflow = "hidden";
  registerCourse.style.overflow = "auto";
});

//COURSES SECTION MODAL

//CLICK CLOSE BUTTON

closeSubjectInfo.addEventListener("click", function () {
  subjectInfo.classList.remove("active");
  document.body.style.overflow = "auto";
});

//CLICK CLOSE BUTTON

//CLICK WINDOW CLOSE

window.addEventListener("click", function (event) {
  if (
    event.target.matches(
      ".register-course__modal-wrapper,.accepted-info,.subject-info__modal-wrapper"
    )
  ) {
    registerCourse.classList.remove("active");
    acceptedModal.classList.remove("active");
    subjectInfo.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// //CLICK WINDOW CLOSE



//SECTION SLICK SLIDER

$(
  ".news-section__items , .courses-section__items , .tutors-section__items , .videos-section__items , .results-section__items , .annotation-section__items"
).slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  speed: 3000,
  arrows: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 915,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 545,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//SECTION SLICK SLIDER

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();