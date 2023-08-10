import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Fav Icon */}
                <link
                    rel="icon"
                    type="image/png"
                    href="/images/common/favicon.svg"
                />

                {/* Font Awesome */}
                <link
                    rel="stylesheet"
                    href="https://site-assets.fontawesome.com/releases/v6.4.0/css/all.css"
                />

                <link
                    rel="stylesheet"
                    href="https://site-assets.fontawesome.com/releases/v6.4.0/css/sharp-solid.css"
                />

                <link
                    rel="stylesheet"
                    href="https://site-assets.fontawesome.com/releases/v6.4.0/css/sharp-regular.css"
                />

                <link
                    rel="stylesheet"
                    href="https://site-assets.fontawesome.com/releases/v6.4.0/css/sharp-light.css"
                />

                {/* Google Font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <body>
                <Main />
                <NextScript />

                {/* Flowbite */}
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"
                    async
                ></script>
            </body>
        </Html>
    );
}
