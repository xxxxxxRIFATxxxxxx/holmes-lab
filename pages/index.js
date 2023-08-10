import Layout from "@/components/common/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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

            <Layout>
                {/* Hero Section For Website */}
                <div className="hidden lg:block relative mb-5">
                    <Image
                        className="rounded-lg"
                        src="/images/hero-bg.jpg"
                        alt="Augmented Reality"
                        width={1500}
                        height={1500}
                        layout="responsive"
                    />

                    <div className="absolute top-0 bottom-0 my-auto h-fit left-10">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            Step into the Future
                        </h1>

                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                            Explore Augmented Reality Today! Holmes Lab is a
                            pioneering Augmented Reality (AR) company at the
                            forefront of technological innovation.
                        </p>

                        <Link
                            href="/#service"
                            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                        >
                            Get started
                            <svg
                                class="w-5 h-5 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </Link>

                        <Link
                            href="/#contact"
                            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Hero Section For Mobile And Tablet */}
                <div className="block lg:hidden mb-5">
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <Image
                                className="rounded-lg"
                                src="/images/hero-bg-mobile.jpg"
                                alt="Augmented Reality"
                                width={500}
                                height={500}
                                layout="responsive"
                            />
                        </div>

                        <div>
                            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center">
                                Step into the Future
                            </h1>

                            <p class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-center">
                                Explore Augmented Reality Today! Holmes Lab is a
                                pioneering Augmented Reality (AR) company at the
                                forefront of technological innovation.
                            </p>

                            <div className="flex items-center justify-center">
                                <Link
                                    href="/#service"
                                    class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                                >
                                    Get started
                                    <svg
                                        class="w-5 h-5 ml-2 -mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>

                                <Link
                                    href="/#contact"
                                    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner For Website */}
                <div className="hidden lg:block relative mb-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="relative">
                            <Image
                                className="rounded-lg"
                                src="/images/ar-1.jpg"
                                alt="Augmented Reality"
                                width={700}
                                height={700}
                                layout="responsive"
                            />

                            <div className="absolute top-0 left-10 bottom-0 h-fit m-auto">
                                <h2 class="mb-1 text-4xl font-extrabold tracking-tight leading-none">
                                    AR Magic
                                </h2>

                                <p class="font-light text-gray-500">
                                    Experience AR Like Never Before
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                className="rounded-lg"
                                src="/images/ar-2.jpg"
                                alt="Augmented Reality"
                                width={700}
                                height={700}
                                layout="responsive"
                            />

                            <div className="absolute top-0 left-10 bottom-0 h-fit m-auto">
                                <h2 class="text-4xl font-extrabold tracking-tight leading-none text-white">
                                    Elevate Your Senses <br /> with AR Reality
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner For Mobile And Tablet */}
                <div className="block lg:hidden mb-5">
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <Image
                                className="rounded-lg mb-5"
                                src="/images/ar-1.jpg"
                                alt="Augmented Reality"
                                width={500}
                                height={500}
                                layout="responsive"
                            />

                            <div>
                                <h2 class="mb-1 text-3xl font-extrabold tracking-tight leading-none text-center">
                                    AR Magic
                                </h2>

                                <p class="font-light text-gray-500 text-center">
                                    Experience AR Like Never Before
                                </p>
                            </div>
                        </div>

                        <div>
                            <Image
                                className="rounded-lg mb-5"
                                src="/images/ar-2.jpg"
                                alt="Augmented Reality"
                                width={500}
                                height={500}
                                layout="responsive"
                            />

                            <div>
                                <h2 class="mb-1 text-3xl font-extrabold tracking-tight leading-none text-center">
                                    Augmented Discoveries
                                </h2>

                                <p class="font-light text-gray-500 text-center">
                                    Experience AR Like Never Before
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
