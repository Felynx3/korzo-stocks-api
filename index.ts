import express from 'express';
import stocksRouter from "./src/routes/stocks";
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/stocks', stocksRouter);

app.listen(3001, () => {
    console.log("Server started on port 3001");
});

export default app;
