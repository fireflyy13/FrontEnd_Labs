import React, { useState } from "react";

function Image() {
  const [images, setImages] = useState([{ id: 1, height: 350 }]);

  const increaseSize = () => {
    setImages((imgs) =>
      imgs.map((img) => ({ ...img, height: img.height + 30 }))
    );
  };

  const decreaseSize = () => {
    setImages((imgs) =>
      imgs.map((img) => ({ ...img, height: img.height - 30 }))
    );
  };

  const addPicture = () => {
    setImages((imgs) => [...imgs, { id: Date.now(), height: 350 }]);
  };

  const deletePicture = () => {
    setImages((imgs) => imgs.slice(0, -1));
  };

  return (
    <div>
      <a href="https://www.krakow.pl/">
        {images.map((img) => (
          <img
            key={img.id}
            className="picture"
            src="/kono-miasto-krolow.-krakow.jpg"
            alt="Krakow"
            style={{
              height: img.height + "px",
              width: "auto",
              margin: "20px",
              display: "block",
            }}
          />
        ))}
      </a>

      <button onClick={increaseSize}>Збільшити зображення</button>
      <button onClick={decreaseSize}>Зменшити зображення</button>
      <button onClick={addPicture}>Додати зображення</button>
      <button onClick={deletePicture}>Видалити зображення</button>
    </div>
  );
}

export default Image;
