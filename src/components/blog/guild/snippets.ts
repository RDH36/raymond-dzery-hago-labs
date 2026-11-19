/* Code samples of the tutorial, kept apart so their indentation stays exact. */
export const snippets = {
  agent: `---
name: lyra
description: Quality. Writes the automated tests for a change, runs lint and
  type checks, and returns PASS or FAIL. Never edits application code.
tools: Read, Grep, Glob, Bash, Write, Edit
model: sonnet
---

You check work you did not write.
1. Read the brief and the diff.
2. Write tests that prove each acceptance criterion.
3. Run the linter, the type checker and the tests.
4. Answer PASS or FAIL, with the failing output.
You only create or edit test files.`,
  brief: `GOAL      Theme button becomes an icon, no text.
CONTEXT   src/components/theme/ThemeButton.tsx, Tailwind, Next.js 16.
TO DO     Moon icon in light mode, sun in dark mode, aria-label kept.
CRITERIA  No layout shift at 390, 1024 and 1440 px wide.
VERIFY    Lyra: tests + lint. Mira: real browser, light and dark.
DO NOT    Touch the header links or the hero text.`,
  memory: `~/.claude/agent-memory/
  varek/MEMORY.md        # lessons: "same mistake twice → write it here"
  lyra/MEMORY.md
  eldrin/projects/my-app.md   # standing instructions first, under 60 lines`,
  hooks: `{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "bash ~/.claude/scripts/session-context.sh"
          }
        ]
      }
    ]
  }
}`,
};
