// node 读取csv文件生成二位数组
var path = require('path');
var fs = require('fs');

function buildErrorListJson() {
  function ConvertToTable1(data) {
    console.log(data);
    data = data.toString();
    var table = new Array();
    var rows = new Array();
    rows = data.split("\r\n");
    for (var i = 0; i < rows.length; i++) {
      table.push(rows[i].split(","));
    }
    fs.writeFile(path.join(__dirname, '../../../json/errorlist.json'), JSON.stringify(table), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('success');
      }
    });
  }

  fs.readFile(path.join(__dirname, '../../../file/errorlist.csv'), function (err, data) {
    var table = new Array();
    if (err) {
      console.log(err.stack);
      return;
    }
    ConvertToTable1(data);
  });



  console.log('程序执行完毕buildPCG_dbo_allCountryInfo_manualAdjustment_2Json--errorlist');
}

module.exports = buildErrorListJson;
// node 读取csv文件生成二位数组
var path = require('path');
var fs = require('fs');

function buildPCG_dbo_allCountryInfo_manualAdjustment_2Json() {
  fs.readFile(path.join(__dirname, '../../../file/PCG_dbo_allCountryInfo_manualAdjustment_2.csv'), function (err, data) {
    var table = new Array();
    if (err) {
      console.log(err.stack);
      return;
    }

    ConvertToTable2(data);
  });

  function ConvertToTable2(data) {
    data = data.toString();
    var table = new Array();
    var rows = new Array();
    rows = data.split("\r\n");
    for (var i = 0; i < rows.length; i++) {
      table.push(rows[i].split(","));
    }
    fs.writeFile(path.join(__dirname, '../../../json/PCG_dbo_allCountryInfo_manualAdjustment_2.json'), JSON.stringify(table), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('success');
      }
    });
  }

  console.log('程序执行完毕buildPCG_dbo_allCountryInfo_manualAdjustment_2Json----PCG_dbo_allCountryInfo_manualAdjustment_2');
}

module.exports = buildPCG_dbo_allCountryInfo_manualAdjustment_2Json;
// 根据文件夹目录生成嵌套的json对象
var path = require('path');
var fs = require('fs');

function fsReadFileToJson() {
  // 获取指定路径 path 下的，默认深度为 3 的目录 JSON
  function getIndexByPath2(dir, deep = 10) {
    let dirDevide = dir.split('/');
    let preDir = dirDevide.splice(0, dirDevide.length - 1).join('/');
    let index = {};

    getIndexOfPathByDeep2(index, path.join(__dirname, preDir), dirDevide[0], deep + 1);
    return index;
  }

  // 开始对指定 path 递归查找深度为 deep 深度
  function getIndexOfPathByDeep2(obj, dir, curDir, deep) {
    let curPath = path.join(dir, curDir);
    // 达到搜索深度，停止
    // if (deep) {
    obj[curDir] = curDir;
    if (fs.statSync(curPath).isDirectory()) {
      obj[curDir] = {};
      let lists = fs.readdirSync(curPath);
      lists.forEach(list => getIndexOfPathByDeep2(obj[curDir], curPath, list, deep - 1))
    }
    // }
  }

  fs.writeFileSync(path.join(__dirname, '../../../json/catalog.json'), JSON.stringify(getIndexByPath2('../../../markdown')));

  console.log('程序执行完毕fsReadFileToJson。');
}

module.exports = fsReadFileToJson;
// 生成同级的json数组对象
var path = require('path');
var fs = require('fs');

function fsReadFileToJson2() {
  // 获取指定路径 path 下的，默认深度为 3 的目录 JSON
  function getIndexByPath(dir, deep = 10) {
    let dirDevide = dir.split('/');
    let preDir = dirDevide.splice(0, dirDevide.length - 1).join('/');
    let index = {};
    let arr = [];
    getIndexOfPathByDeep(index, path.join(__dirname, preDir), dirDevide[0], deep + 1, arr);
    return arr;
  }


  // 开始对指定 path 递归查找深度为 deep 深度
  function getIndexOfPathByDeep(obj, dir, curDir, deep, arr) {

    // 存储需要的目录文件字段----具体需要的字段根据具体使用自行添加，详细字段见使用方式即sidebar.component.ts文件--------start
    obj = {};
    obj["id"] = curDir;
    const parentId = dir.split('\\').length == 1 ? dir.split('/') : dir.split('\\');
    // console.log(parentId);
    obj["parentId"] = parentId[parentId.length - 1] === 'assets' || parentId[parentId.length - 1] === 'markdown' ? '' : parentId[parentId.length - 1]; // 不需要顶层目录，如果顶层目录是assets或markdown则过滤掉。
    obj['pageOption'] = [];
    obj['text'] = curDir;
    obj['isShow'] = false;
    obj['title'] = curDir;
    obj['isCurCatalog'] = false;
    // 存储需要的目录文件字段----具体需要的字段根据具体使用自行添加，详细字段见使用方式即sidebar.component.ts文件--------end


    let curPath = path.join(dir, curDir);
    let newkey = null;
    // 判断当前是文件夹
    if (fs.statSync(curPath).isDirectory()) {
      newkey = null;
      obj['isHasChild'] = true; // 如果当前是文件夹，则设置为true，不管是否是真的有子集
      let lists = fs.readdirSync(curPath);
      lists.forEach(list => getIndexOfPathByDeep(obj[curDir], curPath, list, deep - 1, arr))
    } else {
      // 当前不是文件夹，当前是文件
      let key = curDir.split('.');
      newkey = key.pop();
      obj[key + ''] = curPath;

      // 存储当前的text和title名称和type类型，本字段均生成的是markdown文件------------start
      obj['text'] = (key + '');
      obj['title'] = (key + '');
      const obj2 = {};
      const mdSrc = curPath.split('\\assets\\').length === 1 ? curPath.split('/assets/')[1] : curPath.split('\\assets\\')[1];

      if (newkey && (newkey.includes('png') || newkey.includes('jpg') || newkey.includes('jpeg') || newkey.includes('gif'))) {
        obj2['type'] = 'img';
        obj2['imgSrc'] = ('/assets/' + mdSrc).replace(/\\|\//gi, '/');

      } else if (newkey && newkey == 'md') {
        obj2['type'] = 'md';
        obj2['mdSrc'] = ('/assets/' + mdSrc).replace(/\\|\//gi, '/');
      }

      obj2['mdStyle'] = {};

      obj['pageOption'].push(obj2);

      // 存储当前的text和title名称和type类型，本字段均生成的是markdown文件------------end
    }

    // 转成json后markdown是顶层目录，过滤掉，其他的同级显示
    if (obj['id'] !== 'markdown') {
      if (!newkey || newkey && (newkey == 'png' || newkey == 'jpg' || newkey == 'jpeg' || newkey == 'gif' || newkey == 'md')) {
        arr.push(obj);
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, '../../../json/markdownCatalog.json'), JSON.stringify(getIndexByPath('../../../markdown')));
  console.log('程序执行完毕fsReadFileToJson2。');
}

module.exports = fsReadFileToJson2;
