import Categories from '../Home/Categories';

function Navbar1() {
    return (
        <div className="relative">
            <BackGroundLogo />
            <Container />
            <Categories />
        </div>
    );
}



export function ProjectLogo() {
    return (
        <div className="mb-96 ml-36" style={{ "marginBottom": "700px" }}>
            <img
                className="object-contain w-36"
                src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
                alt="logo"
            />
        </div>
    )
}

export function BackGroundLogo() {
    return (
        <img
            className="w-full h-96 object-cover"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg6.jpg"
            alt="dashboard image"
            style={{ "height": "800px" }}
        />
    )
}


export function Container() {
    return (
        <div className="absolute inset-0 flex items-center justify-between px-8 py-4 bg-opacity-50">
            <ProjectLogo />
            <ULComponents />
        </div>
    )
}
export function ULComponents() {
    return (
        <div>
            <ul className="flex mb-72 space-x-16 text-white" style={{ "marginBottom": "700px" }}>
                <li className="flex flex-col items-start">
                    <p className="text-sm">List Your Property</p>
                    <p className="text-xs">Start earning today</p>
                </li>
                <li className="flex flex-col items-start border-l border-white pl-4">
                    <p className="text-sm">Introducing myBiz</p>
                    <p className="text-xs">Business Travel Solutions</p>
                </li>
                <li className="flex flex-col items-start border-l border-white pl-4">
                    <p className="text-sm">My Trips</p>
                    <p className="text-xs">Manage Your Bookings</p>
                </li>

                <li className=" pl-4">
                    <div className="w-48 bg-blue-500 text-center py-2 rounded">
                        <p>Login / Create Account</p>
                    </div>
                </li>

                <li className=" pl-4">
                    <div className="w-48 bg-gray-500 text-center py-2 rounded">
                        <p>Language</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar1;
