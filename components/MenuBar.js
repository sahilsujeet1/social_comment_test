import PolymerIcon from "@material-ui/icons/Polymer";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import FolderIcon from "@material-ui/icons/Folder";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

function MenuBar() {
  return (
    <div className="flex flex-col justify-between h-screen border-r-4 border-gray-700 sticky top-0">
    
      <div className="top space-y-14 my-6 text-center">
        
        <div className="logo">
          <PolymerIcon fontSize="large" className="text-gray-300 hover:cursor-pointer hover:text-blue-700" />
        </div>
        <div className="options flex flex-col gap-4 items-center">
          <HomeIcon
            className="text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700 "
            style={{fontSize:"3.2rem", padding:"0.7rem"}}
          />
          <AssessmentIcon
            className="text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700"
            style={{fontSize:"3.2rem", padding:"0.7rem"}}
          />
          <CameraAltOutlinedIcon
            className="text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700"
            style={{fontSize:"3.2rem", padding:"0.7rem"}}
          />
          <FolderIcon
            className="text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700"
            style={{fontSize:"3.2rem", padding:"0.7rem"}}
          />
          <EventAvailableIcon
            className="text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700"
            style={{fontSize:"3.2rem", padding:"0.7rem"}}
          />
          <PeopleAltOutlinedIcon
            className="text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700"
            style={{fontSize:"3.2rem", padding:"0.7rem"}}
          />
          <ChromeReaderModeIcon
            className="text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700"
            style={{fontSize:"3.2rem", padding:"0.7rem"}}
          />
          <ExitToAppIcon
            className="text-gray-300 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700"
            style={{fontSize:"3.2rem", padding:"0.7rem"}}
          />
        </div>
      </div>
      <div className="bottom mb-24 items-center">
        <SettingsOutlinedIcon
          className="text-gray-300  my-4 hover:cursor-pointer hover:border-r-4 hover:border-blue-700 hover:text-blue-700"
          style={{fontSize:"3.2rem", padding:"0.7rem"}}
        />
      </div>
    </div>
  );
}

export default MenuBar;
