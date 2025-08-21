import contactsvg from '../../assets/contact.svg';


export default function ContactPage() {
  return (
    <div id='contactpage' className='min-h-screen bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:5px_5px] p-5'>
      <div id="contact" className="min-h-screen bg-gray-200 ">
        <div className="max-w-7xl mx-auto font-['Roboto_Condensed'] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side - Contact Info */}
          <div className='order-2 max-sm:pl-2.5 md:order-none'>
            <h1 className="text-4xl max-sm:text-center font-bold text-indigo-600 mb-6">Contact Us</h1>
            
            <div className="flex text-lg mb-4">
              <span className="font-semibold">📍 Address: &nbsp;</span>  
              <div className="flex flex-col">
                <div>Bhandari Enterprises, Near Jio Office, Bus Stand Road</div> 
                <div>Barwasagar, Jhansi, Uttar Pradesh</div>
              </div>
            </div>
            
            <p className="text-lg mb-4">
              <span className="font-semibold">📞 Phone:</span>  
              <a href="tel:+919451169062" className="text-yellow-600 hover:underline ml-2">
                +91 9451169062
              </a>
            </p>
            
            <p className="text-lg mb-6">
              <span className="font-semibold">🌐 Google Maps:</span>  
            </p>

            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14249.575406127236!2d78.7193033!3d25.3774446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397783003360151b%3A0x9014228f2c10ed47!2sBhandari%20Enterprises!5e0!3m2!1sen!2sin!4v1723550000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side - SVG Illustration */}
          <div className="flex justify-center order-1 md:order-none">
            <img
              src= {contactsvg}
              alt="Contact Illustration"
              className="w-3/4 md:w-full"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
