import defaultBanner from "../../assets/images/banner2.jpg"
import useStyles from "../../styles/FormStyles"

const Banner = ({ img = defaultBanner }) => {
    const { classes } = useStyles()
    return (
        <div className={classes.bannerWrapper}>
            <img src={img} alt="banner" className={classes.banner} />
        </div>
    )
}

export default Banner
