
"use strict";

const ChatController = require('../app/controllers/http/ChatController');

const {destroy,index,store,show,edit,update} = new ChatController;

/*
|--------------------------------------------------------------------------
| User Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register users routes for your application. These
| routes are first mounted to the Router (see Router Class in /src/Router.js)
| and then to the  App (See  App Class in /src/App.js)
| Now create something great!
|
*/
module.exports = app => {
    
    app.delete("/chats/:id", destroy);
    app.get("/chats", index);
    app.post("/chats", store);
    app.get("/chats/:id", show);
    app.put("/chats/:id", edit);
    app.post("/chats/:id", update);

}
