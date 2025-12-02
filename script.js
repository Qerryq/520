const inviteCard = document.getElementById('inviteCard');
const cardFront = document.querySelector('.card-front');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// 1. 实现点击翻转功能
cardFront.addEventListener('click', function() {
    // 检查是否已经翻转，防止重复点击
    if (!inviteCard.classList.contains('flipped')) {
        inviteCard.classList.add('flipped');
    }
});

// 2. 确认按钮
yesBtn.addEventListener('click', function() {
    alert('YES! 指令已收到，【Ella小宝贝】已锁定周末行程！邱奕彭，等你来接我哦！💕');
    // 成功后禁用按钮，增加最终感
    yesBtn.disabled = true;
    noBtn.style.display = 'none';
    yesBtn.textContent = '已锁定！甜蜜启动！';
});

// 3. 拒绝/互动按钮 - 抖动特效
let shakeCount = 0;
noBtn.addEventListener('click', function() {
    shakeCount++;
    
    // 增加抖动动画
    noBtn.classList.add('shake-once');
    setTimeout(() => {
        noBtn.classList.remove('shake-once');
    }, 500);

    if (shakeCount < 3) {
        alert('不行！必须先给我一个大大的拥抱！😘 （点击确认吧~）');
    } else if (shakeCount === 3) {
        alert('抱都抱了，还不点“确认”？！');
    } else {
        // 抖动超过3次，强制进入 Yes 流程
        yesBtn.click();
    }
});