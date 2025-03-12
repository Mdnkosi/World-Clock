function updateTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoDateElement = tokyoElement.querySelector(".date");

  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[<small/]>");



  let johannesburgElement = document.querySelector("#johannesburg")
  let johannesburgTimeElement = johannesburgElement.querySelector(".time")
  let johannesburgDateElement = johannesburgElement.querySelector(".date");

  let johannesburgTime = moment().tz("Africa/Johannesburg");
  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[<small/]>"
  );

}
updateTime();
setInterval(updateTime,1000)
