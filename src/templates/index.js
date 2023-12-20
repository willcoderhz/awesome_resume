import { ResumeModel_C } from '../templates/Cmode/';
import { ResumeModel_D } from '../templates/Dmode/';
export { TemplateProvider, useTemplate } from './template';
export const templates = [
    new ResumeModel_C(),
    new ResumeModel_D(),
];
