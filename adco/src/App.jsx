import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout"; // New Layout Component
import { Helmet } from "react-helmet";
import TagManager from "react-gtm-module";
// Import your components
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Service";
import RecentWork from "./components/RecentWork";
import Counter from "./components/Counter";
import Update from "./components/Update";
import Workcycle from "./components/Workcycle";
import FAQ from "./components/FAQ";
import Testimonial from "./components/Testimonial";
import Message from "./components/Message";
import Footer from "./components/Footer";
import AboutBanner from "./components/About/AboutBanner";
import AboutUs from "./components/About/AboutUs";
import AboutUpdates from "./components/About/AboutUpdates";
import AboutProcess from "./components/About/AboutProcess";
import ServicesBanner from "./components/Services/ServicesBanner";
import AllServices from "./components/Services/AllServices";
import DetailedBanner from "./components/Services/detailedService/DetailedBanner";
import DetailService1 from "./components/Services/detailedService/DetailService1";
import DetailService2 from "./components/Services/detailedService/DetailService2";
import DetailService3 from "./components/Services/detailedService/DetailService3";
import ContactBanner from "./components/Contact/ContactBanner";
import ContactForm from "./components/Contact/ContactForm";
import ProjectMainBanner from "./components/Projects/ProjectMainbanner";
import AllProjects from "./components/Projects/AllProjects";
import GalleryMainBanner from "./components/Gallery/GalleryMainbanner";
import AllImages from "./components/Gallery/AlImages";
import BlogBanner from "./components/Blogs/BlogBanner";
import Blog from "./components/Blogs/Blog";
import BlogConstruction from "./components/Blogs/blog-construction";
import BlogDetail2 from "./components/Blogs/blog-construction-expert";
import BlogDetail3 from "./components/Blogs/blog-construction-civil";
import BlogDetail4 from "./components/Blogs/blog-urban-development";
import BlogDetail5 from "./components/Blogs/blog-civil-jubail";
import BlogDetail6 from "./components/Blogs/blog-asphalt-paving-road-infrastructure";
import BlogDetail7 from "./components/Blogs/blog-formwork-civil-engineering-services";
import BlogDetail8 from "./components/Blogs/blog-industrial-construction-in-jubail-leading-companies";
import BlogDetail9 from "./components/Blogs/blog-asphalt-paving-company-in-jubail";
import BlogDetail10 from "./components/Blogs/top-construction-companies-excellence-engineering-development";
import BlogDetail11 from "./components/Blogs/durable-concrete-solutions-jubail";

