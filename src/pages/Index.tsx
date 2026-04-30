import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const FIRM_NAME = "AVG-Consult";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/73573107-8c8d-4a7a-b8b7-b9573a39619b/files/cebfe3bb-0bd5-4f30-a270-3af0d8424904.jpg";
const TEAM_IMAGE = "https://cdn.poehali.dev/projects/73573107-8c8d-4a7a-b8b7-b9573a39619b/files/dc836cc8-046e-45f2-976f-c9421cbf80cf.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О фирме" },
  { id: "services", label: "Услуги" },
  { id: "cases", label: "Кейсы" },
  { id: "team", label: "Специалисты" },
  { id: "contact", label: "Контакты" },
];

const SERVICES = [
  {
    icon: "Scale",
    title: "Арбитражные споры",
    desc: "Представляем интересы в арбитражных судах всех инстанций. Комплексное сопровождение от досудебного урегулирования до исполнения решения.",
    tag: "Бизнес",
  },
  {
    icon: "Building2",
    title: "Корпоративное право",
    desc: "Структурирование бизнеса, слияния и поглощения, акционерные соглашения, защита активов и минимизация корпоративных рисков.",
    tag: "Бизнес",
  },
  {
    icon: "FileText",
    title: "Договорная работа",
    desc: "Разработка и экспертиза договоров любой сложности. Защита от скрытых рисков и невыгодных условий для вашего бизнеса.",
    tag: "Документы",
  },
  {
    icon: "Shield",
    title: "Уголовная защита",
    desc: "Профессиональная защита по уголовным делам в сфере экономики. Адвокаты с опытом более 15 лет в следственных органах.",
    tag: "Защита",
  },
  {
    icon: "Globe",
    title: "Международное право",
    desc: "Сопровождение международных сделок, защита в иностранных юрисдикциях, структурирование зарубежного бизнеса.",
    tag: "Международный",
  },
  {
    icon: "Home",
    title: "Недвижимость",
    desc: "Полное юридическое сопровождение сделок с недвижимостью, разрешение земельных споров, проверка чистоты объектов.",
    tag: "Имущество",
  },
];

const CASES = [
  {
    category: "Арбитражный спор",
    title: "Взыскание 180 млн руб. с подрядчика",
    result: "Победа",
    desc: "Успешно взыскали задолженность по договору строительного подряда с применением обеспечительных мер.",
    duration: "8 месяцев",
  },
  {
    category: "Корпоративный спор",
    title: "Защита бизнеса при враждебном поглощении",
    result: "Победа",
    desc: "Отстояли права мажоритарного акционера, заблокировали незаконное размытие доли через дополнительную эмиссию.",
    duration: "14 месяцев",
  },
  {
    category: "Налоговый спор",
    title: "Отмена доначислений на 45 млн руб.",
    result: "Победа",
    desc: "Оспорили решение налоговой инспекции о доначислении НДС и налога на прибыль в апелляционной инстанции.",
    duration: "6 месяцев",
  },
  {
    category: "Уголовное дело",
    title: "Прекращение дела о мошенничестве",
    result: "Прекращено",
    desc: "Добились прекращения уголовного преследования предпринимателя в связи с отсутствием состава преступления.",
    duration: "11 месяцев",
  },
];

const TEAM = [
  {
    name: "Александр Воронцов",
    role: "Управляющий партнёр",
    exp: "20 лет практики",
    spec: "Арбитраж · Корпоративное право",
    initial: "АВ",
  },
  {
    name: "Марина Климова",
    role: "Старший партнёр",
    exp: "16 лет практики",
    spec: "Уголовная защита · Налоги",
    initial: "МК",
  },
  {
    name: "Дмитрий Орлов",
    role: "Партнёр",
    exp: "12 лет практики",
    spec: "M&A · Международное право",
    initial: "ДО",
  },
  {
    name: "Екатерина Соболева",
    role: "Старший юрист",
    exp: "9 лет практики",
    spec: "Недвижимость · Договорная работа",
    initial: "ЕС",
  },
];

const STATS = [
  { value: "97%", label: "Выигранных дел" },
  { value: "500+", label: "Клиентов" },
  { value: "15+", label: "Лет на рынке" },
  { value: "2 млрд", label: "Взыскано в пользу клиентов" },
];

