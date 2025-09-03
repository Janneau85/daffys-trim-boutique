import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-warm-white/50 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar Home
          </Button>
          
          <h1 className="text-4xl font-luxury font-bold text-black mb-4">
            Algemene Voorwaarden
          </h1>
          <p className="text-lg text-black font-elegant mb-8">
            <strong>Toepassing:</strong> Door gebruik te maken van de diensten van Daffy's Trimsalon, gaat de klant akkoord met deze algemene voorwaarden.
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-soft border border-border space-y-8">
          
          <section>
            <h2 className="text-2xl font-luxury font-bold text-black mb-4">1. Definities</h2>
            <div className="space-y-3 text-black">
              <p><strong>Trimsalon:</strong> De eigenaars van Daffy's Trimsalon, aanbieders van trim- en verzorgingsdiensten voor huisdieren.</p>
              <p><strong>Klant:</strong> Iedere persoon of entiteit die gebruik maakt van de diensten van de trimsalon.</p>
              <p><strong>Diensten:</strong> Alle diensten die worden aangeboden door de trimsalon, waaronder trimbehandelingen, gebitsverzorging, en andere gerelateerde verzorgingsdiensten voor huisdieren.</p>
              <p><strong>Huisdier:</strong> Het dier van de klant waarvoor de dienstverlening wordt uitgevoerd.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-luxury font-bold text-black mb-4">2. Afspraken en Annuleringen</h2>
            <div className="space-y-3 text-black">
              <p><strong>Annuleren van Afspraken:</strong> Afspraken kunnen kosteloos worden geannuleerd of verzet tot 24 uur van tevoren. Indien een afspraak niet wordt nagekomen of minder dan 24 uur van tevoren wordt geannuleerd, wordt de volledige kosten van de geplande behandeling in rekening gebracht.</p>
              <p><strong>Te Laat Komen:</strong> Bij een vertraging van 15 minuten of langer wordt de afspraak als no-show beschouwd en wordt de volledige behandeling in rekening gebracht.</p>
              <p><strong>Ophalen van de Hond:</strong> De hond dient binnen 30 minuten na het opgegeven ophaaltijdstip te worden opgehaald. Indien de hond later wordt opgehaald, wordt er een oppasvergoeding van €10 per 30 minuten in rekening gebracht.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-luxury font-bold text-black mb-4">3. Gedrags- en Behandelingsvoorwaarden</h2>
            <div className="space-y-3 text-black">
              <p><strong>Toestemming voor Mondinspectie:</strong> Voor gebitsbehandelingen is het noodzakelijk dat het huisdier de mondinspectie toestaat. Indien het dier agressief reageert of de behandeling niet accepteert, kan de behandeling niet doorgaan. Wees eerlijk over het gedrag van je huisdier bij het maken van de afspraak.</p>
              <p><strong>Gezondheidsinformatie:</strong> Klanten dienen de trimsalon tijdig te informeren over de gezondheid en gedragsproblemen van hun huisdier, inclusief eventuele medische aandoeningen of gedragsproblemen die de behandeling kunnen beïnvloeden.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-luxury font-bold text-black mb-4">4. Behandelingslimieten en Voorbereiding</h2>
            <div className="space-y-3 text-black">
              <p><strong>Voorbereiding op Behandeling:</strong> Geef je huisdier minimaal twee uur voor de behandeling geen eten, om misselijkheid of ongemak tijdens de behandeling te voorkomen.</p>
              <p><strong>Beperkingen bij Ernstige Gezondheidsproblemen:</strong> Bij ernstig vervuilde gebitten of andere ernstige gezondheidsproblemen, zoals losse tanden of ontstekingen, kan de behandeling niet worden uitgevoerd. In dergelijke gevallen zal de klant worden doorverwezen naar een dierenarts voor verdere zorg.</p>
              <p><strong>Herhaalbehandelingen:</strong> Bij ernstige tandplak of tandsteen kan het nodig zijn om meerdere behandelingen uit te voeren om het gebit volledig schoon te krijgen. Dit wordt altijd vooraf met de klant besproken.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-luxury font-bold text-black mb-4">5. Betalingsvoorwaarden</h2>
            <div className="space-y-3 text-black">
              <p>Betaling dient bij het ophalen van het huisdier te geschieden, tenzij anders is overeengekomen. Dit kan via een digitaal betaalverzoek of contant.</p>
              <p>Indien de klant niet op tijd betaalt, kan de trimsalon de teruggave van het behandelde dier weigeren totdat de betaling is voldaan.</p>
              <p>Indien de behandeling niet kan plaatsvinden vanwege gedragsproblemen of ernstige gezondheidsproblemen zoals losse tanden of ontstekingen, wordt het volledige bedrag van de geplande behandeling in rekening gebracht.</p>
              <p><strong>Vlooienbehandeling:</strong> Indien een huisdier vlooien blijkt te hebben tijdens de behandeling, worden extra kosten (€25,00) in rekening gebracht voor de noodzakelijke vlooienmaatregelen.</p>
              <p><strong>Prijzen en Extra Werk:</strong> De vermelde prijzen gelden voor goed onderhouden vachten zonder extreme klitten, vervilting of andere uitzonderlijke omstandigheden. Indien tijdens de behandeling blijkt dat er extra werk nodig is, zoals het verwijderen van klitten, vervilting of andere intensieve behandelingen die buiten de standaardbehandeling vallen, zullen de hieraan verbonden extra kosten aan de klant worden doorberekend tegen €60 per uur. Deze extra kosten kunnen vooraf of tijdens de behandeling met de klant worden besproken, maar dit is niet altijd mogelijk.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-luxury font-bold text-black mb-4">6. Aansprakelijkheid</h2>
            <div className="space-y-3 text-black">
              <p><strong>Schade aan Huisdieren:</strong> De trimsalon is niet aansprakelijk voor schade aan huisdieren, tenzij deze schade het gevolg is van nalatigheid van de trimsalon.</p>
              <p><strong>Verantwoordelijkheid Klant:</strong> De eigenaar van het huisdier blijft altijd aansprakelijk voor schade die door hun huisdier aan derden of eigendommen wordt veroorzaakt.</p>
              <p><strong>Informatie van de Klant:</strong> De trimsalon is niet aansprakelijk voor schade of incidenten die het gevolg zijn van onjuiste informatie die door de klant wordt verstrekt met betrekking tot hun huisdier.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-luxury font-bold text-black mb-4">7. Privacy</h2>
            <div className="space-y-3 text-black">
              <p><strong>Persoonsgegevens:</strong> De trimsalon zal alle persoonlijke gegevens van klanten en hun huisdieren vertrouwelijk behandelen en niet zonder toestemming aan derden verstrekken, behalve wanneer wettelijk verplicht.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-luxury font-bold text-black mb-4">8. Klachten</h2>
            <div className="space-y-3 text-black">
              <p><strong>Indienen van Klachten:</strong> Klachten over de dienstverlening dienen binnen 24 uur na de behandeling schriftelijk te worden gemeld. De trimsalon zal zich inspannen om het probleem naar tevredenheid op te lossen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-luxury font-bold text-black mb-4">9. Wijzigingen in de Algemene Voorwaarden</h2>
            <div className="space-y-3 text-black">
              <p>De trimsalon behoudt zich het recht voor om de algemene voorwaarden op elk moment te wijzigen. Klanten worden op de hoogte gesteld van wijzigingen die van invloed zijn op hun rechten en verplichtingen.</p>
            </div>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Button 
            variant="luxury" 
            onClick={() => navigate('/')}
            size="lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;