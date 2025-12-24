import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Master payment processing and fintech systems through a comprehensive 12-week guide
          designed for senior software engineers entering the payments industry.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/introduction">
            Get Started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/ecosystem/fundamentals/four-party-model"
            style={{marginLeft: '1rem'}}>
            Jump to Core Concepts
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.feature}>
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <Link className={styles.featureLink} to={link}>
            Learn more →
          </Link>
        )}
      </div>
    </div>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: 'Payment Ecosystem Fundamentals',
      description: 'Understand the four-party model, card networks, and how money flows through the payment system. Learn about acquirers, issuers, and payment processors.',
      link: '/introduction',
    },
    {
      title: 'PayFac Platform Architecture',
      description: 'Deep dive into Payment Facilitator models, sub-merchant onboarding, risk management, and regulatory compliance requirements.',
      link: '/introduction',
    },
    {
      title: 'Transaction Processing',
      description: 'Master authorization flows, settlement processes, ISO 8583 messaging, and the complete transaction lifecycle from auth to funding.',
      link: '/introduction',
    },
    {
      title: 'Risk & Compliance',
      description: 'Learn about chargebacks, fraud prevention, PCI-DSS requirements, AML/BSA regulations, and KYC/KYB processes.',
      link: '/introduction',
    },
    {
      title: 'Platform Engineering',
      description: 'Explore data modeling, audit trails, event-driven architectures, and technical implementation patterns for payment platforms.',
      link: '/introduction',
    },
    {
      title: 'Industry Standards',
      description: 'Understand sponsor bank relationships, network registration, merchant agreements, and regulatory frameworks governing payments.',
      link: '/introduction',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPath() {
  const modules = [
    {
      weeks: 'Weeks 1-2',
      title: 'Payment Ecosystem',
      topics: 'Core entities, money flow, industry players, transaction models',
      status: 'Complete',
    },
    {
      weeks: 'Weeks 3-4',
      title: 'Merchant Onboarding',
      topics: 'KYC/KYB, risk assessment, underwriting, compliance checks',
      status: 'In Progress',
    },
    {
      weeks: 'Weeks 5-6',
      title: 'Risk & Compliance',
      topics: 'Chargebacks, fraud prevention, PCI-DSS, AML/BSA',
      status: 'Planned',
    },
    {
      weeks: 'Weeks 7-8',
      title: 'Transaction Processing',
      topics: 'Authorization, settlement, reconciliation, ISO 8583',
      status: 'Planned',
    },
    {
      weeks: 'Weeks 9-10',
      title: 'Platform Architecture',
      topics: 'Data models, audit trails, event systems, scalability',
      status: 'Planned',
    },
    {
      weeks: 'Weeks 11-12',
      title: 'Regulatory & Partnerships',
      topics: 'Sponsor banks, network registration, compliance frameworks',
      status: 'Planned',
    },
  ];

  return (
    <section className={styles.learningPath}>
      <div className="container">
        <h2>12-Week Structured Learning Path</h2>
        <div className={styles.moduleGrid}>
          {modules.map((module, idx) => (
            <div key={idx} className={styles.moduleCard}>
              <div className={styles.moduleHeader}>
                <span className={styles.moduleWeeks}>{module.weeks}</span>
                <span className={clsx(
                  styles.moduleStatus,
                  module.status === 'Complete' && styles.moduleStatusComplete,
                  module.status === 'In Progress' && styles.moduleStatusInProgress,
                )}>{module.status}</span>
              </div>
              <h3>{module.title}</h3>
              <p>{module.topics}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TargetAudience() {
  return (
    <section className={styles.targetAudience}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h2>Who This Guide Is For</h2>
            <ul className={styles.audienceList}>
              <li>Senior software engineers moving into fintech/payments</li>
              <li>Technical leads building payment platforms</li>
              <li>Engineering managers overseeing payment integrations</li>
              <li>Solutions architects designing payment systems</li>
            </ul>
          </div>
          <div className="col col--6">
            <h2>What You'll Master</h2>
            <ul className={styles.audienceList}>
              <li>Complete payment ecosystem and transaction flows</li>
              <li>Payment Facilitator (PayFac) platform architecture</li>
              <li>Risk management and compliance requirements</li>
              <li>Industry standards and regulatory frameworks</li>
              <li>Technical implementation patterns and best practices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive 12-week structured learning path for senior engineers entering the payment processing industry">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LearningPath />
        <TargetAudience />
        <section className={styles.cta}>
          <div className="container">
            <h2>Ready to Master Payment Processing?</h2>
            <p>Start your journey with foundational payment concepts and work your way up to advanced platform architecture.</p>
            <Link
              className="button button--secondary button--lg"
              to="/introduction">
              Begin Learning Path
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
