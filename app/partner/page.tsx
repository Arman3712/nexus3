"use client"

import React, { useState, useEffect } from 'react'
import { CheckCircle, Globe, Phone, MapPin, Sun, Moon } from "lucide-react"
import Navbar from '@/components/navbar';

export default function Component() {
    const [darkMode, setDarkMode] = useState(true)
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, []) 
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode)
      if (!darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

  return (
    <>
      <Navbar
        scrollToServices={() => {}}
      />
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 dark:from-gray-900 dark:to-purple-900 p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4 relative">
          <button
            onClick={toggleDarkMode}
            className="absolute right-0 top-0 p-2 rounded-full bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 hover:bg-purple-300 dark:hover:bg-purple-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-200">Earn with Nexus IT!</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">Partner with Us and Start Earning Commissions on Every Sale</p>
        </header>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">Why Partner with Nexus IT?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            At Nexus IT, we are a leading Web Development and Digital Marketing Agency specializing in a wide range of services. By partnering with us, you can earn significant commissions through referrals and ongoing business collaborations. Whether it's a one-time software sale or monthly commissions from website development or chatbots, we make sure our partners are rewarded generously!
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">Our Commission Offers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Software Sales",
                items: [
                  "Earn 20% commission on every software sale you refer to us!",
                  "Whether it's custom software or an off-the-shelf solution, you get a 20% cut of the sale value."
                ]
              },
              {
                title: "Website / Web App / Android App Development",
                items: [
                  "Earn a 10% monthly commission for every successful project referral.",
                  "This applies to websites, web applications, and Android applications. You'll receive a monthly recurring commission for the duration of the contract!"
                ]
              },
              {
                title: "Chatbots (Meta Certified, WhatsApp, Web)",
                items: [
                  "Earn a 10% monthly commission on chatbots we develop for clients you refer.",
                  "Our cutting-edge chatbot solutions bring value to businesses, and you'll continue earning monthly commissions as long as the service is active!"
                ]
              }
            ].map((offer, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">{offer.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {offer.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">Who Can Partner with Nexus IT?</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
            {[
              { title: "Freelancers", description: "Add an extra revenue stream by referring clients to us." },
              { title: "Business Consultants", description: "Enhance your portfolio by providing top-notch tech services to your clients." },
              { title: "Digital Marketers & Agencies", description: "Expand your service offerings by collaborating with a full-service development team." },
              { title: "Entrepreneurs", description: "Earn commissions without the need for technical skills—just refer and earn!" }
            ].map((partner, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                <span><strong>{partner.title}:</strong> {partner.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Refer a Client", description: "Introduce us to potential clients who need software, websites, web apps, mobile apps, or chatbot development." },
              { title: "We Handle the Rest", description: "Our expert team will take care of the technical development and deliver high-quality solutions." },
              { title: "You Earn Commissions", description: "You receive your commission as soon as the project is completed or the sale is made." }
            ].map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">{index + 1}. {step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">Why Nexus IT?</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            {[
              { title: "Top Quality Solutions", description: "Our team delivers world-class products that help businesses grow." },
              { title: "Ongoing Earnings", description: "Earn monthly commissions from websites, apps, and chatbot projects!" },
              { title: "No Technical Knowledge Required", description: "Just refer, and we handle everything else!" }
            ].map((reason, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                <span><strong>{reason.title}:</strong> {reason.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-purple-700 dark:bg-purple-900 text-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Contact Us Today to Get Started!</h2>
          <p className="text-xl">Nexus IT – Your Partner for Growth</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Website: <a href="http://www.nexusit.in" className="underline">www.nexusit.in</a></span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>WhatsApp: +91 8849767778</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span><a href="https://maps.app.goo.gl/q1aDtPPozEpSPmqN6" className="underline">Location: Visit Our Office</a></span>
            </div>
          </div>
          <button className="bg-white dark:bg-purple-200 text-purple-700 dark:text-purple-900 hover:bg-purple-100 dark:hover:bg-purple-300 px-4 py-2 rounded-md font-semibold transition-colors " >
            <a href="https://api.whatsapp.com/send/?phone=918849767778&text=I%27m+interested+in+partner+program&type=phone_number&app_absent=0" className="underline">Join Our Partner Program</a>
          </button>
        </section>

        <footer className="text-center text-gray-600 dark:text-white">
          <p>Ready to start earning? Join our partner program today and take the first step toward a profitable partnership with Nexus IT.</p>
        </footer>
      </div>
    </div>
    </>
  )
}
