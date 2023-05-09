var navLinks = document.getElementById("navLinks")

        function showMenu(){
            navLinks.style.right = "0";
        }

        function hideMenu(){
            navLinks.style.right = "-200px";
        }


        const fetchData = async () => {
            const response = await fetch("https://EthanOndreicka.github.io/SD330/FoxBooks/FB.json");
            const data = await response.json();
          
            const courseDiv = document.getElementById("course");
          
            for (let i = 0; i < data.courses.length; i++) {
              const course = data.courses[i];
          
              const courseName = course.courseName;
              const courseNumber = course.courseNumber;
              const professor = course.professor;
              const link = course.link;
          
              const div = document.createElement("div");
              div.classList.add("eachCourse-col");
          
              const h3 = document.createElement("h3");
              h3.innerText = courseName;
          
              const p1 = document.createElement("p");
              p1.innerText = courseNumber;
          
              const p2 = document.createElement("p");
              p2.innerText = "Professor " + professor;

              var reference = document.createElement("a");
              reference.setAttribute("href", link);
              reference.classList.add("course-link");
              reference.appendChild(div);
          
              div.appendChild(h3);
              div.appendChild(p1);
              div.appendChild(p2);

              courseDiv.appendChild(reference);
            }
          };
          
          fetchData();
          
          
        


    // htmlString += "<p>Course Semester: " + data['courseName']['CMPT330']['course_semester'];
        //htmlString += "<p>Book Author: " + data['books']['book']['book_author'];
        //htmlString += "<p>Current Class: " + data['courseName']['CMPT330']['course_title'];
        //htmlString += "<p> Current Class' Book: " + data['books']['SysBook']['book_title'];