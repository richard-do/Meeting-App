# CRUD App

Using https://www.youtube.com/watch?v=7CqJlxBYj-M as a guideline to generate a CRUD application using MERN that utilizes google maps.  Currently I've utilized the format of the schema and forms.

Idea is to generate maps that has markers where groups of people can collaborate regarding events that occur.  It will allow users to create events that will be placed on the map with the details involved.  This can be upscaled to allow for user functionality and to upload maps.  Possibly allow custom markers and/or handle placing markers in a better manner.

Some resources:

Stack Overflow - https://stackoverflow.com

Mongodb Docs - docs.mongodb.com

Google API - https://console.cloud.google.com/apis/dashboard

Geocoder - https://www.npmjs.com/package/react-geocode


## REQUIRED

Replace the API_KEY with your API key from google cloud services for the front end page.  You can get a monthly allowance that allows free usage of the geocoder and map services.  See https://console.cloud.google.com/apis/dashboard.  You'll need to setup your account to allow the geocoder to work as well.

Setup a MongoDB atlas account and setup a .env in the backend folder for the server setup.

It should look like
ATLAS_URI=<INSERT API HERE>

One program I used to check to ensure the RESTful methods were being used properly is via Insomnia, however just about any program that allows you to do that will work.  The requests are currently being handled through port 5000 and can be changed via server.js in the backend.

## OTHER

The free quota from google is limited.  Make sure your key doesn't go public in any way or you'll pay!