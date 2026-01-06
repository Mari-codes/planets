import { useEffect, useRef } from 'react';
import styles from './Starfield.module.scss';

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const stars: { x: number; y: number; size: number; velocity: number; opacity: number }[] = [];
    const numStars = 300;

    const meteors: { x: number; y: number; len: number; speed: number; opacity: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    //estrelas fixs
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2,
        velocity: Math.random() * 0.05 + 0.01,
        opacity: Math.random(),
      });
    }

    const createMeteor = () => {
      meteors.push({
        x: Math.random() * canvas.width + 200,
        y: Math.random() * canvas.height * 0.4, //para comecar no topo
        len: Math.random() * 120 + 80, //tamanho do rastro
        speed: Math.random() * 12 + 8,
        opacity: 1,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //estrelas fixas, desenho
      stars.forEach((star) => {
        ctx.globalAlpha = Math.sin(Date.now() * 0.001 + star.opacity * 10) * 0.5 + 0.5;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y -= star.velocity;
        if (star.y < 0) star.y = canvas.height;
      });

      if (Math.random() < 0.0005 && meteors.length === 0) {
        //probabilidade de surgir um novo meteoro
        createMeteor();
      }

      //meteoros, desenho
      meteors.forEach((m, index) => {
        //gradiente para o rastro
        const gradient = ctx.createLinearGradient(m.x, m.y, m.x + m.len, m.y - m.len);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.globalAlpha = 1;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + m.len, m.y - m.len);
        ctx.stroke();

        m.x -= m.speed;
        m.y += m.speed;
        m.opacity -= 0.005; //para o rastro

        //remove da lista se sair da tela ou se ficar invsivel
        if (m.y > canvas.height || m.x < -m.len || m.opacity <= 0) {
          meteors.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.starfield} />;
};
