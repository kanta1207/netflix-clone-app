import { apiArr } from "../../api/movieDataRequest";
import { Navbar } from "../organisms/Navbar";
import { RowContainer } from "../organisms/RowContainer";
import { TopBanner } from "../organisms/TopBanner";

export const Home = () => {
  console.log("home");
  return (
    <>
      <Navbar />
      <TopBanner />
      {apiArr.map((api) => (
        <RowContainer
          key={api.title}
          title={api.title}
          endPoint={api.endPoint}
        />
      ))}
    </>
  );
};
