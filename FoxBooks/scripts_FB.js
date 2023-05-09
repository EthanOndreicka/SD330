var navLinks = document.getElementById("navLinks")

        function showMenu(){
            navLinks.style.right = "0";
        }

        function hideMenu(){
            navLinks.style.right = "-200px";
        }


        let htmlString = "";
        const fetchData = async () => {
          const response = await fetch("https://EthanOndreicka.github.io/SD330/FoxBooks/FB.json");
          const data = await response.json();
          for (let i = 0; i < data.courses.length; i++) {
            htmlString += "<p>Course Name: " + data.courses[i][Object.keys(data.courses[i])[0]];
            htmlString += "<br>Books: ";
            for (let j = 0; j < data.courses[i].books.length; j++) {
              htmlString += data.courses[i].books[j].title + ", ";
            }
            htmlString = htmlString.slice(0, -2); // remove last comma and space
            htmlString += "</p>";
          }
          document.getElementById("info").innerHTML += htmlString;
        };
        fetchData();
        


    // htmlString += "<p>Course Semester: " + data['courseName']['CMPT330']['course_semester'];
        //htmlString += "<p>Book Author: " + data['books']['book']['book_author'];
        //htmlString += "<p>Current Class: " + data['courseName']['CMPT330']['course_title'];
        //htmlString += "<p> Current Class' Book: " + data['books']['SysBook']['book_title'];