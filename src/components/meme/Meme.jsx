import { useEffect, useState } from "react";
import "./Meme.css";
import {Link} from 'react-router'


const Meme = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        setMemes(data.data.memes.slice(0, 10)); // primeros 10 memes
      })
      .catch(err => console.error("Error al cargar memes", err));
  }, []);

  return (
    <div className="meme__container">
      <h2 className="meme__title">Memes Populares</h2>
      <button className="btn__container ">
                    <Link to="/">Regresar</Link>
    </button>
      <div className="meme__grid">
        {memes.map(meme => (
          <div key={meme.id} className="meme__card">
            <img src={meme.url} alt={meme.name} className="meme__img" />
            <p className="meme__name">{meme.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Meme;
