import styles from './Trainers.module.css';

export default function Trainers() {
  const trainers = [
    {
      name: "Marcus Thorne",
      role: "Head Strength Coach",
      quote: "True strength isn't just about what you can lift—it's about the discipline to show up every day.",
      image: "/trainer_marcus.png"
    },
    {
      name: "Sarah Jenkins",
      role: "Performance Specialist",
      quote: "We don't just build bodies; we forge mindsets resilient enough to conquer any challenge.",
      image: "/trainer_sarah.png"
    },
    {
      name: "David Chen",
      role: "Hypertrophy Expert",
      quote: "Master the basics, trust the science, and let the results speak for themselves.",
      image: "/trainer_david.png"
    }
  ];


  return (
    <section className={styles.trainersSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Expert <span className={styles.accent}>Guidance</span></h2>
          <p className={styles.subtitle}>
            Train with elite professionals who understand the science of muscle 
            building and the art of transformation.
          </p>
        </div>

        <div className={styles.grid}>
          {trainers.map((trainer, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className={styles.trainerImage}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quote}>{trainer.quote}</p>
                <div className={styles.profile}>
                  <h3 className={styles.name}>{trainer.name}</h3>
                  <span className={styles.role}>{trainer.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
