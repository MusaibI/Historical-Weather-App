import { Disclosure } from '@headlessui/react';
import logo from './assets/logo.png';
export default function Navigation() {
    return (
        <Disclosure as="nav" className="bg-gray-800 shadow-lg fixed w-full top-0 left-0 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-center space-x-6">
                    <img
                        src={logo}
                        alt="Weather App Logo"
                        className="h-14 w-14 filter invert"
                    />
                    <h1 className="text-white text-2xl font-bold">Historical Weather App</h1>
                </div>
            </div>
        </Disclosure>
    );
};
