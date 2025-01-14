export interface Project {
    id: string;
    title: string;
    category: 'commercial' | 'industrial' | 'residential';
    location: string;
    description: string;
    imagePath: string;
    images: string[];
    services: string[];
}