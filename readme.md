# Daily fun tasks:

This project is a personal daily task manager created for fun. 
It supports:
1) Encrypted login/register for each user(bcrypt hash and salt password).
   After logged in, generate a token and save it to the local storage.
2) Task lookup(angular pipe filter).
3) Task edition, deletion and insertion by sending http put, delete, post request in authservice.
4) Auto update the task list(fast response).

This project utilizes the MEAN stack: MongoDB(mLab), Express, Angular5, and NodeJS

## Run the Project!
To run the project, you have to first clone it:
```
$ git clone https://github.com/stevedang125/angular5nodejs.git
```

After cloning, make sure you have Nodejs and Angular5 installed, cd into the project directory.
```
$ cd angular5_nodejs
```

Run the project!
```
$ npm install
then
$ npm start
or 
$ node server.js
$ nodemon server.js
```
Or:(this is what the npm start will do)
```
$ npm install
$ cd frontend && npm install && ng build
$ cd ..
$ node server.js
```
If all is successful, it should be available at your `localhost` on `port 9090` (`http://localhost:9090/`).

## Check it out in my "demo" folder :)


