import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHiding(true), 1800);
    const removeTimer = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash ${hiding ? 'splash--hide' : ''}`} aria-hidden="true">
      <div className="splash-logo">
        LB<span>.</span>
      </div>
      <div className="splash-bar" />
    </div>
  );
}
