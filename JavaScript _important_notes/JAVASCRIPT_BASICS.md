Callback Hell in JavaScript
JavaScript is an asynchronous (non-blocking) and single-threaded programming language, meaning only one process can be run at a time.

In programming languages, callback hell generally refers to an ineffective way of writing code with asynchronous calls. It is also known as the Pyramid of Doom.

The callback hell in JavaScript is referred to as a situation where an excessive amount of nested callback functions are being executed. It reduces code readability and maintenance. The callback hell situation typically occurs when dealing with asynchronous request operations, such as making multiple API requests or handling events with complex dependencies.

To better understand the callback hell in JavaScript, first understand the callbacks and event loops in JavaScript.
Pause

Callbacks in JavaScript
JavaScript considers everything as an object, such as strings, arrays, and functions. Hence, the callback concept allows us to pass the function as an argument to another function. The callback function will complete the execution first, and the parent function will be executed later.

The callback functions are executed asynchronously and allow code to continue running without waiting to complete the asynchronous task. When multiple asynchronous tasks are combined, and each task depends on its previous task, the code structure becomes complicated.

Let's understand the use and importance of the callbacks. Let's assume an example we have a function that takes three parameters one string and two numbers. We want some output based on the string text with multiple conditions.

Consider the below example:

function expectedResult(action, x, y){  
 if(action === "add"){  
 return x+y  
 }else if(action === "subtract"){  
 return x-y  
 }  
}

console.log(expectedResult("add",20,10))
console.log(expectedResult("subtract",30,10))  
Output:

30
20
The above code will work fine, but we need to add more tasks to make the code scalable. The number of conditional statements will also keep increasing, which will lead to a messy code structure that needs to be optimized and readable.

So, we can rewrite the code in a better way as follows:

function add(x,y){  
 return x+y  
}  
function subtract(x,y){  
 return x-y  
}  
function expectedResult(callBack, x, y){  
 return callBack(x,y)  
}  
console.log(expectedResult(add, 20, 10))
console.log(expectedResult(subtract, 30, 10))
Output:

30
20
Still, the output will be the same. But in the above example, we have defined its separate function body and passed the function as a callback function to the expectedResult function. Hence, if we want to extend the functionality of the expected results so we can create another functioning body with a different operation and use it as the callback function, it will make it easier to understand and improve the code readability.

There are other different examples of the callbacks available in supported JavaScript features. A few common examples are Event listeners, and array functions such as map, reduce, filter, etc.

To better understand it, we should understand JavaScript's pass-by-value and pass-by-reference.

JavaScript supports two types of data types which are primitive and non-primitive. Primitive data types are undefined, null, string, and boolean, which can't be changed, or we can say immutable comparatively; non-primitive data types are arrays, functions, and objects which can be changed or mutable.

Pass by reference passes the reference address of an entity, like a function can be taken as an argument. So, if the value within that function is changed, it will alter the original value, which is available outside the function.

Comparatively, the pass-by-value concept does not change its original value, which is available outside of the function body. Instead, it will copy the value into two different locations by using their memory. JavaScript identified all the objects by their reference.

In JavaScript, the addEventListener listens for the events such as click, mouseover, and mouseout and takes the second argument as a function that will be executed once the event is triggered. This function is used pass by reference concept and passed using without parenthesis.

Consider the below example; in this example, we have passed a greet function as an argument into the addEventListener as the callback function. It will be invoked when the click event is triggered:

Test.html:

<!-- <!DOCTYPE html>
<html>
  <head>
    <title>
        Javascript Callback Example
    </title>
  </head>
  <body>

  <h3>Javascript Callback</h3>
  <button id='btn'>Click Here to Console</button>
      <script>
        const button = document.getElementById('btn');
        const greet=()=>{
        console.log("Hello, How are you?")
        }
button.addEventListener('click', greet)
       </script>
  </body>
</html>   -->

Output:

Callback Hell in JavaScript
In the above example, we have passed a greet function as an argument into the addEventListener as the callback function. It will be invoked when the click event is triggered.

Similarly, the filter is also an example of the callback function. If we use a filter to iterate an array, it will take another callback function as an argument to process the array data. Consider the example below; in this example, we are using the greater function to print the number greater than 5 in the array. We are using the isGreater function as a callback function in the filter method.

const arr = [3,10,6,7]  
const isGreater = num => num > 5  
console.log(arr.filter(isGreater))  
Output:

[ 10, 6, 7 ]
The above example shows that the greater function is used as a callback function in the filter method.

To better understand the Callbacks, Event loops in JavaScript, let's discuss synchronous and asynchronous JavaScript:

Synchronous JavaScript
Let's understand what are the features of a synchronous programming language. Synchronous programming has the following features:

