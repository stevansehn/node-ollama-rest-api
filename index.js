import ollama from "ollama";

(async () => {
  try {
    const response = await ollama.chat({
      model: "llama3.1",
      messages: [{ role: "user", content: "Which came first: the chicken or the egg?" }],
    });
    console.log(response.message.content);
  } catch (e) {
    console.log("Error: ", e.message);
  }
})();
