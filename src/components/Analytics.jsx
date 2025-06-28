import { track } from '@vercel/analytics';

// Track project view
export const trackProjectView = (projectTitle) => {
  track('project_view', {
    project: projectTitle,
    timestamp: new Date().toISOString()
  });
};

// Track project download
export const trackProjectDownload = (projectTitle) => {
  track('project_download', {
    project: projectTitle,
    timestamp: new Date().toISOString()
  });
};

// Track project visit
export const trackProjectVisit = (projectTitle, url) => {
  track('project_visit', {
    project: projectTitle,
    url: url,
    timestamp: new Date().toISOString()
  });
};

// Track contact form submission
export const trackContactSubmit = () => {
  track('contact_submit', {
    timestamp: new Date().toISOString()
  });
};

// Track page navigation
export const trackPageView = (pageName) => {
  track('page_view', {
    page: pageName,
    timestamp: new Date().toISOString()
  });
};

// Track filter usage
export const trackFilterUsage = (filterType) => {
  track('filter_usage', {
    filter: filterType,
    timestamp: new Date().toISOString()
  });
}; 