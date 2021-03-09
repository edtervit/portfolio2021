import React from "react";

function LandingSection({ data }) {
  console.log("Landing data:");
  console.log(data);

  const d = data;
  return (
    <div>
      <h1>{d.mainTitle}</h1>
      <h2>{d.subTitle}</h2>
      {d &&
        d.button.map((button) => (
          <div key={button.id}>
            <a href={button.ButtonLink}>{button.buttonText}</a>
          </div>
        ))}
    </div>
  );
}

export default LandingSection;
