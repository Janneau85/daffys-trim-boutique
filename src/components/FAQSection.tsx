import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, BOOKING_URL } from "@/lib/contact";

const FAQSection = () => {
  const faqs: { question: string; answer: ReactNode }[] = [
    {
      question: "Kan ik bij de behandeling van mijn hond blijven?",
      answer:
        "Nee. Honden zijn vaak rustiger als hun baasje er niet bij is, en dat maakt de behandeling veiliger. Zodra je hond klaar is stuur ik je een berichtje, en voor en na de afspraak beantwoord ik graag al je vragen.",
    },
    {
      question: "Waarom kan de prijs verschillen per ras of kruising?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Onderhoud van de vacht:</strong> een goed onderhouden vacht kost minder tijd dan een vacht met klitten.</li>
          <li><strong>Gedrag:</strong> de ene hond staat rustig op tafel, de andere is beweeglijk, wil alleen liggen of vindt het allemaal wat spannend.</li>
          <li><strong>Vachttype:</strong> ook binnen één ras verschillen vachten, bijvoorbeeld in onderwol, krullen of ruwhaar.</li>
          <li><strong>Castratievacht:</strong> na castratie verandert de vacht vaak, en dat kan veel extra werk zijn.</li>
          <li><strong>Vlooien:</strong> een hond met vlooien moet met een speciale shampoo gewassen worden, en daarna maak ik de salon volledig schoon en ontsmet ik alles.</li>
        </ul>
      ),
    },
    {
      question: "Hoe kan ik betalen?",
      answer: "Contant of met een Tikkie, bij het ophalen van je hond.",
    },
    {
      question: "Hoe lang duurt een trimbehandeling?",
      answer:
        "Dat hangt af van de vacht, het ras en de behandeling, dus een exacte tijd kan ik vooraf niet geven. Ik neem de tijd om je hond rustig te verzorgen en stuur je een berichtje zodra hij klaar is om opgehaald te worden.",
    },
    {
      question: "Hoe vaak moet mijn hond getrimd worden?",
      answer:
        "Dat hangt af van het ras en het vachttype. Voor de meeste kleine rassen adviseer ik elke 6 tot 8 weken. Ik geef je graag persoonlijk advies voor jouw hond.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-warm-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-black mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-black font-elegant max-w-2xl mx-auto">
            Hier vind je antwoorden op de meest gestelde vragen. Staat je vraag er niet bij?
            Stuur me gerust een berichtje!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg shadow-soft px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary font-elegant py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-elegant leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center bg-gradient-subtle p-8 rounded-lg">
          <h3 className="font-luxury text-xl text-foreground mb-4">
            Nog andere vragen?
          </h3>
          <p className="text-muted-foreground mb-6 font-elegant">
            Ik help je graag verder. Stuur een WhatsApp of plan direct online een afspraak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="luxury" size="lg" className="w-full sm:w-auto">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Afspraak maken
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
