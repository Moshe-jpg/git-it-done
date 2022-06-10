
// How to search for specific parameters within an API:

// create the function with whatever parameter you want, in this case username
var getUserRepos = function(user) {
    // format the github api url and put whatever params you want it to add in the middle of the strings
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url and tell it to format in a certain way, in this case JSON
    fetch(apiUrl).then(function(response) {
        // once it is formatted in JSON...
      response.json().then(function(data) {
        //   console log whatever data is collected so it can be seen
        console.log(data);
      });
    });
  };
//   when calling the function, add the name username you want the browser to fetch the repos of, and VOILA......
  getUserRepos("ukraine");