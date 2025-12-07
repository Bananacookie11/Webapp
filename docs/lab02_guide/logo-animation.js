// logo-animation.js

// 1. SETUP CANVAS
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');

// ทำให้ขนาดภายในของ canvas คมชัดขึ้น (High DPI rendering)
const dpr = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
canvas.width = 300 * dpr;   // กำหนดค่าโดยตรง
canvas.height = 120 * dpr;  // กำหนดค่าโดยตรง

// 2. GLOBAL SETTINGS
const settings = {
    // ...
    kkuColor: '#FFFFFF', // เปลี่ยนเป็นสีขาว
    connectionColor: '#FFC107' // สีเหลืองยังคงโดดเด่นบนพื้นหลังแดง
};

let particles = [];

// 3. PARTICLE CLASS (ต้นแบบของอนุภาค)
class Particle {
    constructor() {
        this.x = Math.random() * canvas.clientWidth;
        this.y = Math.random() * canvas.clientHeight;
        this.vx = (Math.random() - 0.5) * settings.particleSpeed; // ความเร็วแนวแกน X
        this.vy = (Math.random() - 0.5) * settings.particleSpeed; // ความเร็วแนวแกน Y
        this.radius = 1.5;
    }

    // อัปเดตตำแหน่ง
    update() {
        this.x += this.vx;
        this.y += this.vy;

        // ทำให้กลับเข้ามาในจอเมื่อชนขอบ
        if (this.x < 0 || this.x > canvas.clientWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.clientHeight) this.vy *= -1;
    }

    // วาดอนุภาค
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = settings.kkuColor;
        ctx.fill();
    }
}

// 4. FUNCTIONS
// ฟังก์ชันสำหรับสร้างอนุภาคเริ่มต้น
function createParticles() {
    for (let i = 0; i < settings.particleCount; i++) {
        particles.push(new Particle());
    }
}

// ฟังก์ชันสำหรับวาดเส้นเชื่อมต่อ
function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < settings.connectionDistance) {
                ctx.beginPath();
                ctx.strokeStyle = settings.connectionColor;
                // ทำให้เส้นจางลงเมื่ออยู่ไกลออกไป
                ctx.globalAlpha = 1 - (distance / settings.connectionDistance);
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    ctx.globalAlpha = 1; // รีเซ็ตค่าความโปร่งใส
}

// ฟังก์ชันสำหรับวาดตัวอักษร "KKU"
function drawText() {
    ctx.font = 'bold 80px sans-serif'; // ใช้ฟอนต์ที่หนาและอ่านง่าย
    ctx.fillStyle = settings.kkuColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('KKU', canvas.clientWidth / 2, canvas.clientHeight / 2);
}

// 5. ANIMATION LOOP (หัวใจของการเคลื่อนไหว)
function animate() {
    // ล้าง Canvas ทั้งหมดในทุกเฟรม
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ทำให้ตัวอักษร "KKU" กลายเป็น "Mask" (หน้ากาก)
    // ส่วนที่จะวาดต่อไป จะแสดงผลเฉพาะในพื้นที่ของตัวอักษรเท่านั้น
    drawText();
    ctx.globalCompositeOperation = 'source-in';

    // อัปเดตและวาดอนุภาค
    particles.forEach(p => {
        p.update();
        p.draw();
    });

    // วาดเส้นเชื่อมต่อ
    drawConnections();

    // รีเซ็ต Composite Operation เพื่อให้เฟรมถัดไปทำงานปกติ
    ctx.globalCompositeOperation = 'source-over';
    
    // เรียกใช้ฟังก์ชัน animate() อีกครั้งในเฟรมถัดไป
    requestAnimationFrame(animate);
}

// 6. START THE ENGINE
createParticles();
animate();

// Bonus: ทำให้ animation รีเซ็ตเมื่อคลิก
canvas.addEventListener('click', () => {
    particles = [];
    createParticles();
});