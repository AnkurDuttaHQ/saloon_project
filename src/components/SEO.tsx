import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  schemaMarkup?: Record<string, any>;
  canonicalPath: string;
  ogImage?: string;
}

export default function SEO({ title, description, schemaMarkup, canonicalPath, ogImage }: SEOProps) {
  useEffect(() => {
    // 1. Title
    const brandTitle = `${title} | Wavelength Salon Kankurgachi Kolkata`;
    document.title = brandTitle;

    // 2. Description Meta
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Keywords Meta
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Best Salon In Kankurgachi, Best Salon In Kolkata, Beauty Salon Kolkata, Bridal Makeup Kolkata, Hair Spa Kolkata, Luxury Salon Kolkata, Wavelength Salon CIT road, Hair Botox Kolkata, Nanoplastia Kolkata');

    // 4. Canonical Link
    const host = window.location.origin;
    const fullCanonicalUrl = `${host}${canonicalPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonicalUrl);

    // 5. Open Graph Meta Tags
    const ogTags = {
      'og:title': brandTitle,
      'og:description': description,
      'og:url': fullCanonicalUrl,
      'og:type': 'website',
      'og:image': ogImage || 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200',
      'twitter:card': 'summary_large_image',
      'twitter:title': brandTitle,
      'twitter:description': description,
      'twitter:image': ogImage || 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property.startsWith('og:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // 6. Schema JSON-LD Markup injection
    const scriptId = 'wavelength-dynamic-schema';
    let scriptElement = document.getElementById(scriptId);
    if (scriptElement) {
      scriptElement.remove();
    }

    if (schemaMarkup) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.innerHTML = JSON.stringify(schemaMarkup);
      document.head.appendChild(scriptElement);
    }

    return () => {
      // Cleanup schemas if page unmounts
      const item = document.getElementById(scriptId);
      if (item) {
        item.remove();
      }
    };
  }, [title, description, schemaMarkup, canonicalPath, ogImage]);

  return null;
}
