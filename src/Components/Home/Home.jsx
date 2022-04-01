import style from "./Home.module.css";
import BannerSlider from "./Banner";
import Typography from "@mui/material/Typography";
import { BestsellerScorlling } from "./BestSeller";
import { HomeSidebar } from "../HomeSidebar/HomeSidebar";
import ResposiveNav from "../ResponsiveNav/ResponsiveNav";
import BottomNavBar from "../ResponsiveNav/FooterNav";
import ResponsiveProducts from "./ResponsiveProducts";

export default function Home() {
  return (
    <div>
      <div className={style.Landing}>
        <div className={style.home}>
          <div className={style.sidebar}>
            <HomeSidebar />
          </div>
          <BannerSlider />
        </div>
        <div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ textAlign: "center" }}
          >
            BEST SELLERS
          </Typography>
          <div>
            <BestsellerScorlling />
          </div>
        </div>
        {/* <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_9yjs9v4t.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> */}
      </div>
      <div className={style.ResponsiveContainer}>
        <ResposiveNav />
        <div>
          <ResponsiveProducts />
        </div>

        <BottomNavBar />
      </div>
    </div>
  );
}
