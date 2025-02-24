import express from 'express';
import stocksRouter from "./routes/stocks";
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/stocks', stocksRouter);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