Blocking Execution: The synchronous programming language supports the blocking execution technique which means it blocks the execution of subsequent statements the existing statements will be executed.Thus it achieves the predictable and deterministic execution of the statements.

Sequential Flow: Synchronous programming supports the sequential flow of execution, which means each statement is executed in a sequential way like one after another. The language program waits for a statement to complete before moving on to the next one.

Simplicity: Oftenly, the Synchronous programming is considered as easy to understand because we can predict its order of the execution flow. Generally, it's linear and easy to predict. The small applications are good to developed on these languages because it can handle the critical order of operations.

Direct Error Handling: In a synchronous programming language error handling is very easy. If an error happens when an statement is being executed, it will throw an error and the program can catch it.

In a nutshell, synchronous programming has two core features, i.e., a single task is executed at a time, and the next set of following tasks will only be addressed once the current task gets finished. Thereby it follows a sequential code execution.

This behavior of the programming when a statement is executing, language creates a situation of block code as each job has to wait for the previous job to be completed.

But when people talk about JavaScript, it's always been a puzzling answer whether it's synchronous or asynchronous.
ADVERTISEMENT

In the above-discussed examples, when we used a function as a callback in the filter function, it was executed synchronously. Hence it is called a synchronous execution. The filter function has to wait for the greater function to finish its execution.

Hence, the callback function is also called blocking callbacks, as it blocks the execution of the parent function in which it was invoked.

Primarily, JavaScript is considered single-threaded synchronous and blocking in nature. But using a few approaches, we can make it work asynchronously based on different scenarios.

Now, let's understand the asynchronous JavaScript.

Asynchronous JavaScript
The asynchronous programming language focuses on the to enhance the application's performance. The callbacks can be used in such scenarios. We can analyze the asynchronous behavior of JavaScript by the below example:

function greet(){  
 console.log("greet after 1 second")  
}

setTimeout(greet, 1000)  
From the above example, the setTimeout function takes in a callback and time in milliseconds as arguments. The callback gets invoked after the time mentioned (here 1s). In a nutshell, the function will wait for 1s for its execution. Now, have a look at the below code:

function greet(){  
 console.log("greet after 1 second")  
}  
setTimeout(greet, 1000)  
console.log("first")  
console.log("Second")  
Output:

first
Second
greet after 1 second
From the above code, the log messages after the setTimeout will be executed first while the timer will pass. Hence, it is resulting one second and then the greeting message after 1 second time interval.

In JavaScript, setTimeout is an asynchronous function. Whenever we call the setTimeout function, it registers a callback function (greet in this case) to be executed after the specified delay. However, it does not block the execution of the subsequent code.

In the above example, the log messages are the synchronous statements that execute immediately. They are not dependent on the setTimeout function. Therefore, they execute and log their respective messages to the console without waiting for the delay specified in setTimeout.

Meanwhile, the event loop in JavaScript handles the asynchronous tasks. In this case, it waits for the specified delay (1 second) to pass, and after that time has elapsed, it picks up the callback function (greet) and executes it.

Thus, the other code after the setTimeout function was executing while running in the background. This behavior allows JavaScript to perform other tasks while waiting for the asynchronous operation to complete.

We need to understand the call stack and callback queue to handle the asynchronous events in JavaScript.

Consider the below image:

Callback Hell in JavaScript
From the above image, a typical JavaScript engine consists of a heap memory and a call stack. The call stack executes all the code without waiting when pushed to the stack.

The heap memory is responsible for allocating the memory for objects and functions at runtime whenever they are needed.

Now, our browser engines consist of several web APIs such as DOM, setTimeout, console, fetch, etc., and the engine can access these APIs using the global window object. In the next step, some event loops play the role of gatekeeper that picks function requests inside the callback queue and pushes them into the stack. These functions, such as setTimeout, require a certain waiting time.

Now, let's go back to our example, the setTimeout function; when the function gets encountered, the timer gets registered in the callback queue. After this, the rest of the code is pushed into the call stack and gets executed once the function reaches its timer limit, it is expired, and the callback queue pushes the callback function, which has the specified logic and is registered in the timeout function. Thus, it will be executed after the specified time.

Callback Hell Scenarios
Now, we have discussed the callbacks, synchronous, asynchronous, and other relevant topic for the callback hell. Let's understand what callback hell is in JavaScript.

The situation when multiple callbacks are nested is known as the callback hell since its code shape looks like a pyramid, which is also called the "pyramid of the doom".
ADVERTISEMENT

The callback hell makes it harder to understand and maintain the code. We can mostly see this situation while working in node JS. For example, consider the below example:

getArticlesData(20, (articles) => {  
 console.log("article lists", articles);  
 getUserData(article.username, (name) => {  
 console.log(name);  
 getAddress(name, (item) => {  
 console.log(item);  
 //This goes on and on...  
 }  
})  
In the above example, getUserData takes a username that is dependent on the article list or needs to be extracted getArticles response which is inside the article. getAddress also has a similar dependency, which is dependent on the getUserData's response. This situation is called callback hell.

The internal working of the callback hell can be understood with the below example:

Let's understand we need to perform task A. To perform a task, we need some data from the task B.Similarly; we have different tasks that are dependent on each other and execute asynchronously. Thus, it creates a series of callback functions.

Let's understand the Promises in JavaScript and how they create asynchronous operations, allowing us to avoid writing nested callbacks.
ADVERTISEMENT

JavaScript promises
In JavaScript, promises were introduced in ES6. It is an object with a syntactical coating. Due to its asynchronous behavior it is an alternate way to avoid writing the callbacks for asynchronous operations. Nowadays, Web APIs like fetch() are implemented using the promising, which provides an efficient way to access the data from the server. It also improved the code readability and is a way to avoid writing nested callbacks.

Promises in real-life express trust between two or more persons and an assurance that a particular thing will surely happen. In JavaScript, a Promise is an object which ensures to production a single value in the future (when required). Promise in JavaScript is used for managing and tackling asynchronous operations.

The Promise returns an object which ensures and represents the completion or failure of asynchronous operations and its output. It is a proxy for a value without knowing the exact output. It is useful for asynchronous actions to provide an eventual success value or failure reason. Thus, the asynchronous methods return the values like a synchronous method.

Generally, the promises have the following three states:

Fulfilled: The fulfilled state is when an applied action has been resolved or completed successfully.
Pending: the Pending state is when the request is in process, and the applied action has neither been resolved nor rejected and is still in its initial state.
Rejected: The rejected state is when the applied action has been rejected, causing the desired operation to fail. The cause of rejection can be anything, including the server being down.
The syntax for the promises:

let newnewPromise = new Promise(function(resolve, reject) {
// asynchronous call is made
//Resolve or reject the data  
});  
Below is an example of writing the promises:

This is an example of writing a promise.

function getArticleData(id) {  
 return new Promise((resolve, reject) => {  
 setTimeout(() => {  
 console.log("Fetching data....");  
 resolve({ id: id, name: "derik" });  
 }, 5000);  
 });  
}  
getArticleData("10").then(res=> console.log(res))  
In the above example, we can see how we can efficiently use the promises to make a request from the server. We can observe that the code readability is increased in the above code than in the callbacks. Promises provide methods like .then() and .catch(), which allow us to handle operation status in the case of success or failure. We can specify the cases for the different states of the promises.

Async/Await in JavaScript
It is another way to avoid the use of nested callbacks. Async/ Await allows us to use the promises much more efficiently. We can avoid using .then() or .catch() method chaining. These methods are also dependent on the callback functions.

Async/Await can be precisely used with Promise to improve the application's performance. It internally resolved the promises and provided the result. Also, again, it is more readable than the () or catch() methods.

We can not use the Async/Await with the normal callback functions. To use it, we must make a function asynchronous by writing an async keyword before the function keyword. However, internally it also uses chaining.

Below is an example of the Async/Await:

async function displayData() {  
 try {  
 const articleData = await getArticle(10);  
 const placeData = await getPlaces(article.name);  
 const cityData = await getCity(place)  
 console.log(city);  
 } catch (err) {  
 console.log("Error: ", err.message);  
 }  
}  
displayData();  
To use the Async/Await the function must be specified with the async keyword, and the await keyword should be written inside the function. The async will stop its execution until the Promise is resolved or rejected. It will be resumed when the Promise is dealt. Once resolved, the value of the await expression will be stored in the variable holding it.

Summary:
In a nutshell, we can avoid nested callbacks by using the promises and async/await. Apart from these, we can follow other approaches, such as writing comments, and splitting the code into separate components can also be helpful. But, nowadays, the developers prefer the use of async/await.

Conclusion:
The callback hell in JavaScript is referred to as a situation where an excessive amount of nested callback functions are being executed. It reduces code readability and maintenance. The callback hell situation typically occurs when dealing with asynchronous request operations, such as making multiple API requests or handling events with complex dependencies.

To better understand the callback hell in JavaScript.

JavaScript considers everything as an object, such as strings, arrays, and functions. Hence, the callback concept allows us to pass the function as an argument to another function. The callback function will complete the execution first, and the parent function will be executed later.

The callback functions are executed asynchronously and allow code to continue running without waiting to complete the asynchronous task.

source : <https://www.javatpoint.com/callback-hell-in-javascript>

<!-- easy words  to understand promise and async/ await -->

<https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/>
