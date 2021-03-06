import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Mục đích của Crypto Hunter Blog</>,
    imageUrl: 'https://media.istockphoto.com/photos/bitcoin-concept-with-binary-codes-picture-id1305092068?b=1&k=20&m=1305092068&s=170667a&w=0&h=les8_XT0hF2gWWAfpreiyY1kreJFyituhtVMoO6Ah5g=',
    description: (
      <>
        Crypto Hunter Blog là nơi mình viết về những bài học, trải nghiệm đầu tư trong thị trường Crypto. 
        Xa hơn là một thư viện nơi mình tổng hợp các kiến thức sau một thời gian đầu tư và tham gia vào thị trường Crypto.
      </>
    ),
  },

  {
    title: <>Bài học, trải nghiệm đầu tư</>,
    imageUrl: 'https://images.unsplash.com/photo-1630569470960-ec1e8c077d6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    description: (
      <>
        Chia sẻ những trải nghiệm từ sợ hãi tột độ đến tham lam, phấn khích cùng những bài học 
        mình rút ra được trong quá trình đầu tư Crypto.
      </>
    ),
  },

  {
    title: <>Xây dựng cộng đồng</>,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description: (
      <>  
        Mình rất hoan nghênh và chào mừng các anh, chị, em - những người mới tham gia đến 
        những anh, chị, em đầu tư chuyên nghiệp để cùng chia sẻ những trải nghiệm, bài học, 
        thăng trầm trong hành trình đầu tư Crypto.       
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Crypto Hunter Blog`}
      description="Hành trình tìm kiếm, trải nghiệm cùng những bài học đắt giá trong đầu tư Crypto"
      image={"https://images.unsplash.com/photo-1630569470960-ec1e8c077d6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"}
      keywords={['bitcoin', 'crypto', 'crypto investment']}>
      
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/nhat-ky-dau-tu-01122021')}>
              Khám phá nào!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
