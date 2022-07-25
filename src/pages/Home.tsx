import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

export default function Home () {
    return(
        <>
            <div className="main-body d-flex p-4">

                <Sidebar />

                <Content />
            </div>
        </>
    )
}