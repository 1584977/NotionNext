<script>
        document.onmousemove = function (e) {
            // 加div节点
            var div = document.createElement('div');
            div.style.width = '5px';
            div.style.height = '5px';
            // 加img节点
            var img = document.createElement('img');
            // 将Img追加到div里面。
            div.appendChild(img);
            img.src = './1.jpg';
            img.style.width = '5px';
            // 给盒子设置定位，后面更改坐标位置的时候需要用
            div.style.position = 'absolute';
            // 追加div
            document.body.appendChild(div);
            // 通过事件对象获得盒子的坐标。
            var x = e.clientX;
            var y = e.clientY;
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.transition = 'all 1s ease'
 
            // 设置多个小方块（停几秒。让小块放大一下，向上，向左右任意移动）
 
            setTimeout(function () {
                // 设置小方块放大
                div.style.transform = 'scale(3)';
                // 让坐标加上一个随机数将小方块的坐标进行更改
                div.style.left = x + Math.floor(Math.random() * (401)) - 200 + 'px';
                div.style.top = y + Math.floor(Math.random() * (101)) - 100 + 'px';
            }, 100);
 
            setTimeout(function () {
                document.body.removeChild(div)
            }, 1000);
 
        }
    </script>
