(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Polymer"
var Polymer_namespaceObject = require("@material-ui/icons/Polymer");;
var Polymer_default = /*#__PURE__*/__webpack_require__.n(Polymer_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Home"
var Home_namespaceObject = require("@material-ui/icons/Home");;
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Assessment"
var Assessment_namespaceObject = require("@material-ui/icons/Assessment");;
var Assessment_default = /*#__PURE__*/__webpack_require__.n(Assessment_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/CameraAltOutlined"
var CameraAltOutlined_namespaceObject = require("@material-ui/icons/CameraAltOutlined");;
var CameraAltOutlined_default = /*#__PURE__*/__webpack_require__.n(CameraAltOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Folder"
var Folder_namespaceObject = require("@material-ui/icons/Folder");;
var Folder_default = /*#__PURE__*/__webpack_require__.n(Folder_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/EventAvailable"
var EventAvailable_namespaceObject = require("@material-ui/icons/EventAvailable");;
var EventAvailable_default = /*#__PURE__*/__webpack_require__.n(EventAvailable_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/PeopleAltOutlined"
var PeopleAltOutlined_namespaceObject = require("@material-ui/icons/PeopleAltOutlined");;
var PeopleAltOutlined_default = /*#__PURE__*/__webpack_require__.n(PeopleAltOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ChromeReaderMode"
var ChromeReaderMode_namespaceObject = require("@material-ui/icons/ChromeReaderMode");;
var ChromeReaderMode_default = /*#__PURE__*/__webpack_require__.n(ChromeReaderMode_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ExitToApp"
var ExitToApp_namespaceObject = require("@material-ui/icons/ExitToApp");;
var ExitToApp_default = /*#__PURE__*/__webpack_require__.n(ExitToApp_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/SettingsOutlined"
var SettingsOutlined_namespaceObject = require("@material-ui/icons/SettingsOutlined");;
var SettingsOutlined_default = /*#__PURE__*/__webpack_require__.n(SettingsOutlined_namespaceObject);
;// CONCATENATED MODULE: ./components/MenuBar.js













function MenuBar() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col justify-between h-screen border-r-4 border-gray-700 sticky top-0",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "top space-y-14 my-6 text-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "logo",
        children: /*#__PURE__*/jsx_runtime_.jsx((Polymer_default()), {
          fontSize: "large",
          className: "text-gray-300 hover:cursor-pointer hover:text-blue-700"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "options flex flex-col gap-4 items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Home_default()), {
          className: "text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700 ",
          style: {
            fontSize: "3.2rem",
            padding: "0.7rem"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx((Assessment_default()), {
          className: "text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700",
          style: {
            fontSize: "3.2rem",
            padding: "0.7rem"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx((CameraAltOutlined_default()), {
          className: "text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700",
          style: {
            fontSize: "3.2rem",
            padding: "0.7rem"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx((Folder_default()), {
          className: "text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700",
          style: {
            fontSize: "3.2rem",
            padding: "0.7rem"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx((EventAvailable_default()), {
          className: "text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700",
          style: {
            fontSize: "3.2rem",
            padding: "0.7rem"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx((PeopleAltOutlined_default()), {
          className: "text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700",
          style: {
            fontSize: "3.2rem",
            padding: "0.7rem"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx((ChromeReaderMode_default()), {
          className: "text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700",
          style: {
            fontSize: "3.2rem",
            padding: "0.7rem"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx((ExitToApp_default()), {
          className: "text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700",
          style: {
            fontSize: "3.2rem",
            padding: "0.7rem"
          }
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bottom mb-24 items-center",
      children: /*#__PURE__*/jsx_runtime_.jsx((SettingsOutlined_default()), {
        className: "text-gray-300  my-4 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700",
        style: {
          fontSize: "3.2rem",
          padding: "0.7rem"
        }
      })
    })]
  });
}

/* harmony default export */ var components_MenuBar = (MenuBar);
;// CONCATENATED MODULE: external "@material-ui/icons/Notifications"
var Notifications_namespaceObject = require("@material-ui/icons/Notifications");;
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_namespaceObject = require("@material-ui/icons/AccountCircle");;
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/KeyboardArrowDown"
var KeyboardArrowDown_namespaceObject = require("@material-ui/icons/KeyboardArrowDown");;
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Add"
var Add_namespaceObject = require("@material-ui/icons/Add");;
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Search"
var Search_namespaceObject = require("@material-ui/icons/Search");;
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: ./components/Header.js








function Header({
  data
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "Header w-full py-2 md:px-4",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-wrap justify-end items-center gap-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx((Notifications_default()), {
        className: "text-white"
      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-white",
        children: data.name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccountCircle_default()), {
          fontSize: "large",
          className: "text-white"
        }), /*#__PURE__*/jsx_runtime_.jsx((KeyboardArrowDown_default()), {
          className: "text-white"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-wrap justify-between mx-8",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "left",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "text-white text-xl font-semibold",
          children: "Dashboard"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          className: "text-white",
          children: ["Monday, ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-blue-700",
            children: "02 July 2020"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "right flex flex-wrap pt-5 gap-8",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: "bg-blue-700 py-1 px-4 focus:outline-none text-center items-center text-white rounded",
          children: [" ", /*#__PURE__*/jsx_runtime_.jsx((Add_default()), {
            fontSize: "small"
          }), " Add"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "search flex fle-wrap items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx((Search_default()), {
            fontSize: "small",
            className: "text-gray-400 mx-2"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "Search for Application here",
            className: "bg-transparent w-40 focus:outline-none text-white"
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: external "@material-ui/icons/MoreHoriz"
var MoreHoriz_namespaceObject = require("@material-ui/icons/MoreHoriz");;
var MoreHoriz_default = /*#__PURE__*/__webpack_require__.n(MoreHoriz_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/CallMade"
var CallMade_namespaceObject = require("@material-ui/icons/CallMade");;
var CallMade_default = /*#__PURE__*/__webpack_require__.n(CallMade_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/CallReceived"
var CallReceived_namespaceObject = require("@material-ui/icons/CallReceived");;
var CallReceived_default = /*#__PURE__*/__webpack_require__.n(CallReceived_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_namespaceObject = require("@material-ui/core/CircularProgress");;
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_namespaceObject);
;// CONCATENATED MODULE: ./components/Applications.js







function Applications({
  data
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "pt-4 grid grid-cols-3 px-4 md:px-12 gap-6",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "totalApplications col-span-3 sm:col-span-3 md:col-span-1 px-4 justify-between py-2 border border-gray-600 rounded-xl",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-white",
          children: "Total Applications"
        }), /*#__PURE__*/jsx_runtime_.jsx((MoreHoriz_default()), {
          className: "text-gray-300"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between relative mt-6",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-white text-2xl font-bold",
            children: data.total.count
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-4 flex",
            children: [/*#__PURE__*/jsx_runtime_.jsx((CallMade_default()), {
              className: "text-purple-400"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "text-purple-400",
              children: ["+", data.total.inc, "%"]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((CircularProgress_default()), {
          variant: "determinate",
          size: "4rem",
          value: data.total.increase,
          style: {
            color: "#7E22CE"
          }
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "absolute top-6 right-4 text-xs text-purple-400",
          children: ["+", data.total.increase, "%"]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: " rounded-xl col-span-3 sm:col-span-3 md:col-span-1 border border-dashed border-gray-600 relative",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "shortlisted relative top-3 left-3 w-full px-4 py-2 justify-between bg-blue-600 rounded-xl",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex justify-between",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-white",
            children: "Shortlisted Candidates"
          }), /*#__PURE__*/jsx_runtime_.jsx((MoreHoriz_default()), {
            className: "text-gray-300"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex justify-between relative mt-6",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "text-white text-2xl font-bold",
              children: data.shortlisted.count
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mt-4 flex",
              children: [/*#__PURE__*/jsx_runtime_.jsx((CallMade_default()), {
                className: "text-white"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "text-white",
                children: ["+", data.shortlisted.inc, "%"]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx((CircularProgress_default()), {
            variant: "determinate",
            size: "4rem",
            value: data.shortlisted.increase,
            style: {
              color: "white"
            }
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "absolute top-6 right-4 text-xs text-white",
            children: ["+", data.shortlisted.increase, "%"]
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "total col-span-3 sm:col-span-3 md:col-span-1 px-4 justify-between py-2 border border-gray-600  rounded-xl",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-white",
          children: "Today's Applications"
        }), /*#__PURE__*/jsx_runtime_.jsx((MoreHoriz_default()), {
          className: "text-gray-300"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between relative mt-6",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-white text-2xl font-bold",
            children: data.today.count
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-4 flex",
            children: [/*#__PURE__*/jsx_runtime_.jsx((CallReceived_default()), {
              className: "text-red-500"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "text-red-500",
              children: ["+", data.today.inc, "%"]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((CircularProgress_default()), {
          variant: "determinate",
          color: "secondary",
          size: "4rem",
          value: data.today.increase
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "absolute top-6 right-4 text-xs text-red-500",
          children: ["+", data.today.increase, "%"]
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_Applications = (Applications);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "react-chartjs-2"
var external_react_chartjs_2_namespaceObject = require("react-chartjs-2");;
;// CONCATENATED MODULE: external "@material-ui/core/LinearProgress"
var LinearProgress_namespaceObject = require("@material-ui/core/LinearProgress");;
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/CreateNewFolder"
var CreateNewFolder_namespaceObject = require("@material-ui/icons/CreateNewFolder");;
var CreateNewFolder_default = /*#__PURE__*/__webpack_require__.n(CreateNewFolder_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/MoreVert"
var MoreVert_namespaceObject = require("@material-ui/icons/MoreVert");;
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_namespaceObject);
;// CONCATENATED MODULE: ./components/Stats.js








function Stats({
  graph,
  details
}) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: `Applications in ${graph.current.year}`,
      data: graph.current.values,
      borderColor: "rgba(201, 46, 46, 1)",
      backgroundColor: ["rgba(201, 46, 46,0.8)"],
      pointBackgroundColor: ["rgba(201, 46, 46,0.8)"],
      pointBorderColor: ["rgba(201, 46, 46, 1)"]
    }, {
      label: `Applications in ${graph.last.year}`,
      data: graph.last.values,
      borderColor: "rgba(168, 162, 162, 0.7)",
      backgroundColor: 'rgba(168, 162, 162, 0.7)',
      pointBackgroundColor: ["rgba(168, 162, 162, 0.7)"],
      pointBorderColor: ["rgba(168, 162, 162, 1)"]
    }]
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "pt-8 grid grid-cols-3 px-4 md:px-12 gap-6",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "chart overflow-x-scroll sm:overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden col-span-3 lg:col-span-2 md:col-span-3 sm:col-span-3 p-6 border border-gray-700 rounded-xl",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "left",
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-gray-300 font-semibold md:text-lg",
            children: "Applications Received"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "right flex justify-end gap-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-gray-300 cursor-pointer",
            children: "This Year"
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-gray-300 cursor-pointer",
            children: "This Week"
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-gray-300 cursor-pointer",
            children: "Today"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "report items-center cursor-pointer",
            children: [/*#__PURE__*/jsx_runtime_.jsx((CreateNewFolder_default()), {
              className: "text-gray-300"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-gray-300",
              children: "Download Report"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx((MoreVert_default()), {
            className: "text-gray-300 cursor-pointer"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "lg:p-6",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_chartjs_2_namespaceObject.Line, {
          data: data
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bar col-span-3 lg:col-span-1 md:col-span-3 sm:col-span-3 py-4 lg:py-8 px-10 border border-gray-700 rounded-xl",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        className: "text-white mt-4",
        children: "Total Applications"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-6 lg:mt-12 space-y-2 sm:space-y-2 md:space-y-4 lg:space-y-8",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-wrap items-center justify-start  gap-2 md:gap-3 lg:gap-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "rounded-full flex flex-wrap h-2 w-2 bg-indigo-400"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-indigo-400",
            children: "Applications"
          }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
            variant: "determinate",
            value: details.applications,
            style: {
              color: "#ffffff",
              backgroundColor: "#747875",
              width: "10rem",
              height: "0.7rem",
              borderRadius: "5px"
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-wrap items-center justify-start gap-2 md:gap-3 lg:gap-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "rounded-full flex flex-wrap h-2 w-2 bg-blue-600"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-blue-600 mr-3",
            children: "Shortlisted"
          }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
            variant: "determinate",
            value: details.shortlisted,
            style: {
              color: "#ffffff",
              backgroundColor: "#747875",
              width: "10rem",
              height: "0.7rem",
              borderRadius: "5px"
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-wrap items-center justify-start gap-2 md:gap-3 lg:gap-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "rounded-full flex flex-wrap h-2 w-2 bg-red-500"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-red-500 mr-7",
            children: "Rejected"
          }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
            variant: "determinate",
            value: details.rejected,
            style: {
              color: "#ffffff",
              backgroundColor: "#747875",
              width: "10rem",
              height: "0.7rem",
              borderRadius: "5px"
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-wrap items-center justify-start gap-2 md:gap-3 lg:gap-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "rounded-full flex flex-wrap h-2 w-2 bg-gray-300"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-gray-300 mr-8",
            children: "On hold"
          }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
            variant: "determinate",
            value: details.onhold,
            style: {
              color: "#ffffff",
              backgroundColor: "#747875",
              width: "10rem",
              height: "0.7rem",
              borderRadius: "5px"
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-wrap items-center justify-start gap-2 md:gap-3 lg:gap-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "rounded-full flex flex-wrap h-2 w-2 bg-purple-600"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-purple-600 mr-4",
            children: "Submitted"
          }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
            variant: "determinate",
            value: details.submitted,
            style: {
              color: "#ffffff",
              backgroundColor: "#747875",
              width: "10rem",
              height: "0.7rem",
              borderRadius: "5px"
            }
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_Stats = (Stats);
;// CONCATENATED MODULE: external "@material-ui/icons/Send"
var Send_namespaceObject = require("@material-ui/icons/Send");;
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_namespaceObject);
;// CONCATENATED MODULE: ./components/Data.js







function Data({
  referal,
  positions
}) {
  const data = {
    labels: ["Purple", "Red", "Blue"],
    datasets: [{
      label: "Open Positions",
      data: [positions.red, positions.purple, positions.blue],
      backgroundColor: ["#7C3AED", "#EF4444", "#2563EB"],
      borderColor: "transparent"
    }]
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-6 grid grid-cols-3 px-4 md:px-12 gap-6",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "referals col-span-3 lg:col-span-2 md:col-span-3 sm:col-span-3 p-6 border border-gray-700 rounded-xl",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-white",
          children: "Referal and Campaign Stats"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx((Send_default()), {
            style: {
              color: "#f02929"
            }
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "text-red-500 font-bold text-lg",
              children: [referal.totalCampaign, " Campaigns sent in total"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "text-white",
              children: [referal.lastMonthCampaign, " Campaigns sent in last month"]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-4 py-4 md:py-12",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-span-2 text-center md:col-span-1 items-center gap-4 border-r-2 border-gray-800",
          children: [/*#__PURE__*/jsx_runtime_.jsx("small", {
            className: "text-white",
            children: "Users reached"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx((CallMade_default()), {
              fontSize: "small",
              style: {
                color: "#1D4ED8"
              }
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("small", {
              className: "text-blue-700 font-bold",
              children: ["+", referal.usersReached.increase, "%"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-xl text-white font-bold",
            children: referal.usersReached.count
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-span-2 text-center md:col-span-1 items-center gap-4 md:border-r-2 border-gray-800",
          children: [/*#__PURE__*/jsx_runtime_.jsx("small", {
            className: "text-white",
            children: "Referals"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx((CallMade_default()), {
              fontSize: "small",
              style: {
                color: "#1D4ED8"
              }
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("small", {
              className: "text-blue-700 font-bold",
              children: ["+", referal.referals.increase, "%"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-xl text-white font-bold",
            children: referal.referals.count
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-span-2 text-center md:col-span-1 items-center gap-4 border-r-2 border-gray-800",
          children: [/*#__PURE__*/jsx_runtime_.jsx("small", {
            className: "text-white",
            children: "Share"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx((CallMade_default()), {
              fontSize: "small",
              style: {
                color: "#1D4ED8"
              }
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("small", {
              className: "text-blue-700 font-bold",
              children: ["+", referal.share.increase, "%"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-xl text-white font-bold",
            children: referal.share.count
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-span-2 text-center md:col-span-1 items-center gap-4 border-gray-800",
          children: [/*#__PURE__*/jsx_runtime_.jsx("small", {
            className: "text-white",
            children: "Application"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx((CallMade_default()), {
              fontSize: "small",
              style: {
                color: "#1D4ED8"
              }
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("small", {
              className: "text-blue-700 font-bold",
              children: ["+", referal.application.increase, "%"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-xl text-white font-bold",
            children: referal.application.count
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 my-5 md:my-10 gap-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "bg-blue-500 text-white focus:outline-none py-4 rounded",
          children: "Start a new Campaign now"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "bg-red-500 text-white focus:outline-none py-4 rounded",
          children: "Pause All Running Campaigns"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bar col-span-3 lg:col-span-1 md:col-span-3 sm:col-span-3 py-8 px-6 border border-gray-700 rounded-xl",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-white",
          children: "Open Positions by Department"
        }), /*#__PURE__*/jsx_runtime_.jsx((MoreHoriz_default()), {
          style: {
            color: "#D1D5DB"
          }
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "m-5",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_chartjs_2_namespaceObject.Doughnut, {
          data: data
        })
      })]
    })]
  });
}

/* harmony default export */ var components_Data = (Data);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowForwardIos"
var ArrowForwardIos_namespaceObject = require("@material-ui/icons/ArrowForwardIos");;
var ArrowForwardIos_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIos_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/AccountCircleOutlined"
var AccountCircleOutlined_namespaceObject = require("@material-ui/icons/AccountCircleOutlined");;
var AccountCircleOutlined_default = /*#__PURE__*/__webpack_require__.n(AccountCircleOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/EmailRounded"
var EmailRounded_namespaceObject = require("@material-ui/icons/EmailRounded");;
var EmailRounded_default = /*#__PURE__*/__webpack_require__.n(EmailRounded_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/PhoneRounded"
var PhoneRounded_namespaceObject = require("@material-ui/icons/PhoneRounded");;
var PhoneRounded_default = /*#__PURE__*/__webpack_require__.n(PhoneRounded_namespaceObject);
;// CONCATENATED MODULE: ./components/NewApplicants.js







function NewApplicants({
  applicants,
  name
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "relative mt-4",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "lg:fixed lg:bottom-0 lg:right-0 lg:w-3/12 lg:h-5/6",
      style: {
        backgroundImage: `url("/images/pic.jpg")`
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "pt-10 text-center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "text-white text-xl px-2 z-10",
          children: ["Hello ", name, ","]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "text-white text-xl px-2 z-10",
          children: ["You have ", applicants.length, " new applications today!"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "p-4 lg:px-12 lg:py-6 rounded-t-3xl h-full mt-12 pb-12 lg:32 bg-gray-800",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex mb-4 justify-between",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-white",
            children: "New Applicants"
          }), /*#__PURE__*/jsx_runtime_.jsx((ArrowForwardIos_default()), {
            fontSize: "small",
            style: {
              color: "white"
            }
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "applicants pt-4 space-y-6 max-h-80 lg:max-h-full overflow-y-auto",
          children: applicants.length > 0 ? applicants.map(applicant => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "applicant flex justify-between",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex space-x-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx((AccountCircleOutlined_default()), {
                  fontSize: "large",
                  style: {
                    color: "white"
                  }
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex flex-col",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                    className: "text-white",
                    children: applicant.name
                  }), /*#__PURE__*/jsx_runtime_.jsx("small", {
                    className: "text-white text-xs -mt-2",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                      children: [applicant.type, /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "text-blue-600",
                        children: applicant.category
                      })]
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex space-x-4",
                children: [/*#__PURE__*/jsx_runtime_.jsx((EmailRounded_default()), {
                  fontSize: "large",
                  style: {
                    color: "white",
                    backgroundColor: "#3F3F46",
                    borderRadius: "50%",
                    padding: "0.5rem"
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx((PhoneRounded_default()), {
                  fontSize: "large",
                  style: {
                    color: "white",
                    backgroundColor: "#3F3F46",
                    borderRadius: "50%",
                    padding: "0.5rem"
                  }
                })]
              })]
            }, applicant.id);
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-center pt-16",
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "text-white text-xl",
              children: "No Applicants!"
            })
          })
        })]
      })]
    })
  });
}

/* harmony default export */ var components_NewApplicants = (NewApplicants);
;// CONCATENATED MODULE: ./pages/index.js










function HomePage(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Social Comment Test"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/favicon.png"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "min-h-screen bg-gray-900 flex flex-row",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_MenuBar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "main-right w-full",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {
          data: props.user
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid grid-cols-4",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "main col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_Applications, {
              data: props.applications
            }), /*#__PURE__*/jsx_runtime_.jsx(components_Stats, {
              graph: props.graph,
              details: props.applicationDetails
            }), /*#__PURE__*/jsx_runtime_.jsx(components_Data, {
              referal: props.referal,
              positions: props.positions
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "applicants col-span-4 lg:col-span-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_NewApplicants, {
              applicants: props.applicants,
              name: props.user.name
            })
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ var pages = (HomePage);
async function getServerSideProps() {
  var user = {
    name: "John Bayer"
  };
  var applications = {
    total: {
      count: 7953,
      inc: 3.59,
      increase: 70
    },
    shortlisted: {
      count: 4658,
      inc: 4,
      increase: 40
    },
    today: {
      count: 1501,
      inc: 5,
      increase: 40
    }
  };
  var graph = {
    current: {
      year: 2020,
      values: [153, 184, 163, 187, 218, 221, 204]
    },
    last: {
      year: 2019,
      values: [175, 162, 186, 194, 179, 201, 205]
    }
  };
  var applicationDetails = {
    applications: 45,
    shortlisted: 40,
    rejected: 30,
    onhold: 15,
    submitted: 85
  };
  var referal = {
    totalCampaign: 40,
    lastMonthCampaign: 4,
    usersReached: {
      count: 7956,
      increase: 3.59
    },
    referals: {
      count: 622,
      increase: 9.01
    },
    share: {
      count: 1478,
      increase: 19.4
    },
    application: {
      count: 564,
      increase: 12
    }
  };
  var positions = {
    red: 45,
    purple: 30,
    blue: 25
  };
  var applicants = [{
    id: "1",
    name: "Rossie Matt",
    type: "Applicant",
    category: "iOS Developer"
  }, {
    id: "2",
    name: "James Scott",
    type: "Applicant",
    category: "Android Developer"
  }, {
    id: "3",
    name: "Jammie Laurensen",
    type: "Applicant",
    category: "Java"
  }, {
    id: "4",
    name: "Elizabeth Hurton",
    type: "Applicant",
    category: "AI ML"
  }, {
    id: "5",
    name: "Danny Watson",
    type: "Applicant",
    category: "Android Developer"
  }, {
    id: "6",
    name: "Reha Scarlett",
    type: "Applicant",
    category: "Python Developer"
  }, {
    id: "7",
    name: "Bruce Banner",
    type: "Applicant",
    category: "iOS Developer"
  }, {
    id: "8",
    name: "Tony Stark",
    type: "Applicant",
    category: "Java"
  }];
  return {
    props: {
      user: user,
      applications: applications,
      graph: graph,
      applicationDetails: applicationDetails,
      referal: referal,
      positions: positions,
      applicants: applicants
    }
  };
}

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(240));
module.exports = __webpack_exports__;

})();