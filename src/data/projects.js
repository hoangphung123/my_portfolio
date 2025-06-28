export const projectsData = [
  {
    id: 1,
    title: "Showcasing Vietnam's Fish Sauce Heritage",
    type: "PowerPoint",
    images: [
      '/src/assets/anh2.gif',
      '/src/assets/nuocmam1.png',
      '/src/assets/nuocmam2.png',
      '/src/assets/nuocmam4.png',
      '/src/assets/nuocmam5.png',
      '/src/assets/nuocmam3.png',
      '/src/assets/nuocmam6.png'
    ],
    description: "I supported a university student in completing a project to introduce and promote traditional Vietnamese fish sauce. Throughout the process, I helped with creating content, selecting images, designing the layout, and crafting a compelling narrative to highlight the product's authenticity and cultural value. The project was completed on time, successfully showcasing the essence of Vietnamese culinary culture, and earned an excellent grade of 9.3.",
    visit: "#",
    source: "#",
    download: "https://docs.google.com/presentation/d/1iKEiodwzTL9QxjlcyFCXGdn1muBypbdY/edit?usp=drive_link&ouid=111817752097991923945&rtpof=true&sd=true",
    featured: true
  },
  {
    id: 2,
    title: "Object-Oriented Software Engineering",
    type: "PowerPoint",
    images: [
      '/src/assets/anh3.gif',
      '/src/assets/IT1.png',
      '/src/assets/IT2.png',
      '/src/assets/IT3.png',
      '/src/assets/IT4.png',
      '/src/assets/IT5.png'
    ],
    description: "This was a PowerPoint created for a group project in the OOSE course of the IT program. I chose the computer screen as the central design concept, making the visual style highly relevant to the presentation's content. The bold, rectangular layout conveys a sense of logic and formality, reinforcing the structured and professional tone of the presentation.",
    visit: "#",
    source: "#",
    download: "https://docs.google.com/presentation/d/1283ltxkzgEFlzvWnmHla4pSUyEfMZqKE/edit?usp=drive_link&ouid=111817752097991923945&rtpof=true&sd=true",
    featured: true
  },
  {
    id: 3,
    title: "Analysis of Tấm Cám",
    type: "PowerPoint",
    images: [
      '/src/assets/anh4.gif',
      '/src/assets/tamcam1.png',
      '/src/assets/Tamcam2.png',
      '/src/assets/Tamcam3.png',
      '/src/assets/Tamcam4.png',
      '/src/assets/Tamcam5.png'
    ],
    description: "Tấm Cám' was a PowerPoint I created for a literary analysis course at university. The slides emphasize traditional Vietnamese elements, featuring iconic images like áo dài, lotus flowers, and traditional women. I incorporated smooth shapes, elegant lines, and a distinctive color palette to evoke a sense of cultural authenticity. The presentation left a strong impression on the audience and made the literary analysis session much more engaging and enjoyable.",
    visit: "#",
    source: "#",
    download: "https://docs.google.com/presentation/d/11n6m4-9xdD5gj09ZNopvEwnD_yGSfkdC/edit?usp=drive_link&ouid=111817752097991923945&rtpof=true&sd=true",
    featured: true
  },
  {
    id: 4,
    title: "関西・WEBパビリオン",
    type: "website",
    images: [
      '/src/assets/anh5.gif',
      '/src/assets/anh2.gif',
      '/src/assets/anh1.gif'
    ],
    description: "Introducing the beauty of Kansai Prefecture at the Osaka exhibition, Kansai Expo 2025. • Participate in discussions, edit the design, and decide on the visual layout of the website.",
    visit: "https://future.kouiki-kansai.jp/",
    source: "#",
    featured: true
  },
  {
    id: 5,
    title: "Business Template",
    type: "PowerPoint",
    images: ['/src/assets/Bussines1.png'],
    description: "This template was created to give everyone a professional business template.",
    visit: "#",
    source: "#",
    download: "https://docs.google.com/presentation/d/1iKEiodwzTL9QxjlcyFCXGdn1muBypbdY/edit?usp=drive_link&ouid=111817752097991923945&rtpof=true&sd=true",
    featured: false
  },
  {
    id: 6,
    title: "Nature Template",
    type: "PowerPoint",
    images: ['/src/assets/nature1.png'],
    description: "This template was created to give everyone a professional Nature template.",
    visit: "#",
    source: "#",
    download: "https://docs.google.com/presentation/d/1iKEiodwzTL9QxjlcyFCXGdn1muBypbdY/edit?usp=drive_link&ouid=111817752097991923945&rtpof=true&sd=true",
    featured: false
  },
];

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

export const getProjectsByType = (type) => {
  if (type === "All") return projectsData;
  return projectsData.filter(project => project.type === type);
};

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
}; 