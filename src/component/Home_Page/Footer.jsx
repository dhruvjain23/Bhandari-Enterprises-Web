import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {

  return (
    <div className=" bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:5px_5px] px-5 ">
      <footer className="font-['Roboto_Condensed'] bg-gradient-to-r from-[#b395b8] to-[#eab768] text-gray-900 pt-10 pb-5 md:px-4 rounded-xl">
      <div className=" mx-auto px-6 flex md:justify-between max-sm:flex-col max-sm:gap-8">
        
        <div>
          <h2 className="text-2xl font-bold ">भंडारी इंटरप्राइजेज</h2>
          <span className="text-[15px] text-right font-bold mb-4">जियो ऑफिस के सामने, बस स्टैंड रोड</span> <br />
          <span className="text-[15px] text-right font-bold mb-4">बरुआसागर, झांसी, उत्तर प्रदेश</span>
          <p className="text-sm">
            Your trusted shop for Hosiery, Cosmetics, Food Products,
            Daily Essentials, and more.  
          </p>
        </div>

        {/* Contact */}
        <div className=" md:ml-40">
          <h2 className="text-xl font-bold md:mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Near Jio Office, Bus Stand Road, Jhansi Baruasagar, Uttar Pradesh, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="tel:+919451169062" className="text-black hover:underline ml-2">
                +91 9451169062
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:djain01d@gmail.com">Send Mail to Bhandari Enterprises</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Bhandari Enterprises | All Rights Reserved
      </div>
    </footer>
    </div>
  );
}
