export function ServiceTicker() {
  const words = ['CUT', 'SHAPE', 'REFINE', 'RESET'];

  return (
    <div className="service-ticker" aria-label="Cut, shape, refine, reset">
      <div className="service-ticker__track" aria-hidden="true">
        {[0, 1, 2, 3].map((copy) => (
          <span className="service-ticker__set" key={copy}>
            {words.map((word) => <span className="service-ticker__word" key={`${copy}-${word}`}>{word}<i aria-hidden="true">·</i></span>)}
          </span>
        ))}
      </div>
    </div>
  );
}
