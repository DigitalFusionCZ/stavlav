'use client';

import React, { useState, useEffect } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  items: string[];
}

const ServiceCard = ({ icon, title, items }: ServiceCardProps) => (
  <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <img src={icon} alt="" className="w-8 h-8 mr-4 text-sky-600" />
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
    </div>
    <ul className="space-y-2 text-slate-600 list-inside">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function StavlavPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'STAVLAV, s.r.o. | Komplexní stavební a montážní práce';

    const svgIcon = `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#0284c7"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20px" dy=".1em" fill="white" font-weight="600">S</text>
      </svg>
    `;
    const favicon = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (favicon) {
      favicon.href = `data:image/svg+xml,${encodeURIComponent(svgIcon)}`;
    }
  }, []);

  const navLinks = [
    { name: 'Služby', href: '#sluzby' },
    { name: 'O nás', href: '#o-nas' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const services = {
    stavebni: {
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/building-skyscraper.svg',
      title: 'Stavební práce',
      items: ['Provádění staveb, jejich změn a odstraňování', 'Zednické a zámečnické práce', 'Zemní práce a zakládání staveb', 'Fasády a dokončovací práce']
    },
    instalace: {
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/tool.svg',
      title: 'Technické instalace',
      items: ['Vodoinstalatérství a topenářství', 'Montáž a opravy chladících zařízení a tepelných čerpadel', 'Výroba a instalace elektrických strojů a přístrojů']
    },
    odborne: {
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/certificate.svg',
      title: 'Revize a projektování',
      items: ['Revize a zkoušky plynových a elektrických zařízení', 'Revize tlakových zařízení a nádob na plyny', 'Projektová činnost ve výstavbě', 'Projektování elektrických zařízení', 'Nakládání s nebezpečnými odpady']
    }
  };

  return (
    <div className="bg-slate-50 text-slate-700 font-sans">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold text-slate-800">STAVLAV <span className="text-sky-600">s.r.o.</span></a>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-600 hover:text-sky-600 transition-colors duration-300 font-medium">
                  {link.name}
                </a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden md:inline-block bg-sky-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300">Kontaktujte nás</a>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-slate-600 hover:bg-slate-100">
                <img src={isMenuOpen ? 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg' : 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg'} alt="Menu" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setIsMenuOpen(false)}></div>
        )}
        <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-5 border-b">
            <a href="#" className="text-xl font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>STAVLAV <span className="text-sky-600">s.r.o.</span></a>
          </div>
          <nav className="flex flex-col p-5 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-sky-600 transition-colors duration-300 text-lg">
                {link.name}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="mt-4 inline-block text-center bg-sky-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300 w-full">Kontaktujte nás</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative bg-slate-800 text-white py-24 sm:py-32 lg:py-40">
          <div className="absolute inset-0">
            <img src="/images/content-1.jpg" alt="Stavební projekt" className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight lg:leading-tight">STAVBY LAVICKÝ</h1>
            <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">Na nás se můžete spolehnout.</p>
            <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">Komplexní řešení pro vaše stavební a montážní projekty ve Žďáru nad Sázavou a okolí.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#sluzby" className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300 text-lg">Prozkoumat služby</a>
              <a href="#kontakt" className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 text-lg">Rychlý kontakt</a>
            </div>
          </div>
        </section>

        <section id="sluzby" className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Naše služby</h2>
              <p className="mt-4 text-lg text-slate-600">Poskytujeme široké spektrum odborných prací od základů až po finální revize. Zajišťujeme kompletní servis pro Váš projekt.</p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard icon={services.stavebni.icon} title={services.stavebni.title} items={services.stavebni.items} />
              <ServiceCard icon={services.instalace.icon} title={services.instalace.title} items={services.instalace.items} />
              <ServiceCard icon={services.odborne.icon} title={services.odborne.title} items={services.odborne.items} />
            </div>
          </div>
        </section>

        <section id="o-nas" className="bg-white py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Rodinná firma s tradicí a osobním přístupem</h2>
                <p className="mt-6 text-lg text-slate-600">Jsme STAVLAV, s.r.o., stavební firma ze Žďáru nad Sázavou, založená na pevných rodinných hodnotách – spolehlivosti, odbornosti a poctivém řemesle. Naše jméno, odvozené od "Stavby Lavický", je pro nás závazkem kvality.</p>
                <p className="mt-4 text-lg text-slate-600">Díky širokému záběru služeb jsme schopni realizovat Váš projekt komplexně, od projektové dokumentace přes hrubou stavbu až po specializované technické instalace a revize. Každý projekt je pro nás jedinečný a věnujeme mu maximální péči a pozornost.</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                 <img src="/images/content-2.jpg" alt="Realizace stavby" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-20 sm:py-24 lg:py-32 bg-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Kontaktujte nás</h2>
              <p className="mt-4 text-lg text-slate-600">Máte dotaz nebo zájem o nezávaznou konzultaci? Neváhejte se nám ozvat. Jsme tu pro Vás.</p>
            </div>
            <div className="mt-16 bg-white p-8 sm:p-12 rounded-xl shadow-lg max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-800 border-b pb-3">Firemní údaje</h3>
                <div>
                  <p className="font-bold text-slate-800">STAVLAV, s.r.o.</p>
                  <p>Jamská 2486/8, 591 01 Žďár n. S.</p>
                  <p>IČ: 22828505</p>
                </div>
                <div>
                  <a href="mailto:firma@stavlav.cz" className="flex items-center text-sky-600 hover:text-sky-800 transition-colors">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email" className="w-5 h-5 mr-2"/>
                    <span>firma@stavlav.cz</span>
                  </a>
                </div>
              </div>
              <div className="space-y-8">
                 <h3 className="text-2xl font-semibold text-slate-800 border-b pb-3">Jednatelé společnosti</h3>
                <div>
                  <p className="text-lg font-semibold text-slate-900">František Lavický</p>
                  <div className="mt-2 space-y-2 text-slate-700">
                    <a href="tel:+420733682202" className="flex items-center hover:text-sky-700"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" alt="Telefon" className="w-5 h-5 mr-3 text-slate-400"/>733 682 202</a>
                    <a href="mailto:lavicky@stavlav.cz" className="flex items-center hover:text-sky-700"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email" className="w-5 h-5 mr-3 text-slate-400"/>lavicky@stavlav.cz</a>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">ing. Pavel Lavický</p>
                  <div className="mt-2 space-y-2 text-slate-700">
                    <a href="tel:+420739971141" className="flex items-center hover:text-sky-700"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" alt="Telefon" className="w-5 h-5 mr-3 text-slate-400"/>739 971 141</a>
                    <a href="mailto:p.lavicky@stavlav.cz" className="flex items-center hover:text-sky-700"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email" className="w-5 h-5 mr-3 text-slate-400"/>p.lavicky@stavlav.cz</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p>&copy; {new Date().getFullYear()} STAVLAV, s.r.o. Všechna práva vyhrazena.</p>
          <p className="mt-2 text-sm">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white underline">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
}
