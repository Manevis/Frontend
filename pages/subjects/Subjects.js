import React from "react";
import { httpGet } from "../../utils/request";

const Subjects = ({ subjects }) => {
  return <div>{subjects.toString()}</div>;
};

Subjects.propTypes = {};

Subjects.getInitialProps = async ctx => {
  const subjects = await httpGet("subjects", ctx);

  return {
    subjects,
    SEO: {
      title: "موضوعات نوشته‌های مانویس",
      description:
        "مقالات و نوشته های فارسی جدید در موضوعات مختلف در زمینه علمی، آموزشی، کسب‌و‌کار، هنر و...",
      keywords: "مقاله,آموزشی,کسب‌و‌کار,هنر"
    }
  };
};
export default Subjects;
