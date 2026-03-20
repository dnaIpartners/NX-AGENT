import http from 'http';
import fs from 'fs';

const file = fs.createWriteStream("public/asset/ipartners-ci.svg");
http.get("http://prdipa.ipartners.co.kr/images/ipartners-ci.svg", function(response) {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download completed');
  });
});
