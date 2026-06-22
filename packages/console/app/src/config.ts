/**
 * Application-wide constants and configuration
 */
export const config = {
  // Base URL
  baseUrl: "https://ia-bot-ahmed.app",

  // GitHub
  github: {
    repoUrl: "https://github.com/anomalyco/ia-bot-ahmed",
    starsFormatted: {
      compact: "160K",
      full: "160,000",
    },
  },

  // Social links
  social: {
    twitter: "https://x.com/ia-bot-ahmed",
    discord: "https://discord.gg/ia-bot-ahmed",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "900",
    commits: "13,000",
    monthlyUsers: "7.5M",
  },
} as const
