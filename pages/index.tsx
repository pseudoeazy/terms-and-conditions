import Head from "next/head";
import TermsPageContent from "@/components/term/terms";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Privacy Statements" content="Terms and Conditions" />
        <title>Terms &amp; Condition</title>
      </Head>

      <div className="px-0">
        <TermsPageContent />
      </div>
    </Layout>
  );
}
