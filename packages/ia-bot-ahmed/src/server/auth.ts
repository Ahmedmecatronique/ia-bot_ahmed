export * as ServerAuth from "./auth"

import { ConfigService } from "@/effect/config-service"
import { Flag } from "@ia-bot-ahmed/core/flag/flag"
import { Config as EffectConfig, Context, Option, Redacted } from "effect"

export type Credentials = {
  password?: string
  username?: string
}

export type DecodedCredentials = {
  readonly username: string
  readonly password: Redacted.Redacted
}

export class Config extends ConfigService.Service<Config>()("@ia-bot-ahmed/ServerAuthConfig", {
  password: EffectConfig.string("IA_BOT_AHMED_SERVER_PASSWORD").pipe(EffectConfig.option),
  username: EffectConfig.string("IA_BOT_AHMED_SERVER_USERNAME").pipe(EffectConfig.withDefault("ia-bot-ahmed")),
}) {}

export type Info = Context.Service.Shape<typeof Config>

export function required(config: Info) {
  return Option.isSome(config.password) && config.password.value !== ""
}

export function authorized(credentials: DecodedCredentials, config: Info) {
  return (
    Option.isSome(config.password) &&
    credentials.username === config.username &&
    Redacted.value(credentials.password) === config.password.value
  )
}

export function header(credentials?: Credentials) {
  const password = credentials?.password ?? Flag.IA_BOT_AHMED_SERVER_PASSWORD
  if (!password) return undefined

  const username = credentials?.username ?? Flag.IA_BOT_AHMED_SERVER_USERNAME ?? "ia-bot-ahmed"
  return `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`
}

export function headers(credentials?: Credentials) {
  const authorization = header(credentials)
  if (!authorization) return undefined
  return { Authorization: authorization }
}
