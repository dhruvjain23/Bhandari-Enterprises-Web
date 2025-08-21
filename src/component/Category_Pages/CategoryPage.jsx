import { useParams } from "react-router-dom";
import bra from "../../assets/bra.jpg";
import bl_long from "../../assets/bl_long.jpeg";
import bll from "../../assets/bll.jpg";
import rn from "../../assets/rn.jpeg";
import rns from "../../assets/rns.jpg";
import parker from "../../assets/parker.webp";
import gym from "../../assets/gym.jpeg";
import cm from "../../assets/cm.jpg";
import mac from "../../assets/mac.jpg";
import macmin from "../../assets/machomini.jpeg";
import dix from "../../assets/dixcy.jpeg";
import rum from "../../assets/rumaal.png";
import fltn from "../../assets/fulton.jpg";
import smej from "../../assets/sameej.jpeg";
import jr from "../../assets/jr.jpeg";
import cd from "../../assets/cd.jpg";
import mni from "../../assets/mini.jpeg";
import agarbatti from "../../assets/agarbatti.webp";
import ajay from "../../assets/ajay.jpg";
import allout from "../../assets/allout.webp";
import almod from "../../assets/almod.jpg";
import biryani from "../../assets/biryani.jpg";
import biskFarmGooglyBiscuit from "../../assets/gogly.jpg";
import blLong from "../../assets/bl_long.jpeg";
import borbon from "../../assets/borbon.webp";
import bp from "../../assets/bp.webp";
import burstChocolate1 from "../../assets/burst-chocolate-1.webp";
import burstStrawberry from "../../assets/burst-strawberry.webp";
import champMilkuit from "../../assets/champ-milkuit.webp";
import cocoMalai from "../../assets/coco-malai.webp";
import colgate from "../../assets/colgate.jpg";
import daburam from "../../assets/daburam.jpg";
import dant from "../../assets/dant.webp";
import dixcy from "../../assets/dixcy.jpeg";
import fsl from "../../assets/fsl.jpg";
import fulton from "../../assets/fulton.jpg";
import garn from "../../assets/garn.jpg";
import genrealstore from "../../assets/genrealstore.webp";
import glimm from "../../assets/glimm.webp";
import gogly from "../../assets/gogly.jpg";
import haldi from "../../assets/haldi.png";
import halfHalf from "../../assets/half-half.webp";
import heyloArtisan from "../../assets/heylo-artisan.webp";
import heyloButterCookies from "../../assets/heylo-butter-cookies.webp";
import hing from "../../assets/hing.jpg";
import home1 from "../../assets/home1.jpg";
import homehuard from "../../assets/homehuard.jpg";
import jal from "../../assets/jal.webp";
import jasmine from "../../assets/jasmine.webp";
import jeera from "../../assets/jeera.jpg";
import jhons from "../../assets/jhons.webp";
import lalmirch from "../../assets/lalmirch.webp";
import macWebp from "../../assets/mac.webp";
import macho from "../../assets/macho.png";
import machomini from "../../assets/machomini.jpeg";
import mamy from "../../assets/mamy.webp";
import mini from "../../assets/mini.jpeg";
import mohaniblue from "../../assets/mohaniblue.jpg";
import mohanired from "../../assets/mohanired.jpg";
import mohanitea from "../../assets/mohanitea.jpeg";
import paner from "../../assets/paner.jpeg";
import parachute from "../../assets/parachute.webp";
import pasta from "../../assets/pasta.jpeg";
import pav from "../../assets/pav.webp";
import pulse from "../../assets/pulse.jpg";
import redpast from "../../assets/redpast.jpg";
import richMarie1 from "../../assets/rich-marie-1.webp";
import rnsJpeg from "../../assets/rns.jpeg";
import rnsJpg from "../../assets/rns.jpg";
import rumaal from "../../assets/rumaal.png";
import ruskit from "../../assets/ruskit-.webp";
import sabzi from "../../assets/sabzi.jpg";
import salad from "../../assets/salad.jpg";
import sameej from "../../assets/sameej.jpeg";
import setwet from "../../assets/setwet.jpg";
import sfc from "../../assets/sfc.webp";
import shanti from "../../assets/shanti.jpeg";
import shinz from "../../assets/shinz.jpg";
import sirtex from "../../assets/sirtex.png";
import sugarfree from "../../assets/sugarfree.webp";
import tifcake from "../../assets/tifcake.webp";
import tiffunSliceVeg from "../../assets/tiffun-slice-veg.webp";
import toilbrush from "../../assets/toilbrush.jpg";
import wahind from "../../assets/wahind.jpeg";
import wpad from "../../assets/wpad.webp";
import haircare from "../../assets/haircare.jpg";
import ashok from "../../assets/ashok-neel.jpg";
import ark from "../../assets/ark.jpg";
import chameli from "../../assets/chameli.jpg";
import gulab from "../../assets/gulab.jpg";
import meister from "../../assets/meister.webp";
import nisha from "../../assets/nisha.jpg";
import pears from "../../assets/pear.jpg";
import lux from "../../assets/lux.png";
import hbc from "../../assets/hbc.jpg";
import hbs from "../../assets/hbs.jpg";
import jbo from "../../assets/jbo.jpg";
import mava from "../../assets/mava.jpg";
import pwb from "../../assets/pwb.jpg";
import godrej from "../../assets/godrej.jpg";
import hfw from "../../assets/hfw.jpg";
import vbl from "../../assets/vbl.webp";
import glol from "../../assets/glol.jpg";
import dbp from "../../assets/dbp.jpg";
import dove from "../../assets/dove.png";
import mithila from "../../assets/mithila.jpg";
import kbp from "../../assets/kpb.webp";
import chni from "../../assets/chni.jpg";
import scs from "../../assets/scs.jpg";
import relax from "../../assets/relax.avif";
import gunja from "../../assets/gunja.avif";
import wiper from "../../assets/wiper.jpg";
import pista from "../../assets/heylo-artisan-pista-almond.webp";
import biscotti from "../../assets/butter-biscotti.webp";
import osmania from "../../assets/heylo-artisan-osmania-cookies.webp";
import butter from "../../assets/heylo-butter-cookies.webp";
import cashew from "../../assets/heylo-cashew-cookies.webp";
import mini1 from "../../assets/mini-kreme-orange.webp";
import mini2 from "../../assets/mini-kreme-strawberry.webp";
import r2 from "../../assets/roll.webp";
import r1 from "../../assets/rll.webp";
import pearls from "../../assets/pearls.webp";
import pinata from "../../assets/pinata.jpg";



