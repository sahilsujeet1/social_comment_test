import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

function Header({data}) {
  return (
    <div className="Header w-full py-2 md:px-4">
      <div className="flex flex-wrap justify-end items-center gap-4">
        <NotificationsIcon className="text-white" />
        <h4 className="text-white">{data.name}</h4>
        <div className="flex flex-wrap items-center">
          <AccountCircleIcon fontSize="large" className="text-white" />
          <KeyboardArrowDownIcon className="text-white" />
        </div>
      </div>
    
      <div className="flex flex-wrap justify-between mx-8">
        <div className="left">
          <h3 className="text-white text-xl font-semibold">Dashboard</h3>
          <h6 className="text-white">Monday, <span className="text-blue-700">02 July 2020</span></h6>
        </div>

        <div className="right flex flex-wrap pt-5 gap-8">
          <button className="bg-blue-700 py-1 px-4 focus:outline-none text-center items-center text-white rounded"> <AddIcon fontSize="small"/> Add</button>
          <div className="search flex fle-wrap items-center">
            <SearchIcon fontSize="small" className="text-gray-400 mx-2"/>
            <input type="text" placeholder="Search for Application here" className="bg-transparent w-40 focus:outline-none text-white"/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
