const express = require('express');
const path = require('path');

const app = express();

// 设置静态文件夹
const staticFolderPath = path.join(__dirname);

// 配置 /ketcher 路径
app.use('/ketcher', express.static(path.join(staticFolderPath, '/ketcher'), {
    index: 'index.html'
}));

// 配置其他未匹配的路径，返回index.html或viewer.html
app.use('/ketcher', (req, res) => {
    res.sendFile(path.join(staticFolderPath, '/ketcketcher-2.4.1/example/dist/ketcherher', 'index.html'));
});

const PORT = 1023;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
