import { ButtonProps } from '@mui/material';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ActionItem extends NavigationItem {
  variant: ButtonProps['variant'];
}

export const navItems: NavigationItem[] = [
  {
    label: 'Features',
    href: '/features',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export const actionItems: ActionItem[] = [
  {
    label: 'Sign In',
    href: '/login',
    variant: 'text',
  },
  {
    label: 'Get Started',
    href: '/register',
    variant: 'contained',
  },
];
