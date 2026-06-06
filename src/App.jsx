import { useState, useEffect, useRef } from "react";

const NAV_LINKLERI = [
  { etiket: "Ana Sayfa", href: "#ana-sayfa" },
  { etiket: "Hizmetler", href: "#hizmetler" },
  { etiket: "Galeri", href: "#galeri" },
  { etiket: "İletişim", href: "#iletisim" },
];

const HIZMETLER = [
  {
    no: "01",
    baslik: "Standart Revizyon",
    aciklama:
      "Arızalı turbo ve manifoldlarınızın söküm, temizlik, parça değişimi ve hassas montaj işlemleri garantili olarak gerçekleştirilir.",
    etiket: "En Çok Tercih Edilen",
  },
  {
    no: "02",
    baslik: "Hibrit Turbo",
    aciklama:
      "Performans tutkunları için özel CNC tornalama ile pervanelerin büyütülmesi, güç artırımı ve özel hibrit dönüşümler sağlanır.",
    etiket: "Güç Odaklı",
  },
  {
    no: "03",
    baslik: "CNC Torna ve Balans",
    aciklama:
      "Hassas CNC tezgâhlarımızda mil onarımı, gövde tornalama ve sesi ile titreşimi kesen milimetrik balans ayarı yapılır.",
    etiket: "Hassas İşçilik",
  },
  {
    no: "04",
    baslik: "Manifold Onarımı",
    aciklama:
      "Çatlak, delik veya deforme olmuş egzoz ve emme manifoldlarının kaynaklanması, düzeltilmesi ve yenilenmesi yapılır.",
    etiket: "Uzman Kaynak",
  },
];

const GALERI = [
  "https://lh3.googleusercontent.com/d/1ek8GgMegkemYhKrh0Q9GdiXXFOBHgXev",
  "https://lh3.googleusercontent.com/d/1ZGh2YCxr_U7TKem0TKViepAn78Qe1aWT",
  "https://lh3.googleusercontent.com/d/1ydVR1dVez_P-6c4CyxL-7oupcOhyvOJL",
  "https://lh3.googleusercontent.com/d/1fzjodZKmJbjFMN5JJQT8Fe-bGh-NHvkD",
  "https://lh3.googleusercontent.com/d/1oIz3uLr4fs6Lw1WY7paykKAXfyLZeGOV",
];

const ISTATISTIKLER = [
  { deger: "2.000+", etiket: "Tamamlanan İş" },
  { deger: "12", etiket: "Yıllık Deneyim" },
  { deger: "%100", etiket: "Müşteri Memnuniyeti" },
  { deger: "24sa", etiket: "Hızlı Teslimat" },
];

const TICKER_OGELER = [
  "Turbo Revizyonu",
  "Manifold Onarımı",
  "CNC Torna",
  "Hibrit Turbo",
  "Balans Ayarı",
  "Mil Onarımı",
  "Pervane Büyütme",
  "Garanti Belgeli İşçilik",
  "Gövde Tornalama",
  "Egzoz Manifoldu",
  "Emme Manifoldu",
  "Performans Artırımı",
];

const INSTAGRAM_LINKI = "https://www.instagram.com/tly_cnc_makina_sanayi_/";
const WHATSAPP_LINKI =
  "https://wa.me/905335524280?text=Merhaba,%20web%20sitenizden%20ulaşıyorum.%20Turbo%20ve%20manifold%20revizyonu%20hakkında%20bilgi%20almak%20istiyorum.";

