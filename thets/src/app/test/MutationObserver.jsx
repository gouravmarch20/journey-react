import React, { useEffect, useRef } from 'react';

export default function MultiObserveList() {
  const containerRef = useRef();
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, 20); // adjust to # of items

    const observer = new IntersectionObserver((entries , obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`Visible: ${entry.target.dataset.index}`);
          // You can add class, fetch more data, etc.
        }
      });
    }, {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.5,
    });

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '400px', overflow: 'auto', border: '1px solid black' }}>
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          data-index={i}
          ref={(el) => (itemRefs.current[i] = el)}
          style={{
            height: 100,
            margin: 10,
            background: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Item #{i}
        </div>
      ))}
    </div>
  );
}
