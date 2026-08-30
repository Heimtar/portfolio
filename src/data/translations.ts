// Описываем строгий тип для карточки проекта
export interface ProjectData {
  title: string;
  descriptionUser: string;
  descriptionTech: string;
  tags: string[];
  demoUrl: string;
  codeUrl?: string; // необязательно для заглушек
  isPlaceholder?: boolean;
}

// Структура всего контента сайта
export interface TranslationSchema {
  hero: {
    badge: string;
    title: string;
    accentName: string;
    description: string;
    btnResume: string;
    btnContact: string;
  };
  approach: {
    title: string;
    descriptionUser: string;
    descriptionTech: string;
    stackTitle: string;
  };
  projectsTitle: string;
  sectionPersonal: string;
  sectionCommercial: string;
  modalTitle: string;
  modalDesc: string;
  modalBtn: string;
  contacts: {
    title: string;
    cta: string;
    location: string;
  };
  projects: ProjectData[];
}

export const translations: Record<"ru" | "en", TranslationSchema> = {
  ru: {
    hero: {
      badge: "● Доступен для коммерческих контрактов",
      title: "Привет, я ",
      accentName: "Роман",
      description:
        "Frontend-разработчик. Создаю современные, быстрые сайты и веб-приложения под ключ, которые помогают бизнесу привлекать клиентов и автоматизировать продажи. Специализируюсь на быстрой сборке MVP (первых рабочих версий продуктов) и реализации удобных интерфейсов. Помогаю перевести ваши бизнес-задачи на понятный язык программного кода.",
      btnResume: "Скачать резюме PDF",
      btnContact: "Написать на Email",
    },
    approach: {
      title: "Инженерный подход",
      descriptionUser:
        "Мой приоритет — разработка надежных решений, которые будут стабильно работать под нагрузкой и легко расширяться при росте вашего бизнеса. Пишу понятный, задокументированный код, строго соблюдаю дедлайны, всегда нахожусь на связи и сдаю проекты, готовые к продвижению в Яндексе и Google.",
      descriptionTech:
        "Изолирую бизнес-логику в кастомных React-хуках, гарантирую отсутствие утечек памяти, соблюдаю стандарты доступности (A11y :focus-visible) и веду репозитории по строгому стандарту Conventional Commits.",
      stackTitle: "Ключевой стек",
    },
    projectsTitle: "Проекты и кейсы",
    sectionPersonal: "Личные и пет-проекты",
    sectionCommercial: "Коммерческие контракты",
    contacts: {
      title: "Контакты",
      cta: "Обсудить проект",
      location: "Локация: Архангельск. GMT+3, Удаленная работа",
    },

    projects: [
      {
        title: "Крипто Дашборд",
        descriptionUser:
          "Удобный финансовый терминал для отслеживания стоимости криптовалют в реальном времени. Помогает инвесторам быстро анализировать рынок, видеть изменения цен на наглядных графиках и рассчитывать прибыль без сложных таблиц.",
        descriptionTech:
          "Финансовый MVP-интерфейс. Двухколоночный Grid, декларативные графики (Recharts), кастомный слой асинхронных данных с кэшированием (TTL) и иммутабельным расчетом PnL без мутации стейта.",
        tags: ["React 18", "JavaScript (ES6+)", "Recharts", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/crypto-dashboard.git",
      },
      {
        title: "Умный трекер привычек",
        descriptionUser:
          "Интерактивный трекер привычек с элементами игры. Мотивирует пользователей не бросать рутинные задачи, превращая ежедневные полезные действия в опыт и прокачку виртуального персонажа, наглядно показывая прогресс за недели.",
        descriptionTech:
          "SaaS-трекер с геймификацией. Отказоустойчивый расчет временных интервалов и стриков (date-fns), RPG-механика прогрессии, ленивая инициализация localStorage и защита от всплытия событий.",
        tags: ["React 18", "JavaScript (ES6+)", "date-fns", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/smart-habit-tracker.git",
      },
      {
        title: "Менеджер персонажей",
        descriptionUser:
          "Профессиональный инструмент для настольных игр, позволяющий мгновенно создавать, редактировать и рассчитывать параметры игровых персонажей. Избавляет от бумажной рутины, автоматически вычисляя все бонусы характеристик на лету.",
        descriptionTech:
          "Инструмент управления комплексными структурами данных. Валидация форм на лету, динамический расчет зависимых параметров и полная поддержка доступности для управления с клавиатуры (:focus-visible).",
        tags: ["React 18", "JavaScript (ES6+)", "Vite", "A11y"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/rpg-character-manager.git",
      },
      // Заглушки личных проектов
      {
        title: "Кастомный аудиоплеер и визуализатор",
        descriptionUser:
          "Музыкальный плеер с живым эквалайзером, прыгающим в такт музыке. Включает бесшовное переключение треков, умный режим тишины с памятью громкости и полностью адаптирован под мобильные устройства.",
        descriptionTech:
          "Аудио-движок на Web Audio API (GainNode) с интерполяцией громкости для ликвидации цифрового хруста. Отрисовка частот (AnalyserNode) изолирована в Canvas API через requestAnimationFrame для стабильных 60+ FPS.",
        tags: ["React 19", "Web Audio API", "Canvas API", "Vite"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/music-player.git",
      },
      {
        title: "Командная Канбан-доска",
        descriptionUser:
          "Многопользовательский клон Trello для управления задачами команды в реальном времени. Включает интерактивное перетаскивание карточек, распределение по колонкам приоритетов и мгновенное создание или удаление задач.",
        descriptionTech:
          "Реляционная JSON-схема с нормализацией связей колонок и карточек. Облачная синхронизация в реальном времени реализована через WebSocket-слушатель Firebase Firestore (onSnapshot), а паттерн Optimistic UI полностью устраняет задержки интерфейса при Drag-and-Drop.",
        tags: ["React 18", "Firebase", "Firestore", "Drag-and-Drop", "Vite"],
        demoUrl: "https://kanban-desk-one.vercel.app/",
        codeUrl: "https://github.com/Heimtar/kanban-desk.git",
      },
      // Психологические триггеры - коммерческие контракты
      {
        title: "Commercial Contract",
        descriptionUser:
          "Разработка масштабируемого интерфейса под индивидуальные бизнес-задачи заказчика. Оптимизация внутренних процессов компании.",
        descriptionTech:
          "Разработка фронтенд-архитектуры коммерческого продукта. Интеграция API, контроль отказоустойчивости и качества кода по ТЗ.",
        tags: ["Коммерческий контракт"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Commercial Contract",
        descriptionUser:
          "Интеграция клиентских сервисов, проектирование логики взаимодействия с пользователем и обеспечение стабильности веб-приложения под нагрузкой.",
        descriptionTech:
          "Реализация интерфейса коммерческого продукта, интеграция защищенных API-потоков и оптимизация производительности компонентов.",
        tags: ["Коммерческий контракт"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Commercial Contract",
        descriptionUser:
          "Создание отказоустойчивого веб-решения по техническому заданию клиента с фокусом на высокую скорость работы интерфейса и удобство конечных пользователей.",
        descriptionTech:
          "Клиентская разработка корпоративного сервиса, аудит кодовой базы, оптимизация рендеринга и рефакторинг легаси-структур.",
        tags: ["Коммерческий контракт"],
        demoUrl: "#",
        isPlaceholder: true,
      },
    ],
    modalTitle: "Обсудим ваш проект?",
    modalDesc:
      "Ищете надежного разработчика для реализации MVP или усиления команды? Напишите мне на почту, отправьте ТЗ или ваши пожелания — я оперативно изучу задачу и предложу техническое решение.",
    modalBtn: "Отправить ТЗ / Написать",
  },

  en: {
    hero: {
      badge: "● Available for commercial contracts",
      title: "Hi, I am ",
      accentName: "Roman",
      description:
        "Frontend Developer. I build modern, fast websites and web applications from scratch, helping businesses attract clients and automate sales. I specialize in rapid MVP development and creating user-friendly interfaces, translating your business logic into clean, working code.",
      btnResume: "Download Resume PDF",
      btnContact: "Send Email",
    },
    approach: {
      title: "Engineering Approach",
      descriptionUser:
        "My priority is developing reliable solutions that run smoothly under load and scale seamlessly as your business grows. I write clean, well-documented code, strictly adhere to deadlines, maintain transparent communication, and deliver SEO-ready web products.",
      descriptionTech:
        "Isolate business logic inside custom React hooks, ensure no memory leaks, comply with accessibility standards (A11y :focus-visible), and manage repositories via strict Conventional Commits workflow.",
      stackTitle: "Key Stack",
    },
    projectsTitle: "Projects & Case Studies",
    sectionPersonal: "Personal & Pet Projects",
    sectionCommercial: "Commercial Contracts",
    contacts: {
      title: "Contacts",
      cta: "Discuss a project",
      location: "Location: Arkhangelsk, UTC+3, Remote work",
    },
    projects: [
      {
        title: "Crypto Dashboard",
        descriptionUser:
          "A convenient financial terminal for tracking cryptocurrency rates in real-time. It helps investors quickly analyze the market, view price changes on clean charts, and calculate profits without complex spreadsheets.",
        descriptionTech:
          "Financial Analytics Terminal MVP. Two-column Grid interface, declarative charts (Recharts), a custom asynchronous data layer with caching (TTL), and immutable PnL mathematical calculations.",
        tags: ["React 18", "JavaScript (ES6+)", "Recharts", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/crypto-dashboard.git",
      },
      {
        title: "Smart Habit Tracker",
        descriptionUser:
          "A gamified SaaS habit tracker. It motivates users to stay consistent with routine tasks by turning daily beneficial actions into experience points and progression for a virtual character, visually displaying weekly progress.",
        descriptionTech:
          "Gamified SaaS Habit Tracker MVP. Resilient calculation of time intervals and streaks (date-fns), RPG user progression mechanics, lazy initialization of localStorage, and event propagation protection.",
        tags: ["React 18", "JavaScript (ES6+)", "date-fns", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/smart-habit-tracker.git",
      },
      {
        title: "RPG Character Manager",
        descriptionUser:
          "A professional tool for tabletop games that allows instant creation, editing, and calculation of character stats. It eliminates paper routine by automatically computing all characteristic bonuses on the fly.",
        descriptionTech:
          "Data Management Tool. Handling complex nested data structures, on-the-fly form validation, dynamic calculations, and full keyboard navigation support (:focus-visible).",
        tags: ["React 18", "JavaScript (ES6+)", "Vite", "A11y"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/rpg-character-manager.git",
      },
      {
        title: "Custom Audio Player & Visualizer",
        descriptionUser:
          "A music player featuring a live equalizer that bounces to the beat. Includes seamless track switching, a smart mute mode with volume memory, and full mobile responsiveness.",
        descriptionTech:
          "Audio engine powered by Web Audio API (GainNode) with volume interpolation to eliminate digital crackling. Frequency rendering (AnalyserNode) is isolated within Canvas API via requestAnimationFrame for stable 60+ FPS.",
        tags: ["React 19", "Web Audio API", "Canvas API", "Vite"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/music-player.git",
      },
      {
        title: "Team Kanban Board",
        descriptionUser:
          "A multi-user Trello clone for real-time team project management. Features interactive card dragging, categorization by priority columns, and instant task creation or deletion.",
        descriptionTech:
          "Relational JSON schema with normalized relations between columns and cards. Live cloud synchronization is powered by Firebase Firestore WebSocket listeners (onSnapshot), while the Optimistic UI pattern completely eliminates interface lag during Drag-and-Drop operations.",
        tags: ["React 18", "Firebase", "Firestore", "Drag-and-Drop", "Vite"],
        demoUrl: "https://kanban-desk-one.vercel.app/",
        codeUrl: "https://github.com/Heimtar/kanban-desk.git",
      },
      {
        title: "Commercial Contract",
        descriptionUser:
          "Developing a scalable frontend interface tailored for custom business requirements. Optimization of internal company processes.",
        descriptionTech:
          "Frontend architecture development for a commercial product. API integration, resilience control, and code quality maintenance according to specifications.",
        tags: ["Commercial Contract"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Commercial Contract",
        descriptionUser:
          "Integrating client-facing services, designing user interaction logic, and ensuring web application stability under heavy load conditions.",
        descriptionTech:
          "Commercial product interface implementation, managing secure API data streams, and UI component performance optimization.",
        tags: ["Commercial Contract"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Commercial Contract",
        descriptionUser:
          "Creating a resilient web solution based on customer technical specifications with a focus on high interface response speed and end-user experience.",
        descriptionTech:
          "Corporate service client-side development, code base auditing, rendering optimization, and legacy structure refactoring.",
        tags: ["Commercial Contract"],
        demoUrl: "#",
        isPlaceholder: true,
      },
    ],
    modalTitle: "Let's discuss your project",
    modalDesc:
      "Looking for a reliable developer to build an MVP or strengthen your team? Drop me an email, send your specifications or requirements — I will quickly review the task and offer a technical solution.",
    modalBtn: "Send Specifications / Contact",
  },
};
