import React from "react";

export default function CharacterClass({
  class_src,
  class_title,
  class_intro,
  class_description,
  prop1,
  prop2,
  prop3,
}) {
  return (
    <div key={class_title}>
      <img src={class_src} alt="" />
      <div>
        <h3>{class_title}</h3>
        <p>{class_intro}</p>
        <div>{class_description}</div>
        <p>+ {prop1}</p>
        <p>+ {prop2}</p>
        <p>+ {prop3}</p>
      </div>
    </div>
  );
}
