import Form from "../../Form/Form.jsx";

import style from "./Landing.module.css";


function Landing ({login}) {
    return (
        <div className={style.landingContainer}>
            <Form login={login} />
        </div>
    )
};

export default Landing;