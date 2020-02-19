import React from "react";
import Link from "next/link";

import styles from './Label.module.scss';

const Label = ({ label }) => {
  return (
    <Link href="/labels/[label]" as={`/labels/${label.id}`}>
      <a className={styles.root}>{label.name}</a>
    </Link>
  );
};

export default Label;
