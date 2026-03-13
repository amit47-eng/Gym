'use client';

import { useState } from 'react';
import styles from './KnowMore.module.css';

export default function KnowMore() {
  const [activePart, setActivePart] = useState<string | null>(null);

  const bodyParts = [
    { id: 'shoulders', label: 'Shoulders', description: 'Build broad, powerful deltoids for that classic V-taper physique.' },
    { id: 'arms', label: 'Arms', description: 'Targeted hypertrophy for triceps and biceps to achieve maximum peak and thickness.' },
    { id: 'core', label: 'Core', description: 'Develop functional stability and a shredded midsection through compound movements.' },
    { id: 'legs', label: 'Legs', description: 'The foundation of strength. Explosive power and aesthetic muscle development.' },
  ];

  return (
    <section className={styles.section} id="know-more">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Know <span className={styles.accent}>More</span></h2>
          <p className={styles.subtitle}>
            Hover over the targeted muscle groups to see how IronCore's training philosophies transform your body.
          </p>

          <div className={styles.controls}>
            {bodyParts.map((part) => (
              <div 
                key={part.id} 
                className={`${styles.partItem} ${activePart === part.id ? styles.active : ''}`}
                onMouseEnter={() => setActivePart(part.id)}
                onMouseLeave={() => setActivePart(null)}
              >
                <h3 className={styles.partLabel}>{part.label}</h3>
                <p className={styles.partDesc}>{part.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.imageContainer} ${activePart ? styles.imageUp : ''}`}>
            <img 
              src="/female_athlete_pose.png" 
              alt="Female Athlete" 
              className={styles.image}
            />
            {/* Pulsing hotspots on the image */}
            <div className={`${styles.hotspot} ${styles.shouldersSpot} ${activePart === 'shoulders' ? styles.pulse : ''}`}></div>
            <div className={`${styles.hotspot} ${styles.armsSpot} ${activePart === 'arms' ? styles.pulse : ''}`}></div>
            <div className={`${styles.hotspot} ${styles.coreSpot} ${activePart === 'core' ? styles.pulse : ''}`}></div>
            <div className={`${styles.hotspot} ${styles.legsSpot} ${activePart === 'legs' ? styles.pulse : ''}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
