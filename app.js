const express = require('express'); //เรียกใช้ express ผ่าน require
const path = require('path');
const myApp = express(); //สร้างตัวแปร myApp เพื่อใช้งาน express 
const port = 3000; //พอร์ตของ Server ที่ใช้ในการเปิด Localhost 


myApp.use(express.static(path.join(__dirname, 'templates')));

myApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
  });

myApp.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});