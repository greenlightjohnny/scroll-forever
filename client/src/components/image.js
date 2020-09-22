import React from "react";

export default function image({ image }) {
  return (
    <div className="image-item">
      <img className="single-photo" src={image.urls.regular} alt="" />
    </div>
  );
}
