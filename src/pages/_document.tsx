// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
    
      // These would be replaced with actual values from your config or CMS
      const siteConfig = {
        title: "Grade Calculator | Calculate Your Grade Average",
        description: "A modern grade calculator tool.",
        siteUrl: '{{REPLACE_WITH_SITE_URL}}', // e.g., https://yourproduct.com
        themeColor: '#ffffff'
      };
    return (
      <Html lang="en">
        <Head>
        
            {/* Essential Meta Tags */}
            <meta name="title" content={siteConfig.title} />
            <meta name="description" content={siteConfig.description} />
            <meta name="theme-color" content={siteConfig.themeColor} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Basic OpenGraph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteConfig.siteUrl} />
            <meta property="og:title" content={siteConfig.title} />
            <meta property="og:description" content={siteConfig.description} />
            
            {/* Basic Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={siteConfig.title} />
            <meta name="twitter:description" content={siteConfig.description} />

            
            {/* Fonts and other links */}
            <link rel="icon" href="/favicon.ico" />

        </Head>

        <body className="font-sans">
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }

