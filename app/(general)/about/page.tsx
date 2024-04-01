import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'About page',
 description: 'This is the about page of the first-next-app.',
 keywords: ['about', 'first-next-app', 'next.js'],
};

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">About Page</span>
        </main>
    );
    }