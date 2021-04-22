export interface IConfig {
  settings: {
    apiPort: number;
    origin: string;
  };
  filterOptions: string[];
}

const getENV = (name: string, required?: boolean) => {
  const env = process.env[name];

  if (required && !env) {
    throw new Error(`ENV Config ${name} is missing`);
  }

  return process.env[name] || '';
};

let config: IConfig;
export const getConfig = (): IConfig => {
  if (!config) {
    config = {
      settings: {
        origin: getENV('CORS_ORIGIN_PATHS', true),
        apiPort: parseInt(getENV('DOCKER_SERVICE_PORT', true), 10),
      },
      filterOptions: getENV('FILER_OPTIONS', true).split(','),
    };
  }

  return config;
};
