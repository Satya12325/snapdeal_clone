import style from "./Home.module.css";
import BannerSlider from "./Banner";
import Typography from "@mui/material/Typography";
import {BestsellerScorlling} from "./BestSeller"
import {HomeSidebar} from "../HomeSidebar/HomeSidebar"
export default function Home() {
  return (
    <div>
      <div className={style.home}>
        <div className={style.sidebar}>
          <HomeSidebar/>
        </div>
        <BannerSlider />
      </div>
      <div>
      <Typography
          variant="h6"
          noWrap
          component="div"
          style={{textAlign: 'center'}}
          >
          BEST SELLERS
          </Typography>
          <div>
            <BestsellerScorlling/>
          </div>
      </div>
    </div>
  );
}
