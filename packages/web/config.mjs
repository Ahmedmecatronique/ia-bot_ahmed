const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://IaBotAhmed.app" : `https://${stage}.IaBotAhmed.app`,
  console: stage === "production" ? "https://IaBotAhmed.app/auth" : `https://${stage}.IaBotAhmed.app/auth`,
  email: "help@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/anomalyco/IaBotAhmed",
  discord: "https://IaBotAhmed.app/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
