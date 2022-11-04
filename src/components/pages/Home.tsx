import { apiArr } from "../../api/movieDataRequest";
import { useDetailDataModal } from "../../hooks/useDetailDataModal";
import { DetailDataModal } from "../organisms/DetailDataModal";
import { Navbar } from "../organisms/Navbar";
import { RowContainer } from "../organisms/RowContainer";
import { TopBanner } from "../organisms/TopBanner";

export const Home = () => {
  const {movieData,isOpen,onCloseModal,onOpenModal} = useDetailDataModal();


  console.log("home");
  return (
    <>
      <Navbar />
      <TopBanner onOpenModal={onOpenModal}/>
      {apiArr.map((api) => (
        <RowContainer
          key={api.title}
          title={api.title}
          endPoint={api.endPoint}
          onOpenMoal={onOpenModal}
        />
      ))}
      <DetailDataModal isOpen={isOpen} onClose={onCloseModal} movie={movieData}/>
    </>
  );
};
