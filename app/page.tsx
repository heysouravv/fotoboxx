import { Suspense, lazy } from 'react'
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import { LoadingSpinner } from "@/components/loading-spinner"

const AboutSection = lazy(() => import("@/components/about-section"))
const PortfolioSection = lazy(() => import("@/components/portfolio-section"))
const ServicesSection = lazy(() => import("@/components/services-section"))
const TestimonialsSection = lazy(() => import("@/components/testimonials-section"))
const ClientsSection = lazy(() => import("@/components/clients-section"))
const FAQSection = lazy(() => import("@/components/faq-section"))
const PreFooterSection = lazy(() => import("@/components/pre-footer-section"))
const Footer = lazy(() => import("@/components/footer"))

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingSpinner />}>
          <AboutSection />
          <PortfolioSection />
          <ServicesSection />
          <TestimonialsSection />
          <ClientsSection />
          <FAQSection />
          <PreFooterSection />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  )
}

