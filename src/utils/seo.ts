/**
 * SEO utility for managing meta tags and structured data
 */

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  siteName?: string;
}

/**
 * Create a canonical URL from the current path
 * @param path - The current path
 * @param site - The site URL
 */
export function createCanonicalUrl(path: string, site: string = 'https://flooringai.com'): string {
  try {
    // Remove trailing slash from site if present
    const normalizedSite = site.endsWith('/') ? site.slice(0, -1) : site;
    
    // Add leading slash to path if not present
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    return `${normalizedSite}${normalizedPath}`;
  } catch (error) {
    console.error('Error creating canonical URL:', error);
    return `https://flooringai.com${path}`;
  }
}

/**
 * Generate structured data for a local business
 * @param props - SEO properties
 */
export function generateLocalBusinessSchema(props: SEOProps): string {
  const { title, description, image, siteName = 'FlooringAI' } = props;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': siteName,
    'image': image || 'https://flooringai.com/images/og-default.jpg',
    'description': description,
    '@id': 'https://flooringai.com',
    'url': 'https://flooringai.com',
    'telephone': '+1-310-555-0123',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Floor Street',
      'addressLocality': 'Los Angeles',
      'addressRegion': 'CA',
      'postalCode': '90001',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 34.0522,
      'longitude': -118.2437
    },
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': 34.0522,
        'longitude': -118.2437
      },
      'geoRadius': '50000'
    },
    'priceRange': '$$',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        'opens': '08:00',
        'closes': '18:00'
      }
    ]
  };
  
  return JSON.stringify(schema, null, 2);
}
