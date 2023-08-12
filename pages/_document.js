import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Fav Icon */}
                <link rel="icon" type="image/png" href="/images/favicon.png" />

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
                    crossOrigin
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />

                {/* 3D */}
                <script
                    async
                    src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"
                ></script>
            </Head>

            <body>
                <Main />
                <NextScript />

                {/* Flowbite */}
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"
                    async
                ></script>

                {/* 3D */}
                <script
                    type="module"
                    src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
                    async
                ></script>

                <script
                    nomodule
                    src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
                    async
                ></script>
            </body>
        </Html>
    );
}
