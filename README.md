### Known issues
Issue with ng2-translate (resolved with latest version)

ionic-storage : es5 build is failing - https://github.com/driftyco/ionic-storage/issues/18

You can use localforageSQLStorage instead


### Fuse-box + Ionic2
This is an ionic2 app that uses fusebox. it also loads in an external module as a string.


#### Setup & run 
* `npm install`
* `npm start`

#### External module

In the app.component we load 2 external modules from an array and trigger a simple method using FuseBox
