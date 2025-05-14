import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Button from "../layouts/Button";

const PlansCard = (props) => {
  const plans = [
    {
      title: "Trial Plan",
      price: 500,
      features: [
        {
          text: "Daily complimentary sessions with a personal trainer.",
          available: true,
        },
        {
          text: "Access to gym facilities during operational hours.",
          available: false,
        },
        { text: "Access to all rooms.", available: false },
        { text: "Use of advance gym equipment.", available: false },
      ],
    },
    {
      title: "Gold Plan",
      price: 1000,
      features: [
        {
          text: "Daily complimentary sessions with a personal trainer.",
          available: true,
        },
        {
          text: "Access to gym facilities during operational hours.",
          available: true,
        },
        { text: "Access to all rooms.", available: false },
        { text: "Use of advance gym equipment.", available: false },
      ],
    },
    {
      title: "Platinum Plan",
      price: 2000,
      features: [
        {
          text: "Daily complimentary sessions with a personal trainer.",
          available: true,
        },
        {
          text: "Access to gym facilities during operational hours.",
          available: true,
        },
        { text: "Access to all rooms.", available: true },
        { text: "Use of advance gym equipment.", available: true },
      ],
    },
  ];

  const getGradientClass = () => {
    if (props.title === "Trial Plan") {
      return "from-blue-500 to-purple-500";
    } else if (props.title === "Gold Plan") {
      return "from-green-500 to-blue-500";
    }
  };

  const renderCircle = (index) => {
    if (props.title === "Trial Plan") {
      return index === 0 ? (
        <AiFillCheckCircle className="text-green-400 mr-2 mt-1" size={24} />
      ) : (
        <AiFillCloseCircle className="text-red-400 mr-2 mt-1" size={24} />
      );
    } else if (props.title === "Gold Plan") {
      return index < features.length / 2 ? (
        <AiFillCheckCircle className="text-green-400 mr-2 mt-1" size={24} />
      ) : (
        <AiFillCloseCircle className="text-red-400 mr-2 mt-1" size={24} />
      );
    } else {
      return props.price > 0 ? (
        <AiFillCheckCircle className="text-green-400 mr-2 mt-1" size={24} />
      ) : (
        <AiFillCloseCircle className="text-red-400 mr-2 mt-1" size={24} />
      );
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen py-12 px-4">
      <h2 className="text-white text-4xl font-bold text-center mb-10">
        Gym Membership
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative p-8 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            <h3 className="text-white text-xl font-semibold text-center">
              {plan.title}
            </h3>
            <div className="text-center text-white text-4xl font-bold mt-4 mb-6">
              ₹{plan.price}
            </div>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-white">
                  {feature.available ? (
                    <span className="text-green-400 mr-2">✔</span>
                  ) : (
                    <span className="text-red-500 mr-2">✖</span>
                  )}
                  <span className="text-sm">{feature.text}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform">
                Buy Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansCard;
