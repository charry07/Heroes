import axios from 'axios';
import { createServer } from 'http';
import fs from 'fs';


createServer((req, res) => {
  const key = '70ca0864c538795255e6947adec088479e4ad64f';
  const url = `https://comicvine.gamespot.com/api/characters/?api_key=${key}&limit=100&filter=publisher:3045-14&sort=popularity:desc&format=json`;
  axios
    .get(url)
    .then((response) => {
      res.end(JSON.stringify(response.data));
      const jsonContent = JSON.stringify(response.data);
      
      fs.writeFile('./heroes.json', jsonContent, 'utf8', function (err) {
        if (err) {
          return console.log(err);
        }
        console.log('The file was saved!');
        // const data = JSON.parse(fs.readFileSync('pagesAllFields.json', 'utf-8'));
      });
    })
    .catch((error) => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
}).listen(3000);
