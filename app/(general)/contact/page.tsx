import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Contact page',
 description: 'This is the contact page of the first-next-app.',
 keywords: ['contact', 'first-next-app', 'next.js'],
};

export default function ContactPage() {
    return (
        <main className="flex flex-col items-center p-24">
        <span className="text-7xl">
            Contact Page
        </span>
        </main>
    );
    }