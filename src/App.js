import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers</h3>
        <section className="info">
          {question.map((q) => (
            <SingleQuestion key={q.id} {...q} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
