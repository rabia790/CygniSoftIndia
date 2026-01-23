
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface PillarItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}