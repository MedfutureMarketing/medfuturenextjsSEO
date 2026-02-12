"use client";
import SearchHeader from "@/components/JobBoard/Searchbar";
import JobBoardLayout from "@/components/JobBoard/JobBoardLayout";
import { Suspense } from "react";

export default function PermanentClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchHeader />
      <JobBoardLayout />
    </Suspense>
  );
}
