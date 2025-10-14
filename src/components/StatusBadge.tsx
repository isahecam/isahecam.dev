import { Status } from "@/types/status";

function StatusBadge({ status }: { status: Status }) {
  return (
    <span className='inline-flex max-w-max animate-shine items-center justify-center rounded-full border border-gray-400 bg-[linear-gradient(110deg,#f5f5f5,45%,#d4d4d4,55%,#f5f5f5)] bg-[length:200%_100%] px-2 py-0.5 font-mono text-[10px] font-medium text-nowrap text-gray-700 transition-colors'>
      {status}
    </span>
  );
}
export { StatusBadge };
