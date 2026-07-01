export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "elliotx.com",
  description: "Shenanigans and mischief.",
  author: {
    name: "Elliot Richards",
    bio: ".",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {},
  siteUrl: "https://elliotx.com"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;