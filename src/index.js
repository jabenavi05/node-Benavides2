import app from "./app";
import './database';

app.listen(app.get("4000"));

console.log("Server on port", app.get('4000'));