function InstagramIkonu({ boyut = 20 }) {
  return (
    <svg
      width={boyut}
      height={boyut}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIkonu({ boyut = 18 }) {
  return (
    <svg width={boyut} height={boyut} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function HaritaIkonu({ boyut = 14 }) {
  return (
    <svg width={boyut} height={boyut} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function TelefonIkonu({ boyut = 14 }) {
  return (
    <svg width={boyut} height={boyut} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72 2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function PostaIkonu({ boyut = 14 }) {
  return (
    <svg width={boyut} height={boyut} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function SaatIkonu({ boyut = 14 }) {
  return (
    <svg width={boyut} height={boyut} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

function OkIkonu({ boyut = 16 }) {
  return (
    <svg width={boyut} height={boyut} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function App() {
  const [secilenGorsel, setSecilenGorsel] = useState(null);
  const [aktifBolum, setAktifBolum] = useState("ana-sayfa");
  const [menuAcik, setMenuAcik] = useState(false);
  const [sayaclar, setSayaclar] = useState([0, 0, 0, 0]);
  const [sayacBasladi, setSayacBasladi] = useState(false);
  const istatRef = useRef(null);
  const imleçRef = useRef(null);
  const halkaRef = useRef(null);

  // Sayaç animasyonu
  useEffect(() => {
    const hedefler = [2000, 12, 100, 24];
    if (!sayacBasladi) return;
    const sureler = [2000, 1500, 1800, 1200];
    const intervals = hedefler.map((hedef, i) => {
      const adim = Math.ceil(hedef / 60);
      return setInterval(() => {
        setSayaclar((prev) => {
          const yeni = [...prev];
          if (yeni[i] < hedef) yeni[i] = Math.min(yeni[i] + adim, hedef);
          return yeni;
        });
      }, sureler[i] / 60);
    });
    return () => intervals.forEach(clearInterval);
  }, [sayacBasladi]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !sayacBasladi) setSayacBasladi(true); },
      { threshold: 0.3 }
    );
    if (istatRef.current) obs.observe(istatRef.current);
    return () => obs.disconnect();
  }, [sayacBasladi]);

  // Aktif bölüm takibi
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setAktifBolum(e.target.id); }),
      { threshold: 0.25 }
    );
    ["ana-sayfa", "hizmetler", "galeri", "iletisim"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Özel imleç — sadece masaüstü
  useEffect(() => {
    if (window.innerWidth < 1024) return;
    let hedefX = -200, hedefY = -200, mevcutX = -200, mevcutY = -200, raf;
    const fareHareket = (e) => { hedefX = e.clientX; hedefY = e.clientY; };
    const animate = () => {
      mevcutX += (hedefX - mevcutX) * 0.13;
      mevcutY += (hedefY - mevcutY) * 0.13;
      if (imleçRef.current) imleçRef.current.style.transform = `translate(${hedefX - 4}px, ${hedefY - 4}px)`;
      if (halkaRef.current) halkaRef.current.style.transform = `translate(${mevcutX - 20}px, ${mevcutY - 20}px)`;
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", fareHareket);
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", fareHareket); cancelAnimationFrame(raf); };
  }, []);

  const sayacGoster = (i) => {
    if (i === 0) return sayaclar[0].toLocaleString("tr-TR") + "+";
    if (i === 1) return sayaclar[1];
    if (i === 2) return "%" + sayaclar[2];
    return sayaclar[3] + "sa";
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#060606", color: "#ede5d5", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @media (min-width: 1024px) { * { cursor: none !important; } }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #060606; }
        ::-webkit-scrollbar-thumb { background: #FFCC00; border-radius: 2px; }
        ::selection { background: #FFCC00; color: #000; }

        /* İmleç */
        .imlec-nokta {
          position: fixed; top: 0; left: 0; width: 8px; height: 8px;
          background: #FFCC00; border-radius: 50%; pointer-events: none;
          z-index: 9999; mix-blend-mode: difference; will-change: transform;
        }
        .imlec-halka {
          position: fixed; top: 0; left: 0; width: 40px; height: 40px;
          border: 1px solid rgba(255,204,0,0.45); border-radius: 50%;
          pointer-events: none; z-index: 9998; will-change: transform;
          transition: width 0.25s, height 0.25s, border-color 0.25s;
        }
        @media (max-width: 1023px) { .imlec-nokta, .imlec-halka { display: none; } }

        /* Gürültü katmanı */
        body::after {
          content: ''; position: fixed; inset: 0; z-index: 1; pointer-events: none;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* Navbar */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 500;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 56px;
          background: rgba(6,6,6,0.88); backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,204,0,0.06);
          transition: padding 0.3s;
        }
        @media (max-width: 768px) { .nav { padding: 16px 20px; } }

        .logo { font-size: 22px; font-weight: 900; letter-spacing: 0.06em; text-decoration: none; color: #fff; display: flex; align-items: baseline; gap: 2px; }
        .logo-sari { color: #FFCC00; }
        .logo-kucuk { font-size: 8px; font-weight: 400; letter-spacing: 0.3em; color: #3a3a3a; margin-left: 8px; text-transform: uppercase; }

        .nav-liste { display: flex; gap: 36px; list-style: none; margin: 0; padding: 0; }
        @media (max-width: 900px) { .nav-liste { display: none; } }

        .nav-link {
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
          text-decoration: none; color: #484848; position: relative; padding-bottom: 4px; transition: color 0.3s;
        }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1.5px; background: #FFCC00; transition: width 0.4s cubic-bezier(0.4,0,0.2,1); }
        .nav-link:hover, .nav-link.aktif { color: #FFCC00; }
        .nav-link:hover::after, .nav-link.aktif::after { width: 100%; }

        .nav-sag { display: flex; align-items: center; gap: 10px; }

        .ig-buton {
          display: flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border: 1px solid #1c1c1c; color: #444;
          text-decoration: none; transition: all 0.35s; position: relative; overflow: hidden; flex-shrink: 0;
        }
        .ig-buton::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
          opacity: 0; transition: opacity 0.35s;
        }
        .ig-buton:hover::before { opacity: 1; }
        .ig-buton:hover { border-color: transparent; color: #fff; transform: scale(1.05); }
        .ig-buton svg { position: relative; z-index: 1; }

        .wp-buton {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 10px 22px; background: #FFCC00; color: #000;
          font-family: 'Poppins', sans-serif; font-size: 9px; font-weight: 800;
          letter-spacing: 0.22em; text-transform: uppercase; text-decoration: none;
          border: none; transition: all 0.35s; position: relative; overflow: hidden; flex-shrink: 0;
        }
        .wp-buton::before { content: ''; position: absolute; inset: 0; background: #000; transform: translateX(-101%); transition: transform 0.38s cubic-bezier(0.4,0,0.2,1); }
        .wp-buton:hover::before { transform: translateX(0); }
        .wp-buton:hover { color: #FFCC00; }
        .wp-buton > * { position: relative; z-index: 1; }

        /* Hamburger menü */
        .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 6px; cursor: pointer; }
        @media (max-width: 900px) { .hamburger { display: flex; } }
        .hamburger span { display: block; width: 24px; height: 1.5px; background: #FFCC00; transition: all 0.3s; transform-origin: center; }
        .hamburger.acik span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.acik span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.acik span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* Mobil menü */
        .mobil-menu {
          position: fixed; inset: 0; background: #030303; z-index: 400;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px;
          transform: translateX(100%); transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .mobil-menu.acik { transform: translateX(0); }
        .mobil-menu a { font-size: 40px; font-weight: 900; color: #222; text-decoration: none; text-transform: uppercase; letter-spacing: 0.04em; transition: color 0.3s; }
        .mobil-menu a:hover { color: #FFCC00; }
        .mobil-menu .mobil-sosyal { display: flex; gap: 16px; margin-top: 16px; }

        /* Hero */
        .hero {
          min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end;
          padding: 0 56px 88px; padding-top: 100px; position: relative; overflow: hidden;
        }
        @media (max-width: 768px) { .hero { padding: 100px 20px 60px; } }

        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(rgba(255,204,0,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.022) 1px, transparent 1px);
          background-size: 68px 68px;
        }
        .hero-cember {
          position: absolute; top: 50%; left: 60%; border-radius: 50%;
          border: 1px solid rgba(255,204,0,0.035); pointer-events: none;
        }
        @media (max-width: 768px) { .hero-cember { display: none; } }
        .hero-cember-1 { width: 600px; height: 600px; transform: translate(-50%,-50%); animation: don 50s linear infinite; }
        .hero-cember-2 { width: 440px; height: 440px; transform: translate(-50%,-50%); border-color: rgba(255,204,0,0.055); animation: don 30s linear infinite reverse; }
        .hero-cember-3 { width: 260px; height: 260px; transform: translate(-50%,-50%); border-color: rgba(255,204,0,0.08); animation: don 18s linear infinite; }
        @keyframes don { to { transform: translate(-50%,-50%) rotate(360deg); } }

        .hero-konum {
          position: absolute; top: 108px; right: 56px;
          display: flex; align-items: center; gap: 7px;
          font-size: 8.5px; letter-spacing: 0.25em; color: #333; font-weight: 500; text-transform: uppercase;
        }
        @media (max-width: 768px) { .hero-konum { display: none; } }
        .nabiz { width: 7px; height: 7px; background: #FFCC00; border-radius: 50%; animation: nabiz 2.2s ease-in-out infinite; flex-shrink: 0; }
        @keyframes nabiz { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.25;transform:scale(0.65)} }

        .hero-ic { position: relative; z-index: 2; }
        .ust-etiket {
          display: inline-flex; align-items: center; gap: 12px; margin-bottom: 22px;
          font-size: 9px; font-weight: 700; letter-spacing: 0.4em; color: #FFCC00; text-transform: uppercase;
          animation: yukariGel 1s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }
        .ust-etiket::before { content: ''; display: block; width: 36px; height: 1.5px; background: #FFCC00; }

        .hero-baslik {
          font-size: clamp(58px, 9.5vw, 132px); font-weight: 900; line-height: 0.87;
          letter-spacing: -0.03em; text-transform: uppercase; margin: 0 0 32px;
          animation: yukariGel 1s cubic-bezier(0.16,1,0.3,1) 0.25s both;
        }
        @media (max-width: 600px) { .hero-baslik { font-size: 48px; } }
        .hero-baslik-sari { color: #FFCC00; display: block; }
        .hero-baslik-beyaz { color: #fff; display: block; }
        .hero-baslik-hayalet { color: rgba(255,255,255,0.05); display: block; }

        .hero-alt { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 28px; }
        .hero-aciklama {
          font-size: 13.5px; color: #484848; line-height: 1.85; font-weight: 300;
          max-width: 460px; letter-spacing: 0.01em;
          animation: yukariGel 1s cubic-bezier(0.16,1,0.3,1) 0.4s both;
        }
        .hero-butonlar {
          display: flex; gap: 10px; flex-wrap: wrap;
          animation: yukariGel 1s cubic-bezier(0.16,1,0.3,1) 0.55s both;
        }
        .cizgi-buton {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 11px 24px; background: transparent; border: 1px solid #1c1c1c; color: #444;
          font-family: 'Poppins', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; text-decoration: none; transition: all 0.3s;
        }
        .cizgi-buton:hover { border-color: #FFCC00; color: #FFCC00; }
        @keyframes yukariGel { from { opacity:0; transform:translateY(44px); } to { opacity:1; transform:translateY(0); } }

        /* Ticker */
        .ticker-dis { overflow: hidden; background: #FFCC00; flex-shrink: 0; }
        .ticker-ic { display: flex; align-items: center; animation: tikla 26s linear infinite; white-space: nowrap; width: max-content; }
        @keyframes tikla { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        .ticker-oge {
          display: inline-flex; align-items: center; gap: 14px;
          font-size: 11.5px; font-weight: 800; letter-spacing: 0.18em;
          text-transform: uppercase; color: #000; padding: 13px 22px;
        }
        .ticker-oge::after { content: '◆'; font-size: 7px; color: rgba(0,0,0,0.3); }

        /* İstatistikler */
        .istat-grid { display: grid; grid-template-columns: repeat(4,1fr); border-bottom: 1px solid #0e0e0e; }
        @media (max-width: 700px) { .istat-grid { grid-template-columns: repeat(2,1fr); } }
        .istat-kart {
          padding: 44px 32px; border-right: 1px solid #0e0e0e;
          position: relative; overflow: hidden; transition: background 0.4s;
        }
        .istat-kart:last-child { border-right: none; }
        @media (max-width: 700px) {
          .istat-kart:nth-child(2) { border-right: none; }
          .istat-kart:nth-child(3) { border-top: 1px solid #0e0e0e; }
          .istat-kart:nth-child(4) { border-right: none; border-top: 1px solid #0e0e0e; }
        }
        .istat-kart::after { content:''; position:absolute; bottom:0; left:0; width:0; height:2px; background:#FFCC00; transition:width 0.55s ease; }
        .istat-kart:hover { background: #0b0b0b; }
        .istat-kart:hover::after { width: 100%; }
        .istat-sayi { font-size: clamp(36px,4vw,58px); font-weight: 900; color: #FFCC00; letter-spacing:-0.025em; line-height:1; margin-bottom:8px; font-variant-numeric: tabular-nums; }
        .istat-etiket { font-size: 9px; letter-spacing:0.28em; color:#282828; text-transform:uppercase; font-weight:700; }

        /* Bölüm etiketi */
        .bolum-etiketi { display:flex; align-items:center; gap:11px; font-size:8.5px; font-weight:700; letter-spacing:0.42em; color:#FFCC00; text-transform:uppercase; margin-bottom:18px; }
        .bolum-etiketi::before { content:''; display:block; width:28px; height:1.5px; background:#FFCC00; flex-shrink:0; }

        /* Hizmetler */
        .hizmet-grid { display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid #0e0e0e; }
        @media (max-width: 900px) { .hizmet-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width: 500px) { .hizmet-grid { grid-template-columns:1fr; } }
        .hizmet-kart {
          padding: 44px 32px; background: #080808; border-right:1px solid #0e0e0e;
          position:relative; overflow:hidden; transition:background 0.4s, transform 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        @media (max-width: 900px) {
          .hizmet-kart:nth-child(2) { border-right: none; }
          .hizmet-kart:nth-child(3) { border-top:1px solid #0e0e0e; }
          .hizmet-kart:nth-child(4) { border-right:none; border-top:1px solid #0e0e0e; }
        }
        @media (max-width: 500px) { .hizmet-kart { border-right: none !important; border-top:1px solid #0e0e0e; } .hizmet-kart:first-child { border-top:none; } }
        .hizmet-kart:last-child { border-right:none; }
        .hizmet-kart::before { content:''; position:absolute; top:0; left:0; width:100%; height:3px; background:#FFCC00; transform:scaleX(0); transform-origin:left; transition:transform 0.5s cubic-bezier(0.16,1,0.3,1); }
        .hizmet-kart:hover { background:#0d0d0d; transform:translateY(-5px); box-shadow:0 24px 64px rgba(0,0,0,0.55); }
        .hizmet-kart:hover::before { transform:scaleX(1); }
        .hizmet-no { font-size:72px; font-weight:900; color:#0f0f0f; line-height:1; margin-bottom:18px; letter-spacing:-0.04em; transition:color 0.4s; user-select:none; }
        .hizmet-kart:hover .hizmet-no { color:#1a1a1a; }
        .hizmet-etiket-kucuk { display:inline-block; font-size:7.5px; font-weight:800; letter-spacing:0.3em; color:#FFCC00; text-transform:uppercase; border:1px solid rgba(255,204,0,0.25); padding:3px 10px; margin-bottom:14px; }
        .hizmet-baslik { font-size:17px; font-weight:800; color:#fff; text-transform:uppercase; letter-spacing:0.03em; margin-bottom:13px; }
        .hizmet-aciklama { font-size:12.5px; color:#383838; font-weight:300; line-height:1.9; }
        .hizmet-alt { margin-top:30px; display:flex; align-items:center; gap:8px; font-size:8px; letter-spacing:0.3em; color:#FFCC00; text-transform:uppercase; font-weight:800; transition:gap 0.3s; }
        .hizmet-alt::before { content:''; display:block; width:18px; height:1px; background:#FFCC00; transition:width 0.35s; }
        .hizmet-kart:hover .hizmet-alt { gap:12px; }
        .hizmet-kart:hover .hizmet-alt::before { width:28px; }

        /* "Neden Biz?" bandı */
        .neden-biz { padding:80px 56px; border-bottom:1px solid #0e0e0e; background:#040404; }
        @media (max-width: 768px) { .neden-biz { padding:60px 20px; } }
        .neden-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:#0e0e0e; margin-top:56px; }
        @media (max-width: 700px) { .neden-grid { grid-template-columns:1fr; } }
        .neden-kart { background:#060606; padding:40px 32px; position:relative; overflow:hidden; transition:background 0.3s; }
        .neden-kart:hover { background:#0a0a0a; }
        .neden-simge { font-size:28px; margin-bottom:18px; display:block; line-height:1; }
        .neden-baslik { font-size:15px; font-weight:800; color:#fff; letter-spacing:0.02em; margin-bottom:10px; }
        .neden-aciklama { font-size:12px; color:#333; font-weight:300; line-height:1.85; }
        .neden-kart::after { content:''; position:absolute; bottom:0; left:0; width:0; height:2px; background:#FFCC00; transition:width 0.45s; }
        .neden-kart:hover::after { width:100%; }

        /* Galeri */
        .galeri-bolum { padding:100px 56px; background:#030303; border-bottom:1px solid #0e0e0e; }
        @media (max-width: 768px) { .galeri-bolum { padding:70px 20px; } }
        .galeri-ust { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:56px; flex-wrap:wrap; gap:16px; }
        .galeri-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:4px; }
        @media (max-width: 900px) { .galeri-grid { grid-template-columns:repeat(3,1fr); } }
        @media (max-width: 500px) { .galeri-grid { grid-template-columns:repeat(2,1fr); } }
        .galeri-kart { aspect-ratio:1; overflow:hidden; position:relative; background:#0a0a0a; cursor:zoom-in; }
        .galeri-kart img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.5s; filter:grayscale(100%) brightness(0.4) contrast(1.15); }
        .galeri-kart:hover img { transform:scale(1.1); filter:grayscale(0%) brightness(0.88); }
        .galeri-bindirme { position:absolute; inset:0; display:flex; align-items:flex-end; padding:16px; background:linear-gradient(to top,rgba(0,0,0,0.82) 0%,transparent 55%); opacity:0; transition:opacity 0.35s; }
        .galeri-kart:hover .galeri-bindirme { opacity:1; }
        .galeri-bindirme-yazi { font-size:8px; letter-spacing:0.3em; color:#FFCC00; font-weight:800; text-transform:uppercase; }

        /* Modal */
        .modal-zemin { position:fixed; inset:0; background:rgba(0,0,0,0.97); z-index:800; display:flex; align-items:center; justify-content:center; padding:40px; animation:belir 0.3s ease; cursor:zoom-out; }
        @keyframes belir { from{opacity:0} to{opacity:1} }
        .modal-kapat { position:fixed; top:24px; right:24px; width:50px; height:50px; border:1px solid #202020; background:transparent; color:#555; font-size:17px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.3s; z-index:801; font-family:'Poppins',sans-serif; }
        .modal-kapat:hover { border-color:#FFCC00; color:#FFCC00; }
        .modal-gorsel { max-width:90vw; max-height:86vh; object-fit:contain; border:1px solid #1a1a1a; box-shadow:0 0 0 1px #FFCC00, 0 48px 120px rgba(0,0,0,0.85); }

        /* İletişim / Footer */
        .iletisim-bolum { background:#060606; border-top:1px solid #0e0e0e; }
        .iletisim-ic { max-width:1400px; margin:0 auto; padding:100px 56px 72px; display:grid; grid-template-columns:1fr 1fr; gap:96px; }
        @media (max-width: 900px) { .iletisim-ic { grid-template-columns:1fr; gap:56px; padding:70px 20px 56px; } }

        .iletisim-satiri { display:flex; align-items:flex-start; gap:15px; padding:18px 0; border-bottom:1px solid #0c0c0c; text-decoration:none; color:inherit; transition:padding-left 0.3s; }
        .iletisim-satiri:last-child { border-bottom:none; }
        .iletisim-satiri:hover { padding-left:8px; }
        .iletisim-satiri:hover .iletisim-ikon { border-color:#FFCC00; color:#FFCC00; }
        .iletisim-ikon { width:38px; height:38px; border:1px solid #161616; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all 0.3s; color:#333; }
        .iletisim-ust { font-size:7.5px; letter-spacing:0.35em; color:#282828; font-weight:700; text-transform:uppercase; margin-bottom:3px; }
        .iletisim-deger { font-size:13px; color:#4e4e4e; font-weight:300; line-height:1.75; }

        .marka-kutusu { border:1px solid #0f0f0f; padding:48px; display:flex; flex-direction:column; justify-content:space-between; height:100%; min-height:360px; position:relative; overflow:hidden; }
        @media (max-width: 768px) { .marka-kutusu { padding:32px; min-height:auto; } }
        .marka-kutusu::before { content:''; position:absolute; bottom:0; right:0; width:200px; height:200px; background:radial-gradient(circle, rgba(255,204,0,0.045) 0%, transparent 70%); pointer-events:none; }
        .marka-yazi { font-size:clamp(52px,7vw,96px); font-weight:900; line-height:0.82; letter-spacing:-0.03em; text-transform:uppercase; }
        .marka-alt { font-size:12.5px; color:#2c2c2c; font-weight:300; line-height:1.8; margin-top:18px; max-width:280px; }

        .alt-bar { border-top:1px solid #0a0a0a; padding:22px 56px; max-width:1400px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; }
        @media (max-width: 768px) { .alt-bar { padding:18px 20px; } }
        .alt-bar-yazi { font-size:8px; letter-spacing:0.22em; color:#1c1c1c; text-transform:uppercase; font-weight:600; }

        /* Scroll to top butonu */
        .yukari-btn { position:fixed; bottom:28px; right:28px; width:44px; height:44px; background:#FFCC00; border:none; display:flex; align-items:center; justify-content:center; cursor:pointer; z-index:300; transition:transform 0.3s, background 0.3s; }
        .yukari-btn:hover { transform:translateY(-3px); background:#fff; }
        @media (max-width: 768px) { .yukari-btn { bottom:20px; right:16px; width:38px; height:38px; } }
      `}</style>

      {/* Özel imleç */}
      <div ref={imleçRef} className="imlec-nokta" />
      <div ref={halkaRef} className="imlec-halka" />

      {/* Mobil menü */}
      <div className={`mobil-menu ${menuAcik ? "acik" : ""}`}>
        {NAV_LINKLERI.map(({ etiket, href }) => (
          <a key={href} href={href} onClick={() => setMenuAcik(false)}>{etiket}</a>
        ))}
        <div className="mobil-sosyal">
          <a href={INSTAGRAM_LINKI} target="_blank" rel="noopener noreferrer" className="ig-buton" title="Instagram'da Takip Et">
            <InstagramIkonu boyut={20} />
          </a>
          <a href={WHATSAPP_LINKI} target="_blank" rel="noopener noreferrer" className="wp-buton" style={{ padding: "10px 20px", fontSize: "9px" }}>
            <WhatsAppIkonu boyut={14} /><span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Nav */}
      <nav className="nav">
        <a href="#ana-sayfa" className="logo">
          TLY <span className="logo-sari">CNC</span>
          <span className="logo-kucuk">Makine</span>
        </a>
        <ul className="nav-liste">
          {NAV_LINKLERI.map(({ etiket, href }) => (
            <li key={href}>
              <a href={href} className={`nav-link ${aktifBolum === href.slice(1) ? "aktif" : ""}`}>{etiket}</a>
            </li>
          ))}
        </ul>
        <div className="nav-sag">
          <a href={INSTAGRAM_LINKI} target="_blank" rel="noopener noreferrer" className="ig-buton" title="Instagram'da Takip Et">
            <InstagramIkonu boyut={18} />
          </a>
          <a href={WHATSAPP_LINKI} target="_blank" rel="noopener noreferrer" className="wp-buton">
            <WhatsAppIkonu boyut={15} />
            <span style={{ display: window.innerWidth < 400 ? "none" : "inline" }}>WhatsApp</span>
          </a>
          <button className={`hamburger ${menuAcik ? "acik" : ""}`} onClick={() => setMenuAcik(!menuAcik)} aria-label="Menüyü Aç">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="ana-sayfa" className="hero">
        <div className="hero-grid" />
        <div className="hero-cember hero-cember-1" />
        <div className="hero-cember hero-cember-2" />
        <div className="hero-cember hero-cember-3" />

        <div className="hero-konum">
          <span className="nabiz" />
          Gaziantep / Şehitkamil
          <span style={{ margin: "0 6px", color: "#222" }}>—</span>
          08:30–18:30
        </div>

        <div className="hero-ic">
          <p className="ust-etiket">Profesyonel CNC Turbo Merkezi</p>
          <h1 className="hero-baslik">
            <span className="hero-baslik-beyaz">Garantili</span>
            <span className="hero-baslik-sari">Turbo &amp;</span>
            <span className="hero-baslik-beyaz">Manifold</span>
            <span className="hero-baslik-hayalet">Revizyonu</span>
          </h1>
          <div className="hero-alt">
            <p className="hero-aciklama">
              Hassas CNC işçiliği ve en yüksek standartlarla turbo ile manifold arızalarınıza kalıcı, garantili çözümler sunuyoruz. Gaziantep'in lider turbo revizyon atölyesi.
            </p>
            <div className="hero-butonlar">
              <a href={WHATSAPP_LINKI} target="_blank" rel="noopener noreferrer" className="wp-buton" style={{ padding: "14px 30px", fontSize: "10px" }}>
                <WhatsAppIkonu boyut={16} />
                <span>İletişime Geç</span>
              </a>
              <a href="#galeri" className="cizgi-buton">
                <span>İşçiliğimizi Gör</span>
                <OkIkonu boyut={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker-dis">
        <div className="ticker-ic">
          {[...TICKER_OGELER, ...TICKER_OGELER].map((oge, i) => (
            <span key={i} className="ticker-oge">{oge}</span>
          ))}
        </div>
      </div>

      {/* İstatistikler */}
      <div className="istat-grid" ref={istatRef}>
        {ISTATISTIKLER.map(({ etiket }, i) => (
          <div key={i} className="istat-kart">
            <div className="istat-sayi">{sayacGoster(i)}</div>
            <div className="istat-etiket">{etiket}</div>
          </div>
        ))}
      </div>

      {/* Hizmetler */}
      <section id="hizmetler" style={{ paddingBottom: "0", borderBottom: "1px solid #0e0e0e", scrollMarginTop: "80px" }}>
        <div style={{ padding: "96px 56px 64px" }}>
          <div className="bolum-etiketi">Uzmanlık Alanlarımız</div>
          <h2 style={{ fontSize: "clamp(44px,6vw,76px)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 0.88, margin: 0 }}>
            Neler <span style={{ color: "#FFCC00" }}>Yapıyoruz?</span>
          </h2>
        </div>
        <div className="hizmet-grid">
          {HIZMETLER.map((h, i) => (
            <div key={i} className="hizmet-kart">
              <div className="hizmet-no">{h.no}</div>
              <span className="hizmet-etiket-kucuk">{h.etiket}</span>
              <h3 className="hizmet-baslik">{h.baslik}</h3>
              <p className="hizmet-aciklama">{h.aciklama}</p>
              <div className="hizmet-alt">Fiyat Al</div>
            </div>
          ))}
        </div>
      </section>

      {/* Neden Biz */}
      <div className="neden-biz">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="bolum-etiketi">Farkımız</div>
          <h2 style={{ fontSize: "clamp(40px,5.5vw,70px)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 0.88, margin: 0 }}>
            Neden <span style={{ color: "#FFCC00" }}>Bizi</span> Seçmelisiniz?
          </h2>
          <div className="neden-grid">
            {[
              { simge: "🏆", baslik: "Garanti Belgeli İşçilik", aciklama: "Tüm revizyon ve onarım işlemlerimiz garanti belgesiyle teslim edilir. Güven önce gelir." },
              { simge: "⚙️", baslik: "CNC Hassasiyeti", aciklama: "Mikrometre hassasiyetinde CNC tezgâhlarımız ile her iş kusursuz tolaransa göre işlenir." },
              { simge: "⚡", baslik: "Hızlı Teslimat", aciklama: "Çoğu revizyon işi aynı gün veya 24 saat içinde tamamlanarak teslim edilir." },
              { simge: "🔬", baslik: "Dijital Balans", aciklama: "En ileri dijital balans makinelerimizle titreşim sıfıra indirilir, turbo ömrü uzatılır." },
              { simge: "🛡️", baslik: "Orijinal Parça", aciklama: "Yalnızca orijinal ve kalite sertifikalı yedek parçalar kullanılır, ucuz malzemeye hayır." },
              { simge: "📞", baslik: "Satış Sonrası Destek", aciklama: "İşiniz bittikten sonra da yanınızdayız. Her soru için bizi arayabilirsiniz." },
            ].map((m, i) => (
              <div key={i} className="neden-kart">
                <span className="neden-simge">{m.simge}</span>
                <div className="neden-baslik">{m.baslik}</div>
                <p className="neden-aciklama">{m.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Galeri */}
      <section id="galeri" className="galeri-bolum" style={{ scrollMarginTop: "80px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="galeri-ust">
            <div>
              <div className="bolum-etiketi">Referanslarımız</div>
              <h2 style={{ fontSize: "clamp(44px,6vw,76px)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 0.88, margin: 0 }}>
                İşçi<span style={{ color: "#FFCC00" }}>liğimiz</span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
              <span style={{ fontSize: "8.5px", letterSpacing: "0.3em", color: "#282828", textTransform: "uppercase", fontWeight: 600 }}>
                Büyütmek için tıklayın
              </span>
              <a href={INSTAGRAM_LINKI} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#444", fontSize: "9px", letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#FFCC00"}
                onMouseLeave={e => e.currentTarget.style.color = "#444"}
              >
                <InstagramIkonu boyut={14} />
                <span>Daha Fazlası İçin Instagram</span>
              </a>
            </div>
          </div>
          <div className="galeri-grid">
            {GALERI.map((gorsel, i) => (
              <div key={i} className="galeri-kart" onClick={() => setSecilenGorsel(gorsel)}>
                <img src={gorsel} alt={`CNC İşlem ${i + 1}`} loading="lazy" />
                <div className="galeri-bindirme">
                  <span className="galeri-bindirme-yazi">Büyüt</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim + Footer */}
      <footer id="iletisim" className="iletisim-bolum" style={{ scrollMarginTop: "80px" }}>
        <div className="iletisim-ic">
          {/* Sol kolon */}
          <div>
            <div className="bolum-etiketi">Bize Ulaşın</div>
            <h2 style={{ fontSize: "clamp(38px,5vw,66px)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 0.88, margin: "0 0 48px" }}>
              Turbo<br />
              <span style={{ color: "#FFCC00" }}>Sorununuz</span><br />
              Çözülür.
            </h2>

            <a href="https://maps.app.goo.gl/PrjnqsTKrxXjLfGb8" target="_blank" rel="noopener noreferrer" className="iletisim-satiri">
              <div className="iletisim-ikon"><HaritaIkonu /></div>
              <div>
                <div className="iletisim-ust">Adres</div>
                <div className="iletisim-deger">Küsget Küçük Sanayi Sitesi No:28<br />27110 Şehitkamil / Gaziantep</div>
              </div>
            </a>

            <a href="tel:+905335524280" className="iletisim-satiri">
              <div className="iletisim-ikon"><TelefonIkonu /></div>
              <div>
                <div className="iletisim-ust">Telefon</div>
                <div className="iletisim-deger">+90 533 552 42 80</div>
              </div>
            </a>

            <a href="mailto:info@tlycncmakine.com" className="iletisim-satiri">
              <div className="iletisim-ikon"><PostaIkonu /></div>
              <div>
                <div className="iletisim-ust">E-Posta</div>
                <div className="iletisim-deger">info@tlycncmakine.com</div>
              </div>
            </a>

            <div className="iletisim-satiri" style={{ cursor: "default" }}>
              <div className="iletisim-ikon"><SaatIkonu /></div>
              <div>
                <div className="iletisim-ust">Çalışma Saatleri</div>
                <div className="iletisim-deger">Pazartesi — Cumartesi<br />08:30 — 18:30</div>
              </div>
            </div>

            <a href={INSTAGRAM_LINKI} target="_blank" rel="noopener noreferrer" className="iletisim-satiri">
              <div className="iletisim-ikon"><InstagramIkonu boyut={14} /></div>
              <div>
                <div className="iletisim-ust">Instagram</div>
                <div className="iletisim-deger">@tly_cnc_makina_sanayi_</div>
              </div>
            </a>
          </div>

          {/* Sağ kolon */}
          <div className="marka-kutusu">
            <div>
              <div className="marka-yazi">
                <div style={{ color: "#111" }}>TLY</div>
                <div style={{ color: "#FFCC00" }}>CNC</div>
                <div style={{ color: "#0d0d0d" }}>MKN.</div>
              </div>
              <p className="marka-alt">
                Garantili turbo revizyonu, manifold onarımı ve profesyonel CNC makine mühendisliği hizmetleri. Gaziantep'in güvenilir adresi.
              </p>
            </div>
            <a href={WHATSAPP_LINKI} target="_blank" rel="noopener noreferrer" className="wp-buton" style={{ marginTop: "40px", alignSelf: "flex-start", padding: "14px 30px", fontSize: "10px" }}>
              <WhatsAppIkonu boyut={16} />
              <span>Fiyat Teklifi Al</span>
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #0a0a0a" }}>
          <div className="alt-bar">
            <span className="alt-bar-yazi">© 2026 TLY CNC Makine — Tüm Hakları Saklıdır</span>
            <span className="alt-bar-yazi">Gaziantep, Türkiye</span>
          </div>
        </div>
      </footer>

      {/* Yukarı çık butonu */}
      <button className="yukari-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Yukarı çık">
        <OkIkonu boyut={18} />
      </button>

      {/* Galeri Modalı */}
      {secilenGorsel && (
        <div className="modal-zemin" onClick={() => setSecilenGorsel(null)}>
          <button className="modal-kapat" onClick={() => setSecilenGorsel(null)}>✕</button>
          <img src={secilenGorsel} alt="Büyütülmüş Görsel" className="modal-gorsel" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
