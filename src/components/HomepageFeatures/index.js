import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Find your answer',
        Svg: require('@site/static/img/index/file_searching.svg').default,
        //imageUrl: 'img/file_searching.svg',
        description: (
            <>
                Plugily Projects always aims to provide the easiest plugins without missing
                the fully configurable part. Therefore we created this wiki. Here you can
                find easily your answer.
            </>
        ),
    },
    {
        title: 'Search your answer',
        Svg: require('@site/static/img/index/algolia_search.svg').default,
        description: (
            <>
                Tired of finding solutions for your issues? You can easily search our wiki!
                Type in, lookup, solution found. Nothing easier ;)
            </>
        ),
    },
    {
        title: 'Review your answer',
        Svg: require('@site/static/img/index/code_review.svg').default,
        description: (
            <>
                If you want to improve this wiki you can always help us by
                clicking <code>edit this page</code>. We really appreciate your
                help and others do as well!
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
