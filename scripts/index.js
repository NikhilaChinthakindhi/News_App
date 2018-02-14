$(document).ready(function () {

    //Form submit 
    $("#home_form").submit(function () {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("ls_name", $('#user_name').val());
            localStorage.setItem("ls_email", $('#user_email').val());
            localStorage.setItem("ls_education", $('#education').val());
            localStorage.setItem("ls_semester", $('#semester').val());
            localStorage.setItem("ls_career", $('#career').val());
        }
        else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }

    });


    //Storing all courses details in local storage. These are used while showing remaining seats during registration
    var course = { 'id': 1001, 'name': 'COMP SCI - Object-Oriented Programming', 'total': '60', 'remaining': '12' };
    localStorage.setItem("ls_course1", JSON.stringify(course));
    
    course = { 'id': 1002, 'name': 'COMP SCI - Foundations of data science', 'total': '40', 'remaining': '0' };
    localStorage.setItem("ls_course2", JSON.stringify(course));

    course = { 'id': 1003, 'name': 'COMP SCI - Introduction to Programming Using Python', 'total': '30', 'remaining': '17' };
    localStorage.setItem("ls_course3", JSON.stringify(course));

    course = { 'id': 1004, 'name': 'COMP SCI - Introduction to Computer Science', 'total': '45', 'remaining': '10' };
    localStorage.setItem("ls_course4", JSON.stringify(course));

    course = { 'id': 2001, 'name': 'LAW - Introduction to Constitutional Law', 'total': '35', 'remaining': '1' };
    localStorage.setItem("ls_course5", JSON.stringify(course));

    course = { 'id': 2002, 'name': 'LAW - Criminal Law', 'total': '60', 'remaining': '30' };
    localStorage.setItem("ls_course6", JSON.stringify(course));

    course = { 'id': 2003, 'name': 'LAW - International Investment Law', 'total': '60', 'remaining': '0' };
    localStorage.setItem("ls_course7", JSON.stringify(course));

    course_ = { 'id': 2004, 'name': 'LAW - Contract Law: From Trust to Promise to Contract', 'total': '60', 'remaining': '26' };
    localStorage.setItem("ls_course8", JSON.stringify(course));
});




