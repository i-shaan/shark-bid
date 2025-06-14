'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings } from 'lucide-react';

const Header_Home: React.FC = () => {
  const pathname = usePathname();
  const isCoinActive = pathname.endsWith('/coins');
  const isFutureActive = pathname.endsWith('/future');

  const tickers = [
    { name: 'MANTRA', price: 6.137, change: -3.0 },
    { name: 'MANTRA', price: 6.137, change: -3.0 },
  ];

  const [isVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleModal = () => setShowModal(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) {
        setModalPosition({
          top: rect.bottom + window.scrollY + 8,
          left: rect.left + window.scrollX - 260, // Adjust based on desired alignment
        });
      }
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModal]);

  const UserIcon = () => <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.8359 12.5C12.3547 12.5 13.5859 11.2688 13.5859 9.75C13.5859 8.23122 12.3547 7 10.8359 7C9.31715 7 8.08594 8.23122 8.08594 9.75C8.08594 11.2688 9.31715 12.5 10.8359 12.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.5469 18.721C15.5769 16.53 13.3879 15 10.8379 15C8.28791 15 6.09891 16.53 5.12891 18.721" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="11" cy="11" r="10.5" stroke="white"/>
  </svg>
  ;
  const CardIcon = () => <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 6.06885H22" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.89655 16.207L19.1034 16.207C20.7032 16.207 22 14.9102 22 13.3105V3.89669C22 2.29696 20.7032 1.00013 19.1034 1.00013L3.89655 1.00013C2.29683 1.00013 1 2.29696 1 3.89669V13.3105C1 14.9102 2.29683 16.207 3.89655 16.207Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.62109 11.8623H8.96592" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.9297 11.8623H18.378" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>;  
  const HelpIcon = () => <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="11" cy="12" r="10.5" stroke="white"/>
  <path d="M13.96 9.78125C13.96 10.2461 13.846 10.6654 13.6182 11.0391C13.4678 11.2852 13.1943 11.6064 12.7979 12.0029C12.4743 12.2718 12.1484 12.5384 11.8203 12.8027C11.7109 12.9303 11.6562 13.3633 11.6562 14.1016C11.6335 14.4707 11.4443 14.6553 11.0889 14.6553C10.6878 14.6553 10.4714 14.4707 10.4395 14.1016C10.4395 13.5 10.4827 13.0602 10.5693 12.7822C10.6514 12.5316 10.8086 12.2923 11.041 12.0645C11.3509 11.7865 11.6608 11.5085 11.9707 11.2305C12.4766 10.752 12.7295 10.278 12.7295 9.80859C12.7295 9.37565 12.5768 9.0293 12.2715 8.76953C11.9661 8.50521 11.5811 8.37305 11.1162 8.37305C9.89941 8.37305 9.29102 8.96549 9.29102 10.1504C9.26367 10.4284 9.06087 10.5674 8.68262 10.5674C8.38639 10.5674 8.1722 10.4284 8.04004 10.1504C8.03548 10.0729 8.0332 9.99544 8.0332 9.91797C8.0332 9.07943 8.31803 8.42546 8.8877 7.95605C9.44368 7.50033 10.2025 7.27246 11.1641 7.27246C11.957 7.27246 12.611 7.48665 13.126 7.91504C13.682 8.37533 13.96 8.9974 13.96 9.78125ZM11.8818 16.1113C11.8818 16.362 11.8044 16.5739 11.6494 16.7471C11.4945 16.9202 11.2962 17.0068 11.0547 17.0068C10.8132 17.0068 10.6149 16.9202 10.46 16.7471C10.3096 16.5739 10.2344 16.362 10.2344 16.1113C10.2344 15.8607 10.3096 15.6488 10.46 15.4756C10.6149 15.3024 10.8132 15.2158 11.0547 15.2158C11.2962 15.2158 11.4945 15.3024 11.6494 15.4756C11.8044 15.6488 11.8818 15.8607 11.8818 16.1113Z" fill="white"/>
  </svg>
  ;

  const MenuItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <div className="flex items-center px-2 py-3 cursor-pointer hover:bg-[#4A4450]">
      <div className="w-6 h-6 mr-3 flex items-center justify-center">{icon}</div>
      <span className="text-white text-sm">{label}</span>
      <div className="ml-auto">
        <svg width="16" height="16" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>
  );

  return (
    <header className="text-white relative">
      {/* Ticker Bar */}
      <div className="w-full overflow-hidden bg-gray-950 py-2 text-xs">
        <div className="animate-marquee flex whitespace-nowrap">
          {tickers.map((ticker, index) => (
            <div key={index} className="flex items-center mx-4">
              <span className="font-medium mr-1">{ticker.name}</span>
              <span>${ticker.price.toFixed(3)}</span>
              <span className="ml-1 text-red-500">▼ {ticker.change.toFixed(2)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header content */}
      <div className="container py-4 flex items-center justify-between mx-auto">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center text-lg font-bold">
            <span style={{ color: '#FFFFFF' }}>Shark</span>
            <span style={{ color: '#32FE31' }}>bid</span>
          </div>
          <div className="h-8 w-px bg-white/30" />
          <nav className="flex space-x-6">
            <Link href="/coins" className={`text-base font-semibold ${isCoinActive ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`}>Coins</Link>
            <Link href="/futures" className={`text-base font-semibold ${isFutureActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Futures</Link>
          </nav>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Other icons */}
          <button className="w-10 h-10 bg-[#58525E] rounded-xl flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="4.32617" width="12.9242" height="12.9242" rx="1.25" stroke="white" strokeWidth="1.5"/>
<path d="M4.125 1H15.0038C16.1084 1 17.0038 1.89543 17.0038 3V12.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M4.35 13.6055L6.789 7.30547H7.779L10.2 13.6055H9.165L7.725 9.80747C7.707 9.76547 7.671 9.66347 7.617 9.50147C7.569 9.33947 7.512 9.15947 7.446 8.96147C7.38 8.76347 7.32 8.58347 7.266 8.42147C7.212 8.25347 7.176 8.14547 7.158 8.09747L7.365 8.08847C7.329 8.19047 7.284 8.31947 7.23 8.47547C7.182 8.63147 7.128 8.79647 7.068 8.97047C7.014 9.14447 6.96 9.30947 6.906 9.46547C6.852 9.61547 6.807 9.74147 6.771 9.84347L5.34 13.6055H4.35ZM5.43 12.0395L5.79 11.1035H8.652L9.066 12.0395H5.43Z" fill="white"/>
</svg>
</button>
          <button className="w-10 h-10 bg-[#58525E] rounded-xl flex items-center justify-center">
            <Settings className="text-white w-5 h-5" />
          </button>
          <button className="w-15 h-10 bg-[#58525E] rounded-xl flex gap-1 items-center justify-center"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 12.5C13.395 12.5 12.5 11.605 12.5 10.5V5.75C12.5 3.127 10.373 1 7.75 1C5.127 1 3 3.127 3 5.75V10.5C3 11.605 2.105 12.5 1 12.5H14.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.3336 14.435C9.2386 14.318 9.0966 14.25 8.9456 14.25H6.5466C6.3956 14.25 6.2536 14.318 6.1586 14.435C6.0636 14.552 6.0266 14.706 6.0576 14.853C6.2306 15.675 6.9256 16.25 7.7466 16.25C8.5676 16.25 9.2626 15.675 9.4356 14.853C9.4666 14.706 9.4286 14.552 9.3336 14.435Z" fill="white"/>
</svg> 20
</button>
          {/* Toggle Button */}
          <button
            ref={buttonRef}
            onClick={toggleModal}
            className="w-10 h-10 bg-[#58525E] rounded-xl flex items-center justify-center"
          >
<svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.83594 6.5C8.35472 6.5 9.58594 5.26878 9.58594 3.75C9.58594 2.23122 8.35472 1 6.83594 1C5.31715 1 4.08594 2.23122 4.08594 3.75C4.08594 5.26878 5.31715 6.5 6.83594 6.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5983 14.766C12.4583 14.495 12.9103 13.545 12.5453 12.721C11.5753 10.53 9.38629 9 6.83629 9C4.28629 9 2.09729 10.53 1.12729 12.721C0.76229 13.546 1.21429 14.495 2.07429 14.766C3.29929 15.152 4.92029 15.5 6.83629 15.5C8.75229 15.5 10.3733 15.152 11.5983 14.766Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          ref={modalRef}
          style={{
            position: 'absolute',
            top: modalPosition.top,
            left: modalPosition.left,
          }}
          className="w-[320px] bg-[#3D3742] rounded-xl p-4 z-50 shadow-lg"
        >
          {!isVerified ? (
            <>
              <p className="text-white text-xl font-bold">20%</p>
              <p className="text-gray-400 text-sm mb-2">Get Investment Ready</p>
              <p className="text-[#FFC801] font-semibold mb-4 cursor-pointer">Verify Phone</p>
              <div className="divide-y divide-[#524C58]">
                <MenuItem icon={<UserIcon />} label="Account Settings" />
                <Link href="/profile/usdt-wallet">
  <div className="flex items-center px-2 py-3 cursor-pointer hover:bg-[#4A4450]">
    <div className="w-6 h-6 mr-3 flex items-center justify-center"><CardIcon /></div>
    <span className="text-white text-sm">Transaction History</span>
    <div className="ml-auto">
      <svg width="16" height="16" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  </div>
</Link>

                <MenuItem icon={<HelpIcon />} label="Help & Support" />
              </div>
              <p className="text-red-500 text-sm mt-4 cursor-pointer">Logout</p>
            </>
          ) : (
            <>
              <div className="flex items-center flex-col mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-600 mb-2"></div>
                <p className="text-white font-semibold">Hello, Rajesh</p>
                <button className="text-sm border border-gray-500 px-3 py-1 rounded-full text-white mt-1">0.00 USDT</button>
              </div>
              <hr className="border-[#524C58] my-3" />
              <p className="text-white font-bold text-lg">$0.000 <span className="text-green-400 text-sm ml-1">+$0.000 24h</span></p>
              <div className="text-xs text-gray-400 grid grid-cols-3 text-center my-2">
                <div><p>Invested</p><p className="text-white">$0.000</p></div>
                <div><p>Current</p><p className="text-white">$0.000</p></div>
                <div><p>Realised</p><p className="text-white">$0.000</p></div>
              </div>
              <div className="divide-y divide-[#524C58] mt-2">
                <MenuItem icon={<UserIcon />} label="Account Settings" />
                <Link href="/profile/usdt-wallet">
  <div className="flex items-center px-2 py-3 cursor-pointer hover:bg-[#4A4450]">
    <div className="w-6 h-6 mr-3 flex items-center justify-center"><CardIcon /></div>
    <span className="text-white text-sm">Transaction History</span>
    <div className="ml-auto">
      <svg width="16" height="16" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  </div>
</Link>

                <MenuItem icon={<HelpIcon />} label="Help & Support" />
              </div>
              <p className="text-red-500 text-sm mt-4 cursor-pointer">Logout</p>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header_Home;
