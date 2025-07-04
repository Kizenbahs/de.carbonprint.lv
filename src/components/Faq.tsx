import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GalleryWithLightbox from "./GalleryWithLightbox";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-0",
    question: "1. Warum sollten Sie uns wählen?",
    answer:
      "Von der Idee zum fertigen Bauteil: Hochleistungsprodukte aus carbonverstärktem Nylon – präzise, robust und schnell geliefert.",
  },
  {
    id: "faq-1",
    question: "2. Bieten Sie individuellen 3D-Druck an?",
    answer:
      "Ja, wir sind auf individuellen 3D-Druck spezialisiert!\nWir können Ihre eigenen Designs drucken oder Ihnen helfen, maßgeschneiderte Produkte von Grund auf zu entwickeln.\nSenden Sie uns einfach Ihre Idee oder eine Design-Datei – wir arbeiten mit Ihnen zusammen, um sie zum Leben zu erwecken.",
  },
  {
    id: "faq-2",
    question: "3. In welchem Format soll ich meine Idee einreichen?",
    answer:
      "Sie können uns Ihre Idee in nahezu jedem Format zusenden – sei es ein einfaches Foto, eine Skizze oder eine detaillierte technische Zeichnung.\nSobald wir Ihre Vorlage erhalten haben, setzen wir uns mit Ihnen in Verbindung, um gemeinsam zu besprechen, wie wir daraus ein druckbares 3D-Modell erstellen können.",
  },
  {
    id: "faq-3",
    question: "4. Können Sie meine Skizze in eine druckbare 3D-Datei umwandeln?",
    answer:
      "Natürlich!\nWenn Sie eine handgezeichnete Skizze oder nur ein grobes Konzept haben, helfen wir Ihnen gerne dabei, daraus ein 3D-Modell zu erstellen, das druckbereit ist.\nUnser Team begleitet den gesamten Designprozess, um sicherzustellen, dass die finale Datei Ihren Erwartungen entspricht und für den 3D-Druck optimiert ist.",
  },
  {
    id: "faq-4",
    question: "5. Sind die gedruckten Teile präzise?",
    answer:
      "Ja, unsere Produkte sind robust und präzise.\nWir verwenden 3D-Drucker und Materialien von hoher Qualität, um sicherzustellen, dass alle Details exakt wiedergegeben werden und das Endergebnis den geforderten Toleranzen entspricht.",
  },
  {
    id: "faq-5",
    question: "6. Verwenden Sie hochwertige Materialien?",
    answer: "Ja, wir verwenden ausschließlich hochwertige Materialien von führenden Herstellern der Branche.\nDas gewährleistet eine ausgezeichnete Haltbarkeit, hohe Präzision und ein professionelles Finish bei jedem gedruckten Bauteil.",
  },
  {
    id: "faq-6",
    question: "7. Wie erhalte ich meine Bestellung?",
    answer:
      "Alle Bestellungen werden ausschließlich über den Paketdienst DPD innerhalb Portugals geliefert.\nSie können zwischen Lieferung nach Hause oder an einen nahegelegenen DPD-Paketshop wählen.\nSobald Ihre Bestellung versandbereit ist, erhalten Sie eine Benachrichtigung zur Abholung oder Zustellung.",
  },
  {
    id: "faq-7",
    question: "8. Wie erfolgt die Bezahlung der Bestellung?",
    answer:
      "Die Bezahlung erfolgt entweder über unseren Etsy-Shop oder per Banküberweisung auf Grundlage der von uns ausgestellten Rechnung.",
  },
  {
    id: "faq-8",
    question: "9. Wie kann ich mit Ihnen in Kontakt treten?",
    answer:
      "Der einfachste Weg, uns zu kontaktieren, ist per Telefon oder WhatsApp.\nAlternativ können Sie auch das Kontaktformular auf unserer Website ausfüllen – wir melden uns so schnell wie möglich bei Ihnen.",
  },
];

const Faq = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "https://www.shadcnblocks.com",
}: Faq3Props) => {
  return (
    <section id="faq" className="pt-24 pb-32 bg-black">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto items-start">
          {/* Left FAQ Block - Complete Clone */}
          <div className="w-full max-w-xl mx-auto flex flex-col items-center">
            <Badge className="mt-0 mb-6 mx-auto text-gray-900 bg-gray-200 border border-gray-300">
              Warum Sie sich für uns entscheiden sollten
            </Badge>
            <h2 className="text-3xl font-semibold lg:text-4xl mb-8 text-center">
              {heading}
            </h2>
            <div className="bg-black rounded-xl shadow-xl border border-gray-700 p-8 flex flex-col justify-center text-white w-full">
              <Accordion
                type="single"
                collapsible
                defaultValue="left-faq-0"
                className="w-full"
              >
                {items.map((item) => (
                  <AccordionItem key={`left-${item.id}`} value={`left-${item.id}`}>
                    <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 text-white data-[state=open]:text-yellow-400 font-medium sm:py-1 lg:py-2 lg:text-lg text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="sm:mb-1 lg:mb-2 text-white text-left">
                      <div className="lg:text-lg text-white text-left">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right Gallery Block */}
          <div className="flex flex-col">
            <GalleryWithLightbox />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq };