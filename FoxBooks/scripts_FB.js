var navLinks = document.getElementById("navLinks")

        function showMenu(){
            navLinks.style.right = "0";
        }

        function hideMenu(){
            navLinks.style.right = "-200px";
        }


let htmlString = "";
    const fetchData = async () => {
        const response = await fetch("https://EthanOndreicka.github.io/SD330/FB.json");
        const data = await response.json();
       // htmlString += "<p>Course Name: " + data['courses']['CMPT_306']['books'];
       // htmlString += "<p>Course Semester: " + data['courseName']['CMPT330']['course_semester'];
        //htmlString += "<p>Book Author: " + data['books']['book']['book_author'];
        //htmlString += "<p>Current Class: " + data['courseName']['CMPT330']['course_title'];
        //htmlString += "<p> Current Class' Book: " + data['books']['SysBook']['book_title'];
        document.getElementById("info").innerHTML += htmlString;
    };
    fetchData();
