import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "About Me",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>student and electrical hobbyist</>,
  },
  {
    // title: 'Support Me',
    title: "",
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        {/* Give me a star at here <a target="_blank" rel="noopener noreferrer" href="https://github.com/reihanboo/reihanboo.github.io">GitHub</a> */}
      </>
    ),
  },
  {
    title: "Contact Me",
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ig:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/reihan.mp4/"
        >
          @reihan.mp4
        </a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
