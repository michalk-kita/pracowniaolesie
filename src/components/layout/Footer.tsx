import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-forest-900 text-paper-dark py-12 md:py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl mb-6 text-paper">Pracownia O Lesie</h3>
          <p className="font-light text-sm leading-relaxed opacity-80 max-w-xs">
            Tworzymy papeterię ślubną inspirowaną naturą, z miłości do piękna i dbałością o każdy detal.
          </p>
        </div>
        
        <div>
          <h4 className="font-display text-lg mb-6 text-paper">Menu</h4>
          <ul className="space-y-3 font-light text-sm opacity-80">
            <li><Link href="/sklep" className="hover:text-gold transition-colors">Sklep</Link></li>
            <li><Link href="/o-nas" className="hover:text-gold transition-colors">O Pracowni</Link></li>
            <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link href="/kontakt" className="hover:text-gold transition-colors">Kontakt</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display text-lg mb-6 text-paper">Kontakt</h4>
          <ul className="space-y-3 font-light text-sm opacity-80">
            <li>Sylwia Oleś</li>
            <li>Joniny 223</li>
            <li>33-160 Ryglice</li>
            <li><a href="mailto:info@pracowniaolesie.pl" className="hover:text-gold transition-colors">info@pracowniaolesie.pl</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-forest-800 text-center text-xs font-light opacity-60">
        &copy; {new Date().getFullYear()} Pracownia O Lesie. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
