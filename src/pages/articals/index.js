import React from "react";
import './artical.scss'
import dataArtical from '../../utils/artical.json'
import ImageWithContent from "../../components/content";
import Card from "../../components/card";

const Artical = () => {
  return (
    <div className="container">
  <div className="col-6 left-col">
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        {dataArtical.slice(0, 1).map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            content={card.content}
            title={card.title}
            auther={card.Author}
          />
        ))}
      </div>
  </div>
  <div className="col-6 right-col">
    <div className="row">
    {dataArtical.slice(1, 2).map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            content={card.content}
            title={card.title}
            auther={card.Author}
          />
        ))}
    </div>
    <div className="row">
    {dataArtical.slice(2, 3).map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            content={card.content}
            title={card.title}
            auther={card.Author}
          />
        ))}
    </div>
  </div>
</div>

  );
};

export default Artical;
