import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HandelbarsMailTemplateProvider from './implementations/HandelbarsMailTemplateProvider';

const providers = {
  handlebars: HandelbarsMailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
