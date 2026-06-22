declare global {
  const IA_BOT_AHMED_VERSION: string
  const IA_BOT_AHMED_CHANNEL: string
}

export const InstallationVersion = typeof IA_BOT_AHMED_VERSION === "string" ? IA_BOT_AHMED_VERSION : "local"
export const InstallationChannel = typeof IA_BOT_AHMED_CHANNEL === "string" ? IA_BOT_AHMED_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
