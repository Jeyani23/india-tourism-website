function FloatingAssistant({ text }) {

  const speak = () => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="floating-btn" onClick={speak}>
      🤖
    </div>
  );
}

export default FloatingAssistant;