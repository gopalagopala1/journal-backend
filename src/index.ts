import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import errorHandler from "./middleware/error";
import notFound from "./middleware/notFound";


dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World");
});

// add routes here 

app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
