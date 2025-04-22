import winston from "winston";

const loggerConfig = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "MM-DD-YYYy HH:mm:ss" }),
    winston.format.json(),
    winston.format.colorize(),
    // define custom print
    winston.format.printf(({ timestamp, level, message}) => {
      const output = { level, message, timestamp };
      return JSON.stringify(output);
    })
  ),
  transports: [
    new winston.transports.Console()
],
});

export default loggerConfig;
