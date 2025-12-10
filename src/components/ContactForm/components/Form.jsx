import { useState } from "react";
function Loading() {
  return (
    <div
      id="loading-submit"
      className="loader flex justify-center items-center"
    >
      <div className="container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <svg width="0" height="0" className="svg">
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
function Form({ handleSubmit, items }) {
  const [isLoading, setLoading] = useState(false);
  return (
    <form
      className="contact"
      onSubmit={async (e) => {
        setLoading(true);
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        const isOk = await handleSubmit(data);
        setLoading(false);
        if (isOk) {
          e.target.reset();
        }
      }}
    >
      <label htmlFor="email">
        <span>Email</span>
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="name">
        <span>{items[0]}</span>
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="comment">
        <span>{items[1]}</span>
        <textarea type="text" name="comment" id="comment" rows={3} />
      </label>
      {isLoading ? (
        <Loading />
      ) : (
        <input type="submit" name="submit" id="submit" value={items[2]} />
      )}
    </form>
  );
}

export default Form;
