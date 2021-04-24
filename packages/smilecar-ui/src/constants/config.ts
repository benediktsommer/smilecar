export interface IConfig {
  api: {
    smilecar: {
      host: string;
    };
  };
}

export const config: IConfig = {
  api: {
    smilecar: {
      host: process.env.REACT_APP_SMILECAR_API_URL,
    },
  },
};
