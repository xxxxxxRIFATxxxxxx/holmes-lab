import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/common/layout";
import products from "@/db/products.json";
import categories from "@/db/categories.json";
import SuccessAlert from "@/components/common/successAlert";
import ErrorAlert from "@/components/common/errorAlert";

export default function Home() {
    // For Categories
    const [categoryActive, setCategoryActive] = useState("Furniture");

    const handleCategoryActive = (category) => {
        setCategoryActive(category);
    };

    // For Show Products According To Active Category
    const [showProducts, setShowProducts] = useState(
        products.filter((product) => {
            return product?.category === categoryActive;
        })
    );

    // For Contact Form
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const resetContactForm = () => {
        setEmail("");
        setSubject("");
        setMessage("");
    };

    const resetAlert = () => {
        setTimeout(() => {
            setSuccess("");
            setError("");
        }, 5000);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const contact = {
            email,
            subject,
            message,
        };

        // fetch("", {
        //     method: "POST",
        //     body: JSON.stringify(contact),
        //     headers: {
        //         Accept: "application/json",
        //     },
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             setIsLoading(false);
        //             setSuccess("Thank you for contacting us.");
        //             resetContactForm();
        //             resetAlert();
        //         } else {
        //             response.json().then((data) => {
        //                 if (Object.hasOwn(data, "errors")) {
        //                     setIsLoading(false);

        //                     setError(
        //                         data["errors"]
        //                             .map((error) => error["message"])
        //                             .join(", ")
        //                     );

        //                     resetContactForm();

        //                     resetAlert();
        //                 } else {
        //                     setIsLoading(false);
        //                     setError(
        //                         "Oops! There was a problem submitting your form"
        //                     );
        //                     resetContactForm();
        //                     resetAlert();
        //                 }
        //             });
        //         }
        //     })
        //     .catch((error) => {
        //         setIsLoading(false);
        //         setError("Oops! There was a problem submitting your form");
        //         resetContactForm();
        //         resetAlert();
        //     });

        setTimeout(() => {
            resetContactForm();
            setIsLoading(false);
            setSuccess("Thank you for contacting us.");
        }, 1000);

        resetAlert();
    };

    useEffect(() => {
        setShowProducts(
            products.filter((product) => {
                return product?.category === categoryActive;
            })
        );
    }, [categoryActive]);

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
                <div id="home" className="hidden lg:block relative mb-5">
                    <Image
                        className="rounded-lg"
                        src="/images/hero-bg.jpg"
                        alt="Augmented Reality"
                        width={2000}
                        height={2000}
                        priority
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
                <div id="home" className="block lg:hidden mb-5">
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <Image
                                className="rounded-lg"
                                src="/images/hero-bg-mobile.jpg"
                                alt="Augmented Reality"
                                width={1500}
                                height={1500}
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

                {/* Banner 1 For Website */}
                <div className="hidden lg:block relative mb-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="relative">
                            <Image
                                className="rounded-lg"
                                src="/images/ar-1.jpg"
                                alt="Augmented Reality"
                                width={1500}
                                height={1500}
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
                                width={1500}
                                height={1500}
                            />

                            <div className="absolute top-0 left-10 bottom-0 h-fit m-auto">
                                <h2 className="text-4xl font-extrabold tracking-tight leading-none text-white">
                                    Elevate Your Senses <br /> with AR Reality
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner 1 For Mobile And Tablet */}
                <div className="block lg:hidden mb-5">
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <Image
                                className="rounded-lg mb-5"
                                src="/images/ar-1.jpg"
                                alt="Augmented Reality"
                                width={1500}
                                height={1500}
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
                                width={1500}
                                height={1500}
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
                    <div className="col-span-12 lg:col-span-7 bg-gray-100 rounded-lg text-center md:text-start p-5 md:p-10">
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

                    <div className="col-span-12 lg:col-span-5 bg-gray-100 rounded-lg text-center md:text-start p-5 md:p-10">
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

                    <div className="col-span-12 lg:col-span-5 bg-gray-100 rounded-lg text-center md:text-start p-5 md:p-10">
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

                    <div className="col-span-12 lg:col-span-7">
                        <Image
                            className="rounded-lg"
                            src="/images/ar-4.jpg"
                            alt="Augmented Reality"
                            width={1500}
                            height={1500}
                        />
                    </div>
                </div>

                {/* Service */}
                <div id="service" className="mb-5 mt-10">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-center">
                        Services
                    </h2>

                    <div className="text-center mb-4 flex items-center justify-center">
                        <i className="fa-solid fa-eye text-2xl mr-2"></i>
                        <span className="text-gray-500 text-sm">VisionARy</span>
                    </div>

                    <div className="grid grid-cols-2 gap-5 md:gap-0 md:flex md:items-center md:justify-center space-x-2 mb-6">
                        {categories?.map((category) => {
                            return (
                                <button
                                    key={category?.id}
                                    className={`${
                                        categoryActive === category?.title
                                            ? "bg-primary-700 text-white"
                                            : "text-gray-500 hover:text-primary-700"
                                    } rounded py-1 px-3 text-sm`}
                                    onClick={() =>
                                        handleCategoryActive(category?.title)
                                    }
                                >
                                    {category?.title}
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {showProducts.map((product) => {
                            if (product?.category === "AR Ad") {
                                return (
                                    <div key={product?.id}>
                                        <Image
                                            className="rounded-lg"
                                            src={product?.src}
                                            alt="Augmented Reality"
                                            width={1500}
                                            height={1500}
                                        />
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={product?.id}>
                                        <model-viewer
                                            style={{
                                                width: "100%",
                                                height: "300px",
                                            }}
                                            src={product?.src}
                                            alt="3D model"
                                            shadow-intensity="1"
                                            camera-controls
                                            auto-rotate
                                            ar
                                        ></model-viewer>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>

                {/* Banner 2 For Website */}
                <div className="hidden lg:block relative mb-5 mt-10">
                    <Image
                        className="rounded-lg"
                        src="/images/ar-3.jpg"
                        alt="Augmented Reality"
                        width={2000}
                        height={2000}
                    />

                    <div className="absolute top-0 bottom-0 my-auto h-fit left-10">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            How to Use AR
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                            Find out everything about this futuristic technology
                            and use it on your devices for work optimization,
                            gaming, localization etc.
                        </p>

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Banner 2 For Mobile And Tablet */}
                <div className="block lg:hidden mb-5 mt-5">
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <Image
                                className="rounded-lg"
                                src="/images/ar-3-mobile.jpg"
                                alt="Augmented Reality"
                                width={1500}
                                height={1500}
                            />
                        </div>

                        <div>
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center">
                                How to Use AR
                            </h1>

                            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-center">
                                Find out everything about this futuristic
                                technology and use it on your devices for work
                                optimization, gaming, localization etc.
                            </p>

                            <div className="flex items-center justify-center">
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div
                    id="contact"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5"
                >
                    <div className="p-5 md:p-10 bg-gray-100 rounded-lg">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-center lg:text-start">
                            Contact Us
                        </h2>

                        <p className="font-light text-gray-500 md:text-lg lg:text-lg mb-4 text-center lg:text-start">
                            Got a technical issue? Want to send feedback about a
                            beta feature? Need details about our Business plan?
                            Let us know.
                        </p>

                        <div className="flex items-center justify-center lg:justify-start text-gray-500 space-x-2 md:text-lg lg:text-lg mb-6">
                            <div className="bg-primary-700 rounded p-1 px-3 w-fit">
                                <i className="fa-solid fa-envelope text-white"></i>
                            </div>

                            <span>info@holmeslab.xyz</span>
                        </div>

                        <form
                            onSubmit={handleContactForm}
                            className="space-y-5"
                        >
                            {success && <SuccessAlert message={success} />}

                            {error && <ErrorAlert message={success} />}

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    Your email
                                </label>

                                <input
                                    type="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="name@email.com"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Let us know how we can help you"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                    Your message
                                </label>

                                <textarea
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                                disabled={isLoading}
                            >
                                {isLoading && (
                                    <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="inline w-4 h-4 mr-2 text-gray-200 animate-spin fill-primary-600"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"
                                            />
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                )}

                                <span>Send message</span>
                            </button>
                        </form>
                    </div>

                    <div>
                        <iframe
                            className="w-full h-[400px] md:h-[685px] rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187898617!2d90.33728815897476!3d23.780975728147688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1691850083102!5m2!1sen!2sbd"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </Layout>
        </>
    );
}
