let words = [
    {
        word: "element",
        hint: "A single part of an HTML document"
    },
    {
        word: "selector",
        hint: "CSS pattern used to select HTML elements"
    },
    {
        word: "attribute",
        hint: "Additional information provided within an HTML tag"
    },
    {
        word: "margin",
        hint: "CSS property that creates space outside of elements"
    },
    {
        word: "padding",
        hint: "CSS property that creates space inside of elements"
    },
    {
        word: "function",
        hint: "A block of code designed to perform a particular task in JavaScript"
    },
    {
        word: "variable",
        hint: "A storage location identified by a name in JavaScript"
    },
    {
        word: "loop",
        hint: "A programming structure that repeats a block of code"
    },
    {
        word: "array",
        hint: "A data structure used to store multiple values in a single variable"
    },
    {
        word: "href",
        hint: "HTML attribute used to define the URL of a link"
    },
    {
        word: "class",
        hint: "CSS selector used to style multiple elements with the same properties"
    },
    {
        word: "id",
        hint: "Unique identifier used to target a single HTML element"
    },
    {
        word: "event",
        hint: "An action or occurrence recognized by JavaScript, such as a click"
    },
    {
        word: "DOM",
        hint: "The document object model, representing HTML as a tree structure"
    },
    {
        word: "querySelector",
        hint: "JavaScript method used to select the first element that matches a CSS selector"
    },
    {
        word: "mediaQuery",
        hint: "CSS technique used to apply styles based on device characteristics"
    },
    {
        word: "responsive",
        hint: "Design approach that ensures a website looks good on all devices"
    },
    {
        word: "boxModel",
        hint: "CSS concept that includes the content, padding, border, and margin of an element"
    },
    {
        word: "JSON",
        hint: "JavaScript Object Notation, a format for storing and exchanging data"
    },
    {
        word: "localStorage",
        hint: "Web storage method for storing data in the browser"
    },
    {
        word: "hover",
        hint: "CSS pseudo-class that applies styles when the mouse is over an element"
    },
    {
        word: "flexbox",
        hint: "CSS layout model for designing responsive web pages"
    },
    {
        word: "async",
        hint: "Keyword used in JavaScript to declare an asynchronous function"
    },
    {
        word: "callback",
        hint: "A function passed as an argument to another function"
    },
    {
        word: "API",
        hint: "Application Programming Interface, allows different software to communicate"
    },
    {
        word: "inline",
        hint: "CSS display property that places elements in a line"
    },
    {
        word: "block",
        hint: "CSS display property that takes up the full width available"
    },
    {
        word: "semantic",
        hint: "HTML elements that clearly describe their meaning in a human- and machine-readable way"
    },
    {
        word: "link",
        hint: "HTML tag used to connect to external resources like CSS files"
    },
    {
        word: "head",
        hint: "HTML element that contains meta-information about the document"
    },
    {
        word: "body",
        hint: "HTML element that contains the content of the web page"
    },
    {
        word: "footer",
        hint: "HTML element usually placed at the bottom of the web page"
    },
    {
        word: "header",
        hint: "HTML element typically containing introductory content or navigational links"
    },
    {
        word: "meta",
        hint: "HTML tag used to specify metadata about an HTML document"
    },
    {
        word: "script",
        hint: "HTML tag used to embed JavaScript code"
    },
    {
        word: "link",
        hint: "HTML tag used to define a relationship between the document and an external resource"
    },
    {
        word: "CSS",
        hint: "Cascading Style Sheets, used for styling HTML elements"
    },
    {
        word: "HTML",
        hint: "Hypertext Markup Language, used for creating web pages"
    },
    {
        word: "JavaScript",
        hint: "Programming language used to create dynamic content on websites"
    },
    {
        word: "queryString",
        hint: "Part of a URL that contains data to be passed to web applications"
    },
    {
        word: "href",
        hint: "HTML attribute used to define the URL of a hyperlink"
    },
    {
        word: "src",
        hint: "HTML attribute that specifies the source of an image or media file"
    },
    {
        word: "alt",
        hint: "HTML attribute used to provide alternative text for an image"
    },
    {
        word: "table",
        hint: "HTML element used to display data in a tabular form"
    },
    {
        word: "thead",
        hint: "HTML element used to group header content in a table"
    },
    {
        word: "tbody",
        hint: "HTML element used to group the body content in a table"
    },
    {
        word: "tfoot",
        hint: "HTML element used to group footer content in a table"
    },
    {
        word: "tr",
        hint: "HTML element used to define a row in a table"
    },
    {
        word: "td",
        hint: "HTML element used to define a cell in a table"
    },
    {
        word: "th",
        hint: "HTML element used to define a header cell in a table"
    },
    {
        word: "form",
        hint: "HTML element used to collect user input"
    },
    {
        word: "input",
        hint: "HTML element used to create interactive controls for web-based forms"
    },
    {
        word: "button",
        hint: "HTML element used to create clickable buttons"
    },
    {
        word: "select",
        hint: "HTML element used to create a drop-down list"
    },
    {
        word: "option",
        hint: "HTML element used to define options in a drop-down list"
    },
    {
        word: "textarea",
        hint: "HTML element used to create a multi-line input field"
    },
    {
        word: "label",
        hint: "HTML element used to define labels for form elements"
    },
    {
        word: "fieldset",
        hint: "HTML element used to group related elements in a form"
    },
    {
        word: "legend",
        hint: "HTML element used to provide a caption for a fieldset"
    },
    {
        word: "submit",
        hint: "Type of input element used to submit form data"
    },
    {
        word: "reset",
        hint: "Type of input element used to reset form data"
    },
    {
        word: "inherit",
        hint: "CSS value that inherits the property value from its parent"
    },
    {
        word: "relative",
        hint: "CSS positioning property that positions an element relative to its normal position"
    },
    {
        word: "absolute",
        hint: "CSS positioning property that positions an element relative to its closest positioned ancestor"
    },
    {
        word: "fixed",
        hint: "CSS positioning property that positions an element relative to the browser window"
    },
    {
        word: "sticky",
        hint: "CSS positioning property that toggles between relative and fixed positioning"
    },
    {
        word: "z-index",
        hint: "CSS property that specifies the stack order of elements"
    },
    {
        word: "overflow",
        hint: "CSS property that controls what happens to content that overflows its container"
    },
    {
        word: "opacity",
        hint: "CSS property that specifies the transparency of an element"
    },
    {
        word: "transform",
        hint: "CSS property that applies a 2D or 3D transformation to an element"
    },
    {
        word: "transition",
        hint: "CSS property that defines the transition effects between two states of an element"
    },
    {
        word: "animation",
        hint: "CSS property that allows an element to change its style gradually"
    },
    {
        word: "grid",
        hint: "CSS layout system for creating complex layouts with rows and columns"
    },
    {
        word: "viewport",
        hint: "The user's visible area of a web page"
    },
    {
        word: "media",
        hint: "Attribute used to define what media/device a CSS file is optimized for"
    },
    {
        word: "nth-child",
        hint: "CSS pseudo-class that matches elements based on their position in a group of siblings"
    },
    {
        word: "pseudo-class",
        hint: "CSS keyword that is added to selectors to specify a special state of the selected elements"
    },
    {
        word: "pseudo-element",
        hint: "CSS keyword added to selectors to style a specific part of an element"
    },
    {
        word: "calc",
        hint: "CSS function that allows you to perform calculations"
    },
    {
        word: "vw",
        hint: "CSS unit that represents a percentage of the viewport width"
    },
    {
        word: "vh",
        hint: "CSS unit that represents a percentage of the viewport height"
    },
    {
        word: "rem",
        hint: "CSS unit that represents the root element font size"
    },
    {
        word: "em",
        hint: "CSS unit that represents the font size of the element"
    },
    {
        word: "console",
        hint: "JavaScript object used to output information to the browser's debugging console"
    },
    {
        word: "alert",
        hint: "JavaScript function used to display a dialog box with a message"
    },
    {
        word: "prompt",
        hint: "JavaScript function that displays a dialog box that prompts the user for input"
    },
    {
        word: "confirm",
        hint: "JavaScript function that displays a dialog box with an OK and a Cancel button"
    },
    {
        word: "typeof",
        hint: "JavaScript operator used to return the data type of a variable"
    },
    {
        word: "instanceof",
        hint: "JavaScript operator used to test whether an object is an instance of a constructor"
    },
    {
        word: "NaN",
        hint: "JavaScript value representing Not-a-Number"
    },
    {
        word: "null",
        hint: "JavaScript keyword representing the intentional absence of any object value"
    },
    {
        word: "undefined",
        hint: "JavaScript value indicating that a variable has not been assigned a value"
    },
    {
        word: "strict",
        hint: "JavaScript mode that catches common coding errors and 'unsafe' actions"
    },
    {
        word: "this",
        hint: "JavaScript keyword that refers to the object from which it was called"
    },
    {
        word: "classList",
        hint: "JavaScript property that returns the class names of an element as a DOMTokenList"
    },
];
