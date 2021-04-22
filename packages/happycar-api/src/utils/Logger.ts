import pino, { Logger as PinoInterface } from 'pino';

export class Logger {
  private readonly logger: PinoInterface;

  constructor(logger: PinoInterface) {
    this.logger = logger;
  }

  /**
   * Debug: Very detailed information which is only useful for debugging.
   */
  public trace(...args: any) {
    this.logger.trace(args);
  }

  /**
   * Debug: Detail information which could be useful for debugging.
   */
  public debug(...args: any) {
    this.logger.debug(args);
  }

  /**
   * Info: General application notification. Use this when feeling noisy.
   */
  public info(...args: any) {
    this.logger.info(args);
  }

  /**
   * Warn: Application can continue executing the current execution with reduced functionality.
   */
  public warn(...args: any) {
    this.logger.warn(args);
  }

  /**
   * Error: Application can not continue executing the current execution.
   */
  public error(...args: any) {
    this.logger.error(args);
  }

  /**
   * Fatal: Application aborts and data could be lost
   */
  public fatal(...args: any) {
    this.logger.fatal(args);
  }
}

interface ILoggerConfig {
  level: string;
  prettyPrint: boolean;
}

const defaultConfig = { level: 'info', prettyPrint: true } as ILoggerConfig;
let loggerConfig = { ...defaultConfig };

export const configLogger = (config: ILoggerConfig) => {
  loggerConfig = { ...loggerConfig, ...config };
};

export const log = new Logger(pino({ base: null, ...loggerConfig }));
