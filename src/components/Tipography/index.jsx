import styles from "./tipography.module.css";

const TAGS = {
  h1: "h1",
  h2: "h2",
  p: "p",
};

export const Tipography = ({ children, variant }) => {
  const Component = TAGS[variant] || "p";
  const variantClass = styles[variant] || "p";

  return <Component className={variantClass}>{children}</Component>;
};
