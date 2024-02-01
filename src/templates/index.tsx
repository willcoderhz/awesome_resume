import {ResumeModel_C} from '../templates/Cmode/';
import {ResumeModel_D} from '../templates/Dmode/';
import { BaseTemplate } from './template'

export { TemplateProvider, useTemplate } from './template'

export const templates: BaseTemplate[] = [
    new ResumeModel_C(),
    new ResumeModel_D(),
]
