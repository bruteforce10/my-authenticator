import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";


const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const Header = ({ label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔒 Auth</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
