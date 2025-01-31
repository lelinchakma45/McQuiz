// Route type definition for application navigation
export type Route = {
  path: string;
  label: string;
  icon: string;
  active: boolean;
  children?: Route[];
};

// Main site navigation routes
export const sitemap: Route[] = [
  {
    path: "/student",
    label: "Dashboard",
    icon: 'bi-grid',
    active: true,
  },
  {
    path: "student/quick-learn",
    label: "Quick Learn",
    icon: 'bi-list-check',
    active: true,
  },
  {
    path: '/student/quizzess',
    label: 'Quizzes',
    icon: 'bi-question-diamond',
    active: true,
  },
  {
    path: "student/leaderboard",
    label: "Leaderboard",
    icon: 'bi-award',
    active: true,
  },
  {
    path: "student/settings",
    label: "Settings",
    icon: 'bi-gear',
    active: true,
  },
  {
    path: "student/profile",
    label: "Profile",
    icon: 'bi-person',
    active: true,
  }
];

// Bottom navigation routes
export const bottomNavigation: Route[] = [
  {
    path: "student/help",
    label: "Help",
    icon: 'bi-question-diamond',
    active: true,
  },
  {
    path: "/signout",
    label: "Sign out",
    icon: 'bi-box-arrow-right',
    active: true,
  }
];