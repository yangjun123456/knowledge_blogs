> css多行文本垂直居中

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>css居中对齐</title>
    <style>  
        *{padding: 0;margin:0;font-size: 12px;}  
        div{display: table-cell;width: 200px;height:150px;border:1px solid blue;vertical-align: middle;}  
    </style>
    <div>  
        <span>测试文字测试文字</span>  
    </div>  
    <div>  
        测试文字测试文字  
    </div>  
    <div>  
        <p>测试文字测试文字</p>
        <p>测试文字测试文字</p>
    </div>  
</body>
</html>
```