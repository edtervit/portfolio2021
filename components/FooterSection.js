import React from "react";
import marked from "marked";

function FooterSection({ data }) {
  const year = new Date().getFullYear();

  const markdown = marked(data.footerText);

  return (
    <div className="bg-yellow dark:bg-gray dark:text-white">
      <div className="cont">
        <a href="#" className="text-xl ">
          Back to top
        </a>
        <div
          className="mx-auto mt-5 "
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
