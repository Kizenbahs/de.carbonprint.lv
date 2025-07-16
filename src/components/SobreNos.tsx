import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as React from "react";

const sobreNosPosts = [
  {
    id: "sobre-1",
    title: "Individueller Service",
    summary:
      "Wir bieten einen hochwertigen 3D-Druckservice mit einem individuell angepassten Ansatz für jedes Projekt. Wir beraten Sie bei der Optimierung Ihrer Dateien und der Druckparameter, um eine schnellere Produktion, niedrigere Kosten sowie stärkere und langlebigere Bauteile zu gewährleisten.",
    image: "/img/3d-print-16.jpg",
  },
  {
    id: "sobre-2",
    title: "Umweltfreundliche Materialien",
    summary:
      "CarbonPrint vereint Innovation mit Nachhaltigkeit, indem umweltfreundliche und biologisch abbaubare Materialien wie PLA und Bio-Wood verwendet werden. PLA wird aus erneuerbaren Rohstoffen wie Maisstärke gewonnen, während Bio-Wood natürliche Holzfasern mit pflanzlichen Polymeren kombiniert und eine umweltfreundliche Alternative zu herkömmlichem Kunststoff bietet. Unser Ziel ist es, hochwertige 3D-Druckprodukte zu entwickeln, die den Anforderungen der modernen Zeit entsprechen und gleichzeitig die Umweltbelastung reduzieren.",
    image: "/img/eco-3d-print-thumb.png",
  },
  {
    id: "sobre-3",
    title: "Erfahrung und Qualität",
    summary:
      "Die Qualität unserer Dienstleistungen basiert auf über 15 Jahren Erfahrung in der Metallverarbeitung, CNC-Programmierung und Maschinenbedienung. Dank dieses Know-hows verstehen wir die Anforderungen unserer Kunden genau und bieten praxisnahe sowie technisch fundierte Lösungen an.",
    image: "/img/3d-print-15.jpg",
  },
  {
    id: "sobre-4",
    title: "Modellierung und Design",
    summary:
      "Falls erforderlich, erstellen wir 3D-Modelle von Grund auf – mit modernster Designsoftware auf Weltklasseniveau. Wir entwickeln Lösungen schnell und effizient – mit allen notwendigen Funktionen und Optimierungen, ohne Ihre Zeit zu verschwenden. Sie erhalten präzise und termingerechte Ergebnisse, die sofort einsatzbereit sind.",
    image: "/img/3d-print-02.jpg",
  },
];

const SobreNos = () => {
  return (
    <section className="pt-24 pb-24 bg-white">
      <div className="container mx-auto flex flex-col items-center lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 mt-0 text-gray-900 bg-gray-100 border border-gray-300">
            Wir sind Spezialisten für 3D-Druck
          </Badge>
          <h2 className="mb-3 mt-0 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-gray-900">
            Über uns
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch">
          {sobreNosPosts.map((post, index) => {
            // Special handling for the second card (sobre-2) with spotlight effect
            if (post.id === "sobre-2") {
              return (
                <div key={post.id} className="relative">
                  <Card className="grid grid-rows-[auto_1fr] pt-0 bg-white border border-gray-200 h-full flex flex-col relative z-10">
                    <div className="aspect-[16/9] w-full bg-gray-100 border-b border-gray-200 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <h3 className="text-lg font-semibold md:text-xl text-gray-900 mb-0">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-700 mt-0">{post.summary}</p>
                    </CardContent>
                  </Card>
                  
                  {/* Auto-running spotlight border */}
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      zIndex: 20,
                    }}
                    animate={{
                      background: [
                        "radial-gradient(600px circle at 0% 0%, rgba(16, 185, 129, 0.2), transparent 40%)",
                        "radial-gradient(600px circle at 100% 0%, rgba(16, 185, 129, 0.2), transparent 40%)",
                        "radial-gradient(600px circle at 100% 100%, rgba(16, 185, 129, 0.2), transparent 40%)",
                        "radial-gradient(600px circle at 0% 100%, rgba(16, 185, 129, 0.2), transparent 40%)",
                        "radial-gradient(600px circle at 0% 0%, rgba(16, 185, 129, 0.2), transparent 40%)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }}
                  />
                  
                  {/* Auto-running border highlight */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-green-400 pointer-events-none"
                    style={{
                      zIndex: 21,
                    }}
                    animate={{
                      background: [
                        "radial-gradient(600px circle at 0% 0%, rgba(16, 185, 129, 0.3), transparent 40%)",
                        "radial-gradient(600px circle at 100% 0%, rgba(16, 185, 129, 0.3), transparent 40%)",
                        "radial-gradient(600px circle at 100% 100%, rgba(16, 185, 129, 0.3), transparent 40%)",
                        "radial-gradient(600px circle at 0% 100%, rgba(16, 185, 129, 0.3), transparent 40%)",
                        "radial-gradient(600px circle at 0% 0%, rgba(16, 185, 129, 0.3), transparent 40%)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }}
                  />
                </div>
              );
            }
            
            // Regular cards for the rest
            return (
              <Card key={post.id} className="grid grid-rows-[auto_1fr] pt-0 bg-white border border-gray-200 h-full flex flex-col">
                <div className="aspect-[16/9] w-full bg-gray-100 border-b border-gray-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-lg font-semibold md:text-xl text-gray-900 mb-0">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mt-0">{post.summary}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { SobreNos }; 