<h1 align="center"> 🎬 Movie Website 🎬</h1>

<h2 align="center"> Find all the information about your favorite movies </h2>
<br>

# Sample Code
![sample_code(1)](https://user-images.githubusercontent.com/85640313/154518681-2869352b-72ab-424d-8d91-9857471e6eb8.png)

Let's break this code into parts to understand it. <br>
Here we have a functional component called <code>MoviesGrid</code> mainly in charge of displaying all the movie cards, however when it reached the end of the page it didn't show any more movies, so I implemented an **infinite scroll** to solve this problem in **line 31** that returns the length of the data after reaching the bottom. 
<br>
Also very important is the search route, which starts on **line 19**. At first I wanted to show only movies but I went a step ahead and implemented a search bar. 
The page had an infinite scroll but users didn't have a search tool to give them what they wanted to see. 
<br>
I used the UseEffect hook and wrote a function as an argument. This function is executed by default when the component is rendered for the first time, and then each time the component is updated. I also specified when it should be executed with the optional "search" and "page" parameters. Inside it captures the value in the search and is used to search for movies, this is an effect waiting for changes in the search and if there is one it executes the search and modifies the path.
In the **lines 22 and 23** ternary operators are used to evaluate a condition, this is if "searchUrl" is empty <code>"/discover/movie?page="</code> it will bring movies in trend and if you make a search then it will give you the movies that coincide with that search condition <code>"/search/movie?query="</code>
<br>

# Technology

* **React** 
* **Javascript** 
* **CSS** 
* **HTML**
* **Git**
