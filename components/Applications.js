import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import CircularProgress from "@material-ui/core/CircularProgress";

function Applications({data}) {

  return (
    <div className="pt-4 grid grid-cols-3 px-4 md:px-12 gap-6">
    
      <div className="totalApplications col-span-3 sm:col-span-3 md:col-span-1 px-4 justify-between py-2 border border-gray-600 rounded-xl">
        <div className="flex justify-between">
          <p className="text-white">Total Applications</p>
          <MoreHorizIcon className="text-gray-300" />
        </div>
        <div className="flex justify-between relative mt-6">
          <div>
            <h2 className="text-white text-2xl font-bold">{data.total.count}</h2>
            <div className="mt-4 flex">
              <CallMadeIcon className="text-purple-400" />
              <p className="text-purple-400">+{data.total.inc}%</p>
            </div>
          </div>
          <CircularProgress variant="determinate" size="4rem" value={data.total.increase} style={{color: "#7E22CE"}}/>
          <p className="absolute top-6 right-4 text-xs text-purple-400">+{data.total.increase}%</p>
        </div>
      </div>

      <div className=" rounded-xl col-span-3 sm:col-span-3 md:col-span-1 border border-dashed border-gray-600 relative">
        <div className="shortlisted relative top-3 left-3 w-full px-4 py-2 justify-between bg-blue-600 rounded-xl">
        <div className="flex justify-between">
          <p className="text-white">Shortlisted Candidates</p>
          <MoreHorizIcon className="text-gray-300" />
        </div>
        <div className="flex justify-between relative mt-6">
          <div>
            <h2 className="text-white text-2xl font-bold">{data.shortlisted.count}</h2>
            <div className="mt-4 flex">
              <CallMadeIcon className="text-white" />
              <p className="text-white">+{data.shortlisted.inc}%</p>
            </div>
          </div>
          <CircularProgress
            variant="determinate"
            size="4rem"
            value={data.shortlisted.increase}
            style={{color: "white"}}
          />
          <p className="absolute top-6 right-4 text-xs text-white">+{data.shortlisted.increase}%</p>
        </div>
        </div>
      </div>

      <div className="total col-span-3 sm:col-span-3 md:col-span-1 px-4 justify-between py-2 border border-gray-600  rounded-xl">
        <div className="flex justify-between">
          <p className="text-white">Today's Applications</p>
          <MoreHorizIcon className="text-gray-300" />
        </div>
        <div className="flex justify-between relative mt-6">
          <div>
            <h2 className="text-white text-2xl font-bold">{data.today.count}</h2>
            <div className="mt-4 flex">
              <CallReceivedIcon className="text-red-500" />
              <p className="text-red-500">+{data.today.inc}%</p>
            </div>
          </div>
          <CircularProgress
            variant="determinate"
            color="secondary"
            size="4rem"
            value={data.today.increase}
          />
          <p className="absolute top-6 right-4 text-xs text-red-500">+{data.today.increase}%</p>
        </div>
      </div>
    </div>
  );
}

export default Applications;
