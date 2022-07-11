import app from './app.js';
import connectDatabase from './config/database.js';

const PORT = process.env.PORT || 3000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is alive on PORT:${PORT}`));
  })
  .catch(error => {
    console.log(error);
  });
