'use client';

import { useState } from 'react';
import styles from './Products.module.css';

const products = [
  {
    id: 1,
    name: 'Zeus Pro Barbell',
    category: 'Free Weights',
    price: 349,
    originalPrice: 449,
    tag: 'Best Seller',
    tagColor: 'orange',
    image: '/product_barbell.png',
    description: '20kg Olympic barbell with quad-bearing sleeves. 215,000 PSI tensile strength steel.',
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Titan Cable Crossover',
    category: 'Machines',
    price: 2199,
    originalPrice: 2799,
    tag: 'Premium',
    tagColor: 'blue',
    image: '/product_cable_machine.png',
    description: 'Dual 200lb weight stacks, 180° adjustable pulleys, commercial-grade steel frame.',
    rating: 4.8,
    reviews: 74,
  },
  {
    id: 3,
    name: 'Fortress Power Rack',
    category: 'Racks',
    price: 1499,
    originalPrice: 1799,
    tag: 'Top Rated',
    tagColor: 'green',
    image: '/product_power_rack.png',
    description: '3×3" 11-gauge steel uprights, 1000lb rated, walk-in design with multi-grip pull-up bar.',
    rating: 5.0,
    reviews: 56,
  },
  {
    id: 4,
    name: 'Elite Hex Dumbbell Set',
    category: 'Free Weights',
    price: 899,
    originalPrice: 1099,
    tag: 'New Arrival',
    tagColor: 'purple',
    image: '/product_dumbbells.png',
    description: 'Complete 5–50lb rubber hex dumbbell set with premium chrome-handle rack.',
    rating: 4.7,
    reviews: 201,
  },
];

const categories = ['All', 'Free Weights', 'Machines', 'Racks'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState<number[]>([]);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const addToCart = (id: number) => {
    setCart(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>IronCore Store</span>
          <h2 className={styles.title}>Premium <span className={styles.accent}>Equipment</span></h2>
          <p className={styles.subtitle}>
            Commercial-grade gear engineered for athletes who refuse to compromise.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
          {cart.length > 0 && (
            <div className={styles.cartBadge}>
              🛒 {cart.length} item{cart.length > 1 ? 's' : ''} in cart
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className={styles.grid}>
          {filtered.map(product => (
            <div key={product.id} className={styles.card}>
              {/* Tag */}
              <span className={`${styles.tag} ${styles[`tag_${product.tagColor}`]}`}>
                {product.tag}
              </span>

              {/* Image */}
              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <div className={styles.overlay}>
                  <button className={styles.quickView}>Quick View</button>
                </div>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>

                {/* Rating */}
                <div className={styles.ratingRow}>
                  <div className={styles.stars}>
                    {'★'.repeat(Math.floor(product.rating))}
                    {product.rating % 1 !== 0 && '½'}
                  </div>
                  <span className={styles.ratingNum}>{product.rating}</span>
                  <span className={styles.reviewCount}>({product.reviews} reviews)</span>
                </div>

                {/* Price + CTA */}
                <div className={styles.priceRow}>
                  <div className={styles.prices}>
                    <span className={styles.price}>${product.price.toLocaleString()}</span>
                    <span className={styles.originalPrice}>${product.originalPrice.toLocaleString()}</span>
                  </div>
                  <button
                    className={`${styles.addBtn} ${cart.includes(product.id) ? styles.addedBtn : ''}`}
                    onClick={() => addToCart(product.id)}
                  >
                    {cart.includes(product.id) ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
