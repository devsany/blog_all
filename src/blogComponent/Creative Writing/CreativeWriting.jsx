import { useEffect, useState } from "react";
import BlogLink from "../../AllNavLink/AppLink/BlogLink.jsx/BlogLink";
import MainLink from "../../AllNavLink/AppLink/MainLink";
import ContactForm from "../../Form/Form";

const CreativeWriting = () => {
  const [data, setData] = useState([]);

  const showData = async () => {
    const data = await fetch(
      "https://6698ebc42069c438cd70a6da.mockapi.io/creativeWriting"
    );
    const res = await data.json();
    setData(res.reverse());
    console.log(res);
  };
  useEffect(() => {
    showData();
  }, []);
  return (
    <div>
      <MainLink />
      <BlogLink />

      <div className="container pt-4 pb-4 mt-4 mb-4 shadow-md  border flex justify-center border-black">
        <div className="main w-[80%] ">
          {data &&
            data.map((elem) => {
              return (
                <>
                  <div className="mt-6 mb-4 p-4 shadow-md bg-green-50 ">
                    <h1>{elem.topic}</h1>
                    <h5>{elem.realtion}</h5>
                    <p>
                      <i>- 5 Min of reading</i>
                    </p>
                    <p className="text-justify">{elem.description}</p>
                    <div className="w-[100%] shadow   align-bottom justify-center flex align-centre border border-black">
                      <ContactForm />
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CreativeWriting;
