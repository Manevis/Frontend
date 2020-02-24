import { fullName } from "../../utils/string";

export const SEOGeneratorTypes = {
  POST: "POST",
  SUBJECT: "SUBJECT",
  LABEL: "LABEL",
  USER: "USER"
};

const userPostsSEO = data => ({
  title: `نوشته‌های ${fullName(data.user)}`,
  keywords: data.labels?.map(label => label.name).toString(),
  description: `مقاله‌ها و نوشته‌های ${fullName(data.user)} `,
  author: fullName(data.user),
});

const postSEO = data => ({
  title: `${data.title} - نوشته ${fullName(data.user)} در مانویس`,
  keywords: data.labels?.map(label => label.name).toString(),
  description: data.content.substring(0, 100),
  author: fullName(data.user),
});

const labelSEO = data => ({
  title: `آخرین مقالات مربوط به ${data.label.name}`,
  keywords: data.label.name,
  description: `آخرین مقالات و نوشته‌های روز در حوزه ${data.label.name}`,
});

const subjectSEO = data => ({
  title: `آخرین مقالات با موضوع ${data.subject.name}`,
  keywords: data.subject.name,
  description: `آخرین مقالات و نوشته‌های روز در حوزه ${data.subject.name}`,
});

export const SEOGenerator = (data, type) => {
  switch (type) {
    case SEOGeneratorTypes.POST:
      return postSEO(data);
    case SEOGeneratorTypes.SUBJECT:
      return subjectSEO(data);
    case SEOGeneratorTypes.LABEL:
      return labelSEO(data);
    case SEOGeneratorTypes.USER:
      return userPostsSEO(data);
    default:
      return {};
  }
};
