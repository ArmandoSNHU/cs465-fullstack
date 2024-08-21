# cs465-fullstack
CS-465 Full Stack Development with MEAN

Armando Gomez

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

In my full-stack project, I utilized various frontend development techniques. This included using Express-rendered HTML, vanilla JavaScript, and a newer single-page application (SPA) approach with Angular. The Express
HTML method was mainly for server-side rendering, where the server generated the HTML and sent it to the client. It's straightforward and beneficial for pages or when SEO is crucial. JavaScript was used to boost
interactivity. Dynamically manipulate the DOM for a more engaging user experience, although it has some limitations in maintaining state across different pages.
On the other hand, the SPA method with Angular provided a more dynamic and seamless user experience. In a SPA setup, the entire application loads once, with JavaScript managing routing and view rendering to create
responsiveness as users interact with the app. This approach also ensured a smoother user journey without full page reloads when navigating within the app. Additionally, using SPA facilitates state management and
integration with RESTful APIs.

Why did the backend use a NoSQL MongoDB database?

The system in the background opted for a NoSQL MongoDB database due to its adaptability and expandability. MongoDB follows a document-oriented approach to storing data in JSON documents, which aligns well with
JavaScript-based applications. This adaptability enables the storage of data structures without the necessity of a predefined schema, simplifying the management of evolving data models. Additionally, MongoDB's
capacity to manage large amounts of data and distribute it across numerous servers makes it well-suited for applications that necessitate scalability. This proved advantageous for my project, where the data format
could evolve and horizontal scalability was crucial.

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON, which stands for JavaScript Object Notation, serves as an accessible data format for both humans and machines. Although JSON has its roots in JavaScript, it functions independently of any programming language,
making it compatible with a wide range of platforms. Its primary purpose is to organize data for transmission between the frontend and backend components of web applications.
In my project development experience, JSON proved invaluable in connecting the frontend and backend systems seamlessly. By utilizing HTTP requests, the Angular frontend communicated data to the Express server in
JSON format, receiving JSON responses. This approach facilitated data processing and presentation within the Angular application. The integration of JSON ensured a communication protocol between client and server
essential for maintaining coherence in a RESTful API structure.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.

Throughout the process of developing the stack, I made multiple adjustments to the code to enhance its functionality and efficiency. One notable change involved optimizing the trip listing feature by introducing a
component in Angular. There was a duplicate code for displaying trips across various sections of the application. By creating a TripCardComponent, I consolidated the logic for presenting a trip and implemented this
component wherever necessary in the application. This not only minimized code repetition but also simplified maintenance tasks. If modifications were required in how trips were shown, I could implement them in one
place at multiple locations.
The advantages of using UI components include maintaining consistency in the user interface, saving development time and facilitating easier maintenance. Reusing UI components ensures appearance and experience
throughout the application. Moreover, developers can save time by avoiding code rewriting, and any errors or glitches can be rectified at one central location, automatically reflecting those changes across the
entire application.

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and
security in a full-stack application.

Throughout the process of building the stack, I made tweaks to the code to improve its performance and effectiveness. One significant update was enhancing the trip listing feature by adding a component in Angular.
Previously, there was code for displaying trips in different parts of the application. By introducing the TripCardComponent, I streamlined how trips were presented and integrated this component wherever it was
needed in the app. This not only reduced duplicated code but also made maintenance tasks simpler. If any changes were needed in how trips were displayed, I could make them in one place. Have them automatically apply
to multiple locations.
The benefits of using UI components include maintaining a user interface, saving development time and simplifying maintenance efforts. By reusing UI components, we ensure a uniform look and feel across the
application. Additionally, developers can save time by avoiding rewriting code, and any issues or bugs can be fixed at a location, instantly reflecting those corrections throughout the whole application.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This program has been really helpful in furthering my career goals by giving me a grasp of full-stack web development. I've gained hands-on experience building and launching applications using the MEAN stack, which
consists of MongoDB, Express.js, Angular and Node.js. This practical experience has enabled me to excel in creating both frontend and backend elements of web applications that seamlessly work together.
A key skill I've honed is the ability to set up APIs, which are crucial for facilitating communication between the frontend and backend of web applications. Additionally, I've become adept at handling user
authentication and ensuring the security of web applications through the use of JSON Web Tokens (JWT). Security is paramount in today's technological landscape, making these skills particularly valuable.

This course has underscored the significance of code refactoring and developing components. These practices not only enhance code efficiency but also contribute to improved maintainability and scalability. The tech
industry highly values these skills, as they distinguish candidates who can write efficient and secure code from others.

By mastering these abilities, I have positioned myself as a contender in the software development field. I am now confident in my skills to participate in full-stack development projects, which would make me a
valuable addition to any future employer's team.
