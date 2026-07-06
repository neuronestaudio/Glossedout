import { useEffect } from 'react';
import { recordHead } from '../lib/headStore';

interface PageMetaProps {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  jsonLd?: object[];
}

const OG_IMAGE = 'https://glossedoutdetailing.com.au/NLP-Shop.jpeg';

export default function PageMeta({ title, description, canonical, noindex = false, jsonLd }: PageMetaProps) {
  recordHead({ title, description, canonical, noindex, jsonLd });

  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setLink('canonical', canonical);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', OG_IMAGE);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', OG_IMAGE);

    if (noindex) {
      setMeta('name', 'robots', 'noindex,nofollow');
    } else {
      const existing = document.querySelector('meta[name="robots"]');
      if (existing) existing.remove();
    }

    document.querySelectorAll('script[data-pagemeta-jsonld]').forEach((el) => el.remove());
    if (jsonLd && jsonLd.length) {
      for (const item of jsonLd) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-pagemeta-jsonld', '');
        script.text = JSON.stringify(item).replace(/<\//g, '<\\/');
        document.head.appendChild(script);
      }
    }

    return () => {
      document.title = 'Glossed Out Detailing';
    };
  }, [title, description, canonical, noindex, jsonLdKey]);

  return null;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}