function useScrollSpy() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return active;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Index() {
  const activeSection = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", topic: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
              <div className="gradient-electric flex items-center justify-center px-2 py-1">
                <span className="font-display font-bold text-white text-sm tracking-wider">AVG</span>
              </div>
              <span className="font-display font-light text-base tracking-[0.15em] text-white/80">Consult</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link text-sm transition-colors duration-200 ${activeSection === item.id ? "text-electric active" : "text-muted-foreground hover:text-white"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex shimmer-btn text-white font-display font-medium text-xs tracking-widest uppercase px-6 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-electric/20"
            >
              Консультация
            </button>

            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border px-6 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
                className="nav-link text-left text-sm text-muted-foreground hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { scrollTo("contact"); setMenuOpen(false); }}
              className="shimmer-btn text-white font-display font-medium text-xs tracking-widest uppercase px-6 py-3 mt-2"
            >
              Консультация
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="LEXIS" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-electric/5 blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-electric/8 blur-2xl animate-float pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-8 h-px bg-electric" />
              <span className="font-display text-electric text-xs tracking-[0.3em] uppercase">Юридическая фирма</span>
            </div>

            <h1 className="font-display font-bold leading-none mb-6 animate-slide-up" style={{ animationDelay: "0.2s", fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
              <span className="block text-white">ПРАВО</span>
              <span className="block text-white">НА ВАШЕЙ</span>
              <span className="block text-electric glow-text">СТОРОНЕ</span>
            </h1>

            <p className="font-body font-light text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              AVG-Consult — команда экспертов, которые защищают бизнес и личные интересы с 2009 года. Выигрываем там, где другие сдаются.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <button
                onClick={() => scrollTo("contact")}
                className="shimmer-btn text-white font-display font-medium tracking-widest uppercase px-10 py-4 text-sm hover:shadow-xl hover:shadow-electric/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Получить консультацию
              </button>
              <button
                onClick={() => scrollTo("cases")}
                className="border border-white/20 hover:border-electric text-white/70 hover:text-white font-display font-normal tracking-widest uppercase px-10 py-4 text-sm transition-all duration-300 hover:bg-electric/5"
              >
                Наши кейсы
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <Icon name="ChevronDown" size={20} className="text-electric" />
        </div>
      </section>

      {/* STATS BANNER */}
      <div className="relative bg-secondary/50 border-y border-border py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric/5 via-transparent to-electric/5" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="counter-number mb-1">{s.value}</div>
                <div className="font-body text-muted-foreground text-sm tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-electric" />
                <span className="font-display text-electric text-xs tracking-[0.3em] uppercase">О нас</span>
              </div>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-white leading-tight mb-6">
                15 лет <span className="text-electric">безупречной</span> репутации
              </h2>
              <p className="font-body font-light text-muted-foreground leading-relaxed mb-6 text-base">
                LEXIS основана в 2009 году командой практикующих юристов с опытом в крупнейших международных фирмах. Мы специализируемся на сложных делах, где на кону — судьба бизнеса.
              </p>
              <p className="font-body font-light text-muted-foreground leading-relaxed mb-10 text-base">
                Наш подход — это глубокое погружение в проблему клиента, превентивная работа с рисками и агрессивная защита интересов в суде. Мы не берёмся за дела, в которых не уверены на 100%.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                {[
                  { icon: "Award", text: "Рейтинг Право-300" },
                  { icon: "Users", text: "12 специалистов" },
                  { icon: "MapPin", text: "Москва · СПб · Дубай" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-electric/10 border border-electric/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} fallback="Star" size={14} className="text-electric" />
                    </div>
                    <span className="font-body text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-electric/5 blur-2xl rounded-full" />
              <div className="relative border border-border overflow-hidden">
                <img src={TEAM_IMAGE} alt={`Команда ${FIRM_NAME}`} className="w-full h-80 md:h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="border border-electric/30 bg-background/80 backdrop-blur-sm px-5 py-4">
                    <div className="font-display text-electric text-xs tracking-widest uppercase mb-1">Рейтинг 2024</div>
                    <div className="font-body text-white text-sm">Топ-10 арбитражных фирм России по версии Право.Ру</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-secondary/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/2 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-electric" />
              <span className="font-display text-electric text-xs tracking-[0.3em] uppercase">Практики</span>
              <div className="w-8 h-px bg-electric" />
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
              Наши услуги
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i} className="card-hover border border-border bg-card p-7 group cursor-pointer">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:bg-electric/20 group-hover:border-electric/50 transition-all duration-300">
                    <Icon name={s.icon} fallback="Star" size={18} className="text-electric" />
                  </div>
                  <span className="font-display text-xs text-muted-foreground tracking-widest uppercase border border-border px-2 py-1">{s.tag}</span>
                </div>
                <h3 className="font-display font-medium text-white text-lg mb-3 group-hover:text-electric transition-colors duration-200">{s.title}</h3>
                <p className="font-body font-light text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-2 mt-5 text-electric text-xs font-display tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-electric" />
                <span className="font-display text-electric text-xs tracking-[0.3em] uppercase">Результаты</span>
              </div>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
                Кейсы, <span className="text-electric">которые говорят</span>
              </h2>
            </div>
            <p className="font-body font-light text-muted-foreground max-w-xs text-sm leading-relaxed">
              Реальные дела с реальными результатами. Имена и компании изменены по соглашению о конфиденциальности.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {CASES.map((c, i) => (
              <div key={i} className="card-hover border border-border bg-card p-8 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full gradient-electric" />
                <div className="pl-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-xs text-muted-foreground tracking-widest uppercase">{c.category}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-display text-xs text-emerald-400 tracking-widest uppercase">{c.result}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-medium text-white text-xl mb-3 group-hover:text-electric transition-colors duration-200">{c.title}</h3>
                  <p className="font-body font-light text-muted-foreground text-sm leading-relaxed mb-5">{c.desc}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Icon name="Clock" size={12} />
                    <span className="font-body">{c.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 md:py-32 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-electric" />
              <span className="font-display text-electric text-xs tracking-[0.3em] uppercase">Команда</span>
              <div className="w-8 h-px bg-electric" />
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
              Специалисты
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((t, i) => (
              <div key={i} className="card-hover border border-border bg-card p-6 group text-center">
                <div className="w-16 h-16 mx-auto mb-5 bg-electric/10 border border-electric/30 flex items-center justify-center group-hover:bg-electric group-hover:border-electric transition-all duration-300">
                  <span className="font-display font-semibold text-electric group-hover:text-white transition-colors duration-300 text-lg">{t.initial}</span>
                </div>
                <h3 className="font-display font-medium text-white text-base mb-1">{t.name}</h3>
                <div className="font-display text-electric text-xs tracking-wide mb-3 uppercase">{t.role}</div>
                <div className="font-body font-light text-muted-foreground text-xs mb-3">{t.exp}</div>
                <div className="font-body text-muted-foreground/60 text-xs leading-relaxed border-t border-border pt-3">{t.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/3 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-electric/5 blur-3xl animate-pulse-slow pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-electric" />
                <span className="font-display text-electric text-xs tracking-[0.3em] uppercase">Связаться</span>
              </div>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-white leading-tight mb-6">
                Бесплатная<br />
                <span className="text-electric">консультация</span>
              </h2>
              <p className="font-body font-light text-muted-foreground leading-relaxed mb-10 text-base">
                Опишите вашу ситуацию — мы свяжемся с вами в течение 2 часов в рабочее время. Первичная консультация бесплатна.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "info@lexis-law.ru" },
                  { icon: "MapPin", label: "Офис", value: "Москва, Пресненская наб. 12, Башня Федерация" },
                  { icon: "Clock", label: "График", value: "Пн–Пт: 9:00–20:00 · Сб: 10:00–17:00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={item.icon} fallback="Star" size={14} className="text-electric" />
                    </div>
                    <div>
                      <div className="font-display text-xs text-muted-foreground tracking-widest uppercase mb-0.5">{item.label}</div>
                      <div className="font-body text-white text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border bg-card p-8">
              {!formSent ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="font-display text-xs text-muted-foreground tracking-widest uppercase block mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Александр Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-none font-body"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs text-muted-foreground tracking-widest uppercase block mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-none font-body"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs text-muted-foreground tracking-widest uppercase block mb-2">Тема обращения</label>
                    <select
                      required
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-none font-body cursor-pointer"
                    >
                      <option value="">Выберите практику</option>
                      <option>Арбитражные споры</option>
                      <option>Корпоративное право</option>
                      <option>Договорная работа</option>
                      <option>Уголовная защита</option>
                      <option>Международное право</option>
                      <option>Недвижимость</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-xs text-muted-foreground tracking-widest uppercase block mb-2">Описание ситуации</label>
                    <textarea
                      rows={4}
                      placeholder="Кратко опишите вашу ситуацию..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-none font-body resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="shimmer-btn text-white font-display font-medium tracking-widest uppercase py-4 text-sm hover:shadow-xl hover:shadow-electric/25 transition-all duration-300 hover:-translate-y-0.5 mt-2"
                  >
                    Отправить заявку
                  </button>
                  <p className="font-body text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <div className="w-16 h-16 gradient-electric flex items-center justify-center glow-electric">
                    <Icon name="Check" size={28} className="text-white" />
                  </div>
                  <h3 className="font-display font-medium text-white text-2xl">Заявка принята</h3>
                  <p className="font-body font-light text-muted-foreground text-sm leading-relaxed max-w-xs">
                    Наш юрист свяжется с вами в течение 2 часов. Ожидайте звонка с московского номера.
                  </p>
                  <button
                    onClick={() => { setFormSent(false); setFormData({ name: "", phone: "", topic: "", message: "" }); }}
                    className="border border-electric/30 hover:border-electric text-electric font-display text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200"
                  >
                    Новая заявка
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="gradient-electric flex items-center justify-center px-2 py-0.5">
                <span className="font-display font-bold text-white text-xs tracking-wider">AVG</span>
              </div>
              <span className="font-display font-light text-sm tracking-[0.15em] text-white/80">Consult</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-display text-xs text-muted-foreground hover:text-white transition-colors tracking-widest uppercase"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="font-body text-xs text-muted-foreground">
              © 2009–2026 {FIRM_NAME}. Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}