export default function CategoryPage() {
  const { name } = useParams();


  const items = {
    hosiery: [
      {
      "id": 1,
      "title": "Misty Bra",
      "description": "[28] [30] [32] [34] [36] [38] [40]",
      "img": bra
    },
    {
      "id": 2,
      "title": "Sirtex Black CD",
      "description": "[80] [85] [90] [95] [100]",
      "img": cd
    },
    {
      "id": 3,
      "title": "Sirtex Black CD Junior",
      "description": "[60] [65] [70] [75]",
      "img": jr
    },
    {
      "id": 4,
      "title": "Sirtex Long Trunk",
      "description": "[60] [65] [70] [75] [80] [85] [90] [95] [100]",
      "img": bll
    },
    {
      "id": 5,
      "title": "Sirtex Mini Trunk",
      "description": "[80] [85] [90] [95] [100]",
      "img": mni
    },
    {
      "id": 4,
      "title": "Sirtex Eazy Long Trunk",
      "description": "[60] [65] [70] [75] [80] [85] [90] [95] [100]",
      "img": bl_long
    },
    {
      "id": 6,
      "title": "Sirtex Vests RN",
      "description": "[60] [65] [70] [75] [80] [85] [90] [95] [100]",
      "img": rn
    },
    {
      "id": 7,
      "title": "Sirtex Vests RNS",
      "description": "[80] [85] [90] [95] [100]",
      "img": rns
    },
    {
      "id": 8,
      "title": "Sirtex Eazy Parker Vests RN",
      "description": "[80] [85] [90] [95] [100]",
      "img": parker
    },
    {
      "id": 9,
      "title": "Eazy Gym Vests (All Styles)",
      "description": "[80] [85] [90] [95] [100]",
      "img": gym
    },
    {
      "id": 10,
      "title": "Mithila Bloomer",
      "description": "[60] [65] [70] [75] [80] [85] [90] [95] [100]",
      "img": mithila
    },
    {
      "id": 10,
      "title": "Cotton Macho",
      "description": "[60] [65] [70] [75] [80] [85] [90] [95] [100]",
      "img": cm
    },
    {
      "id": 11,
      "title": "Macho Long Trunk",
      "description": "[80] [85] [90] [95] [100]",
      "img": mac
    },
    {
      "id": 12,
      "title": "Macho Mini Trunk",
      "description": "[80] [85] [90] [95] [100]",
      "img": macmin
    },
    {
      "id": 13,
      "title": "Dixcy Long Trunk",
      "description": "[80] [85] [90] [95] [100]",
      "img": dix
    },
    {
      "id": 14,
      "title": "Rumaal (Handkerchief)",
      "description": "Full Size Cotton Handkerchiefs for daily use.",
      "img":rum
    },
    {
      "id": 15,
      "title": "Fulton Cotton Socks",
      "description": "Full Size Cotton Socks for daily use.",
      "img": fltn
    },
    {
      "id": 16,
      "title": "G-Sir Sameej (White/Color)",
      "description": "Cotton Sameej.",
      "img": smej
    }
      
    ],

    cosmetics: [
      {
        id: 1,
        title: "Shanti Amla",
        description: "10/-  20/-  90ml   175ml   275ml   500ml",
        img: shanti
      },
      {
        id: 2,
        title: "Parachute Coconut Oil",
        description: "Available in all Sizes (100ml, 200ml, 500ml)",
        img: parachute
      },
      {
        id: 1,
        title: "Parachute Jasmine Hair Oil",
        description: "10/-  20/-  90ml   175ml   275ml   500ml",
        img: jasmine
      },
      {
        id: 1,
        title: "Dabur Amla Hair Oil",
        description: "10/-  20/-  90ml   175ml   275ml   500ml",
        img: daburam
      },
      {
        id: 3,
        title: "Glow & Lovely",
        description: "Available in all MRP",
        img: fsl
      },
      {
        id: 1,
        title: "Boro Plus Cream",
        description: "10/-  20/-  90ml   175ml   275ml   500ml",
        img: bp
      },
      {
        id: 1,
        title: "Skin Fruit Cream",
        description: "10/-  20/-  90ml   175ml   275ml   500ml",
        img: sfc
      },
      {
        id: 1,
        title: "Reliance Glimmer Soap",
        description: "Set of 4 soaps",
        img: glimm
      },
      {
        id: 1,
        title: "Reliance Meister Body Spray",
        description: "₹99/- MRP",
        img: meister
      },
      {
        id: 1,
        title: "Vaseline Body Lotion",
        description: "10/-  20/-  90ml   175ml   275ml   500ml",
        img: vbl
      },
      {
        id: 1,
        title: "Jhonson's Baby Oil",
        description: "Body oil for babies.",
        img: jbo
      },
      {
        id: 1,
        title: "Himalaya Neem Face Wash",
        description: "₹75/- MRP",
        img: hfw
      },
      {
        id: 1,
        title: "Himalaya Baby Soap",
        description: "Baby soap for gentle care.",
        img: hbs
      },
      {
        id: 1,
        title: "Himalaya Baby Cream",
        description: "Baby cream for soft skin.",
        img: hbc
      },
      {
        id: 1,
        title: "Girnar Lauki Hair Oil",
        description: "₹85/- MRP",
        img: glol
      },
      {
        id: 1,
        title: "Jhonson's Baby Soap",
        description: "Baby soap for gentle care.",
        img: jhons
      },
      {
        id: 1,
        title: "Ponds White Beauty Cream",
        description: "Available in all MRP",
        img: pwb
      },
      {
        id: 1,
        title: "Lux Beauty Soap",
        description: "10/-  Lux Set",
        img: lux
      },
      {
        id: 1,
        title: "Pears Beauty Soap",
        description: "₹10/- ₹25/- Pears Set",
        img: pears
      },
      {
        id: 1,
        title: "Dove Beauty Soap",
        description: "₹10/- ₹25/- Dove Set",
        img: dove
      },
      {
        id: 1,
        title: "Set Wet Hair Gel",
        description: "₹10/-",
        img: setwet
      },
      {
        id: 1,
        title: "Denver's Body Powder",
        description: "₹99/- MRP",
        img: dbp
      },
      {
        id: 1,
        title: "Garnier Black Hair Color",
        description: "₹45/-",
        img: garn
      },
      {
        id: 1,
        title: "Nisha Hair Color (Kaali / Laal)",
        description: "₹10/-",
        img: nisha
      },
      {
        id: 1,
        title: "Godrej Expert Hair Color",
        description: "₹15/-",
        img: godrej
      },
      {
        id: 1,
        title: "Mava Glow Face Cream",
        description: "Available at best price",
        img: mava
      },
    ],

    food: [
      {
        id: 1,
        title: "Mohani Tea",
        description: "Available in all Sizes (100gm, 200gm, 250gm, 500gm, 1kg)",
        img: mohaniblue,
      },
      {
        id: 1,
        title: "Mohani Red Tea",
        description: "Available in all Sizes (100gm, 250gm, 500gm, 1kg)",
        img: mohanired,
      },
      {
        id: 1,
        title: "Pulse Candy",
        description: "Pulse Candy with Jars and Hanger available",
        img: pulse,
      },
      {
        id: 1,
        title: "Pulse Pinata LoliPop",
        description: "Pulse Pinata LoliPop in various flavors",
        img: pinata
      },
      {
        id: 1,
        title: "Rajnigandha Pearls Silver Elaichi",
        description: "Available in ₹5/-  ₹10/-",
        img: pearls
      },
      {
        id: 1,
        title: "Bisk Farm Jeera Biscuit",
        description: "Available in ₹5/-  ₹10/-  ₹20/-",
        img: jeera
      },
      {
        id: 1,
        title: "Bisk Farm Tiffun Slice Veg",
        description: "₹5/-  ₹10/-",
        img: tiffunSliceVeg
      },
      
      {
        id: 1,
        title: "Bisk Farm Tiffun Cake",
        description: "₹5/-  ₹10/-",
        img: tifcake
      },
      {
        id: 1,
        title: "Bisk Farm Sugar Free Biscuit",
        description: "₹55/-",
        img: sugarfree
      },
      {
        id: 1,
        title: "Bisk Farm Artisan Osmania Premium Biscuit",
        description: "Premium Osmania Biscuit.",
        img: osmania
      },
      {
        id: 1,
        title: "Bisk Farm Pista Osmania Premium Biscuit",
        description: "Premium Pista Biscuit.",
        img: pista
      },
      {
        id: 1,
        title: "Bisk Farm Heylo Butter Biscuit",
        description: "₹5/-  ₹10/-  ₹20/-  ₹40/-",
        img: heyloButterCookies
      },
      {
        id: 1,
        title: "Bisk Farm Heylo Cashew Biscuit",
        description: "₹10/-  ₹20/-  ₹40/-",
        img: cashew
      },
      {
        id: 1,
        title: "Bisk Farm Butter Ruskit",
        description: "₹10/-  ₹40/-",
        img: ruskit
      },
      {
        id: 1,
        title: "Bisk Farm Googly Biscuit",
        description: "₹5/-  ₹10/-  ₹20/-  ₹40/-",
        img: biskFarmGooglyBiscuit
      },
      {
        id: 1,
        title: "Bisk Farm Half Half Biscuit",
        description: "₹5/-  ₹10/-",
        img: halfHalf
      },
      {
        id: 1,
        title: "Bisk Farm Rich Marie",
        description: " ₹10/-  ₹20/-  ₹40",
        img: richMarie1
      },
      {
        id: 1,
        title: "Bisk Farm Burst Chocolate",
        description: "₹5/-",
        img: burstChocolate1
      },
      {
        id: 1,
        title: "Bisk Farm Burst Strawberry",
        description: "₹5/-",
        img: burstStrawberry
      },
      {
        id: 1,
        title: "Bisk Farm Champ Milkuit",
        description: "₹5/-  ₹10/-  ₹30/-",
        img: champMilkuit
      },
      
      {
        id: 1,
        title: "Bisk Farm Coco Malai",
        description: "₹10/-  ₹30/-",
        img: cocoMalai
      },
      {
        id: 1,
        title: "Bisk Farm Butter Biscooti Biscuit",
        description: "₹30/-",
        img: biscotti
      },
      {
        id: 1,
        title: "Bisk Farm Bourbon Biscuit",
        description: "₹10/- 40/-",
        img: borbon
      },
      {
        id: 1,
        title: "Bisk Farm Mini Cream Biscuit",
        description: "₹5/-",
        img: mini1
      },
      {
        id: 1,
        title: "Bisk Farm Mini Cream Biscuit",
        description: "₹5/- (All Flavors)",
        img: mini2
      },
      {
        id: 1,
        title: "Bisk Farm Cream Roll Strwaberry",
        description: "₹10/-",
        img: r1
      },
      {
        id: 1,
        title: "Bisk Farm Cream Roll Mixed Fruit",
        description: "₹10/-",
        img: r2,
      },
    ],

    essentials: [
      {
        id: 1,
        title: "Patanjali Dant Kanti",
        description: "Available in all Sizes (50gm, 100gm, 200gm, 500gm)",
        img: dant
      },
      {
        id: 2,
        title: "Dabur Red Paste",
        description: "Available in all Sizes (50gm, 100gm, 200gm)",
        img: redpast
      },
      {
        id: 3,
        title: "Colgate Toothpaste",
        description: "Available in all Sizes.",
        img: colgate
      },
      {
        id: 3,
        title: "Skin Fruit Cream",
        description: "Available in all Sizes.",
        img: sfc
      },
      {
        id: 3,
        title: "Ajay Brush",
        description: "₹10/-  ₹20/-  ₹22/-(Soft, Medium, Hard)   ₹40/-(Ajay Sensitive Ultra Soft)",
        img: ajay
      },
      {
        id: 3,
        title: "Hair & Care Oil",
        description: "Available in all Sizes (50ml, 100ml, 200ml)",
        img: haircare
      },
      {
        id: 3,
        title: "All Out Mosquito Repellent",
        description: "All Out Machine, Refill, Liquid, and All Out Quil",
        img: allout
      },
      {
        id: 3,
        title: "Home Guard Floor Cleaner",
        description: "Reliance Home Guard Floor Cleaner, Available in 2 flourcents",
        img: home1
      },
      {
        id: 3,
        title: "Toilet Brush",
        description: "Very Good Quality Reliance Toilet Brush",
        img: toilbrush
      },
      {
        id: 3,
        title: "Wondrize Pads",
        description: "Available in all Sizes (Regular, Large, Extra Large) With all MRP (25 , 40 , 99 , 225)",
        img: wpad
      },
      {
        id: 3,
        title: "Mamy Poko Pants",
        description: "Available in all Sizes (Small, Medium, Large, Extra Large)",
        img: mamy
      },
      {
        id: 3,
        title: "Reliance Shinz Glass Cleaner",
        description: "Available in Offer of Buy 1 Get 1 Free (Set of 2)",
        img: shinz
      },
      {
        id: 3,
        title: "Ashok Neel",
        description: "Available in all Sizes (₹5, ₹10, ₹25, 100ml, 250ml, 500ml, 1L)",
        img: ashok
      },
      {
        id: 3,
        title: "Ark Gold Detergent Powder",
        description: "100gm, 500gm, 1kg, 3kg, 5kg (Scheme available)",
        img: ark
      },
      {
        id: 3,
        title: "Naveen Chameli Agarbatti",
        description: "₹5/-  ₹10/-  ₹20/-  ₹50/-  ₹100/-",
        img: chameli
      },
      {
        id: 3,
        title: "Naveen Gulaab Agarbatti",
        description: "₹5/-  ₹10/-  ₹20/-  ₹50/-  ₹100/-",
        img: gulab
      },
      {
        id: 3,
        title: "Kapda Brush",
        description: "Available with lakdi handle",
        img: kbp
      },
      {
        id: 3,
        title: "Plastic Channi",
        description: "Very Good Quality Plastic Channi",
        img: chni
      },
      {
        id: 3,
        title: "Kaichi (Scissors)",
        description: "Plastic Handle Scissors",
        img: scs
      },
      {
        id: 3,
        title: "Relax Mosquito Agarbatti",
        description: "Available at very low price",
        img: relax
      },
      {
        id: 3,
        title: "Steel Scrubber (Gunja)",
        description: "Available in Steel and Plastic",
        img: gunja
      },
      {
        id: 3,
        title: "Reliance Wiper",
        description: "Available with steel handle",
        img: wiper
      },
      
    ],

    spices: [
      {
        id: 2,
        title: "Wah India Lalmirch Powder",
        description: "Premium Quality Indian Masales and Spices.",
        img: lalmirch
      },
      {
        id: 1,
        title: "Wah India Haldi Powder",
        description: "Premium Quality Indian Masales and Spices.",
        img: lalmirch
      },
      
      {
        id: 2,
        title: "Wah India Sabzi Masala",
        description: "Premium Quality Indian Masales and Spices.",
        img: sabzi
      },
      
      {
        id: 2,
        title: "Wah Indian Butter Paneer Masala",
        description: "Premium Quality Indian Masales and Spices.",
        img: paner
      },
      {
        id: 2,
        title: "Wah Indian Premium Hing",
        description: "Premium Quality Indian Masales and Spices.",
        img: hing
      },
      {
        id: 2,
        title: "Wah Indian Salad Masala",
        description: "Premium Quality Indian Masales and Spices.",
        img: salad
      },
    ],
  };

  const categoryItems = items[name.toLowerCase()] || [];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-8 capitalize">
          {name}
        </h1>

        {/* Product Grid */}
        {categoryItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-center">{item.title}</h2>
                  <p className="text-gray-900 text-[16px] mt-2">
                    <span className=" text-[16px] font-semibold items-center">Size Available : </span>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No items found for this category.
          </p>
        )}
      </div>
    </div>
  );
}
