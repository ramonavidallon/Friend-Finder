<h1> Friend Finder </h1>

<h2> Logic </h2>
<ul>
  <li> The objective of this application is to find the most compatible "Rich Tech Friend" that you will match with depending on the outcome of the questions answered </li>
  <li> First there are two information sections that will require you to fill out your name and insert a link to a picture </li>
  <li> Once the your name and link to a picture is populated, the user will then take a quick test of 10 questions that will determine which Rich Tech Friend they are most compatible with </li>
  <li> When the test is done, there will be a modal that will populate on the screen showing the viewer which wealthy tech person they got </li>
  <li> If their score doesn't fit anyone that is included in the "friendsArr" (array of rich friends), then the picture and name that they inputed will populate. </li>
 </ul>
 
 <h2> Technologies Used </h2>
 <ul>
  <li> Javascript </li>
  <li> jQuery </li>
  <li> node.js </li>
  <li> NPM Packages: express, body-parser, path </li>
  <li> HTML </li>
  <li> Bootstrap </li>
  </ul>
  
  <h2> Link to Application </h2>
  <ul>
  <li> https://intense-sierra-71293.herokuapp.com/ </li>
  </ul>
  
  <h2> Code Rundown </h2>
  <ul>
  <li> Our <code>server.js</code> file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized </li>
  <li> For this application there are are two  HTML files created: <code>home.html</code> and <code>survery.html</code>. These two pages will serve as the front end portion of our code/application </li>
  <li> Along with the two HTML files, we also will have two routing files which will be named: <code>htmlRoutes.js</code> and <code> apiRoutes.js</code>. These routes will determine the backend logic based on the request being made. </li>
  <li> The code determines the best match by calculating and finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object </li>
  <li> Our rich friends will be stored as an array in our <code>friends.js</code> file. This will serve as our API which will then be exported. The example of the array is displayed below: </li>
  </ul>
  <img width="883" alt="friendsJS screenshot for readme" src="https://user-images.githubusercontent.com/43662571/58275810-cbb1f480-7d4a-11e9-9429-72fe58b16eae.png">

    
   
