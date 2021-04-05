type post = {
  id: string;
  title: string;
  date: Date;
  content: string;
  category: "poem" | "novel" | "essay";
};

type posts = post[];

export type { post, posts };
