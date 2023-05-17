import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = { params: { slug: string } };
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-green-600 via-teal-500 to-sky-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>
      <div className="text-lg text-cyan-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
