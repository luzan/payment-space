import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// SVG Icons for features
const icons = {
  fourPartyModel: (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
      <line x1="1" y1="10" x2="23" y2="10"/>
      <path d="M7 15h4M15 15h2"/>
    </svg>
  ),
  payfacPlatform: (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  transaction: (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9"/>
      <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
      <polyline points="7 23 3 19 7 15"/>
      <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </svg>
  ),
  risk: (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      <circle cx="12" cy="16" r="1"/>
    </svg>
  ),
  platform: (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="6" height="6" rx="1"/>
      <rect x="16" y="2" width="6" height="6" rx="1"/>
      <rect x="9" y="16" width="6" height="6" rx="1"/>
      <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/>
      <path d="M12 13v3"/>
    </svg>
  ),
  standards: (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
};

// Module icons for learning path
const moduleIcons = {
  ecosystem: (
    <svg className={styles.moduleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <circle cx="12" cy="4" r="2"/>
      <circle cx="20" cy="12" r="2"/>
      <circle cx="12" cy="20" r="2"/>
      <circle cx="4" cy="12" r="2"/>
      <path d="M12 6v3M15 12h3M12 15v3M9 12H6"/>
    </svg>
  ),
  onboarding: (
    <svg className={styles.moduleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="8.5" cy="7" r="4"/>
      <line x1="20" y1="8" x2="20" y2="14"/>
      <line x1="23" y1="11" x2="17" y2="11"/>
    </svg>
  ),
  riskCompliance: (
    <svg className={styles.moduleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  transactionProcessing: (
    <svg className={styles.moduleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  architecture: (
    <svg className={styles.moduleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="6" height="6"/>
      <rect x="14" y="4" width="6" height="6"/>
      <rect x="4" y="14" width="6" height="6"/>
      <rect x="14" y="14" width="6" height="6"/>
    </svg>
  ),
  regulatory: (
    <svg className={styles.moduleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const completedModules = 3;
  const totalModules = 6;
  const progressPercent = (completedModules / totalModules) * 100;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Master payment processing and fintech systems through a comprehensive 12-week guide
          designed for senior software engineers entering the payments industry.
        </p>

        {/* Progress Indicator */}
        <div className={styles.progressContainer} aria-label="Learning progress">
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{width: `${progressPercent}%`}}
              role="progressbar"
              aria-valuenow={completedModules}
              aria-valuemin={0}
              aria-valuemax={totalModules}
            />
          </div>
          <span className={styles.progressText}>
            {completedModules} of {totalModules} modules complete
          </span>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/introduction"
            aria-label="Get started with the learning path">
            Get Started
          </Link>
          <Link
            className={clsx('button button--lg', styles.buttonOutline)}
            to="/ecosystem/fundamentals/four-party-model"
            aria-label="Jump directly to core payment concepts">
            Jump to Core Concepts
          </Link>
        </div>
      </div>
    </header>
  );
}

interface FeatureProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

function Feature({title, description, link, icon}: FeatureProps) {
  return (
    <article className={clsx('col col--4')}>
      <div className={styles.feature}>
        <div className={styles.featureIconWrapper}>
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <Link className={styles.featureLink} to={link} aria-label={`Learn more about ${title}`}>
            Learn more <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: 'Payment Ecosystem Fundamentals',
      description: 'Understand the four-party model, card networks, and how money flows through the payment system. Learn about acquirers, issuers, and payment processors.',
      link: '/ecosystem',
      icon: icons.fourPartyModel,
    },
    {
      title: 'PayFac Platform Architecture',
      description: 'Deep dive into Payment Facilitator models, sub-merchant onboarding, risk management, and regulatory compliance requirements.',
      link: '/ecosystem/payfac-model/overview',
      icon: icons.payfacPlatform,
    },
    {
      title: 'Transaction Processing',
      description: 'Master authorization flows, settlement processes, ISO 8583 messaging, and the complete transaction lifecycle from auth to funding.',
      link: '/introduction',
      icon: icons.transaction,
    },
    {
      title: 'Risk & Compliance',
      description: 'Learn about chargebacks, fraud prevention, PCI-DSS requirements, AML/BSA regulations, and KYC/KYB processes.',
      link: '/risk-compliance',
      icon: icons.risk,
    },
    {
      title: 'Platform Engineering',
      description: 'Explore data modeling, audit trails, event-driven architectures, and technical implementation patterns for payment platforms.',
      link: '/introduction',
      icon: icons.platform,
    },
    {
      title: 'Industry Standards',
      description: 'Understand sponsor bank relationships, network registration, merchant agreements, and regulatory frameworks governing payments.',
      link: '/introduction',
      icon: icons.standards,
    },
  ];

  return (
    <section className={styles.features} aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading" className={styles.sectionTitle}>
          What You'll Learn
        </h2>
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
      link: '/ecosystem',
      icon: moduleIcons.ecosystem,
    },
    {
      weeks: 'Weeks 3-4',
      title: 'Merchant Onboarding',
      topics: 'KYC/KYB, risk assessment, underwriting, compliance checks',
      status: 'Complete',
      link: '/onboarding',
      icon: moduleIcons.onboarding,
    },
    {
      weeks: 'Weeks 5-6',
      title: 'Risk & Compliance',
      topics: 'Chargebacks, fraud prevention, PCI-DSS, AML/BSA, ISO & ISV perspectives',
      status: 'Complete',
      link: '/risk-compliance',
      icon: moduleIcons.riskCompliance,
    },
    {
      weeks: 'Weeks 7-8',
      title: 'Transaction Processing',
      topics: 'Authorization, settlement, reconciliation, ISO 8583',
      status: 'Planned',
      link: null,
      icon: moduleIcons.transactionProcessing,
    },
    {
      weeks: 'Weeks 9-10',
      title: 'Platform Architecture',
      topics: 'Data models, audit trails, event systems, scalability',
      status: 'Planned',
      link: null,
      icon: moduleIcons.architecture,
    },
    {
      weeks: 'Weeks 11-12',
      title: 'Regulatory & Partnerships',
      topics: 'Sponsor banks, network registration, compliance frameworks',
      status: 'Planned',
      link: null,
      icon: moduleIcons.regulatory,
    },
  ];

  return (
    <section className={styles.learningPath} aria-labelledby="learning-path-heading">
      <div className="container">
        <h2 id="learning-path-heading" className={styles.sectionTitle}>
          12-Week Structured Learning Path
        </h2>
        <p className={styles.sectionSubtitle}>
          Progress through comprehensive modules designed to build your payment systems expertise
        </p>
        <div className={styles.moduleGrid}>
          {modules.map((module, idx) => {
            const cardContent = (
              <>
                <div className={styles.moduleIconWrapper}>
                  {module.icon}
                </div>
                <div className={styles.moduleContent}>
                  <div className={styles.moduleHeader}>
                    <span className={styles.moduleWeeks}>{module.weeks}</span>
                    <span className={clsx(
                      styles.moduleStatus,
                      module.status === 'Complete' && styles.moduleStatusComplete,
                      module.status === 'In Progress' && styles.moduleStatusInProgress,
                      module.status === 'Planned' && styles.moduleStatusPlanned,
                    )}>
                      {module.status === 'Complete' && (
                        <svg className={styles.statusIcon} viewBox="0 0 16 16" fill="currentColor">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                        </svg>
                      )}
                      {module.status}
                    </span>
                  </div>
                  <h3>{module.title}</h3>
                  <p>{module.topics}</p>
                  {module.link && (
                    <span className={styles.moduleLink}>
                      Start learning <span aria-hidden="true">→</span>
                    </span>
                  )}
                </div>
              </>
            );

            return module.link ? (
              <Link
                key={idx}
                to={module.link}
                className={clsx(styles.moduleCard, styles.moduleCardClickable)}
                aria-label={`${module.title} module - ${module.status}`}
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={idx}
                className={clsx(styles.moduleCard, styles.moduleCardDisabled)}
                aria-label={`${module.title} module - Coming soon`}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TargetAudience() {
  return (
    <section className={styles.targetAudience} aria-labelledby="audience-heading">
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h2 id="audience-heading">Who This Guide Is For</h2>
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Payments Mastery",
    "description": "Comprehensive learning guide for Payment Facilitator platforms designed for senior software engineers",
    "provider": {
      "@type": "Organization",
      "name": "Payments Mastery",
      "url": "https://paymentsmastery.com"
    },
    "educationalLevel": "Advanced",
    "audience": {
      "@type": "Audience",
      "audienceType": "Senior Software Engineers"
    },
    "about": [
      "Payment Processing",
      "Payment Facilitator",
      "Fintech",
      "PCI Compliance",
      "Merchant Onboarding"
    ],
    "numberOfCredits": "12 weeks",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT4H"
    }
  };

  return (
    <Layout
      title="Payment Facilitator Platform Learning Guide"
      description="Master payment facilitator platforms with structured learning for senior engineers. Cover payment ecosystem, merchant onboarding, risk compliance, and platform architecture.">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Payments Mastery | Payment Facilitator Platform Learning Guide" />
        <meta name="description" content="Master payment facilitator platforms with structured learning for senior engineers. Cover payment ecosystem, merchant onboarding, risk compliance, and more." />
        <meta name="keywords" content="payment facilitator, PayFac, payment processing, merchant onboarding, PCI compliance, payment platform, fintech, four-party model, acquirer, issuer" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paymentsmastery.com/" />
        <meta property="og:title" content="Payments Mastery | PayFac Learning Guide" />
        <meta property="og:description" content="Structured learning guide for payment facilitator platforms. From fundamentals to advanced compliance." />
        <meta property="og:image" content="https://paymentsmastery.com/img/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://paymentsmastery.com/" />
        <meta name="twitter:title" content="Payments Mastery | PayFac Learning Guide" />
        <meta name="twitter:description" content="Master payment facilitator platforms with structured learning for senior engineers." />
        <meta name="twitter:image" content="https://paymentsmastery.com/img/og-image.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LearningPath />
        <TargetAudience />
        <section className={styles.cta} aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Ready to Master Payment Processing?</h2>
            <p>Start your journey with foundational payment concepts and work your way up to advanced platform architecture.</p>
            <Link
              className="button button--secondary button--lg"
              to="/introduction"
              aria-label="Begin the learning path now">
              Begin Learning Path
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
