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
        const books = course.books;
          for (let j = 0; j < books.length; j++) {
            const book = books[j];

            const bookTitle = book.title;
            const bookAuthor = book.author;
            const bookISBN = book.isbn;
            const bookPrice = book.price;
            const bookImage = book.image;

            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");

            const bookImg = document.createElement("img");
            bookImg.src = bookImage;

            const bookInfoDiv = document.createElement("div");
            bookInfoDiv.classList.add("book-info");

            const bookTitleElem = document.createElement("h1");
            bookTitleElem.innerText = bookTitle;

            const bookAuthorElem = document.createElement("h2");
            bookAuthorElem.innerText = bookAuthor;

            const bookISBNElem = document.createElement("h3");
            bookISBNElem.innerText = "ISBN: " + bookISBN;

            const bookPriceElem = document.createElement("h4");
            bookPriceElem.innerText = "Price: " + bookPrice;

            bookInfoDiv.appendChild(bookTitleElem);
            bookInfoDiv.appendChild(bookAuthorElem);
            bookInfoDiv.appendChild(bookISBNElem);
            bookInfoDiv.appendChild(bookPriceElem);

            bookDiv.appendChild(bookImg);
            bookDiv.appendChild(bookInfoDiv);

            div.appendChild(bookDiv);
          }
          };
          
          fetchData();
          
          
        


    // htmlString += "<p>Course Semester: " + data['courseName']['CMPT330']['course_semester'];
        //htmlString += "<p>Book Author: " + data['books']['book']['book_author'];
        //htmlString += "<p>Current Class: " + data['courseName']['CMPT330']['course_title'];
        //htmlString += "<p> Current Class' Book: " + data['books']['SysBook']['book_title'];