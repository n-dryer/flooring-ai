/**
 * Analytics utility for tracking user interactions
 * Provides a consistent interface for tracking page views and events
 */

export interface TrackEventParams {
  category: string;
  action: string;
  label: string;
  value?: number;
}

export interface TrackPageViewParams {
  path: string;
  title?: string;
}

/**
 * Analytics class for tracking user interactions
 */
export class Analytics {
  /**
   * Track a page view
   * @param params - Page view parameters
   */
  static trackPageView(params: TrackPageViewParams): void {
    try {
      if (typeof window === 'undefined' || !window.gtag) return;
      
      window.gtag('event', 'page_view', {
        page_path: params.path,
        page_title: params.title
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }
  
  /**
   * Track an event
   * @param params - Event parameters
   */
  static trackEvent(params: TrackEventParams): void {
    try {
      if (typeof window === 'undefined' || !window.gtag) return;
      
      window.gtag('event', params.action, {
        event_category: params.category,
        event_label: params.label,
        value: params.value
      });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }
  
  /**
   * Initialize event listeners for common tracking scenarios
   */
  static initEventListeners(): void {
    if (typeof window === 'undefined') return;
    
    // Track form submissions
    document.addEventListener('submit', (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement;
      if (form?.dataset?.formType) {
        Analytics.trackEvent({
          category: 'Form',
          action: 'Submit',
          label: form.dataset.formType
        });
      }
    });
    
    // Track CTA clicks
    document.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target?.closest('a[data-track]') as HTMLAnchorElement;
      if (link?.dataset?.track) {
        Analytics.trackEvent({
          category: 'CTA',
          action: 'Click',
          label: link.dataset.track
        });
      }
    });
  }
}

// Add TypeScript interface for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
