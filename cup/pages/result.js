import React, { useState } from 'react';

const Result = () => {
  const [submitted, setSubmitted] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {

    const fetchedAnswer = "Results";
    setAnswer(fetchedAnswer);
    setSubmitted(true);
  };

  return (
    <div className="ask-ai-ask-ai">
    <div className="ask-ai-design">
      <img
        src="/external/image1152-bjwn-1200h.png"
        alt="image1152"
        className="ask-ai-image"
      />
      <div className="ask-ai-contentbox">
        <img
          src="/external/rectangle481154-8hlo-400h.png"
          alt="Rectangle481154"
          className="ask-ai-rectangle48"
        />
      </div>
    </div>
    </div>
  );
};

export default Result;
