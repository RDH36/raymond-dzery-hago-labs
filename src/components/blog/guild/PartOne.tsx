import { FigureSvg } from "@/components/blog/guild/FigureSvg";

export function PartOne() {
  return (
    <>
      <FigureSvg name="architecture" caption="The Guild in November 2026: Claude Code sessions on my PC, the Watcher on a small server, Discord in between." />
      <p>I build my apps and games alone, from Antananarivo. Since 16 October 2026 I also have a team: AI agents running in <a href="https://claude.com/product/claude-code" rel="noopener">Claude Code</a>, Anthropic&apos;s coding tool. I call the team the Guild. The agents call me Master, because someone has to decide, and that stays me.</p>

      <section id="a-name-and-one" aria-labelledby="h-a-name-and-one"><p className="sn">01</p>
      <h2 id="h-a-name-and-one">A name and one job</h2>
      <p>A general assistant does everything a little. So every member gets a name, a job, and limits. Varek, the developer, is the only one allowed to change a project&apos;s code. Lyra, in charge of quality, can write tests but never touches the app. Nobody grades their own work.</p>
      <div className="tw"><table><thead><tr><th scope="col">Member</th><th scope="col">Job</th><th scope="col">Joined in 2026</th></tr>
      </thead>
      <tbody><tr><th scope="row">Eldrin</th><td>Technical director: plans, writes the briefs, checks the result</td><td>16 Oct</td></tr>
      <tr><th scope="row">Varek</th><td>Developer, writes the code</td><td>16 Oct</td></tr>
      <tr><th scope="row">Lyra</th><td>Quality, writes the automated tests</td><td>16 Oct</td></tr>
      <tr><th scope="row">Thorgal</th><td>Varek&apos;s mentor, for the hard problems</td><td>21 Oct</td></tr>
      <tr><th scope="row">Mira</th><td>Tester, uses the app in a real browser</td><td>26 Oct</td></tr>
      <tr><th scope="row">Corvin</th><td>Pricing and retention</td><td>28 Oct</td></tr>
      <tr><th scope="row">Fenwick</th><td>Marketing, store listings, SEO</td><td>28 Oct</td></tr>
      <tr><th scope="row">The Watcher</th><td>Eldrin&apos;s twin on a server, reachable from Discord</td><td>30 Oct</td></tr>
      <tr><th scope="row">Orin</th><td>Rereads our work, writes the lessons</td><td>30 Oct</td></tr>
      <tr><th scope="row">Sorel</th><td>Short video editor</td><td>30 Oct</td></tr>
      <tr><th scope="row">Nyla</th><td>Interface design, before any code</td><td>31 Oct</td></tr>
      </tbody>
      </table>
      </div>
      <p>Corvin, Fenwick and Nyla started as separate agents. They are now skills that Eldrin loads when the topic comes up. A full agent costs a whole new conversation; a skill is a page of instructions read on demand, and for advice that was enough.</p>
      </section>

      <section id="how-a-task-moves" aria-labelledby="h-how-a-task-moves"><p className="sn">02</p>
      <h2 id="h-how-a-task-moves">How a task moves through the team</h2>
      <FigureSvg name="cycle" caption="One task, from my message to the release. Lyra or Mira can send the work back to Varek at any point." />
      <p>Every piece of code follows the same path:</p>
      <ol className="path"><li>I write what I want, in one or two sentences.</li>
      <li>Eldrin turns it into a brief: the goal, the files involved, what must not change, and how we will know it works.</li>
      <li>Varek writes the code. If he fails twice, or the problem is deep, Thorgal takes over.</li>
      <li>Lyra writes tests that prove the change and runs the linter and the type checker.</li>
      <li>Mira opens the real app in a browser, at phone and computer sizes, and tries to break it.</li>
      <li>Eldrin reads the diff and reports to me. Nothing goes online until I say so.</li>
      </ol>
      <p>Tests can pass on a screen nobody can use. That is why step 5 exists, and why either Lyra or Mira can send the work back.</p>
      </section>

      <section id="the-watcher-the-agent" aria-labelledby="h-the-watcher-the-agent"><p className="sn">03</p>
      <h2 id="h-the-watcher-the-agent">The Watcher: the agent on the server</h2>
      <p>My PC is not always on. So since 30 October a second Eldrin runs on a small rented server (a VPS). I call him the Watcher. He runs Claude Code inside a terminal session that never closes, and a Discord plugin connects him to a private channel. I write to him from my phone like I would write to a colleague.</p>
      <p>The Watcher cannot touch my code directly. When a task needs the PC, he opens the right project in herdr, a small server that keeps one terminal workspace per project, starts Claude Code there and passes the message on. When the work is done, the summary comes back to Discord.</p>
      <p>He also handles the slow, boring jobs that don&apos;t need my PC: daily watch on a few tools I use, rendering the short videos, and the nightly backup check.</p>
      </section>
    </>
  );
}
