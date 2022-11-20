import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { apiArr } from "../../api/movieDataRequest";
import { SlideShowLoading } from "../atoms/fallback/SlideShowLoading";
import { TopBannerLoading } from "../atoms/fallback/TopBannerLoading";
import { RowContainer } from "../organisms/RowContainer";
import { TopBanner } from "../organisms/TopBanner";

export const Browse = () => {
  console.log("browse");
  return (
    <>
      <Suspense fallback={<TopBannerLoading />}>
        <TopBanner />
      </Suspense>
        {apiArr.map((api) => (
          <Suspense fallback={<SlideShowLoading />}>
            <RowContainer
              key={api.title}
              title={api.title}
              endPoint={api.endPoint}
            />
          </Suspense>
        ))}
      <Outlet />
    </>
  );
};
