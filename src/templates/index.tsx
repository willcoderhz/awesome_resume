import {ResumeModel_C} from '../templates/Cmode/resumeModel_C.tsx';
import { BaseTemplate } from './template'

export { TemplateProvider, useTemplate } from './template'

export const templates: BaseTemplate[] = [
    new ResumeModel_C(),
]
