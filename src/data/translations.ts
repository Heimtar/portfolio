// Описываем строгий тип для карточки проекта
export interface ProjectData {
  title: string;
  description: string;
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
    description: string;
    stackTitle: string;
  };
  projectsTitle: string;
  sectionPersonal: string;
  sectionCommercial: string;
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
        "Junior+ Frontend Разработчик. Специализируюсь на реализации сложной бизнес-логики, управлении асинхронными потоками данных и быстрой сборке MVP-решений. Фокусируюсь на производительности и строгих стандартах разработки.",
      btnResume: "Скачать резюме PDF",
      btnContact: "Написать на Email",
    },
    approach: {
      title: "Инженерный подход",
      description:
        "Мой приоритет — чистый, типизированный код, который масштабируется под задачи бизнеса. Изолирую логику в кастомных хуках, соблюдаю стандарты доступности (A11y) и веду репозитории по стандарту Conventional Commits.",
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
        description:
          "Финансовый аналитический терминал MVP. Двухколоночный Grid-интерфейс, декларативные графики (Recharts), кастомный слой асинхронных данных с кэшированием (TTL) и расчетом PnL без мутации состояния.",
        tags: ["React 18", "JavaScript (ES6+)", "Recharts", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/crypto-dashboard.git",
      },
      {
        title: "Smart Habit Tracker",
        description:
          "SaaS-трекер с геймификацией. Отказоустойчивый расчет временных интервалов и стриков (date-fns), RPG-механика прогрессии пользователей, ленивая инициализация localStorage и защита от всплытия событий.",
        tags: ["React 18", "JavaScript (ES6+)", "date-fns", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/smart-habit-tracker.git",
      },
      {
        title: "RPG Character Manager",
        description:
          "Инструмент управления данными. Работа со сложными вложенными структурами данных, валидация форм на лету, динамический расчет игровых бонусов и полная поддержка управления с клавиатуры (:focus-visible).",
        tags: ["React 18", "JavaScript (ES6+)", "Vite", "A11y"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/rpg-character-manager.git",
      },
      // Заглушки личных проектов
      {
        title: "Личный проект #4",
        description:
          "Проектирование и разработка архитектуры следующего MVP-сервиса.",
        tags: ["В разработке"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Личный проект #5",
        description:
          "Интеграция дополнительных инструментов и расширение стека решений.",
        tags: ["В разработке"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      // Психологические триггеры - коммерческие контракты
      {
        title: "Коммерческий проект",
        description:
          "Сайт-визитка строительно монтажной бригады. Разработка архитектуры фронтенда под бизнес-задачи клиента. Оптимизация процессов и масштабирование.",
        tags: ["В разработке"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Коммерческий проект",
        description:
          "Салон грумминга. Реализация интерфейса коммерческого продукта. Интеграция API и контроль отказоустойчивости.",
        tags: ["В разработке"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Коммерческий проект",
        description:
          "Разработка клиентского сервиса по техническому заданию заказчика. Контроль качества кода.",
        tags: ["В разработке"],
        demoUrl: "#",
        isPlaceholder: true,
      },
    ],
  },
  en: {
    hero: {
      badge: "● Available for commercial contracts",
      title: "Hi, I am ",
      accentName: "Roman",
      description:
        "Junior+ Frontend Developer. Specialized in implementing complex business logic, managing asynchronous data streams, and rapid MVP development. Focused on performance and strict engineering standards.",
      btnResume: "Download Resume PDF",
      btnContact: "Send Email",
    },
    approach: {
      title: "Engineering Approach",
      description:
        "My priority is clean, typed code that scales efficiently to meet business needs. I design architecture by isolating logic into custom hooks, adhere to accessibility standards (A11y), and maintain repositories using the Conventional Commits standard.",
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
        description:
          "Financial Analytics Terminal MVP. Two-column Grid interface, declarative charts (Recharts), a custom asynchronous data layer with caching (TTL), and immutable PnL mathematical calculations.",
        tags: ["React 18", "JavaScript (ES6+)", "Recharts", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/crypto-dashboard.git",
      },
      {
        title: "Smart Habit Tracker",
        description:
          "Gamified SaaS Habit Tracker. Resilient calculation of time intervals and streaks (date-fns), RPG user progression mechanics, lazy initialization of localStorage, and event propagation protection.",
        tags: ["React 18", "JavaScript (ES6+)", "date-fns", "CSS Modules"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/smart-habit-tracker.git",
      },
      {
        title: "RPG Character Manager",
        description:
          "Data Management Tool. Handling complex nested data structures, on-the-fly form validation, dynamic calculations, and full keyboard navigation support (:focus-visible).",
        tags: ["React 18", "JavaScript (ES6+)", "Vite", "A11y"],
        demoUrl: "https://github.io",
        codeUrl: "https://github.com/Heimtar/rpg-character-manager.git",
      },
      {
        title: "Pet Project #4",
        description:
          "Designing and developing the architecture of the next MVP service.",
        tags: ["In Development"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Pet Project #5",
        description:
          "Integrating additional tools and expanding the solution stack.",
        tags: ["In Development"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Commercial Contract",
        description:
          "Business card website for a construction and installation team. Frontend architecture development tailored for business requirements. Process optimization and scaling.",
        tags: ["Commercial Contract"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Commercial Contract",
        description:
          "Grooming salon. Commercial product interface implementation. API integration and resilience control.",
        tags: ["Commercial Contract"],
        demoUrl: "#",
        isPlaceholder: true,
      },
      {
        title: "Commercial Contract",
        description:
          "Client service development according to the customer's technical specification. Code quality control.",
        tags: ["Commercial Contract"],
        demoUrl: "#",
        isPlaceholder: true,
      },
    ],
  },
};
