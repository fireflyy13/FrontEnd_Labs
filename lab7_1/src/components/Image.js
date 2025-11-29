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
      <p>
        Кра́ків — місто в Польщі на березі Вісли, 782 тисячі жителів (2021),
        <br />
        з найближчими передмістями 1,5 млн. Адміністративний центр
        Малопольського воєводства. <br />
        Друге за величиною та кількістю мешканців місто в Польщі після Варшави;
        одне з найстаріших <br />
        міст Польщі, з тисячолітньою історією, багатою культурною та
        архітектурною спадщиною. <br />У період Австро-Угорщини один з центрів
        Західної Галичини.
      </p>

      <a href="https://www.krakow.pl/">
        {images.map((img) => (
          <img
            key={img.id}
            className="picture"
            src="https://kono.jobs/wp-content/uploads/2024/05/kono-miasto-krolow.-krakow-886x458.jpg"
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
