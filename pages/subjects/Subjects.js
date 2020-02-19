import React from "react";
import PropTypes from "prop-types";
import { httpGet } from "../../utils/request";

const Subjects = ({ subjects }) => {
  return <div>{subjects.toString()}</div>;
};

Subjects.propTypes = {};

Subjects.getInitialProps = async ctx => {
  const subjects = await httpGet("subjects");
  console.log(subjects);

  return {
    subjects,
    SEO: {
      title: "موضوعات نوشته‌های Autor",
      description:
        "مقالات و نوشته های فارسی جدید در موضوعات مختلف در زمینه علمی، آموزشی، کسب‌و‌کار، هنر و...",
      keywords: "مقاله,آموزشی,کسب‌و‌کار,هنر"
    }
  };
};
export default Subjects;
