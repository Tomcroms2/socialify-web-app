import getCurrentUser from '@/app/actions/getCurrentUser';
import HeaderButton from "./HeaderButton";

const Header = async () => {

    const currentUser = await getCurrentUser();

    return (
        <header className="w-full z-20 absolute flex px-[10%] py-4 items-center">
            
            <img src="/images/capture_socialify.png" alt="Socialify logo" className="h-20 mr-auto"/>
            <nav className="bg-white text-white bg-opacity-10 flex gap-3 rounded-[40px] mr-20">
                <a href="#home" className="block py-4 px-10">Home</a>
                <a href="#howItWorks" className="block py-4 px-10">How it works</a>
                <a href="#pricing" className="block py-4 px-10">Pricing</a>
                <a href="#blog" className="block py-4 px-10">Blog</a>
            </nav>
            <HeaderButton currentUser={currentUser!} />
        </header>
    )
}

export default Header;