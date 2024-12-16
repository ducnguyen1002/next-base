import React from "react";
import dynamic from "next/dynamic";
const Hero1 = dynamic(() => import("@/components/sections/Hero1"));
const Hero2 = dynamic(() => import("@/components/sections/Hero2"));
const ProductList1 = dynamic(
	() => import("@/components/sections/ProductList1")
);
const ProductList2 = dynamic(
	() => import("@/components/sections/ProductList2")
);

type Item = {
	title: string;
	subTitle?: string;
	thumbnail?: string;
	
}

type SectionSwitchProps = {
	type: string;
	title?: string;
	subTitle?: string;
	items?: Item[];

};

const SectionSwitch = ({ type, }: SectionSwitchProps) => {
	switch (type) {
		case "hero-1":
			return <Hero1 />;
		case "hero-2":
			return <Hero2 />;
		case "product-list-1":
			return <ProductList1 />;
		case "product-list-2":
			return <ProductList2 />;
		default:
			return <Hero1 />;
	}
};

export default SectionSwitch;
