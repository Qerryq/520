particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80, // 粒子数量
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ff69b4" // 粒子的颜色：粉色
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
      }
    },
    "size": {
      "value": 5,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff69b4", // 连线的颜色
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // 鼠标经过粒子会散开
      },
    }
  },
  "retina_detect": true
});


// 2. 按钮点击事件逻辑
document.getElementById('yes-btn').addEventListener('click', function() {
    alert('太棒了！全世界我最爱你了！我们在一起啦！🎉');
    // 你可以添加更炫酷的动画，比如全屏 confetti 效果
});

// 让 "拒绝" 按钮变得“难点”
document.getElementById('no-btn').addEventListener('mouseover', function() {
    const noBtn = document.getElementById('no-btn');
    // 随机移动 "拒绝" 按钮的位置
    const x = Math.random() * 80; // 0% 到 80% 宽度
    const y = Math.random() * 80; // 0% 到 80% 高度
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}vw`;
    noBtn.style.top = `${y}vh`;
    noBtn.textContent = '抓不到我！'; // 改变文字增加趣味性
    noBtn.style.zIndex = 100; // 确保它在最上层
});

document.getElementById('no-btn').addEventListener('click', function() {
    alert('别闹了，快点点“我愿意”！😜');
    // 点击后恢复位置
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = 'static';
    noBtn.textContent = '让我想想 (NO)';
});