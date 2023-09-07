# ImageFiderUpslash


Project related to making the search image app.

* First off I get the key from Uplassh it's a URL key to access a URL.

* We get the container by its id from an HTML

* Functionality:-
        - get that search value as empty.
        -and the page well as 1,
        - The function allows it to search an image
        - First of all, we get a value from an input section dynamically.
        - Then in our URL we put that search value dynamically and a key as.
        - Then we fetch the URL using await get the response in JSON format and store it in the data.
        - The data we got is in the array format to get all the data we use a map on the data to get a result.
        - If we are on page 1 and have nothing to search the HTML should be black.
        - than we push all the result elements into to specified section To get that specified section we create an element and give it a class name.
        - Then we applied all the elements to a container.
        -container is append to a main container.
        -and we make the page ++;
        - And if the page is greater than 1 we show some more buttons;
        - Then at last we make an event of submit form and event on click of show more;
        - If we submit the button after searching for something it will get a searching function call.
        - In Show More, it will change page 2 and get add-on data of sechimgfunction


    //This Was a Project of search Images//
