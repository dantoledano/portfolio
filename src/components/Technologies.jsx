import { FaNode, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiExpress,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNode className="text-6xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-6xl text-green-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-6xl text-purple-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCsharp className="text-6xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDotnet className="text-6xl text-blue-800" />
          <span className="absolute top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
            .NET
          </span>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-6xl text-wheat-200" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-6xl text-orange-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-6xl text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
