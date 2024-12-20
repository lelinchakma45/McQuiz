export type Route = {
    path: string;
    label: string;
    icon: string;
    active: boolean;
    children?: Route[];
  };
  
  export const sitemap: Route[] = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: 'grid',
      active:true,
    },
    {
      path: "/quizzes",
      label: "Quizzes",
      icon: 'grid',
      active:true,
      children:[
        {
            path: "/dashboard",
            label: "Dashboard",
            icon: 'grid',
            active:true,
        },
        {
            path: "/dashboard",
            label: "Dashboard",
            icon: 'grid',
            active:true,
        },
      ]
    },
    {
      path: "/leaderboard",
      label: "Leaderboard",
      icon: 'grid',
      active:true,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: 'grid',
      active:true,
    },
    {
      path: "/profile",
      label: "Profile",
      icon: 'grid',
      active:true,
    }
  ];
  
  export const bottomNavigation: Route[] = [
    {
      path: "/help",
      label: "Help",
      icon: 'grid',
      active:true,
    },
    {
      path: "/signout",
      label: "Sign out",
      icon: 'grid',
      active:true,
    }
  ];