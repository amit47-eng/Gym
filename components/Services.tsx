import styles from './Services.module.css';

export default function Services() {
  const servicesData = [
    {
      icon: '🏋️‍♂️',
      title: 'Commercial Setup',
      desc: 'Full-scale gym transformations with premium, high-durability equipment tailored for intense commercial environments.'
    },
    {
      icon: '🛠️',
      title: 'Custom Engineering',
      desc: 'Need specific dimensions? We engineer bespoke rigs and racks that fit your exact spatial and functional requirements.'
    },
    {
      icon: '⚡',
      title: 'Maintenance & Support',
      desc: '24/7 priority support and regular maintenance checks to ensure your equipment is always operating at peak performance.'
    }
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.header}>
        <h2 className={styles.title}>Our <span className={styles.accent}>Services</span></h2>
        <p className={styles.subtitle}>Beyond just equipment. We provide comprehensive solutions to elevate your fitness facility.</p>
      </div>
      
      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
