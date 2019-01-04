
```
使用jquery中attr设置input中checked无效，需要使用prop
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    div {
      position: relative;
      line-height: 30px;
    }

    input[type="radio"] {
      width: 20px;
      height: 20px;
      opacity: 0;
    }

    label {
      position: absolute;
      left: 5px;
      top: 3px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #999;
    }

    /*设置选中的input的样式*/

    /* + 是兄弟选择器,获取选中后的label元素*/

    input:checked+label {
      background-color: #fe6d32;
      border: 1px solid #fe6d32;
    }

    input:checked+label::after {
      position: absolute;
      content: "";
      width: 5px;
      height: 10px;
      top: 3px;
      left: 6px;
      border: 2px solid #fff;
      border-top: none;
      border-left: none;
      transform: rotate(45deg)
    }

  </style>
</head>

<body>
  <form>
    <div>
      <input id="item1" type="radio" name="item" value="选项一" checked>
      <label for="item1"></label>
      <span>选项一</span>
    </div>
    <div>
      <input id="item2" type="radio" name="item" value="选项二">
      <label for="item2"></label>
      <span>选项二</span>
    </div>
  </form>
</body>

</html>
```
