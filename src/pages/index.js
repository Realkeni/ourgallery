import Gallery from "@/components/gallery";
import Head from "next/head";

const OnePage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OUR GALLERY</title>
        <script src="http://localhost:8097"></script>
      </Head>
      <Gallery />
    </div>
  );
};

export default OnePage;
