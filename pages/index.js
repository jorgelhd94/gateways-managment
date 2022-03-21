import Dashboard from '../src/components/Layout/Dashboard/Dashboard';
import Image from 'next/image';
import Link from 'next/link';
import ButtonIcon from '../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faServer, faLaptop } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <Dashboard>
      <div className="bg-white mx-4 py-6 px-14 dark:bg-gray-800 overflow-hidden rounded-lg relative lg:flex lg:items-center">
        <div className="w-full py-4 px-4 sm:px-6 lg:py-8 lg:px-8 z-20">
          <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-3xl">
            <span className="block">Hi there!!</span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
            Welcome to the Gateway Management System. This system allows you to register your
            gateways and their respective devices. You can start by creating a new master device and
            adding some peripherals to it.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex">
              <div className="mr-2">
                <Link href="/gateways/create">
                  <a>
                    <ButtonIcon type="primary" icon={faServer} showIcon={true}>
                      New Gateway
                    </ButtonIcon>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/devices/create">
                  <a>
                    <ButtonIcon type="success" icon={faLaptop} showIcon={true}>
                      New Device
                    </ButtonIcon>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <Image src="/assets/img/welcome.svg" width={700} height={700} />
        </div>
      </div>
    </Dashboard>
  );
}
