import express from "express"
import cors from "cors"
const app = express();

app.use(express.json());

app.use(cors({
  credentials:true,
  origin: ['http://localhost:3000'],
}));

app.get('/', (req, res) => {
  res.send('Node Project Initilize!');
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});