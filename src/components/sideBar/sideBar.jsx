import { Divider } from "@mui/material"
import AvatarP from "./AvatarP"
import Skills from "./Skills"
import Education from "./Education"
import Langueages from "./Langueages"
import AdditionalSkills from "./AdditionalSkills"

const SideBar = () => {
    return <>
        <AvatarP />
        <Divider sx={{ my: 5.5 }} />

        <Skills />
        <Divider sx={{ my: 5.5 }} />

        <AdditionalSkills />
        <Divider sx={{ my: 5.5 }} />

        <Education />
        <Divider sx={{ my: 5.5 }} />

        <Langueages />
        <Divider sx={{ my: 5.5 }} />
    </>
}

export default SideBar