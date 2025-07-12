import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Kan ik bij de behandeling van mijn huisdier blijven?",
      answer: "Nee, om de veiligheid en het welzijn van zowel uw huisdier als ons team te waarborgen, vragen wij eigenaren vriendelijk om tijdens de behandeling niet aanwezig te zijn. Wij begrijpen dat u zich betrokken voelt bij het welzijn van uw huisdier, maar het is belangrijk om te weten dat onze ervaren professionals getraind zijn om uw huisdier de best mogelijke zorg te bieden. Uw aanwezigheid kan onbedoeld stress en afleiding veroorzaken voor uw huisdier en het behandelingsproces bemoeilijken. Tijdens de behandeling kunt u erop vertrouwen dat uw huisdier in goede handen is. We houden u graag op de hoogte van het verloop van de behandeling en beantwoorden al uw vragen en zorgen voor en na de afspraak. Uw begrip en medewerking helpen ons om de behandeling soepel en veilig te laten verlopen. Als u specifieke vragen heeft over de behandeling van uw huisdier, aarzel dan niet om contact met ons op te nemen. We staan klaar om u te assisteren en uw huisdier de best mogelijke zorg te bieden."
    },
    {
      question: "Waarom kan de prijs verschillen per ras of kruising?",
      answer: "Onderhoud van de vacht; niet alle vachten zijn even goed onderhouden. Goed onderhouden vachten kost minder tijd in de trimsalon dan vachten die minder goed zijn onderhouden. Gedrag; De ene hond is het gewend om op tafel te staan en staat goed stil, een andere hond is erg bewegelijk, een volgende hond wil alleen maar liggen en weer andere hond vindt het allemaal wat spannend. Verschil binnen een ras; Bij hetzelfde ras kunnen ook veel verschillende vachttypes zitten. Denk aan veel/weinig onderwol, krullen, ruwhaar etc. Castratenvacht; de vacht van een hond die gecastreerd is veranderd vaak, waardoor dit veel meerwerk kan zijn. Honden met vlooien; Honden met vlooien moeten met een speciale shampoo gewassen worden. Ook moeten we nadien de trimsalon volledig schoonmaken en ontsmetten om een vlooienplaag te voorkomen"
    },
    {
      question: "Hoe kan ik betalen?",
      answer: "Contant of via een tikkie bij het ophalen van jouw hond."
    },
    {
      question: "Hoe lang duurt een trimbehandeling?",
      answer: "De duur van een trimbehandeling kunnen we vooraf niet exact bepalen. Dit hangt af van verschillende factoren, zoals de vachtconditie, het ras en het type behandeling. Wij nemen altijd de tijd om jouw hond op een rustige en comfortabele manier te verzorgen. Geen zorgen! Zodra jouw hond klaar is, sturen we je een berichtje. Zo weet je precies wanneer je hem kunt ophalen."
    },
    {
      question: "Hoe vaak moet mijn hond getrimd worden?",
      answer: "Dit hangt af van het ras en het vachttype. Voor de meeste kleine rassen adviseer ik elke 6-8 weken. Ik geef altijd persoonlijk advies op basis van jouw hond en jullie wensen."
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