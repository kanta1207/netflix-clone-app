import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Navbar } from "../components/organisms/Navbar";
import { Browse } from "../components/pages/Browse";
import { DetailDataPage } from "../components/pages/DetailDataPage";
import { Home } from "../components/pages/Home";
import { selectedContentState } from "../global/atoms";

export const Router = () => {
  const [selectedContent] = useRecoilState(selectedContentState);
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />}>
          <Route
            path={`${selectedContent.contentId}`}
            element={<DetailDataPage />}
          />
        </Route>
      </Routes>
    </>
  );
};
