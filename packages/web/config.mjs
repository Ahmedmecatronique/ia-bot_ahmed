const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://ia-bot-ahmed.app" : `https://${stage}.ia-bot-ahmed.app`,
  console: stage === "production" ? "https://ia-bot-ahmed.app/auth" : `https://${stage}.ia-bot-ahmed.app/auth`,
  email: "help@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/anomalyco/ia-bot-ahmed",
  discord: "https://ia-bot-ahmed.app/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
