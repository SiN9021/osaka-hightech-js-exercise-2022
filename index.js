// 初期化処理（すべてのピースをランダムに配置する）
for(let n = 1; n <= 16; n = n + 1){
    const piece = document.querySelector('.pos-' + n);
    piece.style.order = parseInt(Math.random() * 16) + 1;
}

// ピースがクリックしたときに実行する処理（関数）
function pieceClickHandler(){
    console.log('ピースがクリックされました');
}

// 1番ピースのクリックを監視し、クリックされたらpieceClickHandlerを呼ぶ
for(let n = 1; n <= 15; n = n + 1){
    const piece = document.querySelector('.pos-' + n);
    piece.addEventListener('click', pieceClickHandler);
}
