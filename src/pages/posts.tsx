// posts.ts — Shared data source for IPInsights and BlogPost
// Place this file at: src/data/posts.ts

export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML string rendered in BlogPost
    image: string;
    date: string;
    read: string;
    category: string;
    external?: string;
}

export const posts: Post[] = [
    {
        slug: "startup-spent-x-lakhs-patents",
        title: "Startup spent ₹X lakhs on patents — still lost to a copycat. What broke?",
        excerpt:
            "A practical look at where patent strategy fails: filing without enforceability, weak claim architecture, and missing commercial alignment.",
        image: "/images/image1.png",
        date: "May 2026",
        read: "5 min read",
        category: "Patent Strategy",
        external:
            "https://www.linkedin.com/pulse/startup-spent-x-lakhs-patents-still-lost-copycat-what-b-manur-phd--2ivfc/?trackingId=h1huJjO0R02ZP%2F4pCk7UUg%3D%3D",
        content: `
      <p class="lead">Every year, hundreds of Indian startups invest significant capital in patents — only to find those patents fail at the moment they matter most: enforcement.</p>

      <p>The story is almost always the same. A founder, rightfully proud of a genuine innovation, engages a patent attorney, pays the filing fees, waits through examination, and eventually receives a granted patent. Then a competitor launches a nearly identical product. The founder reaches for their patent — and discovers it does not protect what they thought it did.</p>

      <h2>The Three Failures</h2>

      <p>Patent strategy collapses at three distinct points. Understanding each is essential to building protection that actually holds.</p>

      <h3>1. Filing Without Enforceability in Mind</h3>

      <p>A patent is only as valuable as the ease with which infringement can be detected and proven. If your claims require access to a competitor's internal manufacturing process to establish infringement, you have a patent you can never enforce without expensive litigation discovery — and often not even then.</p>

      <p>The strongest patents cover what is visible at the market boundary: the product as sold, the method as practised in public, the system as deployed. Filing without asking "how would we prove this in court?" is one of the most common and most costly errors in startup IP strategy.</p>

      <h3>2. Weak Claim Architecture</h3>

      <p>Claims are not descriptions. They are legal boundary markers. An independent claim that is too narrow protects only a single embodiment; a slight design-around by a competitor leaves you with nothing. An independent claim that is too broad will be rejected or invalidated on prior art.</p>

      <p>The craft of patent drafting lies in constructing claim hierarchies that are simultaneously broad enough to capture obvious variants and narrow enough to survive examination. This requires someone who understands both the technology and the competitive landscape — not merely the legal formalities.</p>

      <h3>3. Missing Commercial Alignment</h3>

      <p>A patent portfolio is a business asset, not a compliance exercise. It should map to your actual product roadmap, your key markets, and your likely competitors. Patents filed on features that were never commercialised — or that competitors would never adopt — are expensive placeholders that consume budget without creating leverage.</p>

      <h2>What the Copycat Actually Exploited</h2>

      <p>In the cases we have reviewed, the copycat rarely violated the literal claims. More often, they read the patent, identified the narrowest defensible variant, and built around it — sometimes with the help of a competent IP attorney of their own.</p>

      <p>This is legal. It is also entirely predictable if your filing strategy did not account for it.</p>

      <h2>Building Patents That Actually Protect</h2>

      <p>Effective patent protection begins before the application is drafted. It begins with a structured invention disclosure that maps the technical contribution to the commercial use case, identifies the claim scope needed to capture the competitive space, and stress-tests enforceability against realistic infringement scenarios.</p>

      <p>The cost of doing this correctly is modest relative to the filing budget most startups already spend. The cost of not doing it is the story at the beginning of this essay.</p>
    `,
    },
    {
        slug: "your-research-probably-patentable",
        title: "Your research is probably patentable. Here's why you never filed.",
        excerpt:
            "Many valuable inventions never become protected assets — not because they lack novelty, but because they were never identified, captured, or strategically filed.",
        image: "/images/image2.png",
        date: "May 2026",
        read: "4 min read",
        category: "Research & Patents",
        external:
            "https://www.linkedin.com/pulse/your-research-probably-patentable-here-why-you-never-filed-b-manur-8ncmc/?trackingId=vtaDwHxbSqS3yPY78wM8fg%3D%3D",
        content: `
      <p class="lead">Across research institutions, engineering teams, and product organisations, there is a persistent and costly phenomenon: genuinely novel work that never becomes a patent, not because it is unpatentable, but because no one ever asked the right questions at the right time.</p>

      <p>The result is a double loss. The organisation forgoes protection it could have had. And the work — often the product of months or years of effort — enters the public domain by default, freely available to any competitor who reads the published paper or studies the released product.</p>

      <h2>The Disclosure Gap</h2>

      <p>Most researchers and engineers are not trained to recognise patentable subject matter. They understand their field with precision, but the threshold question — "does this constitute a patentable invention?" — belongs to a different vocabulary.</p>

      <p>The result is systematic under-disclosure. Novel methods are written up as academic papers before a patent application is filed, triggering prior art issues. Key process improvements are treated as internal know-how rather than inventions. Software innovations are dismissed as "just code" without considering claim strategies that survive patentability examination.</p>

      <h2>The Publication Trap</h2>

      <p>Academic incentives accelerate the problem. Publication timelines create pressure to disseminate results quickly, often before any IP review has occurred. In most jurisdictions, public disclosure — including your own publication — starts a clock on filing eligibility or destroys it entirely.</p>

      <p>India provides a twelve-month grace period from the inventor's own disclosure. The United States provides a similar window. Most other jurisdictions do not. International protection is often foreclosed by a single conference presentation.</p>

      <h2>What Can Be Done</h2>

      <p>The solution is procedural rather than expensive. An invention disclosure process — a structured mechanism by which researchers flag potentially novel work before publication or product release — captures what would otherwise be lost.</p>

      <p>The disclosure need not be long. A page describing what is new, why it works differently from prior approaches, and what it enables is sufficient to begin an IP review. From that review, a filing decision can be made before any public disclosure forecloses the option.</p>

      <p>The organisations that build IP portfolios of genuine value are rarely the ones with the most innovations. They are the ones with the most systematic approach to identifying and capturing the innovations they already have.</p>
    `,
    },
    {
        slug: "why-filing-too-early",
        title: "Why filing a patent too early is just as dangerous as filing too late",
        excerpt:
            "Patent timing is strategy. File too early and protection may be weak; file too late and novelty may already be lost.",
        image: "/images/image3.png",
        date: "March 2026",
        read: "5 min read",
        category: "Patent Timing",
        external:
            "https://www.linkedin.com/pulse/why-filing-patent-too-early-just-dangerous-late-b-manur-phd--s5s3c/?trackingId=TsKRKX%2FMQb%2B8k%2BPA4A8C8g%3D%3D",
        content: `
      <p class="lead">Patent strategy is usually discussed as a race — file quickly, before the novelty window closes, before a competitor files first. This framing is not wrong, but it is incomplete. Filing too early carries its own significant risks, and founders who understand only one side of the timing equation often make expensive mistakes.</p>

      <h2>The Risk of Filing Too Early</h2>

      <p>When you file a patent application, you crystallise the invention as it exists at that moment. The specification describes what you have built. The claims define what you seek to protect. Both are anchored to a snapshot in time.</p>

      <p>If the invention continues to evolve — as virtually every early-stage innovation does — the filed application may describe something meaningfully different from the product you eventually commercialise. The features that turn out to matter commercially may not be the ones protected. The embodiment that competitors copy may not be the one claimed.</p>

      <p>In patent law, you cannot add new matter to a pending application. You can file continuation applications, but each must find support in the original disclosure. If the original disclosure was filed before the invention had matured, the options available later are constrained.</p>

      <h2>The Risk of Filing Too Late</h2>

      <p>The competing risk is equally real. Public disclosure — whether through a product launch, a conference presentation, or even a detailed pitch to investors — can trigger statutory bars or prior art issues that foreclose novelty.</p>

      <p>Competitors who observe a product in the market, or read a published paper describing an approach, can file their own applications on adjacent or downstream innovations. The longer you wait, the narrower the field you can claim.</p>

      <h2>Finding the Strategic Window</h2>

      <p>The optimal filing moment is not a fixed point; it is a window defined by two constraints. The window opens when the invention is sufficiently developed that the core architecture — the features most likely to be commercially valuable and most likely to be copied — can be described with precision. The window closes when public disclosure is imminent.</p>

      <p>Within that window, provisional applications offer a useful tool: a lower-cost, lower-specification filing that establishes a priority date while the invention continues to mature. A complete application can follow within twelve months, incorporating the refined disclosure.</p>

      <p>Used correctly, this structure gives you priority date protection without sacrificing specification quality. Used carelessly — filing a thin provisional and never improving the disclosure — it creates false security.</p>

      <h2>The Judgment Call</h2>

      <p>Timing is ultimately a judgment that requires understanding the technology trajectory, the competitive landscape, and the publication calendar simultaneously. It is not a legal formality. It is one of the highest-value decisions in IP strategy.</p>
    `,
    },
    {
        slug: "developer-owns-your-invention",
        title: "You are about to lose your patent rights because your developer owns your invention",
        excerpt:
            "Many founders assume payment equals ownership. In IP law, without assignment agreements, the creator may legally own what your company built.",
        image: "/images/image4.png",
        date: "March 2026",
        read: "4 min read",
        category: "IP Ownership",
        external:
            "https://www.linkedin.com/pulse/you-lose-your-patent-rights-because-developer-owns-b-manur-phd--rwgrc/?trackingId=lMIlYrW4RNCC50I4nQQAtQ%3D%3D",
        content: `
      <p class="lead">It is one of the most common and most avoidable errors in startup IP: a founder engages a developer to build a product, pays the invoices, ships the software — and then discovers, at the worst possible moment, that the developer may own the invention.</p>

      <h2>Why Payment Is Not Assignment</h2>

      <p>In most jurisdictions, including India, the United States, and the United Kingdom, patent rights vest initially in the inventor — the human being who conceived the invention. Paying someone to do work does not automatically transfer those rights to you.</p>

      <p>Employment relationships typically include implied or contractual assignment provisions that transfer inventions made in the scope of employment to the employer. But freelance developers, contractors, and consultants are not employees. Without a written assignment agreement, they may retain the rights to what they create, even if you paid for their time.</p>

      <h2>The Scenarios Where This Breaks Down</h2>

      <p>The problem surfaces in several recurring patterns. A startup engages a development agency under a services agreement that addresses deliverables but not IP ownership. A founder works with a co-founder who later leaves without signing any IP assignment. A consultant develops a key algorithm under a statement of work that is silent on inventorship.</p>

      <p>In each case, the company may have a product but not the IP rights that protect it. Any patent application filed without proper chain of title is vulnerable. Any investor doing IP diligence will flag the issue. Any acquirer will discount the transaction or require remediation.</p>

      <h2>What the Agreement Must Do</h2>

      <p>A proper IP assignment agreement must accomplish three things. First, it must identify the inventions being assigned with sufficient specificity. Second, it must include a present-tense assignment ("hereby assigns") rather than a promise to assign in the future. Third, it must be signed before the work begins — or, if signed afterward, must include consideration beyond the original payment.</p>

      <p>For employees, a standard IP assignment clause in the employment agreement is typically sufficient. For contractors, a separate IP assignment provision in each engagement contract is the cleaner approach.</p>

      <h2>Remediation After the Fact</h2>

      <p>If the agreements were never put in place, remediation is possible but increasingly difficult and expensive over time. Former developers may be unreachable, uncooperative, or aware of the leverage they hold. In some cases, the rights can be acquired retroactively; in others, the gap in chain of title is permanent.</p>

      <p>The cost of the agreement at the outset is a fraction of the cost of resolving the dispute afterward. This is one area where preventive legal work has an unambiguous and immediate return.</p>
    `,
    },
    {
        slug: "should-i-file-a-patent",
        title: `"Should I file a patent?" — Why you're asking the wrong question`,
        excerpt:
            "The better question is not whether to file, but what exactly is protectable, when to file, and how to structure protection strategically.",
        image: "/images/image5.png",
        date: "March 2026",
        read: "4 min read",
        category: "Patent Filing",
        external:
            "https://www.linkedin.com/pulse/you-have-invented-something-asking-should-i-file-b-manur-phd--glzlc/?trackingId=lMIlYrW4RNCC50I4nQQAtQ%3D%3D",
        content: `
      <p class="lead">The question arrives in nearly every early-stage IP conversation: "Should I file a patent?" It is an understandable question, but it is not the right one — and answering it directly, without interrogating the framing, often leads to poor decisions.</p>

      <h2>The Question Behind the Question</h2>

      <p>When a founder asks whether to file a patent, they are usually asking several more specific things simultaneously: Is this invention novel enough to be granted? Is it worth the cost and time? Will it actually protect us? Should we do it now or wait?</p>

      <p>Each of these is a distinct question with a distinct answer. Collapsing them into a binary yes/no on filing produces either a reflexive "file everything" posture that wastes budget on weak or non-strategic patents, or a reflexive "it's too expensive" posture that leaves genuine innovations unprotected.</p>

      <h2>The Framework That Actually Works</h2>

      <p>A more useful sequence of questions: What precisely is novel here — what does this do or enable that prior approaches did not? Is that novelty in the right form to be patentable subject matter in the relevant jurisdiction? If granted, would the claims cover what competitors would actually copy, not merely a specific embodiment we happen to have built? Can infringement be detected without access to the infringer's internal systems? Does this align with the product roadmap and the markets we intend to pursue?</p>

      <p>If the answers to these questions are affirmative, the filing decision is straightforward. If any answer is negative, the decision becomes: fix the problem before filing, or accept a weakened position.</p>

      <h2>The Cost of Not Filing</h2>

      <p>There is a tendency to frame patent costs as a luxury that early-stage companies cannot afford. This framing misunderstands the economics. The cost of a properly filed and prosecuted patent application is significant but bounded. The cost of not filing — and then discovering a competitor has filed on adjacent or overlapping subject matter, or that public disclosure has foreclosed the option — is potentially existential.</p>

      <p>Patent strategy is not a binary decision between filing and not filing. It is a question of what to file, when to file it, and how to structure the claims to create genuine commercial leverage. That question deserves a more considered answer than a simple yes or no.</p>
    `,
    },
    {
        slug: "drafting-as-a-discipline",
        title: "Drafting as a discipline: why the patent specification is a literary form",
        excerpt: "A claim is read more often by adversaries than by examiners. Compose accordingly.",
        image: "/images/image6.png",
        date: "April 2026",
        read: "8 min read",
        category: "Patents",
        content: `
      <p class="lead">There is a reason the great patent attorneys of the twentieth century spoke of their work in terms borrowed from architecture and literature. A patent specification is not a technical report. It is a constructed document — one that must simultaneously satisfy an examiner, survive adversarial review, and hold its meaning across decades of technological change.</p>

      <h2>The Temporal Problem</h2>

      <p>Every patent specification is written at a moment in time but read across many moments. The examiner reads it during prosecution, typically within two to five years of filing. A potential licensee reads it when the technology is mature and commercially significant. A court reads it when a dispute arises, perhaps fifteen years after the priority date, in a technological context the drafter could not have fully anticipated.</p>

      <p>The words chosen at filing must hold their meaning — and hold their strategic value — across all of these readings. This is a fundamentally literary challenge. It requires the drafter to think not just about what the technology does today but about how the claim language will be construed by a court applying interpretive doctrines the drafter may only partially anticipate.</p>

      <h2>Claim Language as Boundary Marking</h2>

      <p>Patent claims are property boundaries expressed in language. Like property descriptions in a deed, they must be precise enough to be enforced and broad enough to be valuable. Unlike property descriptions, they operate in a conceptual space rather than a physical one — and the conceptual space is contested.</p>

      <p>Every word in an independent claim is a potential limitation. "Comprising" and "consisting of" are not interchangeable. "Coupled to" and "connected to" establish different scope. "A" can mean one or more; "the" requires antecedent basis. These distinctions are not pedantry; they determine whether a competitor's product falls within the claim scope or outside it.</p>

      <h2>The Specification as Foundation</h2>

      <p>Claims are interpreted in light of the specification. The specification is the document that explains what the invention is, why it works, and how it differs from prior art. It is also the source from which claims can draw support — and the constraint that prevents claims from being broadened beyond what was disclosed.</p>

      <p>A well-drafted specification describes the invention at multiple levels of generality, provides a range of embodiments, and anticipates the design-arounds that a sophisticated competitor would attempt. It is, in this sense, a strategic document as much as a technical one.</p>

      <h2>Writing for Adversaries</h2>

      <p>The most useful mental model for patent drafting is this: write the specification and claims as if the most capable IP attorney at your most serious future competitor will read every word looking for a way around your protection or through your prosecution history. Because they will.</p>

      <p>This is not paranoia. It is realism about how patent documents are actually used. The examiner is a gatekeeper; the adversary is the real audience. Compose accordingly.</p>
    `,
    },
    {
        slug: "the-quiet-trademark",
        title: "The quiet trademark: brand protection that begins before the launch",
        excerpt: "Clearance done early is clearance done once. A short guide for founders.",
        image: "/images/image7.png",
        date: "March 2026",
        read: "6 min read",
        category: "Trademarks",
        content: `
      <p class="lead">Trademark problems have an unfortunate tendency to surface at the worst possible moment — just before a product launch, during a fundraising process, or at the point of an acquisition. In almost every case, the problem could have been identified and resolved months or years earlier, at a fraction of the eventual cost.</p>

      <h2>What Clearance Actually Means</h2>

      <p>Trademark clearance is often described as a search — and a search is part of it. But a competent clearance process is an assessment, not merely a retrieval exercise. The question is not just "does this mark exist in a register?" but "does this mark, used in this way, in these markets, create meaningful risk of confusion with existing marks?"</p>

      <p>That assessment requires judgment about phonetic similarity, visual similarity, conceptual similarity, the relatedness of the goods or services, and the channels of trade through which both marks reach consumers. It is a legal and commercial analysis, not a database query.</p>

      <h2>The Filing Decision</h2>

      <p>Once clearance is established, the filing decision is usually straightforward: file before you launch. Trademark rights in most jurisdictions are created either by use or by registration, and registration creates a presumption of validity and priority that use alone does not.</p>

      <p>Filing before launch means that by the time the mark is in the market, the application has been pending for months. Priority dates to the filing date, not the launch date. And any competitor who encounters your mark in the market and considers adopting something similar finds an existing application on the register when they run their own clearance.</p>

      <h2>International Considerations</h2>

      <p>Trademark rights are territorial. A mark registered in India provides no protection in the United States, the European Union, or any other jurisdiction. For companies with international ambitions, the Madrid Protocol offers a mechanism to file in multiple jurisdictions from a single application — but it requires a home registration as a base.</p>

      <p>The practical implication: if international markets are part of the business plan, begin the trademark process in the home jurisdiction as early as possible, and budget for international filings on the same timeline as the market entry plan.</p>

      <h2>The Cost of Waiting</h2>

      <p>A brand that has been in market for two years, invested in by significant marketing spend, and associated by consumers with a particular product or service is not easily renamed. The cost of a rebrand — in direct expense, in lost brand equity, in operational disruption — typically runs into multiples of what a thorough clearance and filing process would have cost at the outset.</p>

      <p>Clearance done early is clearance done once. Remediation done late is rarely done cleanly.</p>
    `,
    },
    {
        slug: "litigation-as-last-recourse",
        title: "Litigation as last recourse: the case for considered restraint",
        excerpt: "The most successful enforcement strategies rarely see a courtroom. Here is why.",
        image: "/images/image8.png",
        date: "February 2026",
        read: "10 min read",
        category: "Disputes",
        content: `
      <p class="lead">Intellectual property litigation is expensive, slow, uncertain, and public. It consumes management attention, strains client relationships, and — in a meaningful fraction of cases — produces outcomes that neither party anticipated when the dispute began. The most successful IP enforcement strategies are those that achieve their objectives without litigation.</p>

      <h2>The Enforcement Spectrum</h2>

      <p>IP enforcement exists on a spectrum. At one end is informal communication — a letter or a conversation that puts a potential infringer on notice without triggering a formal dispute. At the other end is full-scale litigation with injunctive relief, discovery, expert witnesses, and trial.</p>

      <p>Between these poles lies a range of options: cease and desist letters, licensing negotiations, inter partes proceedings before patent offices, alternative dispute resolution, and targeted enforcement actions designed to resolve the immediate issue without opening a broader front.</p>

      <p>The question is not which of these is "best" in the abstract, but which is most likely to achieve the specific enforcement objective at an acceptable cost and risk profile.</p>

      <h2>Why Litigation Is Often the Wrong Tool</h2>

      <p>Patent litigation in India, the United States, and most other major jurisdictions is measured in years and costs in figures that are substantial for any party and existential for some. The uncertainty of outcome is high; experienced IP litigators will acknowledge that the result of a patent case is genuinely difficult to predict, even with strong facts.</p>

      <p>Litigation also creates a public record. The pleadings, the expert reports, the deposition transcripts — these are generally available. An infringement action reveals your claim scope, your enforcement priorities, and your assessment of the defendant's product. Sophisticated competitors read IP litigation as intelligence.</p>

      <h2>The Strategic Alternatives</h2>

      <p>The alternatives to litigation are not simply concessions. A well-structured licensing programme can generate revenue from IP that might otherwise require enforcement. A portfolio review that identifies stronger blocking positions can create deterrence without any letter being sent. Strategic filing that covers the design-around space can make infringement structurally difficult rather than merely legally prohibited.</p>

      <p>None of these eliminates the need for litigation in all circumstances. Some infringers will not respond to any alternative. Some disputes involve rights that cannot be licensed without undermining the business. But these are the cases where litigation is appropriate — not the default position from which negotiation is a concession.</p>

      <h2>The Decision Framework</h2>

      <p>Before initiating any enforcement action, three questions deserve honest answers: What exactly do we want to achieve — cessation, compensation, a licence, or a precedent? What is the likelihood of achieving it through litigation versus alternatives? And what are the costs and risks — direct, indirect, and strategic — of each path?</p>

      <p>These questions do not always counsel restraint. Sometimes they counsel aggressive and immediate action. But they counsel it for reasons, not by reflex.</p>
    `,
    },
    {
        slug: "portfolio-as-inheritance",
        title: "Portfolios as inheritance: building IP that outlives the team that built it",
        excerpt: "Documentation is the rarest virtue in IP management — and the most valuable.",
        image: "/images/image9.png",
        date: "January 2026",
        read: "7 min read",
        category: "Strategy",
        content: `
      <p class="lead">A patent portfolio is a long-duration asset. The patents filed today will, if granted and maintained, remain in force for twenty years. The people who built the technology, drafted the applications, and understood the strategic rationale may be gone within five.</p>

      <p>This creates an inheritance problem that most organisations do not address until it becomes acute — usually when a patent needs to be enforced, licensed, or evaluated in an acquisition, and no one can explain why certain claims were drafted as they were, or what commercial problem they were designed to address.</p>

      <h2>The Documentation Gap</h2>

      <p>Patent prosecution generates a significant volume of documents — applications, office actions, responses, examiner interviews, continuation decisions. What it rarely generates is a document that answers the question a business person or a future attorney would actually ask: what was the strategic intent of this filing?</p>

      <p>Why was this claim drafted broadly while that one was narrowed? Which embodiment was considered the most commercially significant? What design-arounds were anticipated and where are they addressed in the specification? What is the relationship between this patent and the three adjacent filings in the same family?</p>

      <p>Without answers to these questions, a portfolio is a collection of legal instruments without a map. Valuing it, enforcing it, and extending it coherently becomes much harder and more expensive than it needed to be.</p>

      <h2>Building Institutional Memory</h2>

      <p>The solution is not complicated, but it requires discipline. Each filing should be accompanied by a brief internal memorandum — one to three pages — that captures the commercial rationale, the key claim choices and their justification, the anticipated design-arounds, and the relationship to adjacent filings.</p>

      <p>This memorandum is not a legal document. It does not become part of the prosecution history. It is internal knowledge management — the mechanism by which the intent of the people who built the technology is transmitted to the people who will manage the portfolio a decade from now.</p>

      <h2>The Maintenance Decision</h2>

      <p>Patent portfolios require ongoing maintenance decisions — annual fees in most jurisdictions, continuation filing decisions, abandonment decisions. These decisions are expensive to make badly and inexpensive to make well, if the underlying strategic documentation exists.</p>

      <p>A patent covering a technology that was never commercialised, in a market the company no longer serves, may be worth abandoning to reduce costs. A patent covering a technology that is central to current products, in a market with active competitors, should be maintained and potentially extended through continuation practice.</p>

      <p>Making these decisions requires knowing what the patents are for. That knowledge does not survive by accident. It survives by documentation.</p>

      <h2>Portfolio as Inheritance</h2>

      <p>The IP portfolio you build today is an inheritance for the organisation's future leadership. Like any inheritance, its value depends not just on what it contains but on how well its contents are documented, organised, and understood. The rarest virtue in IP management is not legal sophistication. It is the discipline to create and maintain the records that make sophistication transmissible.</p>
    `,
    },
];