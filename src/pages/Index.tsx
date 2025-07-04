import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import React from "react";
import { SobreNos } from "@/components/SobreNos";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero 
        badge="✨ Willkommen in der Welt des 3D-Drucks"
        heading="3D-Druck und Design für höchste Ansprüche"
        description="Carbon-Nylon-3D-Druck und maßgeschneiderte Designservices – für Profis, Enthusiasten und Unternehmen"
        buttons={{
          primary: {
            text: "Kontaktieren Sie uns",
            url: "#contact"
          },
          secondary: {
            text: "Warum wir",
            url: "#faq"
          }
        }}
        video={{
          youtubeId: "MAFuVi_Zgyw",
          title: "YouTube video player"
        }}
        primaryButtonClassName="bg-[#f3b112] hover:bg-[#e0a20f] text-black border-none"
      />
      <SobreNos />
      <div id="faq">
        <Faq 
          heading="Häufig gestellte fragen"
          description="Encontre respostas para perguntas comuns sobre impressão 3D e os nossos serviços. Não encontrou o que procura? Contacte a nossa equipa de apoio."
          supportHeading="Need personalized help?"
          supportDescription="Our experienced developers are here to help you implement these components successfully in your projects."
          supportButtonText="Get Support"
          supportButtonUrl="#"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};



export default Index;
