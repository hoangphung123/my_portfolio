# Vercel Analytics Integration

## Overview
Dự án đã được tích hợp Vercel Analytics để theo dõi hành vi người dùng và hiệu suất website.

## Features

### 1. Automatic Page Tracking
- Tự động track khi user navigate giữa các trang
- Track: Home, About, Projects, Contact

### 2. Project Interactions
- **Project View**: Khi user click "Detail" để xem project
- **Project Download**: Khi user download PowerPoint
- **Project Visit**: Khi user visit website project
- **Filter Usage**: Khi user filter projects

### 3. Custom Events
Tất cả events đều có timestamp và metadata:
```javascript
// Ví dụ event data
{
  project: "Showcasing Vietnam's Fish Sauce Heritage",
  timestamp: "2024-01-15T10:30:00.000Z"
}
```

## How to View Analytics

### 1. Vercel Dashboard
1. Đăng nhập vào [Vercel Dashboard](https://vercel.com/dashboard)
2. Chọn project của bạn
3. Vào tab "Analytics"
4. Xem các metrics:
   - Page Views
   - Custom Events
   - User Sessions
   - Geographic Data

### 2. Real-time Data
- Data được update real-time
- Có thể filter theo date range
- Export data để phân tích

## Privacy Features

### 1. GDPR Compliant
- Không track personal data
- Không sử dụng cookies
- User có thể opt-out

### 2. Data Collected
- Page views
- Custom events (project interactions)
- Geographic location (country level)
- Device type
- Browser type

### 3. Data NOT Collected
- Personal information
- IP addresses
- Session recordings
- Form data

## Adding New Tracking

### 1. Import tracking functions
```javascript
import { trackProjectView, trackContactSubmit } from '../components/Analytics';
```

### 2. Use in components
```javascript
const handleClick = () => {
  trackProjectView('Project Name');
  // Your logic here
};
```

### 3. Available tracking functions
- `trackProjectView(projectTitle)`
- `trackProjectDownload(projectTitle)`
- `trackProjectVisit(projectTitle, url)`
- `trackContactSubmit()`
- `trackPageView(pageName)`
- `trackFilterUsage(filterType)`

## Benefits

### 1. Performance Insights
- Biết trang nào được xem nhiều nhất
- Thời gian user ở lại trang
- Bounce rate

### 2. User Behavior
- Projects nào được quan tâm nhất
- Filter nào được dùng nhiều
- User journey analysis

### 3. Business Intelligence
- Optimize content strategy
- Improve user experience
- Make data-driven decisions

## Troubleshooting

### 1. Events not showing
- Check Vercel deployment
- Verify Analytics component is imported
- Check browser console for errors

### 2. Data delay
- Vercel Analytics có delay 1-2 phút
- Real-time data có thể chậm hơn

### 3. Privacy concerns
- Analytics chỉ track anonymous data
- Không ảnh hưởng đến user privacy
- Có thể disable nếu cần 