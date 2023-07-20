"use client";

import { useState } from "react";
import { Roboto_Slab, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import dynamic from "next/dynamic";

const robotoSlab = Roboto_Slab({
	subsets: ["latin"],
	variable: "--font-slab",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
});
const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
});
// const Fonts = [robotoSlab.variable, poppins.variable].join(" ");
const Fonts = `${robotoSlab.variable} ${poppins.variable}`;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 300000, // 5 minutes
		},
	},
});

export {
	Image,
	Link,
	Fonts,
	QueryClientProvider,
	ReactQueryDevtools,
	queryClient,
	Skeleton,
	SkeletonTheme,
	useState,
	dynamic,
};
