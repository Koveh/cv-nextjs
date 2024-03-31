import React from 'react';
import Link from 'next/link';
import './cv.css';
import Head from 'next/head';



export default function CV() {
  return (
    <div className="cv-container p-8">
      <div className="cv-content max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <img
              alt="Portrait"
              className="w-50 h-50 mb-4"
              height="300"
              src="/Daniil_Kovekh.jpeg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width="150"
            />
            <h1 className="text-3xl font-bold">Daniil Kovekh</h1>
            <p className="text-xl">AI Consultant</p>
            <p className="mt-2">Vienna, Austria</p>
            <p>+436641377867</p>
            <p>daniil@koveh.com</p>
            <div className="mt-2">
              <p className="font-medium">
                <Link href="https://koveh.com" className="text-blue-600">koveh.com</Link>,{' '}
                <Link href="https://koveh.ru" className="text-blue-600">koveh.ru</Link>,{' '}
                <Link href="https://www.linkedin.com/in/koveh/" className="text-blue-600">LinkedIn</Link>
              </p>
            </div>
              <div className="mt-8">
                <h2 className="font-semibold text-lg mb-2">Skills</h2>
                <p>Python (7 years)</p>
                <p>React Next.js Tailwind</p>
                <p>Azure Data Factory & Co</p>
                <p>Scrum & PM</p>
                <p>C# .NET Blazor</p>
                <p>R & Matlab</p>
                <p>SQL & SPARQL</p>
                <p>Vector & Graph DB</p>
              </div>
              <div className="mt-8">
                <h2 className="font-semibold text-lg mb-2">Languages</h2>
                <p>English</p>
                <div className="w-full h-1 bg-gray-800 mb-2" />
                <p>Russian</p>
                <div className="w-full h-1 bg-gray-800 mb-2" />
                
                <p>German</p>
                <div className="w-full h-1 mb-2" style={{ background: 'linear-gradient(90deg, #333 75%, #d1d5db 25%)'}} />
              </div>
              <div className="mt-8">
                <h2 className="font-semibold text-lg mb-2">Hobbies</h2>
                <p>Writing articles</p>
                <p>Piano and guitar</p>
                <p>Debating at DK Wien</p>
                <p className="mb-2">Cycling, Windsurfing, Skiing</p>
                <p>30-50 books/year</p>
                <p>Travel 2x/month</p>
                <p>Gym 3x/week</p>
                <p className="mb-2">Architecture & Urban planning studies since 2018</p>
                <p className="mb-2">Finance & Investments since 2016. Algotrading & AI analytics & Basics</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mt-8">
                <h2 className="font-semibold text-lg mb-2">Education</h2>
                <p className="font-medium">Bachelor, Vienna University of Economics and Business</p>
                <p className="text-sm">October 2020 – July 2024</p>
                <p>Business and Economics: Data Science, Finance, E&I</p>
                <p>Thesis: Creating HDT* - lightweight RDF* DB, tested on Wikidata</p>
                <div className="mt-4">
                  <p className="font-medium">Bachelor, Lomonosov Moscow State University</p>
                  <p className="text-sm">September 2019 – July 2020</p>
                  <p>Applied Mathematics and Computer Science</p>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="font-semibold text-lg mb-2">Experience</h2>
                <p className="font-medium">AI Consultant, KPMG, Austria</p>
                <p className="text-sm">March 2024 – Present</p>
                <p>LLM-driven React apps for external companies</p>
                <div className="mt-4">
                  <p className="font-medium">Data Warehouse Engineer, KPMG, Vienna</p>
                  <p className="text-sm">November 2022 – March 2024</p>

                </div>
                <div className="mt-4">
              <p className="font-medium">Founder, koveh.com</p>
              <p className="text-sm">July 2018 – Present</p>
              <p>
                My team creates React apps and Telegram bots with LLM models. We create APIs and automations using
                Robot frameworks
              </p>
              <p className="mt-2">
                <Link href="https://t.me/PechenkaRobot" className="text-blue-600">Cookie (Ru)</Link>,{' '}
                <Link href="https://t.me/ACookieRobot" className="text-blue-600">Cookie (En)</Link> – speech-to-text AI calorie tracker with personalized tips and >1000 users.
              </p>
              <p className="mt-2">
                <Link href="https://winepair.ru" className="text-blue-600">Winepair.ru</Link> – AI Sommelier for restaurants.
              </p>
              <p className="mt-2"><Link href="https://koveh.com" className="text-blue-600">Blog</Link> about Finance, Data Science, and Real estate.</p>
              <p className="mt-2">
                <Link href="https://vc.ru/life/352845-kak-ya-reshil-proizvodit-veloparkovki-dlya-avstrii" className="text-blue-600">Concept</Link> of bicycle lockers for shopping malls, business centers, train stations, and public
                institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}