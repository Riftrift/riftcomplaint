import { ComplaintForm } from "./components/comPlaintForm";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TopBar from "./components/TopBar";
import "dayjs/locale/th";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
      <TopBar />
      <ComplaintForm />
    </LocalizationProvider>
  );
}

export default App;
