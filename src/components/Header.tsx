import { Button } from "@/components/ui/button";
import { AvatarComponent } from "./Avatar.tsx";

const Header = () => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
                <h1 className="font-semibold text-xl">MARKETPLACE</h1>
                <div className="ml-auto flex gap-2">
                    <Button
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
                    >
                        Home
                    </Button>
                    <Button
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600 focus:bg-green-600 focus:outline-none"
                    >
                        About
                    </Button>
                    <Button
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600 focus:bg-red-600 focus:outline-none"
                    >
                        Cars
                    </Button>
                    <Button
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-600 focus:bg-yellow-600 focus:outline-none"
                    >
                        Portfolio
                    </Button>
                    <Button
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600 focus:bg-purple-600 focus:outline-none"
                    >
                        Contact
                    </Button>
                    <AvatarComponent/>
                    <Button variant="outline" className="justify-self-end">
                        Sign in
                    </Button>
                    <Button className="justify-self-end">Sign Up</Button>
                </div>
            </header>
        </div>
    );
};

export default Header;