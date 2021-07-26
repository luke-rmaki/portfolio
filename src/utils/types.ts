export type Frontmatter = {
  date?: string;
  path?: string;
  title?: string;
  image?: any;
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
