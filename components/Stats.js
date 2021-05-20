import React from "react";
import { Line } from "react-chartjs-2";
import LinearProgress from "@material-ui/core/LinearProgress";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Stats({graph, details}) {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: `Applications in ${graph.current.year}`,
        data: graph.current.values,
        borderColor: "rgba(201, 46, 46, 1)",
        backgroundColor: ["rgba(201, 46, 46,0.8)"],
        pointBackgroundColor: ["rgba(201, 46, 46,0.8)"],
        pointBorderColor: ["rgba(201, 46, 46, 1)"],
      },
      {
        label: `Applications in ${graph.last.year}`,
        data: graph.last.values,
        borderColor: "rgba(168, 162, 162, 0.7)",
        backgroundColor: 'rgba(168, 162, 162, 0.7)',
        pointBackgroundColor: ["rgba(168, 162, 162, 0.7)"],
        pointBorderColor: ["rgba(168, 162, 162, 1)"],
      },
    ],
  };

  return (
    <div className="pt-8 grid grid-cols-3 px-4 md:px-12 gap-6">
      <div className="chart overflow-x-scroll sm:overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden col-span-3 lg:col-span-2 md:col-span-3 sm:col-span-3 p-6 border border-gray-700 rounded-xl">
        <div className="flex justify-between">
          <div className="left">
            <h3 className="text-gray-300 font-semibold md:text-lg">
              Applications Received
            </h3>
          </div>

          <div className="right flex justify-end gap-4">
            <h3 className="text-gray-300 cursor-pointer">This Year</h3>
            <h3 className="text-gray-300 cursor-pointer">This Week</h3>
            <h3 className="text-gray-300 cursor-pointer">Today</h3>
            <div className="report items-center cursor-pointer">
              <CreateNewFolderIcon className="text-gray-300" />
              <span className="text-gray-300">Download Report</span>
            </div>
            <MoreVertIcon className="text-gray-300 cursor-pointer" />
          </div>
        </div>
        <div className="lg:p-6">
          <Line data={data} />
        </div>
      </div>

      <div className="bar col-span-3 lg:col-span-1 md:col-span-3 sm:col-span-3 py-4 lg:py-8 px-10 border border-gray-700 rounded-xl">
        <h5 className="text-white mt-4">Total Applications</h5>
        <div className="mt-6 lg:mt-12 space-y-2 sm:space-y-2 md:space-y-4 lg:space-y-8">
          <div className="flex flex-wrap items-center justify-start  gap-2 md:gap-3 lg:gap-6">
            <div className="rounded-full flex flex-wrap h-2 w-2 bg-indigo-400" />
            <h2 className="text-indigo-400">Applications</h2>
            <LinearProgress
              variant="determinate"
              value={details.applications}
              style={{
                color: "#ffffff",
                backgroundColor: "#747875",
                width: "10rem",
                height: "0.7rem",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3 lg:gap-6">
            <div className="rounded-full flex flex-wrap h-2 w-2 bg-blue-600" />
            <h2 className="text-blue-600 mr-3">Shortlisted</h2>
            <LinearProgress
              variant="determinate"
              value={details.shortlisted}
              style={{
                color: "#ffffff",
                backgroundColor: "#747875",
                width: "10rem",
                height: "0.7rem",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3 lg:gap-6">
            <div className="rounded-full flex flex-wrap h-2 w-2 bg-red-500" />
            <h2 className="text-red-500 mr-7">Rejected</h2>
            <LinearProgress
              variant="determinate"
              value={details.rejected}
              style={{
                color: "#ffffff",
                backgroundColor: "#747875",
                width: "10rem",
                height: "0.7rem",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3 lg:gap-6">
            <div className="rounded-full flex flex-wrap h-2 w-2 bg-gray-300" />
            <h2 className="text-gray-300 mr-8">On hold</h2>
            <LinearProgress
              variant="determinate"
              value={details.onhold}
              style={{
                color: "#ffffff",
                backgroundColor: "#747875",
                width: "10rem",
                height: "0.7rem",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3 lg:gap-6">
            <div className="rounded-full flex flex-wrap h-2 w-2 bg-purple-600" />
            <h2 className="text-purple-600 mr-4">Submitted</h2>
            <LinearProgress
              variant="determinate"
              value={details.submitted}
              style={{
                color: "#ffffff",
                backgroundColor: "#747875",
                width: "10rem",
                height: "0.7rem",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
