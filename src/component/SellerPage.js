import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";

const SellerPage = () => {
  const selectData = ["apple", "glass", "will"];
  const [formData, setformData] = useState({
    firstImage: "",
    secondImage: "",
    thirdImage: "",
    fourthImage: "",
    fifthImage: "",
  });

  const handleConvertImage = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      const inputName = e.target.getAttribute("name");
      setformData({ ...formData, [inputName]: reader.result });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  const handleRenderImage = (source) => {
    return (
      <>
        <img
          alt="img"
          src={source}
          className="object-cover w-[100%] h-52  z-10"
        />
      </>
    );
  };

  const handleRemoveImage = (imageData) => {
    setformData({ ...formData, [imageData]: "" });
  };

  return (
    <div className="w-screen h-fit flex items-center  justify-center   p-5">
      <section className="w-[60%]  flex-col items-center  flex justify-center border-2 border-[lightgrey] rounded-lg  p-4">
        <h2 className="text-2xl uppercase font-bold text-center mb-15 ">
          POST HOUSE
        </h2>
        <input
          placeholder="Old Password"
          className="w-[70%] h-10  mt-4 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
        />
        <input
          placeholder="Old Password"
          className="w-[70%] h-10  mt-4 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
        />
        <input
          placeholder="Old Password"
          className="w-[70%] h-10  mt-4 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
        />
        <select className="w-[70%] h-10  capitalize  mt-4 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] ">
          <option
            disabled="disabled"
            selected="true"
            className="w-[100%] h-[100%] "
          >
            Select Data
          </option>
          {selectData.map((item, index) => {
            return <option className="w-[100%] h-[100%] mb-2">{item}</option>;
          })}
        </select>
        <input
          placeholder="Old Password"
          className="w-[70%] h-10  mt-4 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
        />{" "}
        <input
          placeholder="Old Password"
          className="w-[70%] h-10  mt-4 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
        />
        <label className="text-sm  text-[grey] font-bold  mt-5">
          Add Photo
        </label>
        <div className="w-[70%] mt-3 h-fit grid grid-cols-2  gap-3">
          <div className="w-[100%] h-52 border-2 relative cursor-ponter">
            {formData.firstImage !== "" ? (
              <div
                onClick={() => handleRemoveImage("firstImage")}
                className="absolute top-2 right-3 z-20 cursor-pointer text-3xl"
              >
                <GiCancel />
              </div>
            ) : (
              <div></div>
            )}{" "}
            {formData.firstImage !== "" ? (
              handleRenderImage(formData.firstImage)
            ) : (
              <div className="w-[100%] h-[100%]   cursor-ponter">
                <label
                  for="firstData"
                  className="cursor-pointer  flex justify-center items-center w-[100%] h-[100%]  "
                >
                  <FaPlus className="text-4xl  " />
                </label>
                <input
                  required
                  onChange={handleConvertImage}
                  name="firstImage"
                  type="file"
                  id="firstData"
                  className="hidden"
                />
              </div>
            )}
          </div>
          <div className="w-[100%] h-52 border-2 relative cursor-ponter">
            {formData.secondImage !== "" ? (
              <div
                onClick={() => handleRemoveImage("secondImage")}
                className="absolute top-2 right-3 z-20 cursor-pointer text-3xl"
              >
                <GiCancel />
              </div>
            ) : (
              <div></div>
            )}{" "}
            {formData.secondImage !== "" ? (
              handleRenderImage(formData.secondImage)
            ) : (
              <div className="w-[100%] h-[100%]   cursor-ponter">
                <label
                  for="secondData"
                  className="cursor-pointer  flex justify-center items-center w-[100%] h-[100%]  "
                >
                  <FaPlus className="text-4xl  " />
                </label>
                <input
                  required
                  onChange={handleConvertImage}
                  name="secondImage"
                  type="file"
                  id="secondData"
                  className="hidden"
                />
              </div>
            )}
          </div>
          <div className="w-[100%] h-52 border-2 relative cursor-ponter">
            {formData.thirdImage !== "" ? (
              <div
                onClick={() => handleRemoveImage("thirdImage")}
                className="absolute top-2 right-3 z-20 cursor-pointer text-3xl"
              >
                <GiCancel />
              </div>
            ) : (
              <div></div>
            )}{" "}
            {formData.thirdImage !== "" ? (
              handleRenderImage(formData.thirdImage)
            ) : (
              <div className="w-[100%] h-[100%]   cursor-ponter">
                <label
                  for="thirdData"
                  className="cursor-pointer  flex justify-center items-center w-[100%] h-[100%]  "
                >
                  <FaPlus className="text-4xl  " />
                </label>
                <input
                  required
                  onChange={handleConvertImage}
                  name="thirdImage"
                  type="file"
                  id="thirdData"
                  className="hidden"
                />
              </div>
            )}
          </div>

          <div className="w-[100%] h-52 border-2 relative cursor-ponter">
            {formData.fourthImage !== "" ? (
              <div
                onClick={() => handleRemoveImage("fourthImage")}
                className="absolute top-2 right-3 z-20 cursor-pointer text-3xl"
              >
                <GiCancel />
              </div>
            ) : (
              <div></div>
            )}{" "}
            {formData.fourthImage !== "" ? (
              handleRenderImage(formData.fourthImage)
            ) : (
              <div className="w-[100%] h-[100%]   cursor-ponter">
                <label
                  for="fourthData"
                  className="cursor-pointer  flex justify-center items-center w-[100%] h-[100%]  "
                >
                  <FaPlus className="text-4xl  " />
                </label>
                <input
                  required
                  onChange={handleConvertImage}
                  name="fourthImage"
                  type="file"
                  id="fourthData"
                  className="hidden"
                />
              </div>
            )}
          </div>

          <div className="w-[100%] h-52 border-2 relative cursor-ponter">
            {formData.fifthImage !== "" ? (
              <div
                onClick={() => handleRemoveImage("fifthImage")}
                className="absolute top-2 right-3 z-20 cursor-pointer text-3xl"
              >
                <GiCancel />
              </div>
            ) : (
              <div></div>
            )}{" "}
            {formData.fifthImage !== "" ? (
              handleRenderImage(formData.fifthImage)
            ) : (
              <div className="w-[100%] h-[100%]   cursor-ponter">
                <label
                  for="fifthData"
                  className="cursor-pointer  flex justify-center items-center w-[100%] h-[100%]  "
                >
                  <FaPlus className="text-4xl  " />
                </label>
                <input
                  required
                  onChange={handleConvertImage}
                  name="fifthImage"
                  type="file"
                  id="fifthData"
                  className="hidden"
                />
              </div>
            )}
          </div>
        </div>
        <input
          placeholder="Old Password"
          className="w-[70%] h-10  mt-4 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
        />
        <input
          placeholder="Old Password"
          className="w-[70%] h-10  mt-4 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
        />
        <button className="w-fit mt-5 text-white  justify-center pr-10 pl-10 items-center  font-bold h-12 bg-blue-600 rounded-lg ">
          Save
        </button>
      </section>
    </div>
  );
};

export default SellerPage;
