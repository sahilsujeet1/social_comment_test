import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";

function NewApplicants({ applicants, name }) {
  return (
    <div className="relative mt-4">
      <div
        className="lg:fixed lg:bottom-0 lg:right-0 lg:w-3/12 lg:h-5/6"
        style={{ backgroundImage: `url("/images/pic.jpg")` }}
      >
        <div className="pt-10 text-center">
          <h1 className="text-white text-xl px-2 z-10">Hello {name},</h1>
          <h1 className="text-white text-xl px-2 z-10">
            You have {applicants.length} new applications today!
          </h1>
        </div>

        <div className="p-4 lg:px-12 lg:py-6 rounded-t-3xl h-full mt-12 pb-12 lg:32 bg-gray-800">
          <div className="flex mb-4 justify-between">
            <h1 className="text-white">New Applicants</h1>
            <ArrowForwardIosIcon fontSize="small" style={{ color: "white" }} />
          </div>

          <div className="applicants pt-4 space-y-6 max-h-80 lg:max-h-full overflow-y-auto">
            {applicants.length > 0 ? (
              applicants.map((applicant) => {
                return (
                  <div
                    key={applicant.id}
                    className="applicant flex justify-between"
                  >
                    <div className="flex space-x-2">
                      <AccountCircleOutlinedIcon
                        fontSize="large"
                        style={{ color: "white" }}
                      />
                      <div className="flex flex-col">
                        <h1 className="text-white">{applicant.name}</h1>
                        <small className="text-white text-xs -mt-2">
                          <p>
                            {applicant.type}
                            <span className="text-blue-600">
                              {applicant.category}
                            </span>
                          </p>
                        </small>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <EmailRoundedIcon
                        fontSize="large"
                        style={{
                          color: "white",
                          backgroundColor: "#3F3F46",
                          borderRadius: "50%",
                          padding: "0.5rem",
                        }}
                      />
                      <PhoneRoundedIcon
                        fontSize="large"
                        style={{
                          color: "white",
                          backgroundColor: "#3F3F46",
                          borderRadius: "50%",
                          padding: "0.5rem",
                        }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center pt-16">
                <h1 className="text-white text-xl">No Applicants!</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewApplicants;
