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
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            Step into the Future
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                            Explore Augmented Reality Today! Holmes Lab is a
                            pioneering Augmented Reality (AR) company at the
                            forefront of technological innovation.
                        </p>

                        <Link
                            href="/#service"
                            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                        >
                            Get started
                            <svg
                                className="w-5 h-5 ml-2 -mr-1"
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
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
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
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center">
                                Step into the Future
                            </h1>

                            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-center">
                                Explore Augmented Reality Today! Holmes Lab is a
                                pioneering Augmented Reality (AR) company at the
                                forefront of technological innovation.
                            </p>

                            <div className="flex items-center justify-center">
                                <Link
                                    href="/#service"
                                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                                >
                                    Get started
                                    <svg
                                        className="w-5 h-5 ml-2 -mr-1"
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
                                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
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
                                <h2 className="mb-1 text-4xl font-extrabold tracking-tight leading-none">
                                    AR Magic
                                </h2>

                                <p className="font-light text-gray-500">
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
                                <h2 className="text-4xl font-extrabold tracking-tight leading-none text-white">
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
                                <h2 className="mb-1 text-3xl font-extrabold tracking-tight leading-none text-center">
                                    AR Magic
                                </h2>

                                <p className="font-light text-gray-500 text-center">
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
                                <h2 className="mb-1 text-3xl font-extrabold tracking-tight leading-none text-center">
                                    Augmented Discoveries
                                </h2>

                                <p className="font-light text-gray-500 text-center">
                                    Experience AR Like Never Before
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
                    <div className="col-span-12 lg:col-span-8 flex items-center bg-gray-100 rounded-lg p-5 md:p-10 text-center lg:text-start lg:pl-10">
                        <div>
                            <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                Unlocking New Realities
                            </h2>

                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                                Explores the groundbreaking impact of augmented
                                reality (AR) across industries. From merging
                                digital elements with the physical world to
                                enhancing user experiences.
                            </p>

                            <Link
                                href="/#service"
                                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                            >
                                Explore more
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <video
                            className="w-full h-auto rounded-lg"
                            autoPlay
                            muted
                            loop
                        >
                            <source
                                src="/videos/ar-video-1.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* About */}
                <div id="about" className="grid grid-cols-12 gap-5 mb-5">
                    <div className="col-span-12 md:col-span-7 bg-gray-100 rounded-lg text-center md:text-start p-5 md:p-10">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none">
                            About Us
                        </h2>

                        <p className="font-light text-gray-500 md:text-lg lg:text-lg mb-4">
                            Holmes Lab is a technology company dedicated to
                            revolutionizing the way businesses operate through
                            the use of innovative solutions like Augmented
                            Reality (AR) and Artificial Intelligence (AI).
                        </p>

                        <p className="font-light text-gray-500 md:text-lg lg:text-lg mb-4">
                            Holmes Lab is made up of experienced professionals
                            who have a passion for pushing the boundaries of
                            what is possible with technology. What sets us apart
                            from other technology companies is our focus on
                            creating practical solutions that can be easily
                            integrated into businesses of all sizes.
                        </p>

                        <p className="font-light text-gray-500 md:text-lg lg:text-lg mb-4">
                            Our AR and AI solutions are designed to streamline
                            processes, improve efficiency, and enhance the
                            customer experience. In the coming years, we plan to
                            expand our product line to include AI-powered people
                            management software and a product verification
                            system.
                        </p>

                        <p className="font-light text-gray-500 md:text-lg lg:text-lg">
                            We are committed to continuously improving and
                            innovating to help our clients succeed.
                        </p>
                    </div>

                    <div className="col-span-12 md:col-span-5 bg-gray-100 rounded-lg text-center md:text-start p-5 md:p-10">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none">
                            Our Mission
                        </h2>

                        <p className="font-light text-gray-500 md:text-lg lg:text-lg mb-4">
                            At Holmes Lab, our mission is to revolutionize the
                            way businesses operate through the use of innovative
                            technology solutions like Augmented Reality (AR) and
                            Artificial Intelligence (AI). We are dedicated to
                            creating practical, easy-to-use software that
                            streamlines processes, improves efficiency, and
                            enhances the customer experience.
                        </p>

                        <p className="font-light text-gray-500 md:text-lg lg:text-lg">
                            We believe in the power of technology to transform
                            industries and improve people&apos;s lives, and we
                            are committed to continuously improving and
                            innovating to help our clients succeed.
                        </p>
                    </div>

                    <div className="col-span-12 md:col-span-5 bg-gray-100 rounded-lg text-center md:text-start p-5 md:p-10">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none">
                            Our Vision
                        </h2>

                        <p className="font-light text-gray-500 md:text-lg lg:text-lg mb-4">
                            At Holmes Lab, our vision is to be the leading
                            provider of innovative technology solutions that
                            transform the way businesses operate. We strive to
                            create practical, easy-to-use software that helps
                            our clients succeed and grow.
                        </p>

                        <p className="font-light text-gray-500 md:text-lg lg:text-lg">
                            We are committed to continuously improving and
                            innovating to stay at the forefront of the industry,
                            and to making a positive impact on the world through
                            our products and services.
                        </p>
                    </div>

                    <div className="col-span-12 md:col-span-7">
                        <Image
                            className="rounded-lg"
                            src="/images/ar-4.jpg"
                            alt="Augmented Reality"
                            width={700}
                            height={700}
                            layout="responsive"
                        />
                    </div>
                </div>
            </Layout>
        </>
    );
}
