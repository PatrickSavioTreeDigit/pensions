import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightOutlined } from '@ant-design/icons';
import Brand from '@/components/Brands/Brand';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function App({ homeContent, homesecond, homethird, homefourth, homefifth }) {
  const router = useRouter();

  return (
    <>
      
    </>
  );
}

// Fetch content from Contentful
