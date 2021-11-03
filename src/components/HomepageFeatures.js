import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: '효율적인 연습',
		Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				자동 재생 및 연습모드를 이용하여 효과적으로 연주 연습을 할 수 있습니다.
			</>
		),
	},
	{
		title: 'UniPack 시스템',
		Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
		description: <>간편하게 프로젝트 파일을 교체하여 연주할 수 있습니다.</>,
	},
	{
		title: '강력한 연동성',
		Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>USB 연결을 통해 런치패드를 즉시 연동하여 연주할 수 있습니다.</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
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
