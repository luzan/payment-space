import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import SocialShare from '@site/src/components/SocialShare';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const {metadata} = useDoc();

  return (
    <>
      <SocialShare title={metadata.title} />
      <Footer {...props} />
    </>
  );
}
