// 获取按钮和邀请函元素
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const inviteCard = document.querySelector('.invite-card');

// 1. 确认按钮
yesBtn.addEventListener('click', function() {
    alert('指令已确认！周末甜蜜约会系统正式启动！鱼酷，我们来啦！🥳');
    // 可添加更多动画，比如变色
    inviteCard.style.boxShadow = '0 0 60px #ff00ff';
});

// 2. 取消按钮 - 抖动特效（模拟系统错误/拒绝无效）
let shakeAttempts = 0;
noBtn.addEventListener('click', function() {
    shakeAttempts++;
    
    // 给邀请函添加抖动类名
    inviteCard.classList.add('shake');
    
    // 移除抖动类名，以便下次能再次触发
    setTimeout(() => {
        inviteCard.classList.remove('shake');
    }, 500); // 抖动持续时间

    if (shakeAttempts < 3) {
         alert('警告：[取消指令] 无效！请重新确认：YES！');
    } else {
        alert('系统锁定！请乖乖点击 [确认 (YES!)] 按钮！');
        noBtn.disabled = true; // 拒绝三次后禁用
        noBtn.textContent = '已锁定!';
    }
});

// ********** 在 style.css 中添加 shake 动画 **********

/* @keyframes shake {
  0% { transform: translate(1px, 1px) rotate(10deg) rotateX(10deg) rotateY(-5deg) translateZ(50px); }
  25% { transform: translate(-1px, -2px) rotate(10deg) rotateX(10deg) rotateY(-5deg) translateZ(50px); }
  50% { transform: translate(-3px, 0px) rotate(10deg) rotateX(10deg) rotateY(-5deg) translateZ(50px); }
  75% { transform: translate(1px, -1px) rotate(10deg) rotateX(10deg) rotateY(-5deg) translateZ(50px); }
  100% { transform: translate(1px, 2px) rotate(10deg) rotateX(10deg) rotateY(-5deg) translateZ(50px); }
}

.shake {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
    transform: rotate(10deg) rotateX(10deg) rotateY(-5deg) translateZ(50px); // 保持基础的3D变换
}
*/
// ----------------------------------------------------