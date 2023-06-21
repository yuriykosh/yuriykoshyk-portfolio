"use client";

import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";

import { createClient } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const PortfolioList = () => {
  const pathname = usePathname();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let tableName = "";
        if (pathname === "/portfolio/design") {
          tableName = "design-portfolio";
        } else {
          tableName = "dev-portfolio";
        }

        const { data: fetchedData, error } = await supabaseAdmin
          .from(tableName)
          .select("*")
          .order("id");

        if (error) {
          throw error;
        }

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [pathname]);

  // if (pathname === "/portfolio/design") {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const { data: fetchedData, error } = await supabaseAdmin
  //           .from("design-portfolio")
  //           .select("*")
  //           .order("id");

  //         if (error) {
  //           throw error;
  //         }

  //         setData(fetchedData);
  //       } catch (error) {
  //         console.error("Error fetching data:", error.message);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  // } else {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const { data: fetchedData, error } = await supabaseAdmin
  //           .from("dev-portfolio")
  //           .select("*")
  //           .order("id");

  //         if (error) {
  //           throw error;
  //         }

  //         setData(fetchedData);
  //       } catch (error) {
  //         console.error("Error fetching data:", error.message);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  // }

  useEffect(() => {
    let isScrolling = false;
    let timeoutId;

    const handleWheel = (e) => {
      const strength = Math.abs(e.deltaY);
      if (e.deltaY === 0) return;

      const el = e.currentTarget;
      if (
        !(el.scrollLeft === 0 && e.deltaY < 0) &&
        !(
          el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
          e.deltaY > 0
        )
      ) {
        e.preventDefault();
      }

      if (!isScrolling) {
        isScrolling = true;
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: strength > 70 ? "auto" : "smooth",
        });

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          isScrolling = false;
        }, 100); // Adjust the debounce delay (in milliseconds) to your desired value
      }
    };

    const scrollContainer = document.querySelector(
      ".your-scroll-container-class"
    );

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <>
      <ul className="flex items-start h-full gap-4 px-2 overflow-x-scroll md:overflow-x-scroll scrollbar-hide your-scroll-container-class lg:overflow-x-scroll flex-nowrap">
        {data ? (
          data.map((item) => <PortfolioItem key={item.id} {...item} />)
        ) : (
          <>
            <li className="w-56 h-full overflow-hidden md:w-72 lg:w-60 xl:w-80 2xl:w-96 rounded-4xl"></li>
            <li className="w-56 h-full overflow-hidden md:w-72 lg:w-60 xl:w-80 2xl:w-96 rounded-4xl"></li>
            <li className="w-56 h-full overflow-hidden md:w-72 lg:w-60 xl:w-80 2xl:w-96 rounded-4xl"></li>
          </>
        )}
      </ul>
    </>
  );
};
export default PortfolioList;
