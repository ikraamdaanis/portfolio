import { ArrowIcon } from "components/Arrow";

/** Arrow used in the works section. */
export const Arrow = () => {
  return (
    <div className="relative w-[30%] md:hidden">
      <div className="group absolute bottom-[5%] left-1/2 h-0 w-full -translate-x-1/2 rounded-full border-2 border-[#F5F5F5] pt-[100%] transition-all duration-300 ease-in-out hover:border-[#64FFDA] hover:bg-[#64FFDA]">
        <ArrowIcon className="absolute left-1/2 top-1/2 h-[130px] -translate-x-1/2 -translate-y-1/2 text-[#64FFDA] transition-colors duration-300 ease-in-out group-hover:text-[#0A192F]" />
      </div>
    </div>
  );
};
