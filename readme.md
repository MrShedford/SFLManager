# This is a Systemic Functional Linguistics Class & Assignment Management tool created by Maynooth University.
## The web application itself was created using the MEAN stack.
##### Written by Seán Comerford   
This requires a good knowledge of Node.js , Angular.js, Express.js and MongoDB is required.
If you're reading this and you have little to no experience developing web applications using Node.js then I highly recommend watching these series on Youtube:
* [Building A MEAN App From Scratch](https://www.youtube.com/watch?v=PFP0oXNNveg&feature=youtu.be)
* [Node.js login System](https://www.youtube.com/watch?v=Z1ktxiqyiLA&t=321s) (This application was built up from this)

## Installation Guide

Coming soon.

## To-Do List

### Authentication:

* When a new user registers (student or teacher), the system should check whether that their username is not already in the database.
    * All usernames in the system must be unique.
    * This just requires a quick MongoDB find for the username they want to use.
    * If it returns with a match, redirect back to the register page and tell them that their username is taken.
    
### Annotation Tool 

* Saving User Created Annotations To MongoDB
    * This is close to being finished but I couldn't figure it out. It uses Mongos update function as well as $addToSet
    * The idea is to have an array of student submissions for each assignment
    * For whatever reasons I was getting a cast error, despite the fact everything being stored was strings.
    * The data is being sent via:
        * **/public/anno/main.js** <br> This is modified from Colm Matthews original code. It takes data from the client and sends it via ajax to Express.
        * **/routes/class.js** <br> This takes in the data sent from the ajax post request and sends that data to Mongoose so it can be stored in MongoDB.
        * **/models/assignments.js** <br> This will perform the MongoDB functions to save to the database. I got to here but wasn't able to finish it off.

* Loading User Saved Attempts To Their Screen
    * This doesn't seem to be too difficult. It'll require a slight modification to **/public/anno/main/js** so rather than waiting for a file to be uploaded via the user, the 