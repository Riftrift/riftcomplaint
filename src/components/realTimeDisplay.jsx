import React from "react";
import { Card } from "antd";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DateRangeIcon from "@mui/icons-material/DateRange";

const RealTimeDisplay = ({ formData, selectedDate }) => (
  <Card
    className="rounded-lg h-full w-1/6 "
    title={formData.category ? formData.category : "ยังไม่ระบุหมวดหมู่"}
    style={{ backgroundColor: "#EBF5FB", position: "sticky" }}
  >
    <div>
      <p className=" ">
        <PersonIcon className="mr-2" /> {formData.reporterName}
      </p>
      <p className="mt-2">
        <LocalPhoneIcon className="mr-2" /> {formData.phoneNumber}
      </p>
      <p className="mt-2">
        <PriorityHighIcon className="mr-3" />
        {formData.priority ? formData.priority : "-"}
      </p>
      <p className="mt-2">
        <DateRangeIcon className="mr-3" />
        {/* {selectedDate ? selectedDate.toString() : "-"} */}
        {selectedDate ? new Date(selectedDate).toLocaleDateString() : "-"}
      </p>
    </div>
  </Card>
);

export default RealTimeDisplay;
