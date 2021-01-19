import { SSGPageProps } from '@/layouts/base/types/SSGPageProps';
import { CommonServerSideParams } from '@/modules/app/types/CommonServerSideParams';
import {
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import ExampleI18nLinkComponentPage, {
  getStaticPaths as getStaticPathsHomePage,
  getStaticProps as getStaticPropsHomePage,
} from './i18nLink-component';

// XXX This page is an "alias"
export const getStaticPaths: GetStaticPaths<CommonServerSideParams> = getStaticPathsHomePage;
export const getStaticProps: GetStaticProps<SSGPageProps, CommonServerSideParams> = getStaticPropsHomePage;

export default ExampleI18nLinkComponentPage;
