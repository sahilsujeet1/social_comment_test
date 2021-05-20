import SendIcon from "@material-ui/icons/Send";
import CallMadeIcon from "@material-ui/icons/CallMade";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Doughnut } from "react-chartjs-2";

function Data({referal, positions}) {
  const data = {
    labels: ["Purple", "Red", "Blue"],
    datasets: [
      {
        label: "Open Positions",
        data: [positions.red, positions.purple, positions.blue],
        backgroundColor: ["#7C3AED", "#EF4444", "#2563EB"],
        borderColor: "transparent"
      },
    ],
  };
  
  return (
    <div className="py-6 grid grid-cols-3 px-4 md:px-12 gap-6">
      <div className="referals col-span-3 lg:col-span-2 md:col-span-3 sm:col-span-3 p-6 border border-gray-700 rounded-xl">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-white">Referal and Campaign Stats</h1>
          <div className="flex items-center gap-2">
            <SendIcon style={{ color: "#f02929" }} />
            <div>
              <h1 className="text-red-500 font-bold text-lg">
                {referal.totalCampaign} Campaigns sent in total
              </h1>
              <h1 className="text-white">{referal.lastMonthCampaign} Campaigns sent in last month</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 py-4 md:py-12">
          <div className="col-span-2 text-center md:col-span-1 items-center gap-4 border-r-2 border-gray-800">
            <small className="text-white">Users reached</small>
            <div className="flex justify-center">
              <CallMadeIcon fontSize="small" style={{ color: "#1D4ED8" }} />
              <small className="text-blue-700 font-bold">+{referal.usersReached.increase}%</small>
            </div>
            <h1 className="text-xl text-white font-bold">{referal.usersReached.count}</h1>
          </div>

          <div className="col-span-2 text-center md:col-span-1 items-center gap-4 md:border-r-2 border-gray-800">
            <small className="text-white">Referals</small>
            <div className="flex justify-center">
              <CallMadeIcon fontSize="small" style={{ color: "#1D4ED8" }} />
              <small className="text-blue-700 font-bold">+{referal.referals.increase}%</small>
            </div>
            <h1 className="text-xl text-white font-bold">{referal.referals.count}</h1>
          </div>
          <div className="col-span-2 text-center md:col-span-1 items-center gap-4 border-r-2 border-gray-800">
            <small className="text-white">Share</small>
            <div className="flex justify-center">
              <CallMadeIcon fontSize="small" style={{ color: "#1D4ED8" }} />
              <small className="text-blue-700 font-bold">+{referal.share.increase}%</small>
            </div>
            <h1 className="text-xl text-white font-bold">{referal.share.count}</h1>
          </div>
          <div className="col-span-2 text-center md:col-span-1 items-center gap-4 border-gray-800">
            <small className="text-white">Application</small>
            <div className="flex justify-center">
              <CallMadeIcon fontSize="small" style={{ color: "#1D4ED8" }} />
              <small className="text-blue-700 font-bold">+{referal.application.increase}%</small>
            </div>
            <h1 className="text-xl text-white font-bold">{referal.application.count}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 my-5 md:my-10 gap-8">
          <button className="bg-blue-500 text-white focus:outline-none py-4 rounded">
            Start a new Campaign now
          </button>
          <button className="bg-red-500 text-white focus:outline-none py-4 rounded">
            Pause All Running Campaigns
          </button>
        </div>
      </div>

      <div className="bar col-span-3 lg:col-span-1 md:col-span-3 sm:col-span-3 py-8 px-6 border border-gray-700 rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-white">Open Positions by Department</h1>
          <MoreHorizIcon style={{ color: "#D1D5DB" }} />
        </div>
        <div className="m-5">
          <Doughnut data={data}/>
        </div>
      </div>
    </div>
  );
}

export default Data;
