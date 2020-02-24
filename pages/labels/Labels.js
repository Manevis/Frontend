import React from "react";
import { httpGet } from "../../utils/request";

const Labels = ({ labels }) => {
  return <div>{labels.toString()}</div>;
};

Labels.getInitialProps = async ctx => {
  const labels = await httpGet("labels", ctx);

  return {
    labels,
    SEO: {
      title: "لیبل نوشته‌های مانویس",
      description:
        "مقالات و نوشته های فارسی جدید در موضوعات مختلف در زمینه علمی، آموزشی، کسب‌و‌کار، هنر و...",
      keywords: "مقاله,آموزشی,کسب‌و‌کار,هنر"
    }
  };
};
export default Labels;
