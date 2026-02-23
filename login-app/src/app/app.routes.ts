import { Routes } from '@angular/router';
import { authGuard } from './core/gaurds/auth-gaurd';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    // AUTH ROUTES
    {
        path: 'login',
        loadComponent: () => 
            import('./features/auth/login/login').then (m => m.Login)
    },
    {
        path: 'signup',
        loadComponent: () => 
            import('./features/auth/signup/signup').then (m => m.Signup)
    },
    {
        path: 'forgot-password',
        loadComponent: ()=> import('./features/auth/forgot-password/forgot-password').then(m=>m.ForgotPassword)
    },

    // DASHBOARD WITH LAYOUT
    {
        path: 'dashboard',
        loadComponent: ()=> import('./layout/main-layout/main-layout').then(m=>m.MainLayout),
         canActivate: [authGuard],
        children: [
            {
                path: '',
                loadComponent: () =>
                import('./features/pages/home/home')
                    .then(m => m.Home)
            },
            {
                path: 'about',
                loadComponent: () =>
                import('./features/pages/about/about')
                    .then(m => m.About)
            },
            {
                path: 'contact',
                loadComponent: () =>
                import('./features/pages/contact/contact')
                    .then(m => m.Contact)
            },
            {
                path: 'contact',
                loadComponent: () => import('./features/pages/contact/contact').then(m => m.Contact)
            },
            {
                path: 'skills',
                loadComponent:()=> import('./features/pages/skills/skills').then(m => m.Skills)
            },
            {
                path: 'projects',
                loadComponent: ()=> import('./features/pages/projects/projects').then(m=>m.Projects)
            }
        ]
    },
    {
        path: "**", redirectTo: "login"
    }
];
