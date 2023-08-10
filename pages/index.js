import Layout from "@/components/common/layout";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Holmes Lab</title>

                {/* Page Information */}
                <meta
                    content="width=device-width, initial-scale=1.0"
                    name="viewport"
                />

                <meta
                    name="keywords"
                    content="Holmes Lab,holmes lab,HOLMES LAB,augmented reality,development,software development,software company bangladesh,technology company bangladesh,best augmented reality software development company bangladesh"
                />

                <meta name="author" content="MiniSoft" />

                <meta name="description" content="Holmes Lab" />
            </Head>

            <Layout></Layout>
        </>
    );
}
