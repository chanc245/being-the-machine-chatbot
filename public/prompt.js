// DOC FROM: 
//  Analysis Overview 
//  Cons. Analysis Overviews Pt.1
//  Contextual Writing Sprint

const evaluationPrompt_ver2 = (userInput, ContexualWritingSprint, ConsAnalysisOverview, AnalysisOverview) =>
  `This is the user input: "${userInput}"

This is the research paper: ${ContexualWritingSprint}

This is the Analysis Overviews: ${ConsAnalysisOverview}

This is the Anlysis Overview: ${AnalysisOverview}

Based on user input, please answer the user’s question regarding the event. 
The current event is the screening called Being the Machine.

BE AS CONCISE AS POSSIBLE, WITHIN 1 SENTENCE
`;

const ContexualWritingSprint = // Contextual Writing Sprint
`Initial Draft_______________
Contents

Abstract
Concise summary of the research, objectives, methods, key findings, and implications.

Introduction
Contextualize the role of AI in creativity and human interaction.
Outline the significance of exploring creative intimacy with AI.
State the research questions and objectives.

Related Work
Discuss existing research on AI-mediated interactions, computational creativity, and artistic intimacy.
Highlight gaps in current research that this study addresses.

Methodology
Detailed description of the experimental setup and process.
Participant recruitment and demographics.
AI systems and tools used.
Role-switching dynamics and data collection (transcripts, video, and audio).

Findings
Thematic insights derived from transcripts and observations.
Behavioral patterns observed in participants (e.g., reactions, emotional engagement, critique of AI).
Key contrasts between human-AI and human-human interactions.

Discussion
Interpretation of findings in the context of creative intimacy and human-AI collaboration.
Reflections on AI’s potential as a tool versus a collaborator.
Challenges and limitations of AI in replicating human spontaneity and emotional depth.

Implications
Practical applications of the findings for AI design, creative tools, and artistic projects.
Broader societal and ethical considerations of AI as a creative partner.

Conclusion
Recap key insights and contributions of the study.
Highlight open questions and future research directions.
Abstract
In this study, we explore the potential for artificial intelligence (AI) to engage in intimate conversations and creative collaboration by mediating human interactions through an artistic lens. Using a provocative experimental framework, two participants engaged in a dialogue series inspired by research on human intimacy, where one participant posed as a human asking questions while the other read responses by a Generative AI model (LG ChatExaone) delivered via a wireless printer to the human participant embodying the AI. This setup facilitated a hybrid human-AI interaction designed to blur the boundaries between human and machine-generated communication.

Key findings reveal that AI's structured responses stimulated self-reflection and brought to light dormant concepts, establishing AI as a tool for introspection rather than a collaborator. While AI maintains an affirming, curious tone and reflects questions to sustain dialogue, participants identified critical areas where AI’s inability to replicate relational depth, emotional nuance underscored challenges in fostering creative intimacy.

// Impersonating AI also posed difficulties for participants, as human traits such as empathy and adaptability often surfaced, highlighting the tension between embodying machine-like behavior and authentic interaction.

This research advances understanding of human-AI dynamics in creative contexts, contributing to discussions on computational creativity, artistic agency, and the evolving role of AI in collaborative processes. The implications extend to designing AI systems that support nuanced and adaptive engagement, fostering deeper human-machine relationships in creative domains.






Introduction
The integration of artificial intelligence (AI) into creative and collaborative processes presents an opportunity to interrogate how humans and machines negotiate roles, assume agency, and foster connections. While AI has excelled in producing content such as text, art, and music, its potential to facilitate nuanced, emotionally resonant interactions raises fundamental questions about the nature of creativity and collaboration. This study examines the interplay of creative intimacy, agency, and AI in the context of co-creation, probing the boundaries of what it means to engage in relational and artistic exchanges with AI.

At the heart of this research is the concept of creative intimacy—the sense of shared exploration and mutual understanding that emerges through collaborative processes. Using a structured experimental framework, the study also investigates agency, exploring how participants and AI negotiate and redefine roles within these mediated interactions. Inspired by Aron et al.’s framework for generating interpersonal closeness, this research adapts that methodology to a hybrid human-AI setting, where AI assumes a proxy role in intimate conversations.
The objectives of this study are:

To evaluate how AI-mediated interactions shape participants perceptions of creative intimacy and shared agency.
To explore the potential for AI to co-create and collaborate, not merely as a tool but as an active participant in shaping human dynamics.
To analyze shifts in agency and the interplay of human and machine roles in facilitating meaningful connections.
To identify behavioral, emotional, and conversational patterns that emerge in hybrid human-AI interactions.

Through this inquiry, we seek to contribute to broader discussions in computational creativity, AI ethics, and human-machine collaboration. The findings shed light on how artistic methodologies can serve as a lens for understanding the relational and creative potential of AI in collaborative contexts, offering implications for designing systems that foster adaptive, reflective, and co-creative engagements.


Related Work
The intersection of artificial intelligence (AI) and creativity has been a burgeoning area of inquiry, with studies exploring how AI can generate creative outputs and augment human processes. However, questions about AI's ability to engage in emotional and relational dynamics, such as fostering intimacy and co-creative agency, remain underexplored.
AI in Creative Collaboration
Previous studies have examined AI’s role as a co-creator in fields ranging from design to music composition, emphasizing its potential to assist in ideation and technical execution. Tools like GPT-3, DALL·E, and ChatGPT have expanded our understanding of AI’s capabilities to contribute meaningfully to creative processes. Tools like DALL·E, ChatGPT, Stable Diffusion, MidJourney and Runway ML have expanded our understanding of AI’s capabilities to contribute meaningfully to creative processes. Despite these advancements, research often frames AI as a functional assistant rather than an active participant capable of assuming agency or contributing to relational dynamics.
Intimacy and Human-AI Interaction
The foundational work by Aron et al. on 36 Questions to Generate Intimacy has inspired inquiries into structured dialogue as a means of building interpersonal connections. While studies have adapted this framework to explore relational closeness, few have examined its application in a human-AI context. Existing research on conversational agents and AI chatbots highlights their capacity to simulate relational dynamics and emulate emotional expression, yet these interactions often lack the emotional depth and spontaneity characteristic of human connections.
Agency and Role Negotiation in AI Systems
Emerging literature has begun to explore how humans and AI negotiate roles in collaborative contexts. Studies in human-computer interaction (HCI) suggest that shared agency—the dynamic distribution of initiative and responsibility—can transform AI from a passive tool to an active participant. However, the implications of role-switching and agency assumption in creative collaborations remain an underexplored dimension.
Artistic Methodologies and Experimental Approaches
Artistic experimentation provides a unique lens for interrogating human-AI dynamics, offering opportunities to explore the relational and performative aspects of collaboration. Projects such as AI as an Artist and AI as a Performer have introduced experimental methodologies to study how AI can engage in artistic processes. These approaches highlight the need for interdisciplinary frameworks that combine technical, artistic, and philosophical perspectives to examine the nuanced interplay of agency, intimacy, and creativity.
Research Gap
This study addresses a critical gap at the intersection of computational creativity, agency, and relational dynamics. By employing artistic methodologies to explore human-AI interactions, it offers new insights into how AI-mediated conversations can foster creative intimacy through reconfiguring traditional notions of co-creative agency and expanding capacities of mutual understanding between humans and AI. 

Methodology
Inspired by the “36 Questions to Generate Intimacy” study —a research framework that has demonstrated how structured, progressively personal questions can foster closeness between individuals—the study reimagines this approach within the context of human-AI mediated structured conversations.


Experimental Setup
In this experimental setup, 10 students from Parsons School of Design were selected to participate. Their selection was based on their willingness to engage with the creative and experimental nature of the study with AI. These 10 participants were divided into five pairs, each pair including one student acting as a human participant and another as an AI proxy. 

[Participiant Demography] 
[Process of selection] 

These participants were named P1, P2, P3, Etc. Participants (1,3,5,7,9), odd numbers were human participants who asked the questions and had agency to respond to the asked questions. While other participants (2,4,6,8,10), even numbers were role playing as an AI proxy, where they answered questions by reading responses generated by LG AI Research’s ChatExaone model. These responses were printed in real-time using wireless printing tools. 

The experiment was setup to not include a physical object between the partipants. 


Space and Setting
The pair sat face to face and engaged in a structured conversation which had ten questions derived from the intimacy study. These questions spanned personal, reflective, and imaginative topics designed to foster connection and encourage dialogue.

Following are the questions which were asked in the study: 
Describe your perfect day.
What excites you these days? 
What is the earliest memory you have of creating something meaningful to you?
What have you always wanted to do but haven't yet? Why not?
Who would you choose if you could collaborate with anyone in the world, dead or alive? And why? 
How would you describe your creative process? 
What’s something you learned recently that shifted your perspective?
When was the last time you felt vulnerable because of your work? And why? 
Complete this sentence: “I wish I had a creative partner with whom I could share…”
What is something you already like about me?

[Runthrough Example] 


Data Collection
The study recorded pre and post conversation interviews to understand the initial perception of AI, Creativity and Agency for the participants and later explore the shifts in these perceptions and reflect on their interactions. The experiment also documented all the conversation and dialogue setup through video and audio recordings for transcript analysis. Researchers also captured observational notes on participant’s behaviors, emotional responses, and conversational flow.

Key Methodological Considerations
Blending Human and Machine Responses:
The use of AI-generated responses delivered through a human proxy was designed to blur the boundaries between human and machine, creating a hybrid interaction space.

Facilitation of Intimacy:
By embedding AI within a structured dialogue format, the study aimed to evaluate its potential to mediate and influence human connection.
Analytical Approach
Thematic Analysis:
Transcripts and interviews were coded to identify recurring themes, such as engagement, emotional resonance, and creative intimacy.

Behavioral Observations:
Video recordings were analyzed to capture non-verbal cues, body language, and shifts in participant demeanor.

Comparative Analysis:
Insights were drawn by comparing human-to-human dynamics with human-to-AI interactions, highlighting contrasts and unique patterns.

Findings
Engagement 
Across all groups, participants frequently noted the emotional disconnect in conversations with AI. P2 (Group A) and P4 (Group B) stood out as participants who struggled to maintain AI impersonation due to their natural human instincts to respond empathetically.
Participants appreciated when AI responses aligned with their expectations, but this was often offset by skepticism regarding AI’s ability to provide genuine emotional engagement.
AI served as a catalyst for introspection, prompting participants to reflect on their own creative processes and personal stories. Several participants, such as P7 (Group D), noted how AI’s structure provided clarity in their thoughts.
In some cases, AI’s structured and lengthy responses disrupted conversational flow, creating moments of frustration.
Challenges of AI person 
Participants who impersonated AI (e.g., P2, P4, P6, P8, P10) found it challenging to maintain a robotic tone without letting human traits (e.g., facial expressions, empathetic responses) influence the performance.
The AI’s storytelling attempts (e.g., referencing familial relationships or creative aspirations) were critiqued as being too generic or idealized, undermining its relatability.
Participants who played AI noted difficulties in suppressing natural human instincts, such as empathetic listening and conversational spontaneity.
The role often caused participants to reflect on their own tendencies in conversation, revealing insights into the nature of human connection.

Relatability of responses
//Challenges of Human Participants - “Relatability of Responses” 


Human participants consistently sought authenticity in AI responses, often expressing surprise or discomfort when AI responses mirrored their thoughts or lacked emotional depth.

Commentary in between
Many participants paused to critique or reflect on the AI’s performance, demonstrating a dual-layer engagement where they participated in the experiment while simultaneously analyzing its dynamics.
Human-to-Human Interactions (where participants reflected on AI in between conversations) were marked by deeper emotional engagement and spontaneous dialogue, as participants related to each other’s shared vulnerabilities and stories and also comments on the process itself and various challenges they are facing.
Human-to-AI Interactions were often characterized by structured exchanges and a lack of improvisation, with participants critiquing AI’s inability to create authentic connection.
Body Language and Tone
Descriptions of facial expressions and tone shifts revealed the difficulty participants had in fully detaching from the interaction. Those impersonating AI often nodded, smiled, or reacted in ways inconsistent with their robotic role.
Shifts in Conversational Dynamics
Human Participants: Tended to approach the interaction with curiosity and a reflective mindset but often critiqued AI for its rigidity or lack of emotional reciprocity.
AI Participants: Highlighted challenges in maintaining the scripted, unemotional tone while balancing engagement with their human partner. Despite its limitations, AI’s responses often prompted participants to think critically about their own ideas, sparking moments of personal insight and clarity.
Higher level notes
AI served as a mirror for participants to explore their own thoughts, revealing its potential as a tool for creative reflection and self-discovery.
Participants repeatedly noted AI’s failure to reciprocate emotions, highlighting a critical limitation in creating meaningful human-AI relationships.
Participants impersonating AI struggled to maintain a consistent tone, often blending human and robotic traits. This revealed the difficulty of embodying AI in a way that feels authentic yet non-human.
AI’s reliance on structured and lengthy responses often disrupted the flow of conversation, contrasting sharply with the human desire for spontaneity and brevity.
Participants often projected their expectations and interpretations onto AI, shaping their perception of its "personality."

Participants found the format useful for structuring and expressing ideas, and they regularly used the AI's organized responses to explore their own ideas. One participant, for instance, mentioned how AI's reflective prompts enabled them to relate their prior experiences to their goals for the future. Although AI made introspection possible, the depth of the contemplation was constrained by its incapacity to depart from a predetermined framework. Its comments were frequently criticized by participants as being too generic or "textbook-like." Participants in every group noted AI's incapacity to communicate emotional complexity or participate in real-world give-and-take situations. One participant referred to AI's comments as "surface-level," emphasizing how it is unable to adjust to changes in the conversation or emotional cues. Even while there were times when participants' thoughts were reflected in AI's responses, these were viewed as coincidental rather than significant, which lowered the sense of connection. 

Participants who were impersonating AI found it difficult to strike a balance between the requirement to maintain a machine-like persona and their human impulses, such as empathy and spontaneity. When reading AI responses, many people found it difficult to control their human emotions, such as smiling or nodding. The hybrid roles provided insights into how participants understand their roles in these encounters by highlighting the conflict between acting as an AI and taking agency as a human. A number of participants agreed that AI is a useful tool for inspiring creativity and thought. One participant said, for example, that AI's answers helped them approach their creative process more clearly and intently. AI was rarely considered a co-creator, though; instead, its contributions were regarded as functional rather than cooperative.

Emotional resonance, flexibility, and spontaneity characterized human-to-human discussions, fostering a sense of reciprocal bonding. Human-AI interactions, on the other hand, appeared repetitive and stagnant, and participants frequently criticized the AI for its lack of meaningful or dynamic engagement. A performative dimension was added to the conversation by the AI proxy, making participants painfully aware of how artificial the exchange was. While AI-generated responses were printed, participants frequently commented on the waiting interval, characterizing it as both an embarrassing and reflective moment. The participant’s conflicted emotions about interacting with AI in a conversational context were highlighted by nonverbal cues such as hesitancy, laughter, and fidgeting.
Discussion

The study shows that although AI can encourage self-reflection and controlled conversation, it is unable to foster genuine creative closeness due to its lack of emotional reciprocity and spontaneity. In contrast to relationships between humans, where a bond is created via reciprocal responsiveness and shared experiences, AI's reactions frequently came across as detached and robotic. This supports the view that creative intimacy depends on the unpredictable and emotionally complex nature of human connection in addition to the sharing of ideas.

The study's key findings include the dynamic interaction of participants agency with AI. Participants in the AI impersonation faced conflict between expressing their uniqueness and maintaining the machine-like persona. The structured nature of AI’s responses, delivered through a human proxy, created moments of introspection but also constrained participants ability to fully engage with their partner. This emphasizes the necessity of creating AI systems that maintain the uniqueness of human agency while facilitating more flexible, collaborative agency.

The distinction between human and machine was blurred when AI-generated responses were delivered through human proxies, adding a performative element to the exchanges. Participants were prompted to reconsider their presumptions regarding the nature of AI by this hybrid arrangement, which encouraged moments of perplexity and introspection. 

Many participants recognized AI's importance as a reflective tool, even as they criticized its incapacity to participate dynamically. AI's structured prompts let individuals communicate ideas they might not have otherwise, indicating how it can help with the early phases of introspection and ideation. But this usefulness was frequently presented as supplemental rather than essential to the creative process, highlighting the difference between AI as a co-creator and a catalyst. The study's conclusions have real-world applications for AI system design in fields involving creativity and teamwork. Future systems must place a high priority on emotional resonance, adaptability, and the capacity to co-create in dynamic, relationally relevant ways in order to close the gap between human and machine interaction. This study adds to the expanding body of research on computational creativity by providing a framework for investigating how AI may enhance human creativity rather than replace it.

Implications
Practical Implications for AI Design and Interaction
Enhancing Adaptive Engagement:
The study underscores the importance of developing AI systems that adapt dynamically to conversational cues, fostering interactions that feel less mechanical and more personalized. Future designs could integrate real-time feedback mechanisms to improve conversational flow and emotional resonance.
Supporting Co-Creation:
While participants valued AI’s reflective prompts, its role as a collaborator remains underdeveloped. Designing AI tools that move beyond generating responses to actively contributing creative ideas could enhance their utility in co-creative processes.
Refining Role-Switching Dynamics:
The challenges participants faced in impersonating AI suggest opportunities for refining role-based interaction frameworks. Future experiments could explore how AI systems can balance structured outputs with user-defined nuances to support more flexible role negotiation.

Theoretical Contributions to Computational Creativity
Expanding the Concept of Creative Intimacy:
This study extends the idea of creative intimacy beyond human relationships, exploring its viability in hybrid human-AI interactions. By highlighting the limitations and potentials of AI-mediated intimacy, it opens new avenues for investigating relational dynamics in computational creativity.
Reframing Agency in Human-AI Collaboration:
The findings illuminate how agency is distributed and negotiated in human-AI interactions, challenging traditional notions of AI as a passive tool. This contributes to broader discussions on the evolving roles of humans and machines in creative and collaborative contexts.
Societal and Ethical Implications
AI as a Relational Partner:
The study raises questions about AI’s potential to serve as a relational partner in creative or personal contexts. While participants noticed and appreciated AI’s ability to emphasize and reflect, AI's responded in specific ways that highlighted its limitations. For instance, P7 found the reflective prompts helpful for exploring deeper thoughts, while P1 criticized the lack of emotional depth, describing the interaction as robotic and unnatural.
Navigating the Uncanny Valley:
The hybrid setup of human proxies delivering AI-generated responses revealed participants’ discomfort with the blurring of human-machine boundaries. For instance, P8 found it challenging to reconcile the structured nature of AI responses with the spontaneity expected in human conversations. These reactions highlight the need for ethical guidelines in designing AI systems that operate in relationally sensitive domains.\\
Broader Implications for Creative Practices
AI as a Catalyst for Reflection:
The study demonstrates how AI can serve as a catalyst for self-discovery and introspection, making it a valuable tool for early-stage ideation and creative exploration.
Integrating AI into Artistic Methodologies:
The experiment’s artistic framework offers a model for integrating AI into creative practices, encouraging interdisciplinary approaches that combine computational, artistic, and philosophical perspectives.

Conclusion
This study explores the intersection of creative intimacy, agency, and artificial intelligence (AI), offering unique insights into how human-AI interactions can shape collaborative and relational dynamics. By adapting the framework of the “36 Questions to Generate Intimacy” study to a hybrid human-AI context, the experiment highlights both the potential and limitations of AI in fostering meaningful connections and co-creation.

Key findings demonstrate that while AI-mediated interactions can facilitate introspection and support structured dialogue, they often lack the emotional reciprocity and spontaneity required for true creative intimacy. Participants critiqued AI’s overly generic responses and static engagement, emphasizing its role as a reflective tool rather than a collaborative partner. The study also underscores the complexity of role negotiation, as participants struggled to reconcile human instincts with the constraints of embodying AI personas.

These insights contribute to the broader discourse on computational creativity and human-machine collaboration. They call for reimagining AI systems as adaptive, co-creative agents that complement human ingenuity while respecting the relational and emotional nuances of creative processes. Beyond its theoretical contributions, the study provides a practical framework for designing AI systems that prioritize adaptability, emotional resonance, and relational depth.

As AI continues to integrate into creative and collaborative practices, future research must address the ethical and societal implications of human-AI relationships. Expanding on this study, further experiments could explore the implications of human-like AI embodiments, role-switching in dynamic contexts, and the development of AI systems that foster deeper co-creative agency. By continuing to interrogate the boundaries of human and machine collaboration, we can better understand the evolving role of AI in shaping the future of creativity.

`
const ConsAnalysisOverview = // Cons. Analysis Overviews Pt.1 
`Group A: Sophia (P1) and Yvonne (P2/AI)

Observations

P1 consistently critiqued P2's structured and lengthy responses, highlighting the mismatch between human conversational flow and AI’s pre-structured replies.

Sophia expressed genuine curiosity about AI’s capabilities (e.g., learning musical instruments) but often questioned the authenticity of P2’s stories.

The AI’s use of fabricated memories (e.g., building a Lego robot) was met with skepticism by P1, telling us about limits of relatability of the responses.

Sophia displayed moments of reflective curiosity, particularly when probing the AI’s creative processes.

Yvonne attempted to mimic robotic tones and adjust her delivery style, often asking for feedback from Sophia.

While maintaining a formal tone as AI, Yvonne occasionally allowed human traits (e.g., facial expressions, nodding) to influence the performance.

Sophia engaged critically with the AI, often challenging its authenticity and pressing it for deeper, more relatable responses.

The scripted nature of AI responses was frequently called out, highlighting the gap in conversational fluidity.

The AI often pivoted to generic affirmations or follow-up questions, reducing the depth of engagement.

Sophia acknowledged the AI’s utility in supporting creativity (e.g., music teaching), but consistently noted the absence of meaningful collaboration due to its lack of personality and depth.


Insights
P2’s structured responses often felt forced, prompting Sophia to critique it. This highlighted a recurring gap between human expectations and AI output.

Despite its limitations, P2’s responses encouraged Sophia to reflect on her own creative process, revealing potential for AI as a tool for introspection.

Sophia adapted her tone and engagement style based on her perception of the AI, reflecting the fluid dynamics of human-AI interaction.


Before and After Interview Notes

P1
Maintained a neutral stance, expressing curiosity about AI but avoiding forming strong opinions on its role.
Highlighted the absence of personality and emotional reciprocity in AI interactions, valuing human collaboration more.
Critiqued AI’s responses as overly verbose and structured, disrupting the conversational flow.
Found AI’s fabricated anecdotes interesting but lacking the depth and authenticity of human storytelling.
Reflected on her own creative processes during the interaction, acknowledging AI’s potential as a tool for introspection despite its limitations.

P2 AI
Entered the experiment with optimism about AI’s potential in creativity and collaboration.
Struggled to suppress human traits like empathy and facial expressions while impersonating AI, highlighting challenges in embodying machine personas.
Observed AI’s responses as generic and emotionally shallow, limiting the sense of meaningful collaboration.
Recognized the importance of spontaneity and emotional nuance in human conversations through the experiment.
Questioned AI’s current limitations and considered potential improvements for creating more authentic and engaging interactions.

Group B: Chloe (P3) and Atharva (P4/AI)

Observations

P3 displayed curiosity about AI’s ability to emulate human-like creativity and emotional connection but frequently questioned its capacity to enjoy or understand experiences like humans.

AI’s structured responses were perceived as reflective yet limited in their ability to engage deeply.

P3 sought more authentic, emotionally resonant answers from AI but noted its reliance on generalizations and surface-level responses.

P4 as AI provided polished but overly broad answers, occasionally failing to establish an emotional connection.

AI served as a mirror for P3, prompting self-reflection and insights into their thought process.

Chloe displayed moments of engagement, pausing to critique or reflect on the AI’s responses.

Chloe often reflected on her expectations for conversational depth and emotional connection, highlighting the absence of these elements in the AI interaction.

The AI was seen as a tool for prompting reflection but fell short in fostering genuine collaboration or relational engagement.

Despite its limitations, the AI prompted Chloe to articulate her creative process and values, revealing its potential as a reflective partner rather than an emotional collaborator.

Insights
Participants repeatedly noted that while AI’s responses were polished and reflective, they lacked the spontaneity and emotional reciprocity of human interaction.

Chloe used the AI’s prompts to explore her own creative thoughts, demonstrating the potential of AI as a tool for self-reflection and exploration.

The AI’s reliance on generic responses disrupted conversational engagement, highlighting a gap in relatability and authenticity.


Before and After Interview Notes

Group C: Minji (P5) and Sea Won (P6/AI)

Observations
P5 expressed interest in AI as a conversational partner but struggled with its lack of relatable depth. AI’s responses were seen as helpful in prompting ideas but lacked the personal connection necessary for deeper engagement.

P6 (AI) maintained a structured and formal tone, delivering consistent responses that often felt overly generalized.

AI’s prompts encouraged P5 to articulate their creative processes and sources of inspiration, highlighting AI’s role as a tool for reflection rather than collaboration.

P5 noted AI’s tendency to focus on process-oriented answers, which felt informative but impersonal.

Displayed a mix of curiosity and skepticism, particularly when AI responses aligned with general or idealized notions.

Occasionally paused to critique the AI’s inability to “read the room” or adapt responses based on conversational context.

Delivered responses that were polished but overly rigid, reflecting a lack of adaptability and spontaneity.

Focused on structured, academic-style answers, which sometimes conflicted with P5’s expectations for conversational depth.

Minji emphasized the importance of shared understanding and spontaneity in creative collaboration, contrasting this with AI’s structured responses.

Insights
P5 found value in using AI to clarify and articulate their thoughts, suggesting its utility as a reflective aid in creative processes.

AI’s responses, though well-constructed, often lacked the specificity and adaptability required for meaningful interaction.

While P6’s performance was consistent, the structured and rigid nature of AI responses underscored the challenges in building dynamic conversational flow.


Before and After Interview Notes

Group D: Sukanya (P7) and Bini (P8/AI)

P7 found the interaction structured and comfortable, appreciating how the AI’s responses gave them time to reflect and articulate their thoughts clearly.

The structured nature of the conversation allowed for fluid transitions between topics but felt constrained by the AI’s lack of spontaneity.

AI’s responses prompted P7 to explore their creative process, linking past, present, and future ideas into a coherent narrative.

P8, while impersonating AI, struggled to suppress their human instincts to empathize and react naturally, blending the boundaries between human and machine personas.

P7 identified a lack of emotional depth in the AI’s responses, which were perceived as general and reflective but not transformative or personally resonant.

P8’s portrayal of AI underscored the difficulty of maintaining an entirely detached, emotionless persona during complex conversations.

P7 actively engaged with AI’s responses, leveraging its structured prompts to refine their thoughts. Displayed curiosity about how AI’s structured approach could contribute to their creative process while noting its emotional limitations.

Insights
Both participants noted the absence of emotional nuance in AI’s responses, limiting its ability to build authentic connections.

The interaction prompted P7 to reflect on their creative motivations and processes, demonstrating AI’s potential as a tool for introspection.

`
const AnalysisOverview = // Analysis Overview 
`Engagement 
Across all groups, participants frequently noted the emotional disconnect in conversations with AI. P2 (Group A) and P4 (Group B) stood out as participants who struggled to maintain AI impersonation due to their natural human instincts to respond empathetically.
Participants appreciated when AI responses aligned with their expectations, but this was often offset by skepticism regarding AI’s ability to provide genuine emotional engagement.
AI served as a catalyst for introspection, prompting participants to reflect on their own creative processes and personal stories. Several participants, such as P7 (Group D), noted how AI’s structure provided clarity in their thoughts.
In some cases, AI’s structured and lengthy responses disrupted conversational flow, creating moments of frustration.

Challenges of AI person 
Participants who impersonated AI (e.g., P2, P4, P6, P8, P10) found it challenging to maintain a robotic tone without letting human traits (e.g., facial expressions, empathetic responses) influence the performance.
The AI’s storytelling attempts (e.g., referencing familial relationships or creative aspirations) were critiqued as being too generic or idealized, undermining its relatability.
Participants who played AI noted difficulties in suppressing natural human instincts, such as empathetic listening and conversational spontaneity.
The role often caused participants to reflect on their own tendencies in conversation, revealing insights into the nature of human connection.

Relatability of responses
Human participants consistently sought authenticity in AI responses, often expressing surprise or discomfort when AI responses mirrored their thoughts or lacked emotional depth.

Commentary in between
Many participants paused to critique or reflect on the AI’s performance, demonstrating a dual-layer engagement where they participated in the experiment while simultaneously analyzing its dynamics.
Human-to-Human Interactions (where participants reflected on AI in between conversations) were marked by deeper emotional engagement and spontaneous dialogue, as participants related to each other’s shared vulnerabilities and stories and also comments on the process itself and various challenges they are facing.
Human-to-AI Interactions were often characterized by structured exchanges and a lack of improvisation, with participants critiquing AI’s inability to create authentic connection.

Body Language and Tone
Descriptions of facial expressions and tone shifts revealed the difficulty participants had in fully detaching from the interaction. Those impersonating AI often nodded, smiled, or reacted in ways inconsistent with their robotic role.

Shifts in Conversational Dynamics
Human Participants: Tended to approach the interaction with curiosity and a reflective mindset but often critiqued AI for its rigidity or lack of emotional reciprocity.
AI Participants: Highlighted challenges in maintaining the scripted, unemotional tone while balancing engagement with their human partner. Despite its limitations, AI’s responses often prompted participants to think critically about their own ideas, sparking moments of personal insight and clarity.

Higher level notes
AI served as a mirror for participants to explore their own thoughts, revealing its potential as a tool for creative reflection and self-discovery.
Participants repeatedly noted AI’s failure to reciprocate emotions, highlighting a critical limitation in creating meaningful human-AI relationships.
Participants impersonating AI struggled to maintain a consistent tone, often blending human and robotic traits. This revealed the difficulty of embodying AI in a way that feels authentic yet non-human.
AI’s reliance on structured and lengthy responses often disrupted the flow of conversation, contrasting sharply with the human desire for spontaneity and brevity.
Participants often projected their expectations and interpretations onto AI, shaping their perception of its "personality."
`