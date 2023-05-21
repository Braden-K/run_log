import { Box } from "@mui/material";

const Date = (props) => {
  const dateArr = props.date.split("-");
  const year = dateArr[0];
  var month = null;
  switch (dateArr[1]) {
    case "01":
      month = "Jan";
      break;
    case "02":
      month = "Feb";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "Aug";
      break;
    case "09":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
    default:
      month = "Date Error";
  }

  var day = dateArr[2].substring(0, 2);
  if (parseInt(day) < 10) {
    day = day.substring(1);
  }

  return <Box sx={{ display: "inline" }}>{month + " " + day}</Box>;
};

export default Date;
