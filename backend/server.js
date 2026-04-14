import app from "./src/app.js";
import conntectDB from "./src/config/database.js";

conntectDB();

app.listen(3000, ()=> {
    console.log(`app start on post: 3000`);
    
})