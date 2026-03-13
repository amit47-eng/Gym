'use client';

import { useState } from 'react';
import styles from './Membership.module.css';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 29, annual: 19 },
    icon: '⚡',
    color: 'blue',
    description: 'Perfect for individuals starting their fitness journey.',
    features: [
      'Access to all cardio equipment',
      'Locker room & shower access',
      '2 group classes per month',
      'Basic fitness assessment',
      'Mobile app access',
    ],
    missing: ['Personal trainer sessions', 'Nutrition consultation', 'Premium equipment zones'],
  },
  {
    name: 'Elite',
    price: { monthly: 79, annual: 59 },
    icon: '🔥',
    color: 'orange',
    description: 'The most popular choice for serious athletes.',
    features: [
      'Full gym access 24/7',
      'Unlimited group classes',
      '4 personal trainer sessions/mo',
      'Advanced fitness assessment',
      'Nutrition consultation',
      'Premium equipment zones',
      'Guest passes (2/month)',
      'Mobile app with custom plans',
    ],
    missing: [],
    popular: true,
  },
  {
    name: 'Titan',
    price: { monthly: 149, annual: 109 },
    icon: '👑',
    color: 'gold',
    description: 'The ultimate experience for peak performers.',
    features: [
      'Everything in Elite',
      'Unlimited PT sessions',
      'Private training suite access',
      'Monthly body composition scan',
      'Dedicated performance coach',
      'Exclusive recovery lounge',
      'Unlimited guest passes',
      'Priority equipment booking',
      'Quarterly health review',
    ],
    missing: [],
  },
];

export default function Membership() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className={styles.section} id="membership">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Membership Plans</span>
          <h2 className={styles.title}>Invest In Your <span className={styles.accent}>Potential</span></h2>
          <p className={styles.subtitle}>
            Flexible plans designed to match your ambition. No hidden fees, no contracts.
          </p>

          {/* Billing Toggle */}
          <div className={styles.toggle}>
            <span className={billing === 'monthly' ? styles.toggleActive : styles.toggleInactive}>Monthly</span>
            <button
              className={styles.toggleSwitch}
              onClick={() => setBilling(b => b === 'monthly' ? 'annual' : 'monthly')}
              aria-label="Toggle billing period"
            >
              <span className={`${styles.toggleThumb} ${billing === 'annual' ? styles.thumbRight : ''}`}></span>
            </button>
            <span className={billing === 'annual' ? styles.toggleActive : styles.toggleInactive}>
              Annual <span className={styles.saveBadge}>Save 25%</span>
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className={styles.grid}>
          {plans.map(plan => (
            <div key={plan.name} className={`${styles.card} ${plan.popular ? styles.popularCard : ''}`}>
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}

              <div className={styles.planHeader}>
                <span className={styles.planIcon}>{plan.icon}</span>
                <div>
                  <h3 className={`${styles.planName} ${styles[`color_${plan.color}`]}`}>{plan.name}</h3>
                  <p className={styles.planDesc}>{plan.description}</p>
                </div>
              </div>

              <div className={styles.priceBlock}>
                <span className={styles.currency}>$</span>
                <span className={styles.price}>{plan.price[billing]}</span>
                <span className={styles.period}>/mo</span>
              </div>
              {billing === 'annual' && (
                <p className={styles.annualNote}>Billed as ${plan.price.annual * 12}/year</p>
              )}

              <ul className={styles.features}>
                {plan.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.checkIcon}>✓</span> {f}
                  </li>
                ))}
                {plan.missing.map(f => (
                  <li key={f} className={`${styles.feature} ${styles.missingFeature}`}>
                    <span className={styles.crossIcon}>✕</span> {f}
                  </li>
                ))}
              </ul>

              <button className={`${styles.joinBtn} ${plan.popular ? styles.joinBtnPopular : ''}`}>
                Get {plan.name} Plan
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className={styles.note}>
          🔒 All plans include a <strong>7-day free trial</strong>. Cancel anytime, no questions asked.
        </p>
      </div>
    </section>
  );
}
