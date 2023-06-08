"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Category = ({ color }) => {
  return (
    <Link
      href="/design"
      className="flex flex-col gap-3 py-4 px-6 border rounded-4xl backdrop-blur bg-black/25 border-[#EC683E]"
    >
      <h4>
        UX/UI <span className="block">Design</span>
      </h4>
      <Icon icon="carbon:navaid-ndb" className={({ color }, "text-4xl")} />
    </Link>
  );
};

export default Category;
