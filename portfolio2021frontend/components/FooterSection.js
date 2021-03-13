import React from "react";

function FooterSection({ data }) {
  console.log("Footer data:");
  console.log(data);
  const year = new Date().getFullYear();

  return (
    <div>
      <a href="#top">Back to top</a>
      <p>{data && data.email}</p>
      <p>&copy; {year} Ed Tervit</p>
    </div>
  );
}

export default FooterSection;
