"use client"

import React, { useState } from 'react';
import Navbar from '@/components/navbar';


export default function WebTechnologiesInfo() {
  const [activeTech, setActiveTech] = useState('reactjs')

  const technologies = [
    { id: 'nextjs', label: 'Next.js' },
    { id: 'reactjs', label: 'React.js' },
    { id: 'tailwind', label: 'Tailwind CSS' },
    { id: 'aspnetcore', label: 'ASP.NET Core Web API' },
    { id: 'mongodb', label: 'MongoDB' },
    { id: 'sql', label: 'SQL' },
    { id: 'html', label: 'HTML' },
    { id: 'css', label: 'CSS' },
    { id: 'bootstrap', label: 'Bootstrap' },
  ]

  const renderNav = () => {
    return (
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
    )
  }

  const renderContent = () => {
    switch (activeTech) {
      case 'reactjs':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">React.js</h2>
            <p className="text-lg">React.js is a powerful and popular JavaScript library for building user interfaces, particularly single-page applications. Developed and maintained by Facebook, React has revolutionized the way developers approach front-end development.</p>
            <h3 className="text-2xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Component-Based Architecture:</strong> React's core philosophy revolves around breaking down the UI into reusable, self-contained components. This modular approach enhances code reusability, maintainability, and scalability.</li>
              <li><strong>Virtual DOM:</strong> React uses a lightweight representation of the actual DOM for improved performance. It efficiently updates and renders only the necessary components, minimizing expensive DOM operations.</li>
              <li><strong>JSX Syntax:</strong> JSX is a syntax extension that allows you to write HTML-like code within JavaScript. It makes component creation more intuitive and visually appealing.</li>
              <li><strong>Unidirectional Data Flow:</strong> React enforces a one-way data flow, making it easier to track and debug state changes in your application.</li>
              <li><strong>Large Ecosystem:</strong> React boasts a vast ecosystem of libraries, tools, and community support, enabling developers to find solutions for almost any use case.</li>
              <li><strong>React Hooks:</strong> Introduced in React 16.8, Hooks allow developers to use state and other React features without writing a class, simplifying component logic.</li>
              <li><strong>Server-Side Rendering:</strong> React supports server-side rendering out of the box, which can significantly improve initial page load times and SEO.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Pros:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Easy to Learn:</strong> React's component-based architecture and clear documentation make it relatively easy for developers to pick up and start building applications.</li>
              <li><strong>Reusable Components:</strong> The ability to create reusable components saves development time and ensures consistency across the application.</li>
              <li><strong>Efficient Updates and Rendering:</strong> The Virtual DOM ensures that only necessary updates are made to the actual DOM, resulting in better performance.</li>
              <li><strong>Flexible Integration:</strong> React can be easily integrated with other libraries or existing projects, making it a versatile choice for various development scenarios.</li>
              <li><strong>Strong Community Support:</strong> With millions of developers worldwide, React has a robust community that contributes to its growth, provides support, and creates third-party tools and libraries.</li>
              <li><strong>Developer Tools:</strong> React Developer Tools, available as browser extensions, make debugging and profiling React applications much easier.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Cons:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Steep Learning Curve for Beginners:</strong> While React itself is relatively easy to grasp, the ecosystem and associated concepts (like state management with Redux) can be overwhelming for newcomers.</li>
              <li><strong>JSX Complexity:</strong> While JSX makes component creation more intuitive, it can also make the code more complex and harder to read for developers unfamiliar with the syntax.</li>
              <li><strong>Rapid Pace of Development:</strong> The fast-paced nature of React's development means that developers need to constantly keep up with new updates and best practices.</li>
              <li><strong>Lack of Official Documentation for Complex Scenarios:</strong> While React's documentation is generally good, it sometimes lacks guidance for more advanced use cases.</li>
              <li><strong>SEO Challenges:</strong> Single-page applications built with React can face SEO challenges, although this can be mitigated with server-side rendering or static site generation.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Use Cases:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Single-Page Applications (SPAs):</strong> React excels in creating fluid, dynamic user interfaces for SPAs.</li>
              <li><strong>Progressive Web Apps (PWAs):</strong> React's efficiency makes it an excellent choice for building responsive and fast PWAs.</li>
              <li><strong>Complex User Interfaces:</strong> For applications with intricate UIs and frequent data updates, React's component-based architecture and efficient rendering shine.</li>
              <li><strong>Cross-platform Mobile Development:</strong> When combined with React Native, developers can use their React skills to build native mobile applications.</li>
            </ul>
          </div>
        )
      case 'tailwind':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Tailwind CSS</h2>
            <p className="text-lg">Tailwind CSS is a utility-first CSS framework that has gained immense popularity for its unique approach to styling web applications. Unlike traditional CSS frameworks, Tailwind provides low-level utility classes that you can combine to build custom designs without leaving your HTML.</p>
            <h3 className="text-2xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Utility-First Approach:</strong> Tailwind provides a vast set of utility classes that you can use directly in your HTML to style elements. This approach allows for rapid development and easy customization.</li>
              <li><strong>Highly Customizable:</strong> Tailwind's configuration file allows you to customize every aspect of the framework, including colors, spacing, breakpoints, and more.</li>
              <li><strong>Responsive Design:</strong> Built-in responsive modifiers make it easy to build adaptive user interfaces without writing custom media queries.</li>
              <li><strong>JIT (Just-In-Time) Compiler:</strong> Tailwind's JIT mode generates styles on-demand, resulting in smaller file sizes and faster build times.</li>
              <li><strong>Dark Mode Support:</strong> Tailwind provides built-in dark mode support, allowing you to easily implement light and dark themes in your application.</li>
              <li><strong>Pseudo-Class Variants:</strong> Tailwind includes variants for common pseudo-classes like hover, focus, and active, making it easy to style interactive elements.</li>
              <li><strong>Plugins:</strong> Tailwind's plugin system allows you to extend the framework with custom utilities and components.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Pros:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Rapid Development:</strong> The utility-first approach allows for quick prototyping and development of user interfaces without writing custom CSS.</li>
              <li><strong>Consistency:</strong> Tailwind's predefined classes ensure consistency in spacing, colors, and other design elements across your project.</li>
              <li><strong>Flexibility:</strong> Unlike opinionated frameworks, Tailwind doesn't impose design decisions, allowing for truly custom designs.</li>
              <li><strong>Performance:</strong> With PurgeCSS integration and the JIT compiler, Tailwind can produce very small CSS files for production.</li>
              <li><strong>Responsive Design:</strong> Built-in responsive utilities make it easy to create adaptive layouts without writing media queries.</li>
              <li><strong>Great Documentation:</strong> Tailwind's documentation is comprehensive and well-organized, making it easy to find the classes you need.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Cons:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Learning Curve:</strong> The utility-first approach can be unfamiliar and take some time to get used to, especially for developers accustomed to traditional CSS methodologies.</li>
              <li><strong>HTML Clutter:</strong> Applying multiple utility classes can lead to long class strings in your HTML, potentially affecting readability.</li>
              <li><strong>Initial Setup:</strong> Tailwind requires some initial configuration and build process setup, which can be a hurdle for beginners.</li>
              <li><strong>Lack of Pre-designed Components:</strong> Unlike some CSS frameworks, Tailwind doesn't come with pre-designed components out of the box.</li>
              <li><strong>Design Consistency Challenges:</strong> Without careful management, the flexibility of Tailwind can lead to inconsistencies in large projects with multiple developers.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Use Cases:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Rapid Prototyping:</strong> Tailwind's utility classes allow for quick iteration and experimentation with designs.</li>
              <li><strong>Custom Designs:</strong> When you need a unique look that doesn't conform to a specific design system, Tailwind provides the flexibility to create it.</li>
              <li><strong>Large-Scale Applications:</strong> Tailwind's modular nature and performance optimizations make it suitable for large, complex applications.</li>
              <li><strong>Design Systems:</strong> Tailwind can be used as a foundation for building consistent, scalable design systems.</li>
            </ul>
          </div>
        )
      case 'html':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">HTML (HyperText Markup Language)</h2>
            <p className="text-lg">HTML is the standard markup language for creating web pages and web applications. It defines the structure and content of a web page, serving as the backbone of the World Wide Web.</p>
            <h3 className="text-2xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Structured Document Format:</strong> HTML uses a system of elements and attributes to define the structure and content of web pages.</li>
              <li><strong>Semantic Elements:</strong> HTML5 introduced semantic elements like &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, which provide meaning to the structure of content.</li>
              <li><strong>Cross-Platform Compatibility:</strong> HTML is supported by all modern web browsers and can be rendered on various devices and operating systems.</li>
              <li><strong>Integration with CSS and JavaScript:</strong> HTML works seamlessly with CSS for styling and JavaScript for dynamic behavior.</li>
              <li><strong>Multimedia Support:</strong> HTML5 includes native support for audio and video playback without the need for plugins.</li>
              <li><strong>Form Controls:</strong> HTML provides a variety of form elements for user input, including text fields, checkboxes, radio buttons, and more.</li>
              <li><strong>Accessibility Features:</strong> HTML includes attributes and elements that support web accessibility, making content more inclusive.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Pros:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Easy to Learn and Use:</strong> HTML has a simple, intuitive syntax that's easy for beginners to grasp.</li>
              <li><strong>Widely Supported:</strong> All web browsers support HTML, ensuring broad compatibility.</li>
              <li><strong>Flexible and Adaptable:</strong> HTML can be used to create a wide variety of web content, from simple text pages to complex web applications.</li>
              <li><strong>SEO Friendly:</strong> Proper use of HTML elements and attributes can improve a website's search engine optimization.</li>
              <li><strong>Accessibility:</strong> HTML's semantic elements and accessibility attributes make it easier to create inclusive web content.</li>
              <li><strong>Lightweight:</strong> HTML files are typically small and load quickly, contributing to better page performance.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Cons:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Limited to Static Content:</strong> HTML alone can only create static web pages without interactivity or dynamic content.</li>
              <li><strong>Design Limitations:</strong> While HTML can define basic structure, it requires CSS for advanced styling and layout.</li>
              <li><strong>No Logic or Interactivity:</strong> HTML cannot perform calculations, handle user interactions, or manage data without JavaScript.</li>
              <li><strong>Browser Inconsistencies:</strong> Different browsers may render HTML slightly differently, requiring additional effort for consistent appearance.</li>
              <li><strong>Verbose for Complex Structures:</strong> Creating complex layouts or repeating structures can lead to verbose and hard-to-maintain HTML code.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Use Cases:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Web Pages:</strong> HTML is the foundation for all web pages, defining their structure and content.</li>
              <li><strong>Email Templates:</strong> Many email clients support a subset of HTML for creating rich email templates.</li>
              <li><strong>Documentation:</strong> HTML is often used for creating online documentation and help systems.</li>
              <li><strong>Prototyping:</strong> HTML can be used for rapid prototyping of web interfaces before adding styles and interactivity.</li>
            </ul>
          </div>
        )
      case 'css':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">CSS (Cascading Style Sheets)</h2>
            <p className="text-lg">CSS is a style sheet language used for describing the presentation of a document written in HTML or XML. It enables the separation of presentation and content, allowing the same HTML to be presented in different styles for different rendering methods.</p>
            <h3 className="text-2xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Separation of Content and Presentation:</strong> CSS allows developers to define styles separately from HTML content, promoting cleaner, more maintainable code.</li>
              <li><strong>Cascading and Inheritance:</strong> Styles can be applied broadly and then overridden for specific elements, following a cascading order of specificity.</li>
              <li><strong>Selectors:</strong> CSS uses various types of selectors to target specific HTML elements, allowing for precise styling control.</li>
              <li><strong>Box Model:</strong> CSS defines how elements are spaced and sized using the box model concept (content, padding, border, margin).</li>
              <li><strong>Responsive Design:</strong> Media queries and flexible grid systems enable the creation of responsive layouts that adapt to different screen sizes.</li>
              <li><strong>Animations and Transitions:</strong> CSS3 introduced powerful animation and transition capabilities, reducing the need for JavaScript in many cases.</li>
              <li><strong>Flexbox and Grid:</strong> Modern CSS layout systems like Flexbox and Grid provide powerful tools for creating complex, responsive layouts.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Pros:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Consistent Styling:</strong> CSS allows for consistent styling across multiple pages of a website, ensuring a cohesive look and feel.</li>
              <li><strong>Improved Page Load Times:</strong> By separating style from content, CSS can significantly reduce file sizes and improve load times.</li>
              <li><strong>Easy Maintenance:</strong> Changes to the style can be made in one place and applied across an entire website, simplifying updates and maintenance.</li>
              <li><strong>Device Compatibility:</strong> CSS enables the creation of responsive designs that work well across various devices and screen sizes.</li>
              <li><strong>Rich Visual Effects:</strong> CSS3 provides advanced styling capabilities, including gradients, shadows, and animations, reducing the need for images.</li>
              <li><strong>Accessibility:</strong> Proper use of CSS can enhance web accessibility by providing visual cues and improving readability.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Cons:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Browser Compatibility Issues:</strong> Different browsers may interpret CSS rules differently, requiring additional effort to ensure consistent appearance across platforms.</li>
              <li><strong>Complexity in Large Projects:</strong> As projects grow, CSS can become complex and difficult to maintain without proper organization and methodology.</li>
              <li><strong>Lack of Variables (in older versions):</strong> While CSS3 introduced custom properties (variables), older versions lack built-in variable support, leading to repetition.</li>
              <li><strong>Limited Logic Capabilities:</strong> CSS is primarily for styling and lacks programming logic, requiring JavaScript for complex interactions.</li>
              <li><strong>Specificity Conflicts:</strong> The cascade and specificity rules can sometimes lead to unexpected styling outcomes, especially in large projects.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Use Cases:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Web Design:</strong> CSS is essential for styling all aspects of websites and web applications.</li>
              <li><strong>Print Stylesheets:</strong> CSS can be used to create print-friendly versions of web pages.</li>
              <li><strong>Email Templates:</strong> Many email clients support a subset of CSS for styling email content.</li>
              <li><strong>Mobile App Styling:</strong> CSS is used in hybrid mobile app development frameworks for styling app interfaces.</li>
              <li><strong>SVG Styling:</strong> CSS can be used to style SVG graphics, allowing for dynamic and interactive vector images.</li>
            </ul>
          </div>
        )
      case 'bootstrap':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Bootstrap</h2>
            <p className="text-lg">Bootstrap is a popular open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
            <h3 className="text-2xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Responsive Grid System:</strong> Bootstrap's 12-column grid system allows for easy creation of responsive layouts.</li>
              <li><strong>Pre-styled Components:</strong> It offers a wide range of pre-designed and easily customizable UI components.</li>
              <li><strong>JavaScript Plugins:</strong> Bootstrap includes several JavaScript plugins that add interactivity to elements like modals, dropdowns, and carousels.</li>
              <li><strong>Customizable Themes:</strong> The framework allows for easy customization through Sass variables and mixins.</li>
              <li><strong>Responsive Utilities:</strong> Built-in classes for showing or hiding content based on screen size.</li>
              <li><strong>Icon Library:</strong> Bootstrap comes with a set of icons (or easy integration with icon libraries) for common UI elements.</li>
              <li><strong>Cross-Browser Compatibility:</strong> Ensures consistent appearance and functionality across different browsers.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Pros:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Rapid Development:</strong> Bootstrap's pre-built components and utilities allow for quick prototyping and development.</li>
              <li><strong>Consistency:</strong> It provides a consistent look and feel across different pages and projects.</li>
              <li><strong>Responsive Design:</strong> Built-in responsive features make it easy to create mobile-friendly websites.</li>
              <li><strong>Large Community:</strong> A vast community means extensive resources, third-party themes, and plugins are available.</li>
              <li><strong>Customization:</strong> While offering default styles, Bootstrap is highly customizable to fit specific design needs.</li>
              <li><strong>Documentation:</strong> Comprehensive and well-maintained documentation makes it easy to learn and use.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Cons:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Generic Look:</strong> Websites built with default Bootstrap can look similar, requiring additional customization for uniqueness.</li>
              <li><strong>Learning Curve:</strong> While easy to start with, mastering Bootstrap's full capabilities can take time.</li>
              <li><strong>Overriding Styles:</strong> Customizing Bootstrap's default styles can sometimes be challenging and lead to specificity issues.</li>
              <li><strong>File Size:</strong> Including the full Bootstrap framework can increase the initial load time of a website.</li>
              <li><strong>Dependency on jQuery:</strong> Some Bootstrap JavaScript components rely on jQuery, which may be unnecessary for some projects.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Use Cases:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Rapid Prototyping:</strong> Bootstrap is excellent for quickly creating functional prototypes or MVPs.</li>
              <li><strong>Admin Dashboards:</strong> Its components are well-suited for building admin interfaces and dashboards.</li>
              <li><strong>Responsive Websites:</strong> For projects that need to work well across various devices and screen sizes.</li>
              <li><strong>Standardized Team Projects:</strong> When multiple developers need to work on a project with consistent styling.</li>
              <li><strong>Learning Web Development:</strong> Bootstrap can be a good starting point for beginners to understand responsive design principles.</li>
            </ul>
          </div>
        )
      case 'nextjs':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Next.js</h2>
            <p className="text-lg">Next.js is a popular React framework that enables server-side rendering and generating static websites for React based web applications. It's designed to enhance the developer experience and application performance.</p>
            <h3 className="text-2xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Server-Side Rendering (SSR):</strong> Next.js can render React components on the server, improving initial page load time and SEO.</li>
              <li><strong>Static Site Generation (SSG):</strong> It allows for generating static HTML files at build time, which can be served directly from a CDN.</li>
              <li><strong>Automatic Code Splitting:</strong> Next.js automatically splits your code into smaller chunks, improving load times.</li>
              <li><strong>Built-in CSS Support:</strong> It includes built-in support for CSS Modules, Sass, and other styling options.</li>
              <li><strong>API Routes:</strong> Next.js allows you to create API endpoints as part of your application, simplifying backend integration.</li>
              <li><strong>File-based Routing:</strong> The framework uses a file-system based router, making it intuitive to create routes.</li>
              <li><strong>Image Optimization:</strong> Next.js includes an Image component that automatically optimizes images for better performance.</li>
              <li><strong>Incremental Static Regeneration:</strong> This feature allows you to update static content without rebuilding the entire site.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Pros:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Improved Performance:</strong> Server-side rendering and static site generation lead to faster initial page loads and better SEO.</li>
              <li><strong>Developer Experience:</strong> Next.js provides a great developer experience with features like hot module replacement and error reporting.</li>
              <li><strong>Easy Learning Curve:</strong> For developers familiar with React, Next.js is relatively easy to pick up and start using.</li>
              <li><strong>Flexibility:</strong> It supports both static and dynamic content, making it suitable for a wide range of applications.</li>
              <li><strong>Built-in Optimizations:</strong> Features like automatic code splitting and image optimization improve application performance out of the box.</li>
              <li><strong>Strong Community and Ecosystem:</strong> Next.js has a large and active community, providing extensive resources and third-party integrations.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Cons:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Learning Curve for Beginners:</strong> While easier for React developers, complete beginners might find the concepts challenging initially.</li>
              <li><strong>Opinionated Structure:</strong> Next.js has its own way of doing things, which might not align with all project requirements or developer preferences.</li>
              <li><strong>Potential Over-optimization:</strong> For very simple projects, Next.js might introduce unnecessary complexity.</li>
              <li><strong>Limited Control over Build Process:</strong> While beneficial for most cases, the abstraction of the build process can be limiting for highly customized setups.</li>
              <li><strong>Server-Side Rendering Complexity:</strong> SSR can introduce complexities in data fetching and state management that aren't present in client-side only applications.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Use Cases:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>E-commerce Websites:</strong> Next.js's SSR and SSG capabilities make it excellent for building fast, SEO-friendly online stores.</li>
              <li><strong>Blogs and Content-heavy Websites:</strong> The static generation feature is perfect for content-focused sites that don't need real-time updates.</li>
              <li><strong>Web Applications:</strong> For complex web apps that require both client-side interactivity and server-side rendering for performance.</li>
              <li><strong>Marketing Websites:</strong> Next.js can create high-performance, SEO-optimized landing pages and marketing sites.</li>
              <li><strong>Progressive Web Apps (PWAs):</strong> Next.js provides features that make it easier to build PWAs with offline capabilities.</li>
            </ul>
          </div>
        )
      case 'aspnetcore':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">ASP.NET Core Web API</h2>
            <p className="text-lg">ASP.NET Core Web API is a framework for building HTTP services that can be accessed from various clients, including browsers and mobile devices. It's part of the larger ASP.NET Core framework, which is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications.</p>
            <h3 className="text-2xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cross-Platform Compatibility:</strong> ASP.NET Core can run on Windows, macOS, and Linux, providing flexibility in development and deployment environments.</li>
              <li><strong>High Performance:</strong> It's designed to be fast and efficient, with optimizations for request processing and memory usage.</li>
              <li><strong>Built-in Dependency Injection:</strong> ASP.NET Core includes a native dependency injection system, promoting loose coupling and testability.</li>
              <li><strong>Modular HTTP Request Pipeline:</strong> The framework uses a middleware-based request pipeline that can be customized for each application.</li>
              <li><strong>RESTful API Support:</strong> It provides robust support for building RESTful services, including content negotiation and model binding.</li>
              <li><strong>Security Features:</strong> Built-in support for authentication, authorization, and data protection.</li>
              <li><strong>OpenAPI (Swagger) Integration:</strong> Easy integration with Swagger for API documentation and testing.</li>
              <li><strong>Asynchronous Programming:</strong> First-class support for asynchronous programming patterns, improving scalability and performance.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Pros:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Performance:</strong> ASP.NET Core is one of the fastest web frameworks available, with excellent request processing speed and low memory footprint.</li>
              <li><strong>Cross-Platform:</strong> The ability to develop and deploy on multiple platforms increases flexibility and reduces infrastructure costs.</li>
              <li><strong>Open Source:</strong> Being open-source, it benefits from community contributions and transparency.</li>
              <li><strong>Modern Architecture:</strong> Built on a modular architecture that allows developers to include only the necessary components.</li>
              <li><strong>Cloud-Ready:</strong> Designed with cloud deployment in mind, making it easy to deploy to services like Azure.</li>
              <li><strong>Strong Ecosystem:</strong> Access to a wide range of libraries and tools from both Microsoft and the .NET community.</li>
              <li><strong>Excellent Tooling:</strong> Visual Studio and Visual Studio Code provide powerful development environments for ASP.NET Core.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Cons:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Learning Curve:</strong> For developers new to .NET, there can be a significant learning curve to understand the framework and its concepts.</li>
              <li><strong>Rapid Evolution:</strong> The fast pace of development means frequent updates, which can sometimes introduce breaking changes.</li>
              <li><strong>Smaller Community:</strong> While growing, the ASP.NET Core community is smaller compared to some other web frameworks.</li>
              <li><strong>Limited Hosting Options:</strong> While cross-platform, some hosting providers may have limited support for .NET Core compared to other technologies.</li>
              <li><strong>Complexity for Simple Projects:</strong> For very simple applications, the framework might introduce unnecessary complexity.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Use Cases:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Microservices Architecture:</strong> ASP.NET Core is well-suited for building microservices due to its lightweight nature and high performance.</li>
              <li><strong>Enterprise Web Applications:</strong> Its robust features and scalability make it ideal for large-scale enterprise applications.</li>
              <li><strong>Cross-Platform Applications:</strong> When you need to develop and deploy on multiple platforms.</li>
              <li><strong>IoT Applications:</strong> The lightweight nature of ASP.NET Core makes it suitable for IoT scenarios.</li>
              <li><strong>High-Performance APIs:</strong> When you need to build high-throughput, low-latency web services.</li>
              <li><strong>Cloud-Native Applications:</strong> ASP.NET Core works well with containerization technologies like Docker, making it suitable for cloud-native development.</li>
            </ul>
          </div>
        )
      case 'sql':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">SQL (Structured Query Language)</h2>
            <p className="text-lg">SQL is a standard language for storing, manipulating, and retrieving data in relational database management systems (RDBMS). It's been a fundamental part of data management since its inception in the 1970s and continues to be widely used in various applications and industries.</p>
            <h3 className="text-2xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>ACID Compliance:</strong> SQL databases typically follow ACID (Atomicity, Consistency, Isolation, Durability) principles, ensuring data integrity and reliability.</li>
              <li><strong>Standardized Language:</strong> SQL is standardized, making it relatively consistent across different database systems.</li>
              <li><strong>Powerful Querying:</strong> SQL provides a rich set of commands for complex data retrieval, filtering, and manipulation.</li>
              <li><strong>Data Integrity:</strong> Features like foreign keys and constraints help maintain data integrity and relationships between tables.</li>
              <li><strong>Transaction Support:</strong> SQL databases support transactions, allowing multiple operations to be treated as a single unit of work.</li>
              <li><strong>Indexing:</strong> SQL databases use indexing to improve query performance and data retrieval speed.</li>
              <li><strong>Security Features:</strong> Most SQL databases offer robust security features, including user authentication and access control.</li>
              <li><strong>Scalability:</strong> Many SQL databases support vertical scaling and some offer horizontal scaling options.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Pros:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Structured Data Handling:</strong> Excellent for managing and querying structured, relational data.</li>
              <li><strong>Data Integrity:</strong> ACID properties ensure data consistency and reliability.</li>
              <li><strong>Complex Queries:</strong> SQL excels at complex joins and aggregations across multiple tables.</li>
              <li><strong>Standardization:</strong> The standardized nature of SQL makes it easier to learn and use across different systems.</li>
              <li><strong>Mature Ecosystem:</strong> A wide range of tools, resources, and experienced professionals are available.</li>
              <li><strong>Transactional Support:</strong> Robust support for transactions ensures data consistency in multi-step operations.</li>
              <li><strong>Wide Adoption:</strong> SQL is used in many industries and has extensive support in various programming languages.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Cons:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Scalability Challenges:</strong> Horizontal scaling can be complex and expensive for some SQL databases.</li>
              <li><strong>Rigid Schema:</strong> The predefined schema can make it difficult to adapt to changing data structures.</li>
              <li><strong>Performance with Large Datasets:</strong> Some operations can become slow with very large datasets.</li>
              <li><strong>Complexity:</strong> Writing and optimizing complex queries can be challenging and require specialized knowledge.</li>
              <li><strong>Cost:</strong> Some enterprise-grade SQL database systems can be expensive to license and operate.</li>
              <li><strong>Limited Support for Unstructured Data:</strong> SQL databases are not ideal for handling unstructured or semi-structured data.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Use Cases:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Financial Systems:</strong> SQL's ACID properties make it ideal for financial transactions and record-keeping.</li>
              <li><strong>E-commerce Platforms:</strong> Managing product catalogs, orders, and customer data in relational structures.</li>
              <li><strong>Content Management Systems:</strong> Storing and retrieving structured content and metadata.</li>
              <li><strong>Business Intelligence:</strong> Complex reporting and data analysis across multiple related datasets.</li>
              <li><strong>Inventory Management:</strong> Tracking products, suppliers, and logistics in a structured manner.</li>
              <li><strong>Healthcare Systems:</strong> Managing patient records, treatments, and billing information.</li>
              <li><strong>Government Databases:</strong> Storing and managing citizen data, records, and administrative information.</li>
            </ul>
          </div>
        )
      case 'mongodb':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">MongoDB</h2>
            <p className="text-lg">MongoDB is a popular open-source NoSQL database that uses a document-oriented data model. It's designed to be scalable, flexible, and high-performance, making it suitable for a wide range of applications, particularly those dealing with large volumes of unstructured or semi-structured data.</p>
            <h3 className="text-2xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Document-Based:</strong> MongoDB stores data in flexible, JSON-like documents called BSON (Binary JSON).</li>
              <li><strong>Schema-less:</strong> Collections (equivalent to tables in relational databases) can hold different types of documents.</li>
              <li><strong>Scalability:</strong> Supports horizontal scaling through sharding, allowing distribution of data across multiple servers.</li>
              <li><strong>Indexing:</strong> Supports various types of indexes to improve query performance.</li>
              <li><strong>Aggregation Framework:</strong> Powerful tools for data aggregation and analysis.</li>
              <li><strong>Replication:</strong> Supports replica sets for high availability and data redundancy.</li>
              <li><strong>Full-Text Search:</strong> Includes text search capabilities for string content.</li>
              <li><strong>Geospatial Indexing:</strong> Built-in support for geospatial queries and indexes.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Pros:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Flexibility:</strong> The schema-less nature allows for easy adaptation to changing data structures.</li>
              <li><strong>Scalability:</strong> Horizontal scaling through sharding makes it easier to handle large data volumes and high traffic.</li>
              <li><strong>Performance:</strong> For many use cases, MongoDB can offer better performance than traditional relational databases.</li>
              <li><strong>Developer-Friendly:</strong> The document model aligns well with object-oriented programming paradigms.</li>
              <li><strong>Rich Query Language:</strong> Supports a wide range of query types, including geospatial queries and text search.</li>
              <li><strong>Real-Time Data:</strong> Well-suited for applications requiring real-time data updates and analytics.</li>
              <li><strong>Community and Ecosystem:</strong> Large community and extensive ecosystem of tools and libraries.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Cons:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Lack of Joins:</strong> No built-in support for joins, which can complicate some types of queries.</li>
              <li><strong>Memory Usage:</strong> Can be memory-intensive, especially for large datasets.</li>
              <li><strong>Limited Transaction Support:</strong> While improving, transaction support is not as robust as in some relational databases.</li>
              <li><strong>Data Duplication:</strong> The document model can lead to data duplication in some scenarios.</li>
              <li><strong>Learning Curve:</strong> Developers familiar with SQL may need time to adapt to MongoDB's query language and concepts.</li>
              <li><strong>Consistency Model:</strong> The default consistency model is not as strong as in some traditional relational databases.</li>
              <li><strong>Storage Size:</strong> Document storage can sometimes result in larger storage requirements compared to normalized relational data.</li>
            </ul>
            <h3 className="text-2xl font-semibold">Use Cases:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Content Management Systems:</strong> Storing and managing diverse content types with varying structures.</li>
              <li><strong>Real-Time Analytics:</strong> Handling high-volume data streams for real-time analysis.</li>
              <li><strong>IoT Applications:</strong> Managing data from numerous IoT devices with potentially different data structures.</li>
              <li><strong>Mobile Applications:</strong> Backend database for mobile apps, especially those with offline-first capabilities.</li>
              <li><strong>Catalog Management:</strong> Storing product catalogs with varying attributes and structures.</li>
              <li><strong>Social Networks:</strong> Managing user profiles, posts, and interactions in social media platforms.</li>
              <li><strong>Gaming Applications:</strong> Storing game states, user profiles, and leaderboards.</li>
            </ul>
          </div>
        )
      default:
        return null
    }
  }

  return (
      <>
          <div className="sticky">
             {renderNav()}
          </div>  

          <div className="container mx-auto px-4 py-8 ">
              <h1 className="text-4xl font-bold mb-8 text-center">Web Development Technologies</h1>

              <div className="mb-6">
                <div className="flex flex-wrap justify-center gap-2">
                  {technologies.map((tech) => (
                    <button
                      key={tech.id}
                      onClick={() => setActiveTech(tech.id)}
                      className={`px-4 py-2 rounded-md ${activeTech === tech.id
                          ? 'bg-blue-800 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      {tech.label}
                    </button>
                  ))}
                </div>
              </div>

            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
             {renderContent()}
            </div>
        </div></>
  )
}