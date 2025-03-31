// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //

// github('jcubic/jquery.terminal');
document.fonts.ready.then(() => {
  const term = $("#commandDiv").terminal(
    {
      start: async function () {
        // loadPuzzle.call(this);
      },
      processInput: async function (input) {
        const prompt = evaluationPrompt_ver2(
          input,
          ContexualWritingSprint,
          ConsAnalysisOverview,
          AnalysisOverview
        );
        // const prompt = evaluationPrompt_ver1(input, AllInterview, ALLConversation);

        const aiResponse = await fetchAIResponse(prompt, input);
        this.echo(`\n[AI]
  ${aiResponse}
`);
      },
    },
    {
      greetings: `Welcome to the terminal for the Being the Machine Screen Filming event!

Here, you’ll interact with the AI from the film, who knows all the information within!

Feel free to ask me anything about the event or the film!
`,
      prompt: "> ",
      onInit: function () {
        this.push(async function (input) {
          const prompt = evaluationPrompt_ver2(
            input,
            ContexualWritingSprint,
            ConsAnalysisOverview,
            AnalysisOverview
          );
          // const prompt = evaluationPrompt_ver1(input, AllInterview, ALLConversation);
          const aiResponse = await fetchAIResponse(prompt, input);
          this.echo(`\n[AI]
  ${aiResponse}
`);
        });
      },
    }
  );
});

// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //

async function fetchAIResponse(input, userInput) {
  console.log(`--fetchAIResponse started --input: ${input}`);

  try {
    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input, userInput }),
    });

    if (response.ok) {
      console.log("--AI response OK");
      const jsonData = await response.json();
      const aiModResponse = jsonData.ai;

      console.log(`==Gemini Output: ${aiModResponse}`);
      return aiModResponse;
    } else {
      console.error(
        "Error in API request:",
        response.status,
        response.statusText
      );
      return `Error in API request: ${response.status} ${response.statusText}`;
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Oops, something went wrong. Let's try again!";
  }
}
