import React from "react";
import { Link } from "react-router-dom";

const TileGrid = ({ tiles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Przykładowy kafelek 1 */}
      {tiles.map((tile, index) => {
        const Icon = tile.icon;
        return (
          <Link to={tile.link} key={index}>
            <div
              key={index}
              className=" bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <Icon className="w-12 h-12" />
              <h3 className="text-xl font-semibold text-gray-800 ml-4">
                {tile.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default TileGrid;