function App() {
  const tagManagerArgs = {
    gtmId: "GTM-K6266X7T", // Your GTM Container ID
  };
  TagManager.initialize(tagManagerArgs); // Initialize GTM
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Layout>
          <Helmet>
            <title>
              ADCO Global Construction & Industrial Equipment Supplier KSA
            </title>
            <meta
              name="description"
              content="ADCO Global provides top-quality construction and industrial equipment & spare parts across Saudi Arabia, serving oil & gas, cement, and manufacturing."
            />
            <meta
              name="keywords"
              content="Construction equipment Saudi Arabia, industrial equipment KSA, machinery supply Saudi Arabia, oil and gas equipment, cement industry supplier, manufacturing equipment KSA, spare parts supplier Saudi Arabia, heavy machinery KSA, construction solutions KSA, construction service in Jubail"
            />
            <meta
              property="og:title"
              content="ADCO Global Construction & Industrial Equipment Supplier KSA"
            />
            <meta
              property="og:description"
              content="ADCO Global provides top-quality construction and industrial equipment & spare parts across Saudi Arabia, serving oil & gas, cement, and manufacturing."
            />
            <link rel="canonical" href="https://adco.com.co/" />
          </Helmet>
          <Nav />
          <Banner />
          <About />
          <Service />
          <RecentWork />
          <Counter />
          <AboutUpdates />
          <AboutProcess />
          <FAQ />
          <Testimonial />
          <Message />
          <Footer />
        </Layout>
        </>
      ),
    },
    {
      path: "/about-us",
      element: (
        <>
        <Layout>
          <Helmet>
            <title>
              About ADCO Global: Leading Construction Equipment Supplier
            </title>
            <meta
              name="description"
              content="Learn about ADCO Global, a top provider of construction and industrial equipment & spare parts in Saudi Arabia, serving oil & gas, cement, and manufacturing."
            />
            <meta
              name="keywords"
              content="ADCO Global, about ADCO Global, construction equipment supplier, industrial equipment Saudi Arabia, oil and gas industry, cement industry, manufacturing sector, company profile, equipment provider KSA"
            />
            <meta
              property="og:title"
              content="About ADCO Global: Leading Construction Equipment Supplier"
            />
            <meta
              property="og:description"
              content="Learn about ADCO Global, a top provider of construction and industrial equipment & spare parts in Saudi Arabia, serving oil & gas, cement, and manufacturing."
            />
            <link rel="canonical" href="https://adco.com.co/about-us" />
          </Helmet>
          <Nav />
          <AboutBanner />
          <AboutUs />
          <AboutUpdates />
          <AboutProcess />
          <Counter />
          <Testimonial />
          <Footer />
        </Layout>
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
        <Layout>
          <Helmet>
            <title>ADCO Global: Comprehensive Services in Saudi Arabia</title>
            <meta
              name="description"
              content="Discover ADCO Global's range of services, including sourcing and supplying top-quality construction and industrial equipment & spare parts across Saudi Arabia."
            />
            <meta
              name="keywords"
              content="ADCO Global services, construction equipment supply, industrial equipment Saudi Arabia, spare parts sourcing, equipment procurement KSA, industrial solutions, construction machinery supplier"
            />
            <meta
              property="og:title"
              content="ADCO Global: Comprehensive Services in Saudi Arabia"
            />
            <meta
              property="og:description"
              content="Discover ADCO Global's range of services, including sourcing and supplying top-quality construction and industrial equipment & spare parts across Saudi Arabia."
            />
            <link rel="canonical" href="https://adco.com.co/services" />
          </Helmet>
          <Nav />
          <ServicesBanner />
          <AllServices />
          <AboutUpdates />
          <Footer />
        </Layout>
        </>
      ),
    },
    {
      path: "/service/concretework",
      element: (
        <>
        <Layout>
          <Helmet>
            <title>
              ADCO Global: Expert Concrete Construction Services KSA
            </title>
            <meta
              name="description"
              content="ADCO Global provides professional concrete construction services across Saudi Arabia, specializing in formwork, structural work, and high-quality finishes."
            />
            <meta
              name="keywords"
              content="Concrete construction Saudi Arabia, formwork services KSA, structural concrete work, ADCO Global, concrete finishes, construction services KSA, concrete contractor Saudi Arabia"
            />
            <meta
              property="og:title"
              content="ADCO Global: Expert Concrete Construction Services KSA"
            />
            <meta
              property="og:description"
              content="ADCO Global provides professional concrete construction services across Saudi Arabia, specializing in formwork, structural work, and high-quality finishes."
            />
            <link
              rel="canonical"
              href="https://adco.com.co/service/concretework"
            />
          </Helmet>

          <Nav />
          <DetailedBanner />
          <DetailService2 />
          <AboutUpdates />
          <Footer />
        </Layout>
        </>
      ),
    },
    {
      path: "/service/asphaltworks",
      element: (
        <>
        <Layout>
          <Helmet>
            <title>ADCO Global: Professional Asphalt Paving Services KSA</title>
            <meta
              name="description"
              content="ADCO Global offers expert asphalt paving, road maintenance, and earthwork services across Saudi Arabia, ensuring durable, high-quality infrastructure solutions."
            />
            <meta
              name="keywords"
              content="Asphalt paving Saudi Arabia, road maintenance KSA, earthwork services, ADCO Global, infrastructure solutions, asphalt contractors, paving services, road construction Saudi Arabia"
            />
            <meta
              property="og:title"
              content="ADCO Global: Professional Asphalt Paving Services KSA"
            />
            <meta
              property="og:description"
              content="ADCO Global offers expert asphalt paving, road maintenance, and earthwork services across Saudi Arabia, ensuring durable, high-quality infrastructure solutions."
            />
            <link
              rel="canonical"
              href="https://adco.com.co/service/asphaltworks"
            />
          </Helmet>
          <Nav />
          <DetailedBanner />
          <DetailService1 />
          <AboutUpdates />
          <Footer />
        </Layout>
        </>
      ),
    },
    {
      path: "/service/roadconstruction",
      element: (
        <>
        <Layout>
          <Helmet>
            <title>
              ADCO Global: Road Construction Services in Saudi Arabia
            </title>
            <meta
              name="description"
              content="ADCO Global specializes in comprehensive road construction services across Saudi Arabia, providing durable, efficient, and high-quality infrastructure solutions."
            />
            <meta
              name="keywords"
              content="Road construction Saudi Arabia, infrastructure development KSA, highway construction, ADCO Global, road maintenance services, transportation infrastructure, civil engineering Saudi Arabia"
            />
            <meta
              property="og:title"
              content="ADCO Global: Road Construction Services in Saudi Arabia"
            />
            <meta
              property="og:description"
              content="ADCO Global specializes in comprehensive road construction services across Saudi Arabia, providing durable, efficient, and high-quality infrastructure solutions."
            />
            <link
              rel="canonical"
              href="https://adco.com.co/service/roadconstruction"
            />
          </Helmet>
          <Nav />
          <DetailedBanner />
          <DetailService3 />
          <AboutUpdates />
          <Footer />
        </Layout>
        </>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <>
        <Layout>
          <Helmet>
            <title>
              Contact ADCO Global: Industrial Equipment Supplier KSA
            </title>
            <meta
              name="description"
              content="Get in touch with ADCO Global for top-quality construction and industrial equipment & spare parts in Saudi Arabia. Contact us today for your project needs."
            />
            <meta
              name="keywords"
              content="ADCO Global contact, industrial equipment supplier Saudi Arabia, construction equipment KSA, spare parts supplier, project inquiries, equipment solutions, contact information"
            />
            <meta
              property="og:title"
              content="Contact ADCO Global: Industrial Equipment Supplier KSA"
            />
            <meta
              property="og:description"
              content="Get in touch with ADCO Global for top-quality construction and industrial equipment & spare parts in Saudi Arabia. Contact us today for your project needs."
            />
            <link rel="canonical" href="https://adco.com.co/contact-us" />
          </Helmet>
          <Nav />
          <ContactBanner />
          <ContactForm />
          <AboutUpdates />
          <Footer />
        </Layout>
        </>
      ),
    },
    {
      path: "/projects",
      element: (
        <>
        <Layout>
          <Helmet>
            <title>ADCO Global: Construction & Industrial Projects KSA</title>
            <meta
              name="description"
              content="Explore ADCO Global's completed projects in Saudi Arabia, showcasing our expertise in delivering top-quality construction and industrial equipment solutions."
            />
            <meta
              name="keywords"
              content="ADCO Global projects, construction projects Saudi Arabia, industrial equipment projects, completed projects, project portfolio, Saudi Arabia construction, equipment solutions, project showcase"
            />
            <meta
              property="og:title"
              content="ADCO Global: Construction & Industrial Projects KSA"
            />
            <meta
              property="og:description"
              content="Explore ADCO Global's completed projects in Saudi Arabia, showcasing our expertise in delivering top-quality construction and industrial equipment solutions."
            />
            <link rel="canonical" href="https://adco.com.co/projects" />
            
          </Helmet>
          <Nav />
          <ProjectMainBanner />
          <AllProjects />
          <AboutUpdates />
          <Footer />
        </Layout>
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
        <Layout>
          <Helmet>
            <title>
              ADCO Global: Project Gallery of Our Equipment in Action
            </title>
            <meta
              name="description"
              content="ADCO Global's gallery showcasing our construction and industrial equipment in action across various projects in Saudi Arabia, delivering quality solutions."
            />
            <meta
              property="og:title"
              content="ADCO Global: Project Gallery of Our Equipment in Action"
            />
            <meta
              property="og:description"
              content="ADCO Global's gallery showcasing our construction and industrial equipment in action across various projects in Saudi Arabia, delivering quality solutions."
            />
            <link rel="canonical" href="https://adco.com.co/gallery" />
          </Helmet>
          <Nav />
          <GalleryMainBanner />
          <AllImages />
          <AboutUpdates />
          <Footer />
        </Layout>
        </>
      ),
    },
    {
      path: "/blogs",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <Blog/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/blog-construction",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogConstruction/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/blog-construction-expert",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail2/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/blog-construction-civil",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail3/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/blog-urban-development",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail4/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/blog-civil-jubail",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail5/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/blog-asphalt-paving-road-infrastructure",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail6/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/formwork-civil-engineering-services",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail7/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/industrial-construction-in-jubail-leading-companies",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail8/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/industrial-construction-in-jubail-leading-companies",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail9/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/top-construction-companies-excellence-engineering-development",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail10/>
          <Footer />
        </Layout>
      ),
    },
    {
      path: "/durable-concrete-solutions-jubail",
      element: (
        <Layout>
          <Nav />
          <BlogBanner />
          <BlogDetail11/>
          <Footer />
        </Layout>
      ),
    },
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
