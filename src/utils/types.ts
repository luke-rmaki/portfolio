export type Frontmatter = {
  date?: string;
  path?: string;
  title?: string;
  image?: any;
  lastUpdated?: string;
};

export type BlogOverviewData = {
  allMdx: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: Frontmatter;
      };
    }[];
  };
};
