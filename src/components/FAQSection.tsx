import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Waarom mag ik er niet bij blijven tijdens de behandeling?",
      answer: "Voor de beste verzorging is het belangrijk dat jouw hondje zich volledig kan concentreren op mij als trimster. Eigenaren in de buurt kunnen afleidend werken of stress veroorzaken. Jouw hondje is in veilige handen en ik zorg ervoor dat hij/zij zich op zijn gemak voelt. Je kunt natuurlijk altijd even bellen om te horen hoe het gaat!"
    },
    {
      question: "Wanneer mag mijn hond voor het eerst getrimd worden?",
      answer: "Puppy's kunnen vanaf 16 weken (4 maanden) voor het eerst komen, mits ze volledig zijn ingeënt. Voor de eerste keer bied ik een speciale introductieprijs van €25 aan. We houden het kort en positief, zodat jouw puppy een fijne eerste ervaring heeft. Dit legt de basis voor toekomstige bezoeken."
    },
    {
      question: "Wat als mijn hond vlooien heeft?",
      answer: "Helaas kan ik honden met vlooien niet behandelen in mijn salon. Dit is ter bescherming van andere hondjes en om besmetting te voorkomen. Behandel eerst de vlooien bij je dierenarts, en maak daarna een nieuwe afspraak. Ik begrijp dat dit vervelend is, maar het is belangrijk voor de gezondheid van alle hondjes."
    },
    {
      question: "Hoe kan ik betalen?",
      answer: "Je kunt bij mij betalen met contant geld, pinnen of via Tikkie. Betaling vindt plaats na de behandeling. Ik verstuur ook graag een Tikkie als dat makkelijker voor je is. Fooi is natuurlijk welkom maar nooit verplicht - een tevreden hondje en eigenaar is de beste beloning!"
    },
    {
      question: "Hoe lang duurt een behandeling?",
      answer: "Voor kleine honden rekenen we 1 tot 1,5 uur, voor middelgrote honden 1,5 tot 2 uur. De eerste keer kan wat langer duren omdat ik tijd neem om jouw hondje te leren kennen. Ik werk nooit met haast - elk hondje krijgt de tijd die nodig is voor een ontspannen behandeling."
    },
    {
      question: "Mijn hond is angstig bij de trimmer, wat nu?",
      answer: "Geen probleem! Ik heb veel ervaring met angstige hondjes. We beginnen rustig, laten jouw hond eerst wennen aan de salon en aan mij. Soms verdelen we de behandeling over meerdere korte sessies. Met geduld en een rustige aanpak komen we er altijd uit. Het welzijn van jouw hondje staat voorop."
    },
    {
      question: "Kan ik mijn Pomeranian ook bij u laten trimmen?",
      answer: "Zeker! Pomeranians zijn mijn specialiteit. Ik ben gespecialiseerd in de unieke vacht van Pomeranians en weet precis hoe ik hun prachtige vacht het beste kan behandelen. Of je nu gaat voor de klassieke teddy bear look of een andere stijl, ik zorg ervoor dat jouw Pomeranian er perfect uitziet."
    },
    {
      question: "Hoe vaak moet mijn hond getrimd worden?",
      answer: "Dit hangt af van het ras en het vachttype. Voor de meeste kleine rassen adviseer ik elke 6-8 weken. Pomeranians kunnen om de 8-10 weken, tenzij je de vacht korter houdt. Ik geef altijd persoonlijk advies op basis van jouw hond en jullie wensen."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-luxury font-bold text-foreground mb-4">
            Veel Gestelde Vragen
          </h2>
          <p className="text-lg text-muted-foreground font-elegant max-w-2xl mx-auto">
            Hier vind je antwoorden op de meest gestelde vragen. Heb je nog andere vragen? 
            Neem gerust contact op!
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
            Ik help je graag verder. Stuur een berichtje via WhatsApp of vul het contactformulier in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/31612345678', '_blank')}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-elegant"
            >
              WhatsApp Vraag
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-elegant"
            >
              Contactformulier
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;