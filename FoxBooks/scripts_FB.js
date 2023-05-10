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

        // iterate through each book in the current course

          const bookDiv = document.getElementById("allBook");

            for (let j = 0; j < data.courses[j].books.length; j++) {
              const books = data.courses.books[j];
        
              const bookAuthor = books.author;
              const bookTitle = books.title;
              const bookISBN = books.isbn;
              const bookPrice = books.price;
              const bookImage = books.image;
        
              const outerDiv = document.createElement("div");
              outerDiv.classList.add("outerBook");
        
              const innerDiv = document.createElement("div");
              innerDiv.classList.add("innerBook");
        
              const eachBookDiv = document.createElement("div");
              eachBookDiv.classList.add("eachBook");
        
              const h1 = document.createElement("h1");
              h1.innerText = bookTitle;
              const h2 = document.createElement("h2");
              h2.innerText = bookAuthor;
              const h3 = document.createElement("h3");
              h3.innerText = bookISBN;
              const h4 = document.createElement("h4");
              h4.innerText = bookPrice;
        
              var newReference = document.createElement("img");
              newReference.setAttribute("src", bookImage);
              innerDiv.appendChild(h1);
              innerDiv.appendChild(h2);
              innerDiv.appendChild(h3);
              innerDiv.appendChild(h4);
        
              outerDiv.appendChild(newReference);
              outerDiv.appendChild(innerDiv);
        
              var button = document.createElement("BUTTON");
              button.appendChild(document.createTextNode("Add To Cart"));
        
              eachBookDiv.appendChild(outerDiv);
              eachBookDiv.appendChild(button);
        
              bookDiv.appendChild(eachBookDiv);
            }
      
    };      
          fetchData();
          
          
        


    // htmlString += "<p>Course Semester: " + data['courseName']['CMPT330']['course_semester'];
        //htmlString += "<p>Book Author: " + data['books']['book']['book_author'];
        //htmlString += "<p>Current Class: " + data['courseName']['CMPT330']['course_title'];
        //htmlString += "<p> Current Class' Book: " + data['books']['SysBook']['book_title'];
