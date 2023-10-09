import React from "react";
import format from "date-fns/format";

const CardComponent = ({ item }) => {
  console.log(item);
  const authorLink = item?._links?.author?.[0]?.href;

  return (
    <div
      className="p-card p-card-custom col u-equal-height"
      style={{
        borderRadius: "0.2rem",
        boxShadow: "0px 0px 6px 3px rgba(0,0,0,0.08)",
        display: "flex",
        //  In case category change the color
        //  dinamically, we can set the color here
        borderTop: "3px solid #a87ca0",
      }}
    >
      <div>Category: {item?.categories[0]}</div>

      <div className="p-card__content dotted-top-border">
        {/**
         * The test shows the heading before the image,
         * but I'd like to propose having the image on the top
         * and the heading after the image, in cases where the
         * title is too long like now.
         * Similar to the Ubuntu blog.
         */}
        <a href={item?.link}>
          <img
            className="p-card__image"
            src={item?.featured_media}
            alt={item?.title?.rendered}
          />
          <h3> {item?.title?.rendered}</h3>
        </a>

        <div>
          by{" "}
          <a rel="noreferrer" target="_blank" href={authorLink}>
            {item?.author}
          </a>{" "}
          on {format(new Date(item?.date), "PPPP")}
        </div>
      </div>

      <div className="p-content__footer dotted-top-border">{item?.type}</div>
    </div>
  );
};

export default CardComponent;
