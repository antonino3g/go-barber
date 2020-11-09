interface IMailConfig {
  driver: 'etheral' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'suporte@antoninopraxedes.page',
      name: 'Antonino GoBarber',
    },
  },
} as IMailConfig;
