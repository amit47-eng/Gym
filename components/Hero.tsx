'use client';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Forge Your <span className={styles.accent}>Legacy</span>
        </h1>
        <p className={styles.subtitle}>
          Unlock your true potential with IronCore's commercial-grade setups. Engineered for durability, performance, and aesthetic dominance.
        </p>
        
        <div className={styles.actions}>
          <button className={styles.primaryBtn}>Explore Gear</button>
          <button className={styles.secondaryBtn}>View Services</button>
        </div>
      </div>
      
      <div className={styles.imageWrapper}>
        <div className={styles.decorativeElement}></div>
        {/* Placeholder image for development, replace with real asset or ai generated one later */}
        <img 
          src="/hero_athlete.png" 
          alt="Fitness Athlete with Equipment" 
          className={styles.image}
        />

      </div>
    </section>
  );
}
