import chalk from 'chalk';
import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(
    chalk.bold.yellowBright`Server is running on http://localhost:${PORT}`));
