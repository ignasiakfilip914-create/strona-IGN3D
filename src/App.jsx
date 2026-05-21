import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Cuboid,
  Wrench,
  Hammer,
  Car,
  Cpu,
  Home,
  Boxes,
  Sparkles,
  Upload,
  Layers3,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const contact = {
    brand: "Ign3d",
    phone: "884832818",
    email: "kontakt.ign3d@gmail.com",
    whatsapp: "48884832818",
  };

  const useCases = [
    {
      icon: Hammer,
      title: "Stolarstwo",
      text: "Szablony, dystanse, uchwyty, prowadnice i elementy pomocnicze do pracy w warsztacie.",
    },
    {
      icon: Wrench,
      title: "Mechanika",
      text: "Części techniczne, adaptery, osłony, prototypy oraz elementy zastępcze.",
    },
    {
      icon: Car,
      title: "Motoryzacja",
      text: "Custom uchwyty, zaślepki, obudowy, organizery i detale pod konkretny projekt.",
    },
    {
      icon: Cpu,
      title: "Elektronika",
      text: "Obudowy urządzeń, mocowania, panele, dystanse i prototypy hardware.",
    },
    {
      icon: Home,
      title: "Dom i wnętrza",
      text: "Organizery, akcesoria, elementy dekoracyjne i funkcjonalne rozwiązania na wymiar.",
    },
    {
      icon: Boxes,
      title: "Małe serie",
      text: "Produkcja krótkich serii elementów bez kosztownych form i długiego wdrożenia.",
    },
  ];

  const process = [
    "Wysyłasz pomysł, zdjęcie, szkic albo plik 3D",
    "Dobieramy materiał i ustalamy szczegóły",
    "Dostajesz wycenę oraz przewidywany czas realizacji",
    "Drukujemy, sprawdzamy i przygotowujemy gotowy element",
  ];

  const makerworldProjects = [
    {
      title: "Self-Locking Rope Pulley",
      subtitle: "3D printed cam block",
      image: "/makerworld/rope-pulley-main.gif",
      link: "https://makerworld.com/pl/models/2686311-self-locking-rope-pulley-3d-printed-cam-block#profileId-2975890",
    },
    {
      title: "Ultimate 18mm Corner Clamp",
      subtitle: "3rd hand woodworking jig",
      image: "/makerworld/corner-clamp.png",
      link: "https://makerworld.com/pl/models/2499913-ultimate18mm-corner-clamp-3rd-hand-woodworking-jig#profileId-2748056",
    },
    {
      title: "Ignas Box Contener 3.0",
      subtitle: "modular storage container",
      image: "/makerworld/ignas-box.png",
      link: "https://makerworld.com/pl/models/2456880-ignas-box-contener-3-0#profileId-2697586",
    },
  ];

  return (
    <div className="min-h-screen bg-[#05070d] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[520px] h-[520px] bg-red-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] bg-red-700/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-red-300/10 rounded-full blur-[110px]" />
      </div>

      <main className="relative z-10">
        <section className="px-5 pt-6 pb-10 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <motion.nav
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-between px-1 py-2"
          >
            <img
              src="/ign3d-logo.png"
              alt="IGN3D logo"
              className="h-32 sm:h-48 w-auto max-w-[88vw] sm:max-w-[560px] object-contain drop-shadow-[0_0_42px_rgba(239,68,68,0.75)]"
            />

            <a
              href={`tel:${contact.phone}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-white text-slate-950 px-5 py-3 font-bold hover:bg-red-100 transition"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń
            </a>
          </motion.nav>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center pt-14 lg:pt-20">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-300/10 px-4 py-2 text-sm text-red-100 mb-7"
              >
                <Sparkles className="w-4 h-4" />
                Projektowanie i druk 3D dla firm i klientów indywidualnych
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.06em] leading-[0.95]"
              >
                Druk 3D,
                <br />
                który zamienia
                <span className="block bg-gradient-to-r from-red-200 via-red-400 to-white bg-clip-text text-transparent">
                  pomysł w produkt.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                Tworzymy funkcjonalne wydruki 3D, prototypy, części techniczne
                i elementy na zamówienie. Od prostego uchwytu po dopasowany
                komponent do warsztatu, auta, elektroniki lub wnętrza.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 max-w-xl">
                <div className="w-full rounded-[28px] border border-red-400/20 bg-gradient-to-r from-red-500 to-red-700 shadow-2xl shadow-red-500/20 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setContactOpen(!contactOpen)}
                    className="w-full px-6 py-5 text-left hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-red-100/70 font-bold">
                          szybki kontakt
                        </p>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.04em]">
                          Skontaktuj się z Ign3d
                        </h3>
                      </div>

                      <motion.div
                        animate={{ rotate: contactOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {contactOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden px-6 pb-6"
                      >
                        <div className="grid gap-3">
                          <a
                            href={`tel:${contact.phone}`}
                            className="rounded-2xl bg-white text-slate-950 px-5 py-4 font-black flex items-center justify-between hover:bg-red-100 transition"
                          >
                            <div className="flex items-center gap-3">
                              <Phone className="w-5 h-5" />
                              <span>{contact.phone}</span>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                          </a>

                          <a
                            href={`https://wa.me/${contact.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 font-bold flex items-center justify-between hover:bg-white/15 transition"
                          >
                            <div className="flex items-center gap-3">
                              <MessageCircle className="w-5 h-5" />
                              <span>WhatsApp</span>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                          </a>

                          <a
                            href={`mailto:${contact.email}`}
                            className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 font-bold flex items-center justify-between hover:bg-white/15 transition"
                          >
                            <div className="flex items-center gap-3">
                              <Mail className="w-5 h-5" />
                              <span>{contact.email}</span>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red-400/20 blur-3xl rounded-full" />

              <div className="relative rounded-[36px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-5 shadow-2xl shadow-black/30 overflow-hidden">
                <div className="rounded-[28px] bg-gradient-to-br from-slate-950 via-red-950/40 to-slate-900 border border-white/10 p-6 min-h-[460px] flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs uppercase tracking-[0.28em] text-red-200/70 font-bold">
                        oferta Ign3d
                      </span>
                      <h2 className="mt-2 text-3xl font-black leading-tight">
                        Od projektu
                        <span className="block text-red-300">
                          do gotowego wydruku
                        </span>
                      </h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center shrink-0">
                      <Layers3 className="w-7 h-7" />
                    </div>
                  </div>

                  <div className="my-10 grid gap-4">
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6 sm:p-7 relative overflow-hidden min-h-[260px] flex items-center"
                    >
                      <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl" />
                      <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-400/20 flex items-center justify-center shrink-0">
                          <Cuboid className="w-6 h-6 text-red-200" />
                        </div>

                        <div>
                          <h3 className="text-xl sm:text-2xl leading-tight font-black tracking-[-0.03em] max-w-[260px]">
                            Projektowanie modeli 3D
                          </h3>
                          <p className="mt-4 text-slate-300 leading-8 text-[15px] sm:text-base max-w-md">
                            Tworzymy modele na podstawie szkiców, rysunków
                            technicznych, wymiarów, zdjęć lub rzeczywistego
                            elementu. Pomagamy przejść od pomysłu do pliku
                            gotowego do druku.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6 sm:p-7 relative overflow-hidden min-h-[260px] flex items-center"
                    >
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
                      <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-400/20 flex items-center justify-center shrink-0">
                          <Layers3 className="w-6 h-6 text-red-200" />
                        </div>

                        <div>
                          <h3 className="text-xl sm:text-2xl leading-tight font-black tracking-[-0.03em] max-w-[260px]">
                            Drukowanie w technologii FDM
                          </h3>
                          <p className="mt-4 text-slate-300 leading-8 text-[15px] sm:text-base max-w-md">
                            Wykonujemy trwałe i funkcjonalne wydruki z
                            materiałów takich jak PLA, PETG, ABS, ASA oraz TPU
                            — dobierając materiał do zastosowania, obciążenia i
                            warunków pracy.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                      <p className="text-2xl font-black text-red-200">3D</p>
                      <p className="text-xs text-slate-300">druk</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                      <p className="text-2xl font-black text-red-200">CAD</p>
                      <p className="text-xs text-slate-300">projekt</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                      <p className="text-2xl font-black text-red-200">PRO</p>
                      <p className="text-xs text-slate-300">jakość</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid md:grid-cols-3 gap-4"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
            >
              <Clock3 className="w-8 h-8 text-red-200" />
              <h3 className="mt-5 text-xl font-black">Szybka wycena</h3>
              <p className="mt-2 text-slate-400 leading-relaxed">
                Wyślij opis, zdjęcie albo plik — wrócimy z konkretną propozycją
                wykonania.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
            >
              <ShieldCheck className="w-8 h-8 text-red-200" />
              <h3 className="mt-5 text-xl font-black">Funkcjonalne wydruki</h3>
              <p className="mt-2 text-slate-400 leading-relaxed">
                Stawiamy na praktyczne zastosowanie, trwałość i dopasowanie do
                realnego problemu.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
            >
              <Upload className="w-8 h-8 text-red-200" />
              <h3 className="mt-5 text-xl font-black">Od pomysłu do części</h3>
              <p className="mt-2 text-slate-400 leading-relaxed">
                Możesz mieć gotowy model albo tylko pomysł — pomożemy przejść
                przez cały proces.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-16 max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8"
          >
            <div>
              <p className="text-red-200 font-bold uppercase tracking-[0.25em] text-sm">
                zastosowania
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-[-0.04em]">
                Dla kogo druk 3D?
              </h2>
            </div>

            <p className="text-slate-400 max-w-xl leading-relaxed">
              Druk 3D sprawdza się tam, gdzie gotowe rozwiązania są za drogie,
              niedostępne albo po prostu nie pasują do konkretnego zastosowania.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 hover:bg-white/[0.08] transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-300/10 border border-red-300/20 flex items-center justify-center text-red-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-red-500/10 backdrop-blur-xl p-5 sm:p-8 lg:p-10 overflow-hidden relative mb-16"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div>
                <p className="text-red-200 font-bold uppercase tracking-[0.25em] text-sm">
                  makerworld
                </p>

                <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.05em] leading-tight">
                  Projekty Ign3d
                  <span className="block text-red-400">na MakerWorld</span>
                </h2>

                <p className="mt-6 text-slate-300 text-lg leading-relaxed max-w-xl">
                  Publikujemy modele 3D, organizery, części użytkowe oraz
                  projekty tworzone dla społeczności makerów. To miejsce, gdzie
                  możesz zobaczyć nasze podejście do projektowania i jakości
                  wykonania.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://makerworld.com/pl/@Ign3d_ignas"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-red-500 hover:bg-red-400 transition px-6 py-4 font-black flex items-center gap-3 shadow-2xl shadow-red-500/20"
                  >
                    Zobacz profil MakerWorld
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm text-slate-300">
                    Official MakerWorld Creator
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {makerworldProjects.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group rounded-[28px] border border-white/10 bg-black/30 backdrop-blur-xl p-4 overflow-hidden relative shadow-2xl shadow-red-950/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-60" />

                    <div className="relative z-10">
                      <div className="relative w-full aspect-[4/3] min-h-[230px] md:min-h-[190px] rounded-2xl border border-white/10 overflow-hidden bg-black/60 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="eager"
                          className="relative z-10 block w-full h-full object-contain p-1 opacity-100 group-hover:scale-105 transition duration-500"
                        />

                        <div
                          className="absolute inset-0 pointer-events-none opacity-25"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 20%, rgba(239,68,68,0.55), transparent 35%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent)",
                          }}
                        />
                      </div>

                      <div className="mt-5 flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-black text-2xl md:text-lg leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-base md:text-sm text-slate-400 mt-1">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="w-12 h-12 md:w-10 md:h-10 rounded-xl bg-red-500/20 border border-red-500/20 flex items-center justify-center text-red-200 font-black shrink-0">
                          0{index + 1}
                        </div>
                      </div>

                      <div className="mt-5 border-t border-white/10 pt-4 text-red-300 font-bold text-sm flex items-center justify-between">
                        <span>Zobacz na MakerWorld</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="text-red-200 font-bold uppercase tracking-[0.25em] text-sm">
                proces
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-[-0.04em]">
                Jak wygląda współpraca?
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid gap-3">
              {process.map((item, index) => (
                <motion.div
                  variants={fadeUp}
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded-xl bg-red-500 text-white flex items-center justify-center font-black shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-200 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 pt-8 pb-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[36px] bg-gradient-to-br from-red-500 to-red-800 text-white p-8 sm:p-10 lg:p-12 shadow-2xl shadow-red-500/20"
          >
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.05em]">
                  Masz pomysł na wydruk?
                </h2>
                <p className="mt-4 text-white/80 text-lg leading-relaxed">
                  Skontaktuj się z Ign3d. Wyślij opis, wymiary, zdjęcie albo
                  plik 3D — przygotujemy wycenę i doradzimy najlepsze
                  rozwiązanie.
                </p>
              </div>

              <div className="grid gap-3">
                <a
                  href={`tel:${contact.phone}`}
                  className="rounded-2xl bg-slate-950 text-white px-6 py-4 font-black flex items-center justify-between hover:bg-slate-900 transition"
                >
                  Zadzwoń: {contact.phone}
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-2xl bg-white/15 border border-white/20 px-6 py-4 font-black flex items-center justify-between hover:bg-white/25 transition"
                >
                  {contact.email}
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white/15 border border-white/20 px-6 py-4 font-black flex items-center justify-between hover:bg-white/25 transition"
                >
                  Napisz na WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
