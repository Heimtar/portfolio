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
        title: "Crypto Dashboard",
        descriptionUser:
          "Удобный финансовый терминал для отслеживания стоимости криптовалют в реальном времени. Помогает инвесторам быстро анализировать рынок, видеть изменения цен на наглядных графиках и рассчитывать прибыль без сложных таблиц.",
        descriptionTech:
          "Финансовый MVP-интерфейс. Двухколоночный Grid, декларативные графики (Recharts), кастомный слой асинхронных данных с кэшированием (TTL) и иммутабельным расчетом PnL без мутации стейта.",
        tags: ["React 18", "JavaScript (ES6+)", "Recharts", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/crypto-dashboard.git",
      },
      {
        title: "Smart Habit Tracker",
        descriptionUser:
          "Интерактивный трекер привычек с элементами игры. Мотивирует пользователей не бросать рутинные задачи, превращая ежедневные полезные действия в опыт и прокачку виртуального персонажа, наглядно показывая прогресс за недели.",
        descriptionTech:
          "SaaS-трекер с геймификацией. Отказоустойчивый расчет временных интервалов и стриков (date-fns), RPG-механика прогрессии, ленивая инициализация localStorage и защита от всплытия событий.",
        tags: ["React 18", "JavaScript (ES6+)", "date-fns", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/smart-habit-tracker.git",
      },
      {
        title: "RPG Character Manager",
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
        title: "Личный проект #4",
        descriptionUser:
          "Проектирование и разработка архитектуры следующего MVP-сервиса.",
        descriptionTech: "Архитектурное планирование.",
        tags: ["В разработке"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Личный проект #5",
        descriptionUser:
          "Интеграция дополнительных инструментов и расширение стека решений.",
        descriptionTech: "Архитектурное планирование.",
        tags: ["В разработке"],
        demoUrl: "#",
        isPlaceholder: true,
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
        title: "Pet Project #4",
        descriptionUser:
          "Designing and developing the architecture of the next MVP service.",
        descriptionTech: "Architectural planning.",
        tags: ["In Development"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Pet Project #5",
        descriptionUser:
          "Integrating additional tools and expanding the solution stack.",
        descriptionTech: "Architectural planning.",
        tags: ["In Development"],
        demoUrl: "#",
        isPlaceholder: true,
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
