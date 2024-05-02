import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RealTimeDisplay from "./realTimeDisplay";

import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export const ComplaintForm = () => {
  const categories = ["ทั่วไป", "ฝ่ายขาย", "ทีมช่วยเหลือ"];
  const priority = ["ธรมมดา", "ด่วน", "ด่วนที่สุด"];
  const departments = ["ฝ่ายบุคคล", "ฝ่ายช่วยเหลือ", "ฝ่ายขาย"];
  const contactChannels = ["อีเมลล์", "โทรศัพท์", "จดหมาย"];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const [formData, setFormData] = useState({
    reporterName: "",
    phoneNumber: "",
    information: "",
    category: "",
    priority: "",
    department: "",
    details: "",
    contactChannel: "",
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const validatePhoneNumber = () => {
    const phoneNumber = formData.phoneNumber;

    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };

  return (
    // <div className="flex flex-row px-10 pt-20 w-full ">
    <div className="flex flex-col px-4 pt-10 w-full md:flex-row md:px-10 md:pt-20">
      <RealTimeDisplay
        formData={formData}
        selectedDate={selectedDate}
        className="w-full md:w-1/6 mb-8 md:mb-[100px] "
      />
      <form className="flex flex-col gap-8 w-full md:w-4/6 md:pl-[60px] h-full md:h-auto">
        <h2 className="font-bold text-3xl">การรับเรื่อง</h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-4">
          <div className="flex flex-col gap-4 w-full">
            <label className="text-xl">วัน เวลา รับเรื่อง</label>
            <div className="flex flex-  gap-4 w-full ">
              <DatePicker
                label="Select date "
                value={selectedDate}
                onChange={handleDateChange}
              />
              <TimePicker label="Select time" />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label className="text-xl">
              ช่องทาง<span className="text-red-500">*</span>
            </label>
            <FormControl>
              <Select
                displayEmpty
                labelId="contactChannels-label"
                id="contactChannels"
                value={formData.contactChannel}
                name="contactChannel"
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (!selected) {
                    return <em>โปรดเลือก</em>;
                  }
                  return selected;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>โปรดเลือก</em>
                </MenuItem>
                {contactChannels.map((channel) => (
                  <MenuItem key={channel} value={channel}>
                    {channel}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <h3 className="text-3xl font-bold">ผู้แจ้งเรื่อง</h3>
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <label className="text-xl">ชื่อ</label>
            <input
              type="text"
              name="reporterName"
              placeholder="ชื่อ-นามสกุล"
              onChange={handleChange}
              className="text-xl border border-slate-500	rounded-md w-full	h-[50px] pl-5"
            />
          </div>
          <div className="flex flex-col gap-4  md:mt-0 ml-0   md:ml-4  w-full md:w-1/2">
            <label className="text-xl">เบอร์โทรศัพท์</label>
            <div className="flex flex-row gap-2">
              <input
                type="tel"
                maxLength="11"
                name="phoneNumber"
                placeholder="08XXXXXX"
                onChange={handleChange}
                className="text-xl border border-slate-500	rounded-md h-[50px] pl-5"
              />
              <button
                type="button"
                onClick={() => {
                  if (validatePhoneNumber()) {
                    alert("เบอร์โทรศัพท์ถูกต้อง");
                  } else {
                    alert("เบอร์โทรศัพท์ไม่ถูกต้อง กรุณาใส่ 10 หลัก");
                  }
                }}
                className="bg-blue-700 rounded-md text-white w-[100px] h-[50px]"
              >
                ตรวจสอบ
              </button>
            </div>
          </div>
        </div>
        <h4 className="text-3xl">ข้อมูลที่แจ้ง</h4>
        <div className="flex flex-row gap-4 w-full">
          <div className="flex flex-col gap-4 w-full md:w-1/2 ">
            <label className="text-xl ">หมวดหมู่</label>

            <FormControl fullWidth>
              <Select
                displayEmpty
                labelId="category-label"
                id="category"
                value={formData.category}
                name="category"
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (!selected) {
                    return <em>โปรดเลือก</em>;
                  }
                  return selected;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>โปรดเลือก</em>
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <label className="text-xl">
              ระดับความสำคัญ<span className="text-red-500"></span>
            </label>
            <FormControl fullWidth>
              <Select
                displayEmpty
                id="priority"
                value={formData.priority}
                name="priority"
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (!selected) {
                    return <em>โปรดเลือก</em>;
                  }
                  return selected;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>โปรดเลือก</em>
                </MenuItem>

                {priority.map((priority) => (
                  <MenuItem key={priority} value={priority}>
                    {priority}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-xl ">
            ฝ่ายที่เกี่ยวข้อง<span className="text-red-500"></span>
          </label>
          <FormControl fullWidth>
            <Select
              displayEmpty
              labelId="departments-label"
              id="departments"
              value={formData.departments}
              name="departments"
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (!selected) {
                  return <em>โปรดเลือก</em>;
                }
                return selected;
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>โปรดเลือก</em>
              </MenuItem>
              {departments.map((departments) => (
                <MenuItem key={departments} value={departments}>
                  {departments}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-col gap-4  ">
          <label className="text-xl gap-4">รายละเอียด</label>
          <textarea
            className=" border border-slate-500	rounded-md  h-32  "
            name="details"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="fixed bottom-0  w-4/6 h-[80px] bg-blue-200 shadow-lg p-4 flex justify-center mt-auto ">
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            style={{ backgroundColor: "blue", color: "white" }}
            sx={{ height: "50px" }}
          >
            บันทึก
          </Button>
        </div>
      </form>
    </div>
  );
};
