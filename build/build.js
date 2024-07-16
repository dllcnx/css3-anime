/*
 * @Author: DLLCNX dllcnx@foxmail.com
 * @Date: 2024-03-19 10:39:08
 * @LastEditors: DLLCNX dllcnx@foxmail.com
 * @LastEditTime: 2024-07-16 16:54:39
 * @FilePath: /css3-anime/build/build.js
 * @Description: 
 */
// 获取文件目录结构
const fs = require('fs');
const path = require('path');
// 排除目录
const exclude = ['.DS_Store', '.DS_store'];
const deal = {
    // 获取文件目录结构
    getDirTree: function (dir, isStop = false) {
        let tree = [];
        let files = fs.readdirSync(dir);
        files.forEach(function (file) {
            if(exclude.includes(file)) return;
            let stats = fs.statSync(path.join(dir, file));
            if (stats.isFile()) {
                tree.push(file);
            } else if (stats.isDirectory()) {
                const ph = path.join(dir, file)
                let item = {
                    name: file
                }

                if (isStop) {
                    item.url = ph;
                }else{
                    item.children = deal.getDirTree(ph, true);
                }
                tree.push(item);
            }
        });
        return tree;
    }
}
// module.exports = deal;

const tree = deal.getDirTree('anime');


// 要写入的文件路径
const filePath = 'config.js';
// 要写入的内容
const content = `export let config = ${JSON.stringify(tree)}`;

// 使用 fs.writeFile() 方法写入文件
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('写入文件时出错：', err);
    return;
  }
  console.log('文件已成功写入！');
});