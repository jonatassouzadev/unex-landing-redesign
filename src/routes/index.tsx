import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/unex/Header";
import { Hero } from "@/components/unex/Hero";
import { About, Courses, Admission, Benefits } from "@/components/unex/Sections";
import { Testimonials } from "@/components/unex/Testimonials";
import { Units, News } from "@/components/unex/UnitsNews";
import { LeadForm } from "@/components/unex/LeadForm";
import { FinalCta, Footer } from "@/components/unex/Footer";

const title = "UNEX — Centro Universitário de Excelência | Graduação na Bahia";
const description =
  "Graduação, pós-graduação e cursos técnicos reconhecidos pelo MEC. Vestibular online com resultado em 24h e bolsas de até 60%. Conheça a UNEX.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "UNEX — Centro Universitário de Excelência",
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Getúlio Vargas, 1240 — Centro",
    addressLocality: "Feira de Santana",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  telephone: "+55-75-3600-1000",
};

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Admission />
        <Benefits />
        <Testimonials />
        <Units />
        <News />
        <FinalCta />
        <LeadForm />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
