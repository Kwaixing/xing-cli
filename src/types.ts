import ModuleAPI from './ModuleAPI.js';

export interface Choice {
  type?: 'choice' | undefined;
  name: string;
  short: string;
  value: string;
  description?: string;
  link?: string;
  checked?: boolean;
  [key: string]: any;
}

export interface Question {
  name: string;
  message: string;
  type: 'checkbox' | 'list' | 'input' | 'confirm';
  description?: string;
  pageSize?: number;
  choices?: Choice[];
  when?: (ans?: Answer | string) => Boolean;
}

export interface Answer {
  features: 'simple_template' | 'complex_template';
  confirm: boolean;
  directory?: string;
  rules?: ('eslint' | 'prettier')[];
  shell?: boolean;
}

export interface ModuleFunction {
  default: (api: ModuleAPI, name: string) => void;
}

export interface PackageJson {
  name: string;
  version: string;
  devDependencies: Record<string, string>;
  scripts: Record<string, string>;
  [key: string]: string | Record<string, string>;
}
