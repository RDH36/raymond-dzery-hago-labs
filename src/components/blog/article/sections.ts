export type Section = { id: string; label: string };

/** The article's table of contents, in reading order. The ids match the
    `<section id>` of the three guild/Part files. */
export const sections: Section[] = [
  { id: "a-name-and-one", label: "A name and one job" },
  { id: "how-a-task-moves", label: "How a task moves through the team" },
  { id: "the-watcher-the-agent", label: "The Watcher: the agent on the server" },
  { id: "memory-skills-and-the", label: "Memory, skills and the files that hold it together" },
  { id: "my-pc-loses-power", label: "My PC loses power. The Guild picks up again." },
  { id: "the-agent-that-reads", label: "The agent that reads our mistakes" },
  { id: "small-tutorial-build-your", label: "Small tutorial: build your own guild" },
  { id: "what-the-guild-cant", label: "What the Guild can't do" },
];
