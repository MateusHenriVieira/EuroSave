import React, { useEffect, useState } from 'react';
import { 
  Zap, Euro, TrendingDown, ExternalLink, 
  ShieldCheck, AlertCircle, BarChart3, Globe 
} from 'lucide-react';
import { storageService } from '../services/storage';
import type { UserState, PriceDetail } from '../types';

const Popup = () => {
  const [user, setUser] = useState<UserState | null>(null);
  // Mock de dados para o design - na próxima etapa faremos o fetch real
  const [prices] = useState<PriceDetail[]>([
    { country: 'DE', price: 129.99, shipping: 0, isAvailable: true, url: '#' },
    { country: 'ES', price: 115.50, shipping: 7.50, isAvailable: true, url: '#' },
    { country: 'FR', price: 135.00, shipping: 5.00, isAvailable: true, url: '#' },
    { country: 'IT', price: 110.00, shipping: 12.00, isAvailable: true, url: '#' },
  ]);

  useEffect(() => {
    storageService.getUserState().then(setUser);
  }, []);

  if (!user) return <div className="p-8 text-center text-euro-secondary">Carregando...</div>;

  const bestPrice = [...prices].sort((a, b) => (a.price + a.shipping) - (b.price + b.shipping))[0];

  return (
    <div className="w-[360px] bg-gray-50 font-sans text-euro-secondary antialiased">
      {/* HEADER */}
      <header className="bg-euro-secondary p-4 flex justify-between items-center text-white shadow-md">
        <div className="flex items-center gap-2">
          <div className="bg-euro-primary p-1.5 rounded-lg shadow-inner">
            <Euro size={18} className="text-euro-secondary" strokeWidth={3} />
          </div>
          <span className="text-lg font-black tracking-tighter">EUROSAVE</span>
        </div>
        {user.isPremium ? (
          <div className="flex items-center gap-1 text-[10px] bg-euro-primary/20 text-euro-primary px-2 py-1 rounded-full border border-euro-primary/30">
            <ShieldCheck size={12} /> PREMIUM
          </div>
        ) : (
          <div className="text-[10px] bg-white/10 px-2 py-1 rounded-full opacity-80">FREE TRIAL</div>
        )}
      </header>

      <main className="p-4 space-y-4">
        {/* SAVINGS CARD */}
        <section className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Economizado</p>
            <p className="text-2xl font-black text-euro-secondary">€{user.totalSaved.toFixed(2)}</p>
          </div>
          <div className="bg-euro-primary/10 p-3 rounded-xl">
            <TrendingDown className="text-euro-primary" size={24} />
          </div>
        </section>

        {/* COMPARISON LIST */}
        <section className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-xs font-bold text-gray-500 flex items-center gap-1">
              <BarChart3 size={14} /> COMPARATIVO UE
            </h2>
            <span className="text-[10px] text-euro-primary font-bold">LIVE</span>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50 overflow-hidden">
            {prices.map((item) => (
              <div key={item.country} className={`p-3 flex justify-between items-center hover:bg-gray-50 transition-colors ${item === bestPrice ? 'bg-green-50/50' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold w-6">{item.country}</span>
                  <div>
                    <p className="text-xs font-bold">€{item.price.toFixed(2)}</p>
                    <p className="text-[9px] text-gray-400">+ €{item.shipping.toFixed(2)} frete</p>
                  </div>
                </div>
                {item === bestPrice && (
                  <span className="text-[9px] bg-euro-primary text-euro-secondary font-black px-2 py-0.5 rounded-md">MELHOR PREÇO</span>
                )}
                <button className="text-gray-300 hover:text-euro-primary">
                  <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        {!user.isPremium && (
          <section className="bg-euro-secondary p-4 rounded-2xl text-white space-y-3 relative overflow-hidden">
             <div className="relative z-10">
              <p className="text-xs font-medium opacity-80">Suas consultas grátis acabaram.</p>
              <p className="text-sm font-bold">Economize em todas as compras.</p>
              <button className="w-full mt-3 bg-euro-primary hover:bg-green-400 text-euro-secondary font-black py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95">
                <Zap size={16} fill="currentColor" /> DESBLOQUEAR POR €9,90
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Globe size={100} />
            </div>
          </section>
        )}
      </main>

      <footer className="p-4 text-center border-t border-gray-100">
        <p className="text-[9px] text-gray-400 font-medium">
          EuroSave v1.0 • Built for the European Single Market
        </p>
      </footer>
    </div>
  );
};

export default Popup;