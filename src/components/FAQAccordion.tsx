import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    const isOpen = openIndex === index;

    // Close previous
    if (openIndex !== null && bodyRefs.current[openIndex]) {
      gsap.to(bodyRefs.current[openIndex], { height: 0, duration: 0.3, ease: 'power2.inOut' });
    }

    if (isOpen) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      // Open new
      if (bodyRefs.current[index]) {
        const inner = bodyRefs.current[index]!.querySelector('.accordion-body-inner') as HTMLElement;
        const targetH = inner?.offsetHeight || 0;
        gsap.fromTo(bodyRefs.current[index], { height: 0 }, { height: targetH, duration: 0.35, ease: 'power2.out' });
      }
    }
  };

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="accordion-item">
          <button
            className={`accordion-trigger ${openIndex === i ? 'active' : ''}`}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-body-${i}`}
            id={`faq-trigger-${i}`}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--size-h3)', fontWeight: 500 }}>{item.q}</span>
            <ChevronDown
              size={18}
              style={{ flexShrink: 0, transition: 'transform 300ms ease', transform: openIndex === i ? 'rotate(180deg)' : 'none' }}
            />
          </button>
          <div
            ref={el => { bodyRefs.current[i] = el; }}
            className="accordion-body"
            id={`faq-body-${i}`}
            role="region"
            aria-labelledby={`faq-trigger-${i}`}
          >
            <div className="accordion-body-inner">
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
