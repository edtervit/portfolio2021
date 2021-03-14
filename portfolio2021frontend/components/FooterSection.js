import React from "react";
import marked from "marked";

function FooterSection({ data }) {
  console.log("Footer data:");
  console.log(data);
  const year = new Date().getFullYear();

  const markdown = marked(data.footerText);

  return (
    <div className="bg-yellow ">
      <div className="cont">
        <a href="#" className="text-xl ">
          Back to top
        </a>
        <div
          className=" mt-5 mx-auto"
          dangerouslySetInnerHTML={
            data && data.footerText && { __html: markdown }
          }
        ></div>
        <p className="">{data && data.email}</p>
        <p>&copy; {year} Ed Tervit</p>
      </div>
    </div>
  );
}

export default FooterSection;
