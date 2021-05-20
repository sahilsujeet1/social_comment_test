import Head from "next/head";
import MenuBar from "../components/MenuBar.js";
import Header from "../components/Header";
import Applications from "../components/Applications";
import Stats from "../components/Stats";
import Data from "../components/Data";
import NewApplicants from "../components/NewApplicants";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Social Comment Test</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="min-h-screen bg-gray-900 flex flex-row">
        <MenuBar />
        <div className="main-right w-full">
          <Header data={props.user} />
          <div className="grid grid-cols-4">
            <div className="main col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-3">
              <Applications data={props.applications} />
              <Stats graph={props.graph} details={props.applicationDetails} />
              <Data referal={props.referal} positions={props.positions} />
            </div>
            <div className="applicants col-span-4 lg:col-span-1">
              <NewApplicants
                applicants={props.applicants}
                name={props.user.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

export async function getServerSideProps() {
  var user = {
    name: "John Bayer",
  };

  var applications = {
    total: { count: 7953, inc: 3.59, increase: 70 },
    shortlisted: { count: 4658, inc: 4, increase: 40 },
    today: { count: 1501, inc: 5, increase: 40 },
  };

  var graph = {
    current: { year: 2020, values: [153, 184, 163, 187, 218, 221, 204] },
    last: { year: 2019, values: [175, 162, 186, 194, 179, 201, 205] },
  };

  var applicationDetails = {
    applications: 45,
    shortlisted: 40,
    rejected: 30,
    onhold: 15,
    submitted: 85,
  };

  var referal = {
    totalCampaign: 40,
    lastMonthCampaign: 4,
    usersReached: { count: 7956, increase: 3.59 },
    referals: { count: 622, increase: 9.01 },
    share: { count: 1478, increase: 19.4 },
    application: { count: 564, increase: 12 },
  };

  var positions = {
    red: 45,
    purple: 30,
    blue: 25,
  };

  var applicants = [
    {
      id: "1",
      name: "Rossie Matt",
      type: "Applicant",
      category: "iOS Developer",
    },
    {
      id: "2",
      name: "James Scott",
      type: "Applicant",
      category: "Android Developer",
    },
    { id: "3", name: "Jammie Laurensen", type: "Applicant", category: "Java" },
    { id: "4", name: "Elizabeth Hurton", type: "Applicant", category: "AI ML" },
    {
      id: "5",
      name: "Danny Watson",
      type: "Applicant",
      category: "Android Developer",
    },
    {
      id: "6",
      name: "Reha Scarlett",
      type: "Applicant",
      category: "Python Developer",
    },
    {
      id: "7",
      name: "Bruce Banner",
      type: "Applicant",
      category: "iOS Developer",
    },
    { id: "8", name: "Tony Stark", type: "Applicant", category: "Java" },
  ];

  return {
    props: {
      user: user,
      applications: applications,
      graph: graph,
      applicationDetails: applicationDetails,
      referal: referal,
      positions: positions,
      applicants: applicants,
    },
  };
}
