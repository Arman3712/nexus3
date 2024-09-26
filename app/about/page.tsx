import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { NextSeo } from 'next-seo';

export default function about() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <NextSeo
              title="About - Nexus IT"
              description="Nexus ITS is a full fledge modern and best performant websites development agency, a agency specializing in full-stack development, responsive design, and SEO."
              canonical="https://nexusit.in/about"
              openGraph={{
              url: 'https://nexusit.in/about',
              title: 'Nexus IT | Modern Software Development & Arman kureshi',
              description: 'Nexus IT is a leading provider of graphic design and web development services. Partner with us to enhance your brand’s online presence and achieve your business goals',
              images: [{ url: 'https://github.com/Arman3712/nexus3/blob/main/public/images/Frame%2023.png?raw=true' }],
              }}
           />
    <div>
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
    </div>
    <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="darkblue" />
    <Spotlight className="md:hidden top-2 left-2 bottom-80  " fill="darkblue" />
    <div style={{
      minHeight: '100vh',
      color: '#e2e8f0',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }} className='bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <header style={{ 
              marginBottom: '2rem' ,
              textAlign: 'center'
             }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>Nexus ITS - A Comprehensive Software Development Agency</h1>
            <h1 style={{
              fontSize: '1.25rem',
              color: '#a0aec0'
            }}>Nexus ITS is a full-fledged software development agency dedicated to delivering innovative and tailored software solutions to meet the diverse needs of businesses. With a team of skilled professionals, Nexus ITS specializes in various aspects of software development, including web and mobile applications, custom software solutions, and system integrations. This document outlines the core services offered by Nexus ITS, its approach to software development, and the value it brings to its clients.</h1>
            <Image
              src="/images/ns1.png"
              alt="Nexus ITS's visuals"
              width={800}
              height={300}
              style={{
                maxWidth: '100%',
                height: 'auto'
              }} />
          </header>

          <main>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>Core Services</h2>
            <Image
              src="/images/ns2.png"
              alt="Nexus ITS's visuals"
              width={800}
              height={300}
              style={{
                maxWidth: '100%',
                height: 'auto'
              }} />
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'semibold',
                marginBottom: '1rem'
              }}>1. Custom Software Development</h2>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem',
                marginBottom: '1rem'
              }}>
                <li>Nexus ITS excels in creating custom software solutions that are designed to address specific business challenges. By understanding the unique requirements of each client, the agency develops software that enhances operational efficiency and drives growth.</li>
              </ul>
            </section>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'semibold',
                marginBottom: '1rem'
              }}>2. Web Application Development</h2>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem',
                marginBottom: '1rem'
              }}>
                <li>
                The agency offers robust web application development services, utilizing the latest technologies and frameworks. Nexus ITS ensures that web applications are not only functional but also user-friendly and visually appealing.</li>
              </ul>
            </section>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'semibold',
                marginBottom: '1rem'
              }}>3. Mobile Application Development</h2>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem',
                marginBottom: '1rem'
              }}>
                <li>
                In today's mobile-driven world, Nexus ITS provides comprehensive mobile application development services for both iOS and Android platforms. The agency focuses on creating intuitive and engaging mobile experiences that resonate with users.</li>
              </ul>
            </section>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'semibold',
                marginBottom: '1rem'
              }}>4. System Integration</h2>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem',
                marginBottom: '1rem'
              }}>
                <li>
                Nexus ITS helps businesses streamline their operations by integrating various systems and applications. This service ensures that different software solutions work seamlessly together, improving data flow and overall productivity.</li>
              </ul>
            </section>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'semibold',
                marginBottom: '1rem'
              }}>5. Cloud Solutions</h2>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem',
                marginBottom: '1rem'
              }}>
                <li>
                With the rise of cloud computing, Nexus ITS offers cloud-based solutions that provide scalability, flexibility, and cost-effectiveness. The agency assists clients in migrating to the cloud and developing cloud-native applications.</li>
              </ul>
            </section>



            <div style={{ marginBottom: '2rem' }}>
              <Image
                src="/images/ns3.png"
                alt="Software Development Lifecycle"
                width={800}
                height={300}
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }} />
            </div>
          </main>

          <section style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'semibold',
                marginBottom: '1.5rem'
              }}>Approach to Software Development !</h2>
              <ul style={{
                paddingLeft: '1.5rem',
                marginBottom: '1rem'
              }}>
                <li>Nexus ITS follows a structured and agile approach to software development, ensuring that projects are delivered on time and within budget. The key steps in their development process include:</li>
              </ul>
            </section>

            <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1rem',
                marginBottom: '1rem'
              }}>
              <li>Requirement Analysis: Understanding the client's needs and objectives.</li>
              <li>Design: Creating a blueprint for the software solution.</li>
              <li>Development: Writing code and building the application.</li>
              <li>Testing: Conducting thorough testing to ensure quality and performance.</li>
              <li>Deployment: Launching the software in the production environment.</li>
              </ul>

          <footer style={{
            textAlign: 'center',
            color: '#718096',
            marginTop: '2rem'
          }}>
            <p>Copyright &copy; Nexus ITS. 2024 All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
