import SectionSwitch from "@/components/SectionSwitch";
import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

// Giả định hàm gọi API
const getPageBySlug = async (slug: string) => {
	return <></>;
};

// Giả định object page trả về
const dummyPage = {
	slug: "trang-chu",
	sections: ["hero-1", "hero-2", "product-list-2"],
};

const PageBySlug = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	let page = null;
	const { slug } = await params;
	if (!slug || slug.trim() === "") {
		page = await getPageBySlug("trang-chu");
	} else {
		page = await getPageBySlug(slug);
	}
	if (!page) {
		page = await getPageBySlug("404");
	}
	return (
		<>
			<h1>{dummyPage.slug}</h1>
			{dummyPage.sections.map((section, index) => (
				<React.Fragment key={index}>
					<SectionSwitch type={section} />
				</React.Fragment>
			))}
		</>
	);
};

export default PageBySlug;
