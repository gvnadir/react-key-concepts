# react-key-concepts
Exercices from the React Key Concept book

# 1. What is React?

React (or React.js) is a JavaScript library that simplifies building (complex) user interfaces. It's exposed through the [react](https://www.npmjs.com/package/react) package, and combined with the [react-dom](https://www.npmjs.com/package/react-dom) package, you can use it to build advanced, highly interactive an reactive web user interfaces.

React is platform-agnostic though, you can also use it with other platforms - most notably, you can build native mobile apps with React and the [react-native](https://www.npmjs.com/package/react-native) package.

# 2. Which advantage does React offer over vanilla JavaScript projects?

With "vanilla JavaScript" (i.e. JavaScript without any extra libraries or frameworks), you have to write all code instructions yourself. 

For basic web apps and user interfaces, this is typically no problem but for more advanced use-cases, it can quickly become very cumbersome and error prone to use just vanilla JavaScript (also see the next question: *Imperative vs declarative code*).

React simplifies the creation of (complex) web user interfaces by generating and executing DOM-manipulating instructions "under the hood", on your behalf. As a developer, you can focus on describing the desired target UI state(s) and the core business logic. You don't have to control all UI updates and changes manually.

# 3. What’s the difference between imperative and declarative code?

With *imperative code*, you write down all instructions step by step. If you want to listen to a button click and then change some text on the screen, you have to add the code that sets up the event listener and then also the code that selects the to-be-changed element as well as the code that does set a new text for that element.
For non-trivial user interfaces, this can lead to lots of overhead work and possible error sources.

When writing code *declaratively*, you don't write down all steps that lead to a certain result. Instead, as a developer, you describe the target (UI) state(s) and let some library (in this case: React) figure out how to get there. This allows you to skip the overhead work of selecting DOM elements and changing them manually and focus on your core business logic instead.

# 4. What is a Single-Page-Application (SPA)?

A SPA is a web app that is technically served on one page (one HTML document) only. That page loads some JavaScript code (typically combined with some library like React) that takes care about updating the page content based on different user actions.
To the user, it might seem like they are navigating different pages but technically, it's the same page's DOM getting updated behind the scenes.

You can even listen to changes in the page path to update the DOM based on path changes - this increases the "multi page feeling". When working with React, the [react-router](https://www.npmjs.com/package/react-router) package is the most popular package for listening to such path changes and updating the UI based on any changes.

# 5. How can you create new React projects and why do you need such a more complex project setup?

New React projects can be created in different ways but one of the most popular and easiest ways of setting up a new React project is to use the [create-react-app tool](https://reactjs.org/docs/create-a-new-react-app.html).

This is a tool which you can use to scaffold new React projects which already have all the packages (like `react` and `react-dom`) that are needed to build web projects with React. In addition, those projects also come with some code transformation tools and a workflow that enables the usage of special features like *JSX code* (markup code for React apps).

New projects can be created with that tool by running `npx create-react-app project-name`.

These projects also provide a development server which can be started via `npm start` to preview the React web app locally and get live updates as you make code changes.

# 6.	What’s the idea behind using components?

Components are a key concept embraced by React. The idea behind this concept is, that  user interfaces can be split into smaller, encapsulated chunks of code. This can help with building more complex user interfaces as developers don't have to work on one big chunk of code.

React components typically include markup (JSX code) that defines which content and structure should be rendered as well as logic (JavaScript with extra React features) and styles (CSS).

# 7.	How can you create a React component?

When working with React, React components can be defined in two different ways:

- As JavaScript classes
- As JavaScript functions

The first approach (classes) isn't really used anymore and exists mainly for historic reasons. Instead, the default way of creating components with modern React, is to use JavaScript functions.

# 8.	What turns a regular function into a React component function?

When using functions, only certain kinds of functions qualify as React components. Specifically, a function must return some "renderable" content like JSX code. 

In addition, when using a custom component function as a component inside of JSX code, developers must use component names that start with an uppercase character (like `<SubmitButton />`). This is required by React to tell custom components apart from built-in components that reflect native HTML elements like `<div>` etc.

# 9. Which core rules should you keep in mind regarding JSX elements?

When working with JSX code, it is important to keep in mind that JSX is neither HTML code nor regular vanilla JavaScript code. Instead, JSX is "syntactical sugar" provided by a build workflow that's part of all modern React projects. JSX gets transformed into regular JavaScript method calls behind the scenes.

Therefore, a couple of rules are enforced:

- When using custom components inside of JSX code, these components must start with an uppercase character (e.g. `<SubmitButton>`)
- In general, `PascalCase` naming should be used for custom component
- Built-in components that reflect native HTML elements are all-lowercase (like `<p>`)
- Void elements (like `<img>`) must be self-closing: `<img />` instead of `<img>`
- JSX values are like regular JavaScript values, hence in places, where a single value is expected (e.g. after the `return` keyword), no sibling values are allowed

# 10. How is JSX code handled by React & ReactDOM?

JSX code is picked up and handled by the React library. React & ReactDOM "translate" renderable content like JSX code into actual DOM-manipulating instructions.

To be precise, all modern React projects contain a build workflow that transforms JSX code into `React.createElement(...)` method calls. `React.createElement(...)` is then the actual instruction that is received and handled by React. Ultimately, the above-mentioned DOM-manipulation instructions are then generated by ReactDOM.

# 11. Which "problem" do props solve?

Props allow React developers to make components configurable and therefore actually reusable. Different prop values can be passed to one and the same component, hence reusing that component's JSX structure and logic with different pieces of data.

# 12. How are props passed into components?

Props are passed as attributes on the JSX tags of custom components. A special prop can be set by passing a value between the opening and closing component tags: The built-in `children` prop.

All attributes that are set on a custom component tag, as well as the content between the component tags, are picked up by React and grouped together into a "props" object that is passed into every component function automatically.

# 13. How are props consumed inside of a component function?

The props are passed as an argument to your component functions by React - automatically and grouped as an object. Inside the component function, props can therefore be consumed by accepting a "props" parameter (the first parameter of the function).

# 14. Which options exist for passing (multiple) props into components?

When passing multiple props, you can either provide mutiple attributes (i.e. many key-value pairs) and / or group prop values together into an object or array and pass that object / array as a single attribute to a component.

Inside the component function, you can also use "object destructuring" to pull prop values out of the received "props" object.

# 15. Which “problem” does state solve?

State allows developers to manage data which, when changed, causes React to re-evaluate (re-execute) the component for which the state was registered. This is a key feature which allows developers to build truly dynamic React applications.

# 16. What’s the difference between “props” and “state”?

Props are used for passing data from parent to child components. It's a feature that allows developers to build re-usable components ("UI building blocks"). State on the other hand allows developers to change data and force UI updates, as described above.

# 17. How is state registered in a component?

State is registered by calling the built-in `useState()` hook that is provided by React. It's a standard JavaScript function that is handled in a special way internally by React. When calling `useState()`, a new state value is registered in and tied to a component. When the state value is updated, the component is re-evaluated by React.

# 18. Which values does the useState() hook provide?

`useState()` returns an array with exactly two elements:

- The first element is the current state value
- The second element is a function that should be called to update the state value

# 19. How many state values can be registered for a single component?

As many as you want / need.

# 20. Does state affect other components (than the component in which it was registered) as well?

Yes. When a component is re-evaluated because of a state change, React will also re-evaluate any child components (since it will parse and execute the entire JSX code again).

# 21. How should state be updated if the new state depends on the previous state?

In such cases, a function should be passed as a value to the state updating function. React will call this function automatically and provide the previous state value as an argument to the function. Therefore, the provided function should accept a parameter and return the updated value, which may be based on that parameter (i.e. which is based on the previous state value).

# 22. How can state be shared across multiple components?

State can be "lifted up" to a common ancestor component. Since child components are re-evaluated together with the component that uses state, those components will be updated as well.

# 23. What is "conditional content"?

Conditional content is content that is only rendered if certain conditions are met. You could, for example, only render a `<p>` if a button was clicked.

# 24. Name at least two different ways of rendering JSX elements conditionally.

- With help of `if` statements (set a variable to different values for different conditions)
- With help of ternary expressions (set a variable to different values for different conditions)

You can also "abuse" the JavaScript logical "and" operator (`&&`). Ternary epxressions and the `&&` operator can be used to store different data in variables **or** to "inline", directly inside of a component's JSX code.

# 25. Which elegant approach can be used to define element tags conditionally?

You can store the desired element type in a (conditionally set) variable. Built-in components like `<p>` or `<a>` can be store by storing the tag names (`p` or `a`) in variables. Custom components can be stored by storing a pointer at the custom component function.

# 26. What's a potential downside of using only ternary expressions (for conditional content)?

Ternary expressions can sometimes be difficult to read or understand, especially if nested and / or more complex content is handled with them.

# 27. How can lists of data be rendered as JSX elements?

You can use `for` loops for populating arrays with JSX elements. JSX is capable of converting an array of JSX elements into multiple sibling JSX elements.
As an alternative to `for` loops, you can use the `map()` method to map an array of any kind of data into an array of JSX elements.

# 28. Why should keys be added to rendered list items?

Keys helps React with identifying rendered DOM elements. Keys therefore help React avoid re-rendering unchanged JSX elements unnecessarily.

# 29. Give one example each for both a good and a bad key.

Good key: A unique id that is attached to some data (e.g. a user id attached to more user data)

Bad key: A random number that's re-generated frequently.

# 30. With which language are styles for React components defined?

You can use CSS, no special language or React-specific approach has to be used.

# 31. Which important difference, compared to projects without React, has to be kept in mind when it comes to assigning classes to elements?

CSS classes are normally assigned to elements via the `class` attribute. When working with JSX, that becomes `className`!

# 32. How can styles be assigned dynamically and conditionally?

Just as any value can be set or assigned dynamically / conditionally. You can set the `style` or `className` props to both hard-coded / static and dynamic or conditional values (by using single curly braces).

# 33. What does "Scoping" mean in the context of styling?

"Scoping" refers to the restriction of styles to a specific component. If styles would be scoped to a component, they could not clash with similar styles assigned elsewhere. This matters when working with CSS class names. Since CSS, by default, is global, duplicate class names, defined in different places, would clash and overwrite each other.
If styles were scoped to a component, they would not do that. Out of the box, styles aren't scoped though.

# 34. How could styles be scoped to components? Briefly explain at least one concept that helps with scoping.

Different approaches and third-party libraries can help with scoping. One popular approach, that's supported by projects created via `create-react-app` by default, is the usage of CSS Modules.
When using CSS Modules, class names get transformed to unique class names during the build process. Therefore, every component has its own, unique class names which can't clash with similar class names defined elsewhere.

# 35. How can refs help with handling user input in forms?

Refs can be created via `useRef()` and be used to gain direct access to DOM elements. This can be helpful if you, for example, want to extract (i.e., read) the value entered by a user into an `<input>` element.
Compared to using state (via `useState()`), refs require a bit less code and hence can lead to leaner components.

# 36. What is an uncontrolled component?

A component where React is not in direct control of the DOM state. Instead, a ref might be used to read (or even change) a DOM element.

# 37. What is a controlled component?

A component where React controls the UI state entirely (via `useState()`).

# 38. When should you not use refs?

You should avoid using refs when it comes to manipulating DOM elements. Niche-cases like using the `focus()` method on an `<input>` element are acceptable but you should, for example, not start editing `<input>` values or anything like this.

# 39. What’s the main idea behind portals?

The portal feature (via `createPortal()`) allows you to instruct React to render JSX elements in a different place in the DOM than it normally would.

# 40. How would you define a side effect?

A side effect is an action that's not directly working towards the main goal of a function.

# 41. What’s a potential problem that could arise with some side effects in React components?

Depending on the circumstances, side effects could lead to infinite loops (if performed directly inside the component function). 

# 42. How does the `useEffect()` Hook work?

`useEffect()` accepts two arguments: an effect function that wraps the side effect and an (optional) array of dependencies.

The effect function contains the side effect code and is executed after every component function invocation. The array of dependencies should contain all values, variables or functions used in the effect function. This array of dependencies controls how often the effect function is executed by React (whenever any dependency changes).

# 43. Which values should **not** be added to the `useEffect()` dependencies array?

You should not add any values that are defined and used inside of the effect function, any external values or functions (defined outside of the component function) or state updating functions.

# 44. Which value can be returned by the effect function? And which kind of value must not be returned?

You can (optionally) return a cleanup function which will be executed right before the effect function is executed the next time. You must not return an asynchronous function (a `Promise`).

# 45. Why does React use a virtual DOM to detect required DOM updates?

If React would reach out to the real DOM in order to calculate required UI updates, a lot of (unnecessary) DOM traversal and read operations would be performed.

Operations related to the real DOM are "expensive" (performance-wise) and hence should be kept to a minimum. That's why React uses a virtual DOM for deriving the expected and actual DOM structure and calculating changes based on those differences.

# 46. How is the real DOM affected when a component function is executed?

When a component function is executed, the real DOM is not affected at all initially. Because it's the virtual DOM that's used for calculating (possibly) required changes. Only if such changes are needed, React will reach out to the real DOM and implement those changes (e.g., remove an element, add an element etc.).

# 47. Which components are great candidates for the `memo()` function? Which components are bad candidates?

Components high up in the component tree or at the beginning of deeply nested component tree branches are great candidates. They are great candidates because by prevent unnecessary executions of a single component (the one wrapped with `memo()`), a lot of component re-evaluations further down the component tree can be prevented.

Bad candidates are simple components which wouldn't be too compute-intensive to re-evaluate or components that will have to change a lot anyways.

# 48. How is `useMemo()` different from `memo()`?

Unlike `memo()`, `useMemo()` is not used to wrap entire component functions but instead to wrap specific code snippets that are part of component functions. With `useMemo()`, you can partially disable code execution inside a component function.

# 49. What’s the idea behind code splitting and the `lazy()` function?

When a user first visits a website, all the JavaScript code needed for that site must be downloaded. Depending on the complexity of your React app, that may be a lot of code. And chances are high that at least some code isn't needed initially.

With code splitting (via `lazy()`, which is wrapped around a dynamic import), the code bundle is split up into multiple code bundles which are then downloaded only when they are needed.

# 50. Which problem can be solved with React’s context API?

The context API helps with managing cross-component state. It can simplify this process and help developers avoid "prop drilling". The context API therefore is an alternative to "lifting the state up".

# 51. Which three main steps have to be taken, when using the context API?

You have to create the context, provide it (via the `Provider` component) and use it via `useReducer()`. When providing the context, the value has to be set with help of the `value` prop of the `Provider` component.

# 52. When might `useReducer()` be preferred over `useState()`?

`useReducer()` can be a better choice than `useState()`, when dealing with complex state values. It's especially valuable if you're dealing with (deeply) nested or otherwise complex object values. It also helps avoid cross-state dependencies.

# 53. When working with `useReducer()`, what’s the role of actions?

Actions are dispatched to "tell" the reducer function what to do. When using the `dispatch` function, action data is passed as a first (and only) argument to the function. That data can take any shape, but typically, an object is used.

By using a `type` property (or a similar identifier) in the dispatched object, you can control execution flow in the reducer function. Extra payload data can also be passed along.

# 54. What is the definition of a custom Hook?

A custom Hook is a regular JavaScript function. It becomes a custom Hook by adding `use` as a prefix to the function name.
Without that prefix, React would produce an error as soon as you tried to use another Hook in that function.

# 55. Which special feature can be used inside a custom Hook?

You can use other Hooks inside of custom Hooks. That is true for built-in and other custom Hooks.

# 56. What happens when multiple components use the same custom Hook?

Every component receives its own "instance" (its own "version") of that Hook. State managed by a custom Hook is **not** shared across components. Side effects would also be triggered on a per-component basis.

# 57. How can custom Hooks be made more re-usable?

You can accept parameters to change the logic inside of a custom Hook. You could, for example, accept a `url` parameter to configure the URL to which an HTTP request is sent.

You can also return any values you want, to make sure that just the right data is exposed to the components that use the Hook.

# 58. How is routing different from loading content conditionally?

Routing **is** about loading content conditionally. But you don't load content conditionally because some state changed, instead you do it because the URL path changed.

Instead of listening to such path changes manually, you typically use a routing library like the React Router library. This package then detects URL path changes and loads the appropriate content (based on your route definitions).

# 59. What’s the purpose of the `Routes` and `Route` components?

`Routes` is used to group multiple route definitions together. Whenever the URL path changes, `Routes` looks through all its children (i.e., through the `Route` components) to check whether any route should be activated.

`Route` is used to define an individual route. Every `Route` takes a `path` prop which defines the URL path for which the route should become active. It also takes an `element` prop which sets the content that should be displayed once the route is active.

# 60. How should you add links to different routes to your pages?

Internal links (i.e., links leading to one of your routes) should be created via React Router's `Link` or `NavLink` components.

Links to external websites or resources (i.e., anything but your own routes) should be created via the `<a>` element.

You can also navigate programmatically with help of the `navigate()` function returned by `useNavigate()`.

# 61. How can dynamic routes (e.g., details for one of many products) be added to your app?

Dynamic routes are a very important feature! 

You can easily add them by adding a dynamic path segment to your route definitions' `path` props. For example, you could add `:id` to a specific `path` to activate that route for different `id` values.

# 62. How can dynamic route parameter values be extracted (e.g., to load product data)?

Dynamic path parameter values can be extracted from the URL via the `useParams()` Hook provided by React Router.
You can use this Hook in the component that was loaded for the activated route. It yields an object that contains the dynamic segments as properties. The values of the properties are the actual values encoded in the URL path.

# 63. What’s the purpose of nested routes?

Nested routes make sharing UI elements across routes easier. If multiple routes should share a common component (e.g., some specific layout), you can use nested routes.

# 64. How are data fetching & submission related to routing?

It's very common to fetch data as a new page is loaded. Similarily, it's very common to change the page after committing some action (e.g., after sending a request). Hence it makes sense to combine these tasks with routing. 

With React Router, you can load data right before a page is rendered and navigate to a different route after an action completed.

# 65. What’s the purpose of `loader()` functions?

`loader()` functions are executed (by React Router) whenever the route to which they belong gets activated. The route's component function is only rendered once the `loader()` function finished execution.

`loader()` functions are therefore typically used to fetch data that's required on a page. That data (which is returned by the `loader()` function) can then be accessed inside the component via React Router's `useLoaderData()` Hook.

# 66. What’s the purpose of `action()` functions?

`action()` functions registered for a route get called by React Router whenever a form is submitted to that route. 

Inside the `action()` function you then typically handle the form submission by validating the user input and/ or sending a HTTP request (with the submitted data) to a backend API.

`action()` functions can return any data of your choice. If you return a redirect response (e.g., created via React Router's `redirect()` function) React Router will navigate to the new page once the action completed.

# 67. What’s the difference between `<Form>` and `<form>`?

The default `<form>` element automatically creates and sends an HTTP request when submitted. You have to prevent that default (via `event.preventDefault()`) if you want to do anything else upon form submission.

React Router's `<Form>` component automatically prevents that default and insteads triggers the `action()` function registered for the route which is targeted.

# 68. What’s the difference between `useSubmit()` and `useFetcher()`?

Both `useSubmit()` and `useFetcher()` can be used to trigger `action()` functions programmatically.

The difference is that `useFetcher()` provides you with an object that can also be used for loading data (i.e., for triggering `loader()` functions) **and** that `useFetcher()` does not require a route transition. Instead, you can trigger a `loader()` or `action()` without changing the page.

# 69. What’s the idea behind `defer()`?

`defer()` allows you to start rendering a route's page component without waiting for all of the required data first. This can be useful when fetching slow data.
