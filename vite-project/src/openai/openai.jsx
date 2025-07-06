import React, { useState } from 'react';

export default function OpenAIChat() {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/openai/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Ask OpenAI (via NestJS)</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your question here..."
        />
        <br />
        <button type="submit">Ask</button>
      </form>

      {answer && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
