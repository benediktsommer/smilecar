export interface IConfig {
  api: {
    happycar: {
      host: string;
    };
  };
}

export const config: IConfig = {
  api: {
    happycar: {
      host: process.env.REACT_APP_HAPPYCAR_API_URL,
    },
  },
};
