import { useState } from "react";
import "./App.css";

export default function Url() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [valid, setValid] = useState(0);
  async function shortenUrl(ev) {
    ev.preventDefault();
    setValid(0);
    const response = await fetch("http://localhost:4000/s", {
      method: "POST",
      body: JSON.stringify({url,shortUrl}),
      headers: {'Content-Type':'application/json'}
    });
    if (response.ok) {
      setValid(1);
    }
    else {
      setValid(2);
    }
  }
  return (
    <div>
      <form onSubmit={shortenUrl}>
        <input
          type="text"
          placeholder="original Url"
          required={true}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Desired Url"
          required={true}
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button>Shorten</button>
      </form>
      {valid==1 && (
        <h2>
          The Shortened Link is{' '}
          <a
            href={`http://localhost:4000/${shortUrl}`}
          >{`http://localhost:4000/${shortUrl}`}</a>
        </h2>
      )}
      {valid==2 && (
        <h2>
          There was an Error. Please Try Again
        </h2>
      )}
    </div>
  );
}
