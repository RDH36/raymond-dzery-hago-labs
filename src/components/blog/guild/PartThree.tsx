import { CodeBlock } from "@/components/blog/article/CodeBlock";
import { snippets } from "@/components/blog/guild/snippets";

export function PartThree() {
  return (
    <>
      <section id="small-tutorial-build-your" aria-labelledby="h-small-tutorial-build-your"><p className="sn">07</p>
      <h2 id="h-small-tutorial-build-your">Small tutorial: build your own guild</h2>
      <p>You need <a href="https://claude.com/product/claude-code" rel="noopener">Claude Code</a> and a project in a git repository. Start with two agents, not eleven. You can add the others when you feel the gap.</p>
      <section className="step" id="step-1"><h3><span className="sn">Step 1.</span> <span className="st">Write one agent file per job</span></h3>
      <p>Agents are Markdown files in <code>~/.claude/agents/</code>. The header says what the agent may do; the body says how it works.</p>
      <CodeBlock lang="markdown" code={snippets.agent} />
      </section>
      <section className="step" id="step-2"><h3><span className="sn">Step 2.</span> <span className="st">Give each one a limit</span></h3>
      <p>The limit matters more than the job. Write it in the body, in one sentence the agent can&apos;t misread: &quot;Only Varek edits application code.&quot; &quot;Mira never changes code; she reports.&quot; An agent that checks its own work will find it fine.</p>
      </section>
      <section className="step" id="step-3"><h3><span className="sn">Step 3.</span> <span className="st">Write briefs, not wishes</span></h3>
      <p>Your main session sends work to an agent with a brief. Mine always has the same headings:</p>
      <CodeBlock lang="text" code={snippets.brief} />
      <p>The &quot;DO NOT&quot; line saved me more time than any other.</p>
      </section>
      <section className="step" id="step-4"><h3><span className="sn">Step 4.</span> <span className="st">Make the result pass two checks</span></h3>
      <p>Chain them: the developer agent starts the test agent, then the browser tester, and only reports back after both say PASS. For the browser part, a headless Chrome driven by a script is enough. Ask for screenshots at phone and desktop sizes.</p>
      </section>
      <section className="step" id="step-5"><h3><span className="sn">Step 5.</span> <span className="st">Give the team a memory</span></h3>
      <p>Create one folder per agent and one short file per project:</p>
      <CodeBlock lang="text" code={snippets.memory} />
      <p>Tell each agent, in its file, to read its memory first and to add a lesson when it repeats an error.</p>
      </section>
      <section className="step" id="step-6"><h3><span className="sn">Step 6.</span> <span className="st">Feed every session the same context</span></h3>
      <p>A <code>SessionStart</code> hook in <code>~/.claude/settings.json</code> runs a script before your first message. Mine prints the project sheet, <code>git status</code>, the last commits and the free memory on the PC.</p>
      <CodeBlock lang="json" code={snippets.hooks} />
      </section>
      <section className="step" id="step-7"><h3><span className="sn">Step 7 (optional).</span> <span className="st">Put one agent on a server</span></h3>
      <p>Rent a small Linux server, install Claude Code, and run it in a terminal session that survives disconnects (tmux and a systemd service). Add the Discord channel plugin so you can write to it from your phone. Keep it in a private channel, and never send it a password or an API key through chat.</p>
      </section>
      </section>
      <section id="what-the-guild-cant" aria-labelledby="h-what-the-guild-cant"><p className="sn">08</p>
      <h2 id="h-what-the-guild-cant">What the Guild can&apos;t do</h2>
      <p>The first design of this website was a wall of brightly painted objects. It passed a test with a first-time visitor, with no blockers. I looked at it and called it a kid&apos;s website, so we threw it away.</p>
      <p>A team can check that a thing works. Deciding whether it&apos;s good is still my job.</p>
      </section>
    </>
  );
}
