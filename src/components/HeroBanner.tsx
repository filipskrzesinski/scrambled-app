import { CurrentDateTime } from "@/src/components/CurrentDateTime";
import {
  RESTAURANT_NAME,
  RESTAURANT_ADDRESS,
  RESTAURANT_IMAGE_URL,
} from "@/src/lib/data";

export function HeroBanner() {
  return (
    <div className="flex h-80 w-full max-w-[768px] flex-none flex-col items-center justify-center gap-8 overflow-hidden rounded-xl relative">
      <div className="flex flex-col items-center justify-center gap-2 absolute z-10">
        <span className="text-editorial-h3 font-editorial-h3 text-white">
          {RESTAURANT_NAME}
        </span>
        <CurrentDateTime />
        <span className="text-data-body font-data-body text-white">
          {RESTAURANT_ADDRESS}
        </span>
      </div>
      <div className="flex w-full flex-col items-start gap-2 overflow-hidden rounded-3xl bg-[#00000033] px-2 py-2 absolute inset-0 backdrop-blur-sm" />
      <img
        className="min-h-[0px] w-full grow shrink-0 basis-0 rounded-3xl object-cover"
        src={RESTAURANT_IMAGE_URL}
        alt={RESTAURANT_NAME}
      />
    </div>
  );
}
