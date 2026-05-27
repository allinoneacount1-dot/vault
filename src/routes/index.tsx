import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/marco/Navbar";
import { Hero } from "@/components/marco/Hero";
import {
  About, Ecosystem, Features, CommandCenter, Partnerships, SocialProof, Contact, Footer,
} from "@/components/marco/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MARCOVAULT | Multi-Chain Alpha & Web3 Intelligence" },
      { name: "description", content: "MARCOVAULT is a futuristic Web3 personal branding platform focused on multi-chain intelligence, AI workflows, crypto trading systems, and community-driven alpha." },
      { property: "og:title", content: "MARCOVAULT | Multi-Chain Alpha & Web3 Intelligence" },
      { property: "og:description", content: "Navigate the noise. Enter the vault. Multi-chain alpha, AI workflows and sniper-grade execution." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Marco",
        url: "/",
        sameAs: [
          "https://x.com/vaultmarco",
          "https://t.me/DxmZone",
          "https://t.me/DexMultichain",
        ],
        jobTitle: "Multi-Chain Alpha Operator",
        worksFor: { "@type": "Organization", name: "MARCOVAULT" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Ecosystem />
      <Features />
      <CommandCenter />
      <Partnerships />
      <SocialProof />
      <Contact />
      <Footer />
    </main>
  );
}
