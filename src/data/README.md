# Projects Data Structure

This directory contains the data files for the portfolio projects.

## File Structure

- `projects.js` - Contains all project data and utility functions
- `README.md` - This documentation file

## Adding New Projects

To add a new project, edit the `projectsData` array in `projects.js`:

```javascript
{
  id: 7, // Unique ID
  title: "Your Project Title",
  type: "PowerPoint", // or "website", "Game", etc.
  images: [
    '/src/assets/your-image.png',
    '/src/assets/another-image.png'
  ],
  description: "Your project description...",
  visit: "https://your-website.com", // or "#" if not applicable
  source: "https://github.com/your-repo", // or "#" if not applicable
  download: "https://drive.google.com/...", // for PowerPoint projects
  featured: true // true for featured projects (shown in slider)
}
```

## Performance Optimizations

1. **Lazy Loading**: Images are loaded only when they come into view
2. **Memoization**: Project filtering is memoized for better performance
3. **Separate Data**: Data is separated from components for better maintainability
4. **Image Optimization**: Use appropriate image formats and sizes

## Image Guidelines

- Use relative paths starting with `/src/assets/`
- Optimize images for web (compress, use appropriate formats)
- Keep image sizes reasonable (max 1MB per image)
- Use descriptive filenames

## Available Functions

- `getFeaturedProjects()` - Returns only featured projects
- `getProjectsByType(type)` - Returns projects filtered by type
- `getProjectById(id)` - Returns a specific project by ID 