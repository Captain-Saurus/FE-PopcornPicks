const REGION: string[] = [
  "서울",
  "경기/인천",
  "대전/충청/세종",
  "부산/대구/경상",
  "광주/전라",
  "강원",
  "제주",
];

const RESERVATION_PROCESS: string[] = [
  "상영 시간",
  "인원/좌석",
  "결제",
  "결제완료",
];

const TABLET_SIZE: string = "768px";
const LAPTOP_SIZE: string = "1024px";
const LAPTOP_LARGE_SIZE: string = "1440px";

const BACKEND_API_ADDRESS = process.env.REACT_APP_BACKEND_API_ADDRESS;

export {
  REGION,
  RESERVATION_PROCESS,
  TABLET_SIZE,
  LAPTOP_SIZE,
  LAPTOP_LARGE_SIZE,
  BACKEND_API_ADDRESS,
};
