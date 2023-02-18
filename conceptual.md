### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router allows you to define routes for your application, which map to specific components that should be rendered when that route is requested. This enables you to build applications with multiple pages that can be navigated using the browser's back and forward buttons and by clicking links, just like a traditional multi-page application. However, with React Router it can be achieved without having to fully refresh the page. React Router also provides several useful features, such as URL parameters, nested routes, and route guards. These features enable developers to build more complex applications with more advanced routing requirements.

- What is a single page application?

A single page application is a web application that works within a single web page, updates are done dynamically and user interactions happen in-place, without requiring the page to be fully reloaded from the server. Single page applications typically use asynchronous communication with the server, often utilizing Ajax, to fetch or submit data in the background, without interrupting the user experience.

- What are some differences between client side and server side routing?

Client-side routing happens within the user's browser, while server-side routing happens on the server. In client-side routing, the browser downloads all the necessary code and assets for the application, and the routing is handled on the client-side using JavaScript. In server-side routing, the browser requests pages from the server, which generates HTML and sends it back to the client. In client-side routing, the initial page load is typically slower because the entire application needs to be downloaded, but subsequent routing within the app is faster because only the necessary data is fetched from the server. In server-side routing, the initial page load is usually faster because the server generates the HTML for the requested page, but subsequent page loads require the server to generate new HTML, which can slow down the app. With client-side routing, the browser can easily cache and save static assets like HTML, CSS, and JavaScript, which means the application can be used offline or with slow or limited internet connectivity. In contrast, with server-side routing, the user always needs a live internet connection to request pages from the server, so the application is dependent on internet connectivity.

- What are two ways of handling redirects with React Router? When would you use each?

One option could be using the the <Redirect> component: React Router provides a <Redirect> component that can be used to redirect the user to a different URL. This component can be used inside a component's render method to conditionally redirect the user based on certain conditions. For example, if a user is not authenticated, you can redirect them to a login page. Another option would be to use the history object: React Router provides a history object that can be used to programmatically navigate to a different URL. This object can be accessed using the useHistory hook. For example, if you want to redirect the user after a form submission, you can use the history.push method to navigate to a different URL.

- What are two different ways to handle page-not-found user experiences using React Router? 

 The <Switch> component could be implemented with a catch-all route: React Router provides a <Switch> component that can be used to conditionally render routes based on the current URL. By placing a catch-all route at the bottom of the switch statement, you can display a custom page-not-found component when none of the other routes match the current URL. The Redirect component with a custom noMatch prop can also be utilized as well: The Redirect component in React Router can be used to redirect the user to a different URL. By using the noMatch prop, you can specify a custom URL to redirect to when none of the other routes match the current URL.


- How do you grab URL parameters from within a component using React Router?

The first step is to setup a desired endpoint with the custom parameter constucted using the semicolon (":") syntax such as this for example,
/users/:id. To access URL parameters within a component using React Router, you can use the "useParams" hook that is provided by the react-router-dom

- What is context in React? When would you use it?

In React, context is a way to pass data through the component tree without having to pass props down manually at every level. Context provides a way to share data between components that are not directly related to each other, but are somewhere in the component tree. An example would be a message upon sign-in that says "Welcome User!". Then not having a message pop up until the user signs out and they recieve "Bye User!".

- Describe some differences between class-based components and function
  components in React.

Class-based components are defined as JavaScript classes, whereas function components are defined as regular JavaScript functions. Class-based components extend the React.Component class and implement a render method that returns the component's UI. Function components are much simpler and take in props as input and return the component's UI. Class-based components have access to state and lifecycle methods, whereas function components do not. State is used to manage component data that can change over time, and lifecycle methods allow you to run code at specific points in a component's lifecycle, such as when it's mounted or updated.

- What are some of the problems that hooks were designed to solve?

Hooks allow you use state and other React features without having to write a class.
Hooks are functions that let you “hook into” React state and lifecycle features from function components.
Hooks allow you to use react without requiring classes.
Hooks make it easier to use react while writing cleaner, more understandable, and less code.
