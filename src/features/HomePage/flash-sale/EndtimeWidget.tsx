import { TbClockDollar } from "react-icons/tb";

function EndtimeWidget() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex grow items-center gap-2">
        <span>
          <TbClockDollar />
        </span>
        <span>Ends in </span>
      </div>
      <div className="flex items-center justify-between gap-2 max-xl:text-sm">
        <span className="rounded-sm bg-white p-2">1&nbsp;D</span>
        <span className="rounded-sm bg-white p-2">12&nbsp;H</span>
        <span className="rounded-sm bg-white p-2">34&nbsp;M</span>
      </div>
    </div>
  );
}

export default EndtimeWidget;
