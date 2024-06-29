"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export const BackButton = ({ href, label }) => {
  return (
    <Button
      variant="link"
      className="font-normal w-full"
      size="sm"
      asChild={true}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
