$(document).ready(function() {  // 確保 DOM 元素都載入完成後再執行程式

    const $track = $('.slider-track');       // 取得幻燈片的 track 容器
    const $cards = $track.children();        // 取得所有卡片元素
    const perPage = 3;                        // 每頁要顯示的卡片數量
    let index = 0;                            // 當前頁面的索引
    const maxIndex = Math.ceil($cards.length / perPage) - 1; // 計算最大頁數索引
    const cardWidth = $cards.outerWidth(true); //取得每一張卡片的「實際寬度」，並且 包含 margin（外距）

    // 更新幻燈片位置的函式
    function update() {
        cardRange = cardWidth + 50 //計算一個卡+gap:50的距離
        // 使用 CSS transform 移動 track
        // -index * 100% 代表移動到第 index 頁
        $track.css('transform', `translateX(-${index * cardRange * perPage}px)`);
    }

    // 下一頁按鈕事件
    $('#next').on('click', function() {
        // 點下一頁，如果超過最大頁面就回到第一頁
        index = index + 1
        if (index > maxIndex) {
            index = 0
        } 
        update(); // 更新幻燈片位置
    });

    // 上一頁按鈕事件
    $('#prev').on('click', function() {
        // 點上一頁，如果小於 0 就跳到最後一頁
        index = index -1;
        if (index < 0) {
            index = maxIndex
        }
        update(); // 更新幻燈片位置
    });
});
