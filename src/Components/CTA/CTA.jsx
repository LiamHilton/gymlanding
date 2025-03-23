import "./CTA.css";

import { SiReebok, SiNike, SiUnderarmour, SiAdidas, SiPuma, SiNewbalance } from "react-icons/si";

const CTA = () => {
  return (
    <section className="cta">
    {/* <h2>Trusted by Leading Fitness Brands</h2> */}
    <div className="logo-container">
      <SiReebok className="brand-icon" />
      <SiNike className="brand-icon" />
      <SiUnderarmour className="brand-icon" />
      <SiAdidas className="brand-icon" />
      <SiPuma className="brand-icon" />
      <SiNewbalance className="brand-icon" />
    </div>
  </section>
);
};

export default CTA;
