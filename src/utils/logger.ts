import pino from "pino"

const envToLogger = {
  development: {
    transport: {
      target: "pino-pretty"
    }
  },
  production: {}
}

const logger = pino({
  ...(envToLogger[process.env.APP_ENV])
})

export default logger
