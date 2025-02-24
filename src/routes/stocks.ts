import {Router} from "express";

const stocksRouter = Router();

stocksRouter.get("/:name/monthlyPriceHistory", (req, res) => {
  const name = req.params.name;

  const stock = availableStocks.find(
    stock => stock.name === name
  );

  if (stock) {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(stock));
  } else {
    res.status(404).send("Stock not found");
  }
});

const availableStocks = [
  {
    name: 'AAPL',
    displayName: 'AAPL (Apple)',
    monthPrices: [
      { month: 5, price: 132.5 },
      { month: 6, price: 130.5 },
      { month: 7, price: 135.5 },
      { month: 8, price: 140.5 },
      { month: 9, price: 145.5 },
      { month: 10, price: 150.5 },
      { month: 11, price: 155.5 },
      { month: 12, price: 160.5 },
      { month: 1, price: 165.5 },
      { month: 2, price: 170.5 },
      { month: 3, price: 175.5 },
      { month: 4, price: 180.5 },
    ],
  },
  {
    name: 'GOOGL',
    diaplayName: 'GOOGL (Alphabet)',
    monthPrices: [
      { month: 5, price: 232.5 },
      { month: 6, price: 230.5 },
      { month: 7, price: 235.5 },
      { month: 8, price: 240.5 },
      { month: 9, price: 245.5 },
      { month: 10, price: 250.5 },
      { month: 11, price: 255.5 },
      { month: 12, price: 260.5 },
      { month: 1, price: 265.5 },
      { month: 2, price: 270.5 },
      { month: 3, price: 275.5 },
      { month: 4, price: 280.5 },
    ],
  },
  {
    name: 'MSFT',
    displayName: 'MSFT (Microsoft)',
    monthPrices: [
      { month: 5, price: 332.5 },
      { month: 6, price: 330.5 },
      { month: 7, price: 335.5 },
      { month: 8, price: 340.5 },
      { month: 9, price: 345.5 },
      { month: 10, price: 350.5 },
      { month: 11, price: 355.5 },
      { month: 12, price: 360.5 },
      { month: 1, price: 365.5 },
      { month: 2, price: 370.5 },
      { month: 3, price: 375.5 },
      { month: 4, price: 380.5 },
    ],
  },
];

export default stocksRouter;